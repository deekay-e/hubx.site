import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Gradient from './slices/gradient'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Contact = () => {
  const [agreed, setAgreed] = useState(false)

  const content = (
    <main>
      <section>
        <div className='isolate px-6 py-24 sm:py-32 lg:px-8 lg:py-44'>
          <Gradient />
          <div className='mt-28 mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Contact support</h2>
            <p className='mt-2 text-lg leading-8 text-gray-500'>
              Want to make inquiries and get custom support? Do not hesitate to reach out today.
            </p>
          </div>
          <form action='/contact' method='POST' className='mx-auto mt-16 max-w-xl sm:mt-20'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label htmlFor='first-name' className='block text-sm font-semibold leading-6'>
                  First name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-black placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='last-name' className='block text-sm font-semibold leading-6'>
                  Last name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-black placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='position' className='block text-sm font-semibold leading-6'>
                  Current position
                </label>
                <div className='mt-2'>
                  <select
                    id='position'
                    name='position'
                    className='block bg-transparent dark:bg-black appearance-none w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  >
                    <option>Student</option>
                    <option>Professional</option>
                  </select>
                </div>
                <ChevronDownIcon
                  className='pointer-events-none absolute right-0 top-0 h-full w-5 text-gray-500'
                  aria-hidden='true'
                />
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block text-sm font-semibold leading-6'>
                  Email
                </label>
                <div className='mt-2.5'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='phone-number' className='block text-sm font-semibold leading-6'>
                  Phone number
                </label>
                <div className='relative mt-2.5'>
                  <div className='absolute inset-y-0 left-0 flex items-center'>
                    <label htmlFor='country' className='sr-only'>
                      Country
                    </label>
                    <select
                      id='country'
                      name='country'
                      className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm'
                    >
                      <option>US</option>
                      <option>UK</option>
                      <option>EU</option>
                    </select>
                    <ChevronDownIcon
                      className='pointer-events-none absolute right-0 top-0 h-full w-5 text-gray-500'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    type='tel'
                    name='phone-number'
                    id='phone-number'
                    autoComplete='tel'
                    className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='message' className='block text-sm font-semibold leading-6'>
                  Message
                </label>
                <div className='mt-2.5'>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    className='block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
              </div>
              <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
                <div className='flex h-6 items-center'>
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-800',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                    )}
                  >
                    <span className='sr-only'>Agree to policies</span>
                    <span
                      aria-hidden='true'
                      className={classNames(
                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white dark:bg-black shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className='text-sm leading-6 text-gray-500'>
                  By selecting this, you agree to our{' '}
                  <a href='/legal/privacy' className='font-semibold text-blue-600'>
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className='mt-10'>
              <button
                type='submit'
                className='block w-full rounded-lg bg-blue-600 p-3 text-center text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8'>
            <a className='flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]' href='/support/help'>
              <svg className='w-9 h-9 text-gray-800 mx-auto dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>
                <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'/>
              </svg>
              <div className='grow'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>Knowledgebase</h3>
                <p className='mt-1 text-gray-500'>We're here to help with any questions or code.</p>
                <p className='mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500'>
                  Contact support
                  <svg className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' clip-rule='evenodd' d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z' fill='currentColor'/>
                  </svg>
                </p>
              </div>
            </a>
            
            <a className='flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]' href='/support/faqs'>
              <svg className='w-9 h-9 text-gray-800 mx-auto dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'/>
                <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/>
              </svg>
              <div className='grow'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>FAQ</h3>
                <p className='mt-1 text-gray-500'>Search our FAQ for answers to anything you might ask.</p>
                <p className='mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500'>
                  Visit FAQ
                  <svg className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' clip-rule='evenodd' d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z' fill='currentColor'/>
                  </svg>
                </p>
              </div>
            </a>
            
            <a className='flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]' href='/about/resources'>
              <svg className='w-9 h-9 text-gray-800 mx-auto dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z'/>
                <path d='M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z'/>
              </svg>
              <div className='grow'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>Resources</h3>
                <p className='mt-1 text-gray-500'>Check out our free and premium quickstart guides and templates.</p>
                <p className='mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500'>
                  Contact sales
                  <svg className='w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' clip-rule='evenodd' d='M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z' fill='currentColor'/>
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
    
  )
  return content
}

export default Contact