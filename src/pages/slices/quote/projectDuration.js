import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProjectDuration = ({ unit, time, setUnit, setTime, duration }) => {
  return (
    <div className='sm:col-span-3'>
      <label htmlFor='time' className='block text-sm font-medium leading-6'>
        When do you want it?
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm -mt-1'>@</span>
        </div>
        <input
          type='text'
          value={time}
          onChange={e => setTime(e.target.value)}
          className='block w-full rounded-md border-0 py-2 pl-8 pr-24 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 dark:bg-black focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
          placeholder='0'
        />
        <Listbox value={unit} onChange={setUnit} name='duration'>
          {({ open }) => (
            <>
              <Listbox.Label htmlFor='unit' className='sr-only block text-sm font-medium leading-6'>Time unit</Listbox.Label>
              <div className='absolute inset-y-0 right-0 flex items-center'>
                <Listbox.Button id='unit' className='block relative w-full cursor-default rounded-md bg-transparent py-2 pl-3 pr-10 bg-opacity-0 sm:text-sm sm:leading-6'>
                  <span className='flex items-center'>
                    <span className='ml-3 block truncate'>{unit}</span>
                  </span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                    <ChevronUpDownIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-black py-2 text-base shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none sm:text-sm'>
                    {duration.map((item, idx) => (
                      <Listbox.Option
                        key={idx}
                        className={({ active }) =>
                          classNames(
                            active ? 'bg-blue-600 text-white dark:text-black' : '',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className='flex items-center'>
                              <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                              >
                                {item}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white dark:text-black' : 'text-blue-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className='h-5 w-5' aria-hidden='true' />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  )
}

export default ProjectDuration