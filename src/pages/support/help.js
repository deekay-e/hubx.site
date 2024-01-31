import React from 'react'
import Newsletter from '../slices/newsletter'
import FeaturesSix from '../../partials/common/FeaturesSix'
import { Question } from 'react-bootstrap-icons'

const Card = ({url, title, desc}) => {
  return (
    <div className='flex items-center p-2 duration-300 transform border dark:border-gray-900 rounded shadow hover:scale-105 sm:hover:scale-105 hover:text-blue-500'>
      <div className='mr-2'>
        <svg
          className='w-6 h-6 text-blue-500 sm:w-8 sm:h-8'
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
      <div>
        <a href={url} className='font-medium'>{title}</a>
        <p className='mt-2 text-gray-500 text-sm'>{desc}</p>
      </div>
    </div>
  )
}
const HelpCard = ({url, title, desc}) => {
  return (
    <a href={url} className='text-center'>
      <div className='bg-white dark:bg-black border dark:border-gray-900 rounded-md p-6 flex flex-col items-center'>
        <h3 className='font-medium'>{title}</h3>
        <p className='mt-2'>{desc}</p>
      </div>
    </a>
  )
}
const AccountCard = ({url, title, desc}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-2 flex h-12 w-12 items-center justify-center text-blue-500 sm:mb-4 md:h-14 md:w-14'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-full w-full' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
        </svg>
      </div>

      <h3 className='mb-2 text-center text-lg font-semibold md:text-xl'>{title}</h3>
      <p className='mb-2 text-center text-gray-500'>{desc}</p>
      <a href={url} className='font-bold text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-700'>Learn more</a>
    </div>
  )
}

