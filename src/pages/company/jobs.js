import React, { useState } from 'react'
import Newsletter from '../slices/newsletter'
import Button from '../slices/buttons/button'
import AnotherButton from '../slices/buttons/whiteButton'

const Jobs = () => {
  const commitments = [
    { head: 'Equal Opportunity Employer', body: 'HubX is an Equal Opportunity Employer. We are committed to inclusion and diversity. We make every effort to offer employment and advancement opportunities to all qualified candidates. We do not discriminate based upon race, religion, color, national origin, gender (including pregnancy, childbirth, or related medical condition), sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics.' },
    { head: 'Accommodations', body: 'If you are an applicant who requires accommodations for any part of your application process, please contact us via email at accommodation@hubx.consulting. Each request for reasonable accommodation will be considered on a case-by-case basis, consistent with the applicable laws and regulations.' },
    { head: 'Commitment to Diversity', body: 'At HubX, we are committed to creating the most diverse and inclusive culture possible. Our community is made up of freelancers and businesses from 180 countries, and we believe the ability to provide a marketplace that empowers them and serves their diverse needs starts with team members. Diversity, inclusion, and belonging are critical to the success of our business and our ability to further our mission of creating economic opportunities so people have better lives. We make a concerted effort to ensure these efforts are woven throughout everything we do, both internally and externally, in order to do our part in making meaningful strides towards equality.' },
    { head: 'Benefit Statement', body: 'HubX proudly offers a comprehensive set of benefits to ensure team members are able to bring their whole selves to work. To allow for that, we aim to deliver world-class offerings and perks that cover your medical, dental, vision, emotional and family well-being.' }
  ]
  const [clicked, setClicked] = useState('0')

  const handleToggle = (index) => {
    if (clicked === index) return setClicked('0')
    setClicked(index)
  }

  return (
    <main>
      <section>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-36'>
          <div className='grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center'>
            <div className='lg:col-span-3'>
              <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white'>Come transform the way the world works</h1>
              <p className='mt-3 text-lg text-gray-800 dark:text-gray-400'>Be part of the team that's bringing this vision to life.</p>

              <div className='mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3'>
                {/* <a className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-500 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition p-3 rounded-lg dark:focus:ring-offset-gray-800' href='/'>
                  Open Positions
                </a> */}
                <Button linkinfo={{name: 'Open Positions', href: '/'}} />
                {/* <a className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-white hover:bg-blue-600 border text-gray-700 hover:text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition p-3 rounded-lg dark:focus:ring-offset-gray-800' href='/'>
                  See Contract Roles
                </a> */}
                <AnotherButton linkinfo={{name:'See Contract Roles', href:'/'}} />
              </div>
            </div>
            <div className='lg:col-span-4 mt-10 lg:mt-0'>
              <img className='w-full rounded-xl' src='https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80' alt='Jobs' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='relative px-4 my-16 mx-auto max-w-7xl md:px-8 lg:my-36 py-12'>
          <div className='absolute inset-0'>
            <div className='absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4 rounded-xl' />
          </div>
          <div className='relative'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 w-32 -mt-4 text-blue-gray-100 lg:w-32'
            >
              <defs>
                <pattern
                  id='d06ca312-d4ed-465f-ad18-fb0c0f92b6f1'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)'
                width='52'
                height='24'
              />
            </svg>
            <h2 className='text-3xl ml-24 mb-10 font-semibold'>HubX in the News</h2>
            <div className='grid gap-12 row-gap-8 lg:grid-cols-2'>
              <div className='grid gap-12 row-gap-5 md:grid-cols-2'>
                <div className='border rounded-md p-6 hover:bg-white'>
                  <a href='/'>
                    <div className='relative'>
                      <h6 className='text-sm text-gray-900 mb-2'>
                        June 4, 2023
                      </h6>
                      <p className='font-semibold leading-5'>
                        Baseball ipsum dolor sit amet cellar rubber win hack tossed.
                      </p>
                    </div>
                  </a>
                </div>
                <div className='border rounded-md p-6 hover:bg-white'>
                  <a href='/'>
                    <h6 className='text-sm text-gray-900 mb-2'>
                      13 April, 2023
                    </h6>
                    <p className='font-semibold leading-5'>
                      They urge you to put down your sword and come join the winners.
                    </p>
                  </a>
                </div>
                <div className='border rounded-md p-6 hover:bg-white'>
                  <a href='/'>
                    <h6 className='text-sm text-gray-900 mb-2'>
                      12 July, 2023
                    </h6>
                    <p className='font-semibold leading-5'>
                      If one examines precultural libertarianism, one is faced with a choice.
                    </p>
                  </a>
                </div>
                <div className='border rounded-md p-6 hover:bg-white'>
                  <a href='/'>
                    <h6 className='text-sm text-gray-900 mb-2'>
                      16 July, 2023
                    </h6>
                    <p className='font-semibold leading-5'>
                      Those options are already baked in with this model shoot me an email.
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <img
                  className='object-cover w-full h-56 rounded-xl shadow-lg sm:h-96'
                  src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='relative z-10 lg:py-16'>
              <div className='lg:col-span-4 mt-10 lg:mt-0'>
                <img className='w-full rounded-xl' src='https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80' alt='' />
              </div>
            </div>

            <div className='relative flex items-center w-full'>
              <div>
                <h2 className='text-2xl font-bold sm:text-3xl mb-5'>Our Hiring Commitments</h2>

                <div className='divide-y divide-gray-100 rounded-xl border border-gray-100'>
                  {commitments.map((c, i) => (
                    <div key={i} className='group p-6'>
                      <button
                        onClick={() => handleToggle(i)}
                        className='flex cursor-pointer items-center justify-between w-full text-gray-900'>
                        <h3 className='text-lg font-medium'>{c.head}</h3>

                        <div className='flex items-center justify-center h-5 w-5'>
                          {clicked === i ?
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg> :
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          }
                        </div>
                      </button>

                      {clicked === i && (
                        <div><p className='mt-4 leading-relaxed text-gray-700'>{c.body}</p></div>
                      )}
                    </div>
                  ))}
                </div>
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

export default Jobs