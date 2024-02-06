import { ArrowRightIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
//import SparkIcon from '../../lib/icons/spark'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import ShowJob from '../slices/showJob'
import { JOBS, ROLES, LOCATIONS } from '../config/jobs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Jobs = () => {
  const jobs = JOBS
  const roles = ROLES
  const locations = LOCATIONS

  const [role, setRole] = useState('All Roles')
  const [location, setLocation] = useState('All Locations')
  const [position, setPosition] = useState(jobs[0])
  const [positionOpen, setPositionOpen] = useState(false)

  const closePosition = () => {
    setPositionOpen(false)
  }

  const openPosition = (pos) => {
    setPosition(pos)
    setPositionOpen(true)
  }

  const content = (
    <main>
      <section>
        <div className='mt-20 relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0'>
          <div className='flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-7xl'>
            <div className='mb-16 lg:my-40 lg:max-w-lg lg:pr-5'>
              <div className='max-w-xl mb-6'>
                <div>
                  <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-800 dark:text-blue-200 uppercase rounded-full bg-blue-100 dark:bg-blue-900'>
                    Get a job
                  </p>
                </div>
                <p className='my-10 text-base text-[1rem] text-gray-600 dark:text-gray-400 md:text-lg'>
                  459 roles in 108 locations
                </p>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none'>
                  What's your next{' '}
                  <span className='inline-block text-blue-600'>
                    destination?
                  </span>
                </h2>
              </div>
              <div className='items-center my-10'>
                <a
                  href='/'
                  className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white dark:text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none'
                >
                  Explore positions
                </a>
              </div>
            </div>
          </div>
          <div className='inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0'>
            <img
              className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full'
              src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
          </div>
        </div>
      </section>

      <section></section>

      <section id='positions'>
        <div className='px-8 mx-auto mt-24 py-24 lg:py-36 max-w-6xl border-t border-blue-100 dark:border-gray-900'>
          <div className='lg:text-center'>
            <h5 className='text-4xl font-extrabold leading-none md:pl-2'>
              Current{' '}
              <br className='hidden md:block' />
              <span className='inline-block text-blue-600'>
                job opportunities
              </span>
            </h5>
            <p className='text-gray-700 dark:text-gray-300 mt-3 mb-7'>
              Here's our finely curated list of current job positions. Buckle up and start applying
            </p>
          </div>

          <div>
            <div className='my-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='sm:col-span-2 md:col-span-1'>
                <input
                  placeholder='Search for positions'
                  className='block w-full rounded-md border-0 py-2 px-3 dark:bg-black shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                />
              </div>
              <div>
                <Listbox value={location} onChange={setLocation}>
                  {({ open }) => (
                    <>
                      <div className='block relative'>
                        <Listbox.Button id='category' className='block relative w-full cursor-default rounded-md bg-white dark:bg-black py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
                          <span>{location}</span>
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
                          <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none sm:text-sm'>
                            {locations.map((item, idx) => (
                              <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'bg-blue-600 text-white' : 'text-gray-900',
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
                                          active ? 'text-white' : 'text-blue-600',
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
              <div>
                <Listbox value={role} onChange={setRole}>
                  {({ open }) => (
                    <>
                      <div className='block relative'>
                        <Listbox.Button id='category' className='block relative w-full cursor-default rounded-md bg-white dark:bg-black py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
                          <span>{role}</span>
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
                          <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none sm:text-sm'>
                            {roles.map((item, idx) => (
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

            <div>
              <dl className='rounded-md px-4'>
                <div className='hidden sm:block py-6 sm:grid sm:grid-cols-6 sm:gap-4'>
                  <dt className='text-md font-medium leading-6 sm:col-span-2'>Title</dt>
                  <dd className='mt-2 text-md sm:col-span-4 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4'>
                    <div className='sm:col-span-1 font-medium leading-6'>Location</div>
                    <div className='sm:col-span-2 font-medium leading-6'>Role</div>
                    <div className='sm:col-span-1'></div>
                  </dd>
                </div>

                { jobs.map(job => (
                  <div
                    key={job.id}
                    className={classNames(job.id % 2 !== 0 ? 'bg-blue-100 dark:bg-blue-900' : 'bg-0',
                    'py-6 sm:grid sm:grid-cols-6 sm:gap-4 -mx-4 px-4 rounded-md')}
                  >
                    <dt className='text-md font-medium leading-6 sm:col-span-2  my-auto'>{job.title}</dt>
                    <dd className='mt-2 text-sm text-gray-700 dark:text-gray-300 sm:col-span-4 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4'>
                      <div className='sm:col-span-1 my-auto'><span>{job.location}</span></div>
                      <div className='sm:col-span-2 my-auto flex'><span>{job.role}</span></div>
                      <div className='sm:col-span-1 place-self-end inline-flex my-auto'>
                        <div className='group'>
                          <a href={job.website} className='hover:text-blue-600 inline-flex items-center gap-x-1'>
                            Apply
                            <ArrowRightIcon className='transition ease-in-out group-hover:translate-x-1' width={16} />
                          </a>
                        </div>
                        
                        <button onClick={() => openPosition(job)} className='ml-4 hover:text-blue-600 cursor-pointer'>•••</button>
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <ShowJob position={position} open={positionOpen} close={closePosition} />

          <div className='text-center max-w-2xl mx-auto'>
            <p className='mt-7 mb-5 md:mt-10 md:mb-7 md text-sm text-gray-500'>
              Don't worry if you don't see any roles you want to apply for now. Register your interest to be notified of any roles that come along that meet your criteria. You can also add or reccommend a position for some hubx points or have our agents automatically process your selected role for a premium.
            </p>
            <div>
              <a
                href='/contact'
                className='inline-flex items-center justify-center w-auto h-10 px-4 font-medium tracking-wide text-white dark:text-black transition duration-200 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-sm'
              >
                Add your position
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
  return content
}

export default Jobs