const Help = () => {
  const elements = [
    {id: 1, icon: '', title: 'Getting started', count: 12, href: '/'},
    {id: 2, icon: '', title: 'Your profile', count: 18, href: '/'},
    {id: 3, icon: '', title: 'Project management', count: 20, href: '/'},
    {id: 4, icon: '', title: 'Payments', count: 14, href: '/'},
    {id: 5, icon: '', title: 'Billing & Accounts', count: 8, href: '/'},
    {id: 6, icon: '', title: 'Support', count: 7, href: '/'}
  ]
  const links = [
    {title: 'Billing methods', href: '/', desc: 'Setting up a billing method'},
    {title: 'Request a refund', href: '/', desc: 'How to request a refund on HubX'},
    {title: 'HubX payment protection', href: '/', desc: 'How your payments are protected'},
    {title: 'Staying safe on HubX', href: '/', desc: 'How to stay safe on HubX and not get scammed'},
    {title: 'Enable or disable manual time', href: '/', desc: 'Allowing manual time on contracts'},
    {title: 'Be a client and agent', href: '/', desc: 'Utilizing multiple account types in HubX'},
    {title: 'Service options', href: '/', desc: 'Learn more about HubX membership'},
    {title: 'Use messages', href: '/', desc: 'Communicating through HubX'}
  ]
  const accounts = [
    {title: 'Update billing', href: '/', desc: 'Change or update your billing methods'},
    {title: 'Manage contracts', href: '/', desc: 'Update or manage active contracts'},
    {title: 'Close account', href: '/', desc: 'Permanently close your account'},
    {title: 'Reset password', href: '/', desc: 'Change your account password'}
  ]
  const categories = [
    {id: 1, icon: '', title: 'Get started', href: '/', desc: 'How it Works, Getting Started, Fees & Protection'},
    {id: 2, icon: '', title: 'Find an Agent', href: '/', desc: 'Post a Job, Find an Agent, Invite to Apply'},
    {id: 3, icon: '', title: 'Make a Hire', href: '/', desc: 'Evaluate Proposals, Interview Agents, Send an Offer'},
    {id: 4, icon: '', title: 'Pay for Work', href: '/', desc: 'Billing, Make Payments, Reports, Invoices, Disputes'},
    {id: 5, icon: '', title: 'Manage your Project', href: '/', desc: 'Manage Contract, Contracts, Feedback'},
    {id: 6, icon: '', title: 'Service Options', href: '/', desc: 'HubX Basic, HubX Pro, HubX Enterprise'},
    {id: 7, icon: '', title: 'Account', href: '/', desc: 'Account Settings, Manage Teams, Team Permissions'},
    {id: 8, icon: '', title: 'Apps', href: '/', desc: 'Mobile App, Desktop App, Web App, Time Tracker'},
    {id: 9, icon: '', title: 'Trust & Safety', href: '/', desc: 'Terms of Service, Online Safety, Personal Data'},
    {id: 10, icon: '', title: 'HubX API', href: '/', desc: 'Development Resources'},
    {id: 11, icon: '', title: 'Project Catalog', href: '/', desc: 'Pre-packaged projects on HubX'}
  ]

  const content = (
    <main>
      <section>
        <div className='relative overflow-hidden mt-[5rem]'>
          <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-6xl'>
                How can we help?
              </h1>

              <div className='mt-7 sm:mt-12 mx-auto max-w-3xl relative font-medium'>
                <form>
                  <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-black dark:border-gray-700 dark:shadow-gray-900/[.2]'>
                    <div className='flex-[1_0_0%]'>
                      <label htmlFor='help' className='block text-sm text-gray-700 font-medium dark:text-gray-300'><span className='sr-only'>Search for answers</span></label>
                      <input type='email' name='help' id='help' className='p-2.5 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-black' placeholder='Search for answers' />
                    </div>
                    <div className='flex-[0_0_auto]'>
                      <a className='p-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white dark:text-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800' href='/'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-5 w-5'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>
                <div className='mt-1 text-gray-700 dark:text-gray-300'>
                  <span className='text-sm'>
                    Common searches include: funding, research proposals, quote
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='text-center mt-[5rem]'>
          <h2 className='text-4xl'>Explore our Knowledge Base</h2>
        </div>
        <div className='px-4 py-16 mx-auto max-w-4xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid gap-8 row-gap-5 lg:grid-cols-3 md:grid-cols-2'>
            { elements.map(el => (
                <FeaturesSix key={el.id} title={el.title} count={el.count} icon={el.icon} url={el.href} />
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-7xl px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-36'>
          <div className='mb-10 sm:text-center md:mb-12'>
            <h2 className='mb-6 text-4xl'>
              <span className='relative'>Access your{' '}</span>
              <span className='text-blue-600'>account</span>
            </h2>
            
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            { accounts.map((link, idx) => (
              <AccountCard key={idx} title={link.title} url={link.href} desc={link.desc} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-36 mx-auto'>
          <div className='my-12'><h2 className='text-4xl text-center'>Explore help categories</h2></div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map((cat) => (<HelpCard key={cat.id} url={cat.href} title={cat.title} desc={cat.desc} />))}
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-7xl px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-36'>
          <div className='mb-10 sm:text-center md:mb-12'>
            <h2 className='mb-6 text-4xl'>
              <span className='relative'>
                A few recommended{' '}
              </span>
              <span className='text-blue-600'>topics for you</span>
            </h2>
            
          </div>
          <div className='grid sm:grid-cols-2 gap-6'>
            { links.map((link, idx) => (<Card key={idx} title={link.title} url={link.href} desc={link.desc} />)) }
          </div>
        </div>
      </section>

      <section>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid gap-10 lg:grid-cols-2'>
            <div className='lg:pr-10'>
              <a
                href='/'
                aria-label='Go Home'
                title='Logo'
                className='inline-block mb-5'
              >
                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900'>
                  <Question size={40} />
                </div>
              </a>
              <h5 className='mb-4 text-4xl'>
                Can't find what
                <br className='hidden md:block' />
                you are{' '}
                <span className='inline-block text-blue-600'>
                  looking for
                </span>?
              </h5>
              <div className='my-9'>
                <a
                  href='/contact'
                  className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  Contact us
                </a>
              </div>
              <hr className='mb-5 border-gray-300 dark:border-gray-700' />
              <div className='flex items-center space-x-4'>
                <a
                  href='/'
                  className='text-gray-500 transition-colors duration-300 hover:text-blue-500'
                >
                  <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                    <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
                  </svg>
                </a>
                <a
                  href='/'
                  className='text-gray-500 transition-colors duration-300 hover:text-blue-500'
                >
                  <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                    <circle cx='15' cy='15' r='4' />
                    <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
                  </svg>
                </a>
                <a
                  href='/'
                  className='text-gray-500 transition-colors duration-300 hover:text-blue-500'
                >
                  <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                    <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
                  </svg>
                </a>
                <a
                  href='/'
                  className='text-gray-500 transition-colors duration-300 hover:text-blue-500'
                >
                  <svg viewBox='0 0 24 24' fill='currentColor' className='h-6'>
                    <path d='M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z' />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <img
                className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2'>
            <a
              href='/login'
              aria-label='View item'
              title='View item'
              className='relative block p-px overflow-hidden transition duration-300 transform border rounded-md dark:border-gray-900 shadow-sm hover:scale-105 group hover:shadow-xl'
            >
              <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100' />
              <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100' />
              <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100' />
              <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100' />
              <div className='relative flex items-center justify-between p-5 bg-white dark:bg-black rounded-sm'>
                <div className='pr-4'>
                  <h6 className='mb-2 font-semibold leading-5 text-gray-500'>
                    Log in for personalized service and assistance.
                  </h6>
                  <p className='text-3xl'>
                    Sign in today
                  </p>
                </div>
                <div className='flex items-center justify-center'>
                  <svg
                    className='w-3 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-500'
                    fill='currentColor'
                    viewBox='0 0 12 12'
                  >
                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                  </svg>
                </div>
              </div>
            </a>
            <a
              href='/support/faqs'
              aria-label='View FAQs'
              title='View FAQs'
              className='relative block p-px overflow-hidden transition duration-300 transform border dark:border-gray-900 rounded-md shadow-sm hover:scale-105 group hover:shadow-xl'
            >
              <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100' />
              <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100' />
              <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100' />
              <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100' />
              <div className='relative flex items-center justify-between p-5 bg-white dark:bg-black rounded-sm'>
                <div className='pr-4'>
                  <h6 className='mb-2 font-semibold leading-5 text-gray-500'>
                    Get help to your frequently asked questions
                  </h6>
                  <p className='text-3xl'>
                    See our FAQs
                  </p>
                </div>
                <div className='flex items-center justify-center'>
                  <svg
                    className='w-3 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-500'
                    fill='currentColor'
                    viewBox='0 0 12 12'
                  >
                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section><Newsletter /></section>
    </main>
  )
  return content
}

export default Help