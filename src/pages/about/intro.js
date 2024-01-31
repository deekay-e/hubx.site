import React from 'react'
import Process from './process'
import Impact from './impact'
import Press from './press'
import Newsletter from '../slices/newsletter'
import { ArrowPathIcon, BriefcaseIcon, FireIcon, LockClosedIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline'
import Button from '../slices/buttons/button'

const Intro = () => {
  const links = [
    { name: 'Open roles', href: '/company/jobs' },
    { name: 'Internship program', href: '/services/career' },
    { name: 'Our values', href: '/about/us' },
    { name: 'Meet our leadership', href: '/company/team' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '7' },
    { name: 'Full-time colleagues', value: '30+' },
    { name: 'Hours per week', value: '70' },
    { name: 'Paid time off', value: '2 months' },
  ]
  const features = [
    {
      name: 'Collaboration',
      description:
        'We believe in collaboration and partnership, and we work closely with our clients to ensure that they have the support they need to succeed.',
      icon: UserGroupIcon,
    },
    {
      name: 'Integrity and ethics',
      description:
        'We hold ourselves to the highest standards of integrity and ethics. We believe in transparency, honesty, and accountability in all our dealings.',
      icon: LockClosedIcon,
    },
    {
      name: 'Professionalism',
      description:
        'We are committed to delivering professional services of the highest quality. Our team of experienced professionals is dedicated to providing accurate and up-to-date information to our clients.',
      icon: BriefcaseIcon,
    },
    {
      name: 'Innovation',
      description:
        'We are constantly seeking new and innovative ways to improve our services and deliver value to our customers. We invest in technology and tools that help us gather and share information more efficiently.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Client-centric approach',
      description:
        'Our consultancy is designed to put our customers first. We believe in providing personalised services that cater to the unique needs of each client.',
      icon: UserIcon,
    },
    {
      name: 'Passion',
      description:
        'We are passionate about education and helping students achieve their dreams. We are committed to delivering services that are of the highest quality and that meet the unique needs of our clients.',
      icon: FireIcon,
    },
  ]

  const content = (
    <main>
      <section style={{ background: 'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)' }}>
        <div className='max-w-screen-xl mx-auto px-4 py-28 md:text-center md:px-8'>
          <div className='max-w-xl space-y-3 md:mx-auto'>
            <div className='max-w-3xl'>
              <p className='inline-block px-3 py-px my-6 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>Get to know us</p>
            </div>
            <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              For an exciting collaboration
            </p>
            <p className='text-gray-600'>
              Welcome to HubX, the consultancy arm of HubX limited: Founded in March 2023 with UK company registration number 14722644.  At HubX, we believe that every student has the potential to succeed and excel, and it is our mission to help them realise their full potential.
            </p>
          </div>
          <div className='mt-4'>
          <Button linkinfo={{name:'Get Started', href:'/services'}} />
          </div>
        </div>
      </section>

      <section>
        
      </section>

      <section>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>
                What's the point?
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='9a29985a-fc16-419b-ae53-1670f5ca4491'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#9a29985a-fc16-419b-ae53-1670f5ca4491)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span className='relative'>Our</span>
              </span>{' '}
              goal succintly stated is
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              To champion and maximize students' and professionals' success, can be deemed our longterm objective.
              With everything else springing out from that.
            </p>
          </div>
          <div className='grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto'>
            <img
              className='object-cover w-full h-56 rounded-md shadow-lg'
              src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
            <img
              className='object-cover w-full h-56 rounded-md shadow-lg'
              src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
            <img
              className='object-cover w-full h-56 rounded-md shadow-lg'
              src='https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
              alt=''
            />
            <img
              className='object-cover w-full h-56 rounded-md shadow-lg'
              src='https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
              alt=''
            />
          </div>
          <div className='flex gap-10 items-center  sm:justify-center'>
            <Button linkinfo={{name:'Sign Up', href:'/'}} />
            <a
              href='/'
              aria-label=''
              className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-500'
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
          <img
            src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
            alt='Hubx'
            className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
          />
          <div
            className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
            aria-hidden='true'
          >
            <div
              className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
            aria-hidden='true'
          >
            <div
              className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Work with us</h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Our consultancy is a team of experienced professionals who are passionate and dedicated to helping students achieve their educational and career goals. We do this by providing personalised services to students looking to study abroad, secure scholarships, find job opportunities amongst other things. We understand that every student is unique, and we provide tailored advice and support to help them achieve their goals.
              </p>
            </div>
            <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden='true'>&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className='mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'>
                {stats.map((stat) => (
                  <div key={stat.name} className='flex flex-col-reverse'>
                    <dt className='text-base leading-7 text-gray-300'>{stat.name}</dt>
                    <dd className='text-2xl font-bold leading-9 tracking-tight text-white'>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <div className='max-w-3xl mx-auto text-center'>
              <p className='inline-block px-3 py-px mb-6 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>Our values</p>
            </div>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our creed defines our character
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Placing our client's interest at heart, is at the core of our business. We believe that our success is directly linked to the success of our clients, and we are committed to delivering services that meet their needs and exceed their expectations. Our core values can be summarized like this...
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {features.map((feature) => (
                <div key={feature.name} className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                      <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-gray-600'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </main>
  )
  return content
}

export { Process, Impact, Intro, Press }