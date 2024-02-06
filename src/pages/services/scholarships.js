import { ArrowRightIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
//import SparkIcon from '../../lib/icons/spark'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import ShowScholarship from '../slices/showScholarship.js'
import { COURSES, LOCATIONS, SCHOLARSHIPS } from '../config/scholarships.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Scholarships = () => {
  const scholarships = SCHOLARSHIPS
  const courses = COURSES
  const locations = LOCATIONS

  /* const filteredSch = []
  const filterLocation = (e) => {
    const location = e.target.value
  } */

  const [course, setCourse] = useState('All Courses')
  const [location, setLocation] = useState('All Locations')
  const [award, setAward] = useState(scholarships[0])
  const [scholarshipOpen, setScholarshipOpen] = useState(false)

  const closeScholarship = () => {
    setScholarshipOpen(false)
  }

  const openScholarship = (pos) => {
    setAward(pos)
    setScholarshipOpen(true)
  }

  const content = (
    <main>
      <section>
        <div className='mb-16'>
          <div className='bg-blue-50 dark:bg-blue-900 pt-16'>
            <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20'>
              <div className='flex flex-col justify-between lg:flex-row'>
                <div className='mb-12 lg:max-w-lg lg:pr-5 lg:mb-0'>
                  <div className='max-w-xl mb-6'>
                    <p className='mb-3 text-base text-[1rem] text-gray-600 dark:text-gray-300 md:text-lg'>
                      459 awards in 18 locations
                    </p>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl lg:text-4xl font-bold tracking-tight lg:text-[4rem] sm:leading-none'>
                      What's your next{' '}
                      <br className='hidden md:block' />
                      <span className='inline-block text-blue-600'>
                        destination?
                      </span>
                    </h2>
                    <div>
                      <a 
                        href='#awards'
                        className='inline-flex items-center justify-center w-auto h-12 p-3 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none'>
                        Explore awards
                      </a>
                    </div>
                  </div>
                  <hr className='mb-6 border-blue-100 dark:border-blue-800' />
                  <div className='flex'>
                    <a href='/' aria-label='Play Song' className='mr-3'>
                      <div className='flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-blue-600 hover:bg-blue-500 hover:scale-110'>
                        <svg className='w-6' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z' />
                        </svg>
                      </div>
                    </a>
                    <div className='flex flex-col'>
                      <div className='text-sm font-semibold'>
                        Scholarship awards overview
                      </div>
                      <div className='text-xs text-gray-700 dark:text-gray-300'>Intro</div>
                    </div>
                  </div>
                </div>
                <div className='px-5 pt-6 pb-5 text-center border border-blue-100 dark:border-blue-800 rounded lg:w-2/5'>
                  <div className='mb-5 font-semibold'>Create an account</div>
                  <div className='flex justify-center w-full mb-3'>
                    <a
                      href='/'
                      className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none'
                    >
                      <div className='flex items-center'>
                        <div className='mr-3 font-semibold text-white'>
                          Login with Facebook
                        </div>
                        <svg
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-4 h-4'
                        >
                          <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <p className='max-w-md px-5 mb-3 text-xs text-gray-700 dark:text-gray-300 sm:text-sm md:mb-5'>
                    Signing up means that you automatically agree our terms of service and privacy policies.
                  </p>
                  <div className='flex items-center w-full mb-5'>
                    <hr className='flex-1 border-blue-100 dark:border-blue-800' />
                    <div className='px-3 text-xs text-gray-700 dark:text-gray-300 sm:text-sm'>or</div>
                    <hr className='flex-1 border-blue-100 dark:border-blue-800' />
                  </div>
                  <a
                    href='/register'
                    className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 rounded md:w-auto hover:bg-gray-100 dark:hover:bg-gray-800 focus:shadow-outline focus:outline-none'
                  >
                    Sign Up with Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='relative px-4 sm:px-0'>
            <div className='absolute inset-0 bg-blue-50 dark:bg-blue-900 h-1/2' />
            <div className='relative grid mx-auto overflow-hidden bg-white dark:bg-gray-900 divide-y rounded shadow sm:divide-y-0 sm:divide-x dark:divide-gray-800 dark:text-gray-300 sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md'>
              <div className='inline-block p-8 text-center'>
                <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900'>
                  <svg
                    className='w-10 h-10 text-blue-600'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </div>
                <p className='font-bold tracking-wide'>
                  Make it better
                </p>
              </div>
              <div className='inline-block p-8 text-center'>
                <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900'>
                  <svg
                    className='w-10 h-10 text-blue-600'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </div>
                <p className='font-bold tracking-wide'>
                  Do it faster
                </p>
              </div>
              <div className='inline-block p-8 text-center'>
                <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900'>
                  <svg
                    className='w-10 h-10 text-blue-600'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </div>
                <p className='font-bold tracking-wide'>
                  Working harder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>

      <section id='awards'>
        <div className='px-8 mx-auto mt-24 py-24 lg:py-36 max-w-6xl border-t border-blue-100 dark:border-gray-800'>
          <div className='lg:text-center'>
            <h5 className='text-4xl font-extrabold leading-none md:pl-2'>
              Current{' '}
              <br className='hidden md:block' />
              <span className='inline-block text-blue-600'>
                scholarship opportunities
              </span>
            </h5>
            <p className='text-gray-700 dark:text-gray-300 mt-3 mb-7'>
              Here's our finely curated list of current scholarship awards. Buckle up and start applying
            </p>
          </div>

          <div>
            <div className='my-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='sm:col-span-2 md:col-span-1'>
                <input
                  placeholder='Search for scholarships'
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
                            <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
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
              <div>
                <Listbox value={course} onChange={setCourse}>
                  {({ open }) => (
                    <>
                      <div className='block relative'>
                        <Listbox.Button id='category' className='block relative w-full cursor-default rounded-md bg-white dark:bg-black py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
                          <span>{course}</span>
                          <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                            <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
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
                            {courses.map((item, idx) => (
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
                    <div className='sm:col-span-1 font-medium leading-6'>Award Value</div>
                    <div className='sm:col-span-2 font-medium leading-6'>Award Deadline</div>
                    <div className='sm:col-span-1'></div>
                  </dd>
                </div>

                { scholarships.map(s => (
                  <div
                    key={s.id}
                    className={classNames(s.id % 2 !== 0 ? 'bg-blue-100 dark:bg-blue-900' : 'bg-0',
                    'py-6 sm:grid sm:grid-cols-6 sm:gap-4 -mx-4 px-4 rounded-md')}
                  >
                    <dt className='text-md font-medium leading-6 sm:col-span-2  my-auto'>{s.title}</dt>
                    <dd className='mt-2 text-sm text-gray-700 dark:text-gray-300 sm:col-span-4 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4'>
                      <div className='sm:col-span-1 my-auto'>{s.award?.value}</div>
                      <label className='mt-2 font-medium block sm:hidden'>Deadline</label>
                      <div className='sm:col-span-2 my-auto flex'>
                          <span>US: {s.dates?.deadline?.local}</span>
                          <span className='ml-2'>International: {s.dates?.deadline?.international}</span>
                      </div>
                      <div className='sm:col-span-1 place-self-end inline-flex my-auto'>
                        <div className='group'>
                          <a href={s.website} className='hover:text-blue-600 inline-flex items-center gap-x-1'>
                            Apply
                            <ArrowRightIcon className='transition ease-in-out group-hover:translate-x-1' width={16} />
                          </a>
                        </div>
                        
                        <button onClick={() => openScholarship(s)} className='ml-4 hover:text-blue-600 cursor-pointer'>•••</button>
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <ShowScholarship award={award} open={scholarshipOpen} close={closeScholarship} />

          <div className='text-center max-w-2xl mx-auto'>
            <p className='mt-7 mb-5 md:mt-10 md:mb-7 md text-sm text-gray-500'>
              Don't worry if you don't see any awards you want to apply for now. Register your interest to be notified of any awards that come along that meet your criteria. You can also add or reccommend a scholarship for some hubx points or have our agents automatically process your selected award for a premium.
            </p>
            <div>
              <a
                href='/contact'
                className='inline-flex items-center justify-center w-auto h-10 p-3 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-sm'
              >
                Add your scholarship
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
  return content
}

export default Scholarships