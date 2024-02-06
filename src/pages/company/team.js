import React from 'react'
import Newsletter from '../slices/newsletter'
import { Thunderbolt } from 'react-bootstrap-icons'
import AnotherButton from '../slices/buttons/whiteButton'
import Button from '../slices/buttons/button'

const Team = () => {
  const people = [
    {
      name: 'Caleb Egbuta',
      role: 'Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Timothy Duru',
      role: 'Co-Founder / COO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kay Cee',
      role: 'Software Engineer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Chioma Egbuta',
      role: 'Legal Adviser',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Cassy Lee',
      role: 'Manager, HR',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Praise T',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '80' },
    { id: 2, name: 'Total projects completed', value: '12,300+' },
    { id: 3, name: 'Project completion rate', value: '95%' },
    { id: 3, name: 'Estimated yearly earnings', value: '$1.2 million' }
  ]

  return (
    <main>
      <section>
        <div className='bg-white'>
          <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
              <svg
                viewBox='0 0 1024 1024'
                className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
                aria-hidden='true'
              >
                <circle cx={512} cy={512} r={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.7' />
                <defs>
                  <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                    <stop stopColor='#7775D6' />
                    <stop offset={1} stopColor='#E935C1' />
                  </radialGradient>
                </defs>
              </svg>
              <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Boost your productivity.
                  <br />
                  Start using our services today.
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  We believe that good and lasting relationships are built on the basis of trust. Trust can only be formed with knowledge. So here we introduce you to the effective team that makes HubX tick.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                  {/* <a
                    href='/register'
                    className='rounded-lg bg-white p-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Get started
                  </a> */}
                  <AnotherButton linkinfo={{name:'Get Started', href:'/register'}}/>
                  <a href='/services' className='text-sm font-semibold leading-6 text-white'>
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
              <div className='relative mt-16 h-80 lg:mt-8'>
                <img
                  className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                  alt='App screenshot'
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4'>
              {stats.map((stat) => (
                <div key={stat.id} className='mx-auto flex max-w-xs flex-col gap-y-4'>
                  <dt className='text-base leading-7 text-gray-600'>{stat.name}</dt>
                  <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32'>
          <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
            <div className='max-w-2xl'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Meet our leadership</h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
              </p>
            </div>
            <ul className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
              {people.map((person) => (
                <li key={person.name}>
                  <div className='flex items-center gap-x-6'>
                    <img className='h-16 w-16 rounded-full' src={person.imageUrl} alt='' />
                    <div>
                      <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{person.name}</h3>
                      <p className='text-sm font-semibold leading-6 text-indigo-600'>{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className='relative isolate overflow-hidden bg-white px-4 sm:px-6 py-24 sm:py-32 lg:px-8'>
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
          <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
          <div className='mx-auto max-w-2xl lg:max-w-4xl'>
            <img className='mx-auto h-12' src={<Thunderbolt />} alt='' />
            <figure className='mt-10'>
              <blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
                <p>
                  “Few service-oriented consulting agencies, compare to HubX in the quality and effectivity of their myriad service offerings. I can reccommend their service to any interesting party with full confidence. There are no regrets really!”
                </p>
              </blockquote>
              <figcaption className='mt-10'>
                <img
                  className='mx-auto h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                  <div className='font-semibold text-gray-900'>Cletus Karachi</div>
                  <svg viewBox='0 0 2 2' width={3} height={3} aria-hidden='true' className='fill-gray-900'>
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className='text-gray-600'>CEO of Kace Technologies</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2'>
            <div className='transition duration-300 transform bg-white rounded-md shadow-sm hover:-translate-y-1 hover:shadow md:text-center'>
              <div className='relative'>
                <img
                  className='object-cover w-full h-64 rounded-t-md lg:h-80 xl:h-96'
                  src='https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                  alt=''
                />
                <div className='absolute rounded-md inset-0 bg-gray-800 bg-opacity-25' />
              </div>
              <div className='px-6 py-8 border-t-0 rounded-b-lg sm:px-8'>
                <h5 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
                  Join Team
                </h5>
                <p className='mb-5 text-gray-700'>
                  A great and winning team is certainly defined by the individual quality within. Afterall a team is only as strong as its weakest link. At HubX we are the core proponent of the idea of doing hard things. So if you think you have what it takes to work with us, then don't hesitate to reach out. We are always on the lookout for outstanding professionals to make for a more effective team.
                </p>
                {/* <a
                  href='/company/jobs'
                  className='inline-flex items-center justify-center h-10 p-3 rounded-lg font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none'
                >
                  Read more
                </a> */}
                <Button linkinfo={{name:'Read More', href:'/company/jobs'}}/>
              </div>
            </div>
            <div className='transition duration-300 transform bg-white rounded-md shadow-sm hover:-translate-y-1 hover:shadow md:text-center'>
              <div className='relative'>
                <img
                  className='object-cover w-full h-64 rounded-t-md lg:h-80 xl:h-96'
                  src='https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                  alt=''
                />
                <div className='absolute rounded-md inset-0 bg-gray-800 bg-opacity-25' />
              </div>
              <div className='px-6 py-8 border-t-0 rounded-b-md sm:px-8'>
                <h5 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
                  Hire Us
                </h5>
                <p className='mb-5 text-gray-700'>
                  We know what we are doing. We have left behind our wake, a trail and trackrecord of outstanding achievements in the number of projects completed, our completion and client satisfaction rate. With a well tested process, we endeavour to deliver on time and with exceptional quality. Bottomline is, you cannot go wrong working with us. So get in touch today.
                </p>
                <Button linkinfo={{name:'Read More', href:'/service'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}

export default Team