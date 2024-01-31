import Affiliates from './affiliates'
import Investors from './investors'
import Jobs from './jobs'
import Podcast from './podcast'
import Team from './team'
import Banner from '../slices/banner'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Newsletter from '../slices/newsletter'

const stats = [
  {
      data: '30',
      title: 'People'
  },
  {
      data: '1000+',
      title: 'Projects'
  },
  {
      data: '500+',
      title: 'Customers'
  },
  {
      data: 'A couple',
      title: 'Coffee breaks'
  },
]

const Company = () => {
  return (
    <main>
      <section>
        <div className='relative isolate'>
          <svg
            className='absolute top-0 w-full inset-x-0 -z-10 h-[64rem] stroke-gray-50 dark:stroke-gray-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white dark:from-gray-800 '
            aria-hidden='true'
          >
            <defs><pattern id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84' width='200' height='200' x='50%' y='-1' patternUnits='userSpaceOnUse'><path d='M.5 200V.5H200' fill='none'></path></pattern></defs>
            <svg x='50%' y='-1' className='fill-gray-50 dark:fill-gray-900 overflow-visible'><path d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z' stroke-width='0'></path></svg>
            <rect width='100%' height='100%' stroke-width='0' fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'></rect>
          </svg>

          <div className='max-w-7xl mx-auto px-4 lg:px-8 py-28 lg:py-36'>
            <div className='md:flex md:items-center md:max-w-none md:mx-0 gap-x-8 max-w-2xl mx-auto'>
              <div className='lg:max-w-2xl md:shrink-0 max-w-xl w-full'>
                <h1 className='text-4xl md:text-6xl font-medium'>We are transforming the way people connect.</h1>
                <p className='relative mt-6 sm:max-w-md md:max-w-none'>
                  With the connection of people to their goals as our vision, we have been setup from the ground-up to achieve that.
                </p>
                <div className='flex mt-6 gap-x-6 items-center'>
                  <a
                    href='/register'
                    className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  >
                    Get started
                  </a>
                  <a href='/services' className='text-sm font-semibold leading-6 hover:text-blue-600 flex group'>
                    Learn more
                    <span aria-hidden='true' className='my-auto ml-[.125rem]'>
                      <ArrowRightIcon className='transition ease-in-out group-hover:translate-x-1' width={16} />
                    </span>
                  </a>
                </div>
              </div>
              <div className='flex mt-14 md:pl-0 md:mt-0 sm:mt-44 sm:pl-20 sm:justify-start justify-end gap-8'>
                <div className='lg:pt-80 lg:order-none md:order-last md:pt-36 sm:pt-44 sm:ml-0 pt-32 w-44 flex-none ml-auto'>
                  <div className='relative'>
                    <img src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80' className='object-cover rounded-lg w-full aspect-2/3' alt='' />
                    <div className='absolute inset-0 rounded-lg' />
                  </div>
                </div>
                <div className='md:pt-36 sm:pt-52 sm:mr-0 flex-none w-44 mr-auto'>
                  <div className='relative'>
                    <img src='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80' className='object-cover rounded-lg w-full aspect-2/3' alt='' />
                  </div>
                  <div className='relative my-8'>
                    <img src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80' className='object-cover rounded-lg w-full aspect-2/3' alt='' />
                  </div>
                </div>
                <div className='sm:pt-0 pt-32 flex-none w-44'>
                  <div className='relative'>
                    <img src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80' className='object-cover rounded-lg w-full aspect-2/3' alt='' />
                    <div className='absolute inset-0 rounded-lg' />
                  </div>
                  <div className='relative my-8'>
                    <img src='https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80' className='object-cover rounded-lg w-full aspect-2/3' alt='' />
                    <div className='absolute inset-0 rounded-lg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='relative overflow-hidden'>
          <div className='max-w-7xl mx-auto px-4 lg:px-8 py-28 lg:py-36'>
            <div className='max-w-2xl text-center mx-auto'>
              <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white'>Designed for you to get more <span className='text-blue-600'>efficient</span></h1>
              <p className='mt-3 text-lg text-gray-800 dark:text-gray-400'>Explore in-demand careers and develop cutting edge skills.</p>
            </div>

            <div className='mt-10 relative max-w-5xl mx-auto'>
              <div className='w-full object-cover h-96 sm:h-[480px] bg-[url("https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80")] bg-no-repeat bg-center bg-cover rounded-xl'></div>

              <div className='absolute inset-0 w-full h-full'>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                  <a className='inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black' href='/'>
                    <svg className='w-6 h-6' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z'/>
                    </svg>
                    Play the overview
                  </a>
                </div>
              </div>

              <div className='absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900'>
                <div className='bg-white w-48 h-48 rounded-lg dark:bg-slate-900'></div>
              </div>

              <div className='absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full'>
                <div className='bg-white w-48 h-48 rounded-full dark:bg-slate-900'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-7xl mx-auto px-8 text-gray-600 gap-x-12 items-start justify-between lg:flex py-32'>
          <div className='mt-6 gap-12 sm:mt-0 md:flex lg:block'>
            <div className='max-w-2xl'>
              <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                We do our best to make customers always happy
              </h3>
              <p className='mt-3 max-w-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
              </p>
            </div>
            <div className='flex-none mt-6 md:mt-0 lg:mt-6'>
              <ul className='inline-grid gap-y-8 gap-x-14 grid-cols-2'>
                {
                  stats.map((item, idx) => (
                    <li key={idx} className=''>
                      <h4 className='text-4xl text-blue-600 font-semibold'>{item.data}</h4>
                      <p className='mt-3 font-medium'>{item.title}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className='sm:hidden lg:block lg:max-w-xl'>
            <img src='https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='rounded-lg' alt='' />
          </div>
        </div>
      </section>

      <section>
        <Banner />
      </section>

      <section>
        <div className='max-w-7xl px-4 py-28 lg:px-8 lg:py-36 mx-auto'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center'>
            <div className='lg:col-span-7'>
              <div className='grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10'>
                <div className='col-span-4'>
                  <img className='rounded-xl' src='https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80' alt='' />
                </div>

                <div className='col-span-3'>
                  <img className='rounded-xl' src='https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='' />
                </div>

                <div className='col-span-5'>
                  <img className='rounded-xl' src='https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='' />
                </div>
              </div>
            </div>

            <div className='mt-5 sm:mt-10 lg:mt-0 lg:col-span-5'>
              <div className='space-y-6 sm:space-y-8'>
                <div className='space-y-2 md:space-y-4'>
                  <h2 className='font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200'>
                    We collaborate with our clients to build customized solutions
                  </h2>
                  <p className='text-gray-500'>
                    Using effective toolsets and proven processes to explore your ideas and make your vision come true. Then share your success with the world.
                  </p>
                </div>

                <ul className='space-y-2 sm:space-y-4'>
                  <li className='flex space-x-3'>
                    <svg className='flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z' fill='currentColor' fill-opacity='0.1'/>
                      <path d='M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z' fill='currentColor'/>
                    </svg>

                    <span className='text-sm sm:text-base text-gray-500'>
                      <span className='font-bold'>Less routine</span> – more creativity
                    </span>
                  </li>

                  <li className='flex space-x-3'>
                    <svg className='flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z' fill='currentColor' fill-opacity='0.1'/>
                      <path d='M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z' fill='currentColor'/>
                    </svg>

                    <span className='text-sm sm:text-base text-gray-500'>
                      Hundreds of thousands of hourly input
                    </span>
                  </li>

                  <li className='flex space-x-3'>
                    <svg className='flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z' fill='currentColor' fill-opacity='0.1'/>
                      <path d='M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z' fill='currentColor'/>
                    </svg>

                    <span className='text-sm sm:text-base text-gray-500'>
                      Scale budgets <span className='font-bold'>efficiently</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Newsletter />
      </section>
    </main>
  )
}

export { Company, Affiliates, Investors, Jobs, Podcast, Team }