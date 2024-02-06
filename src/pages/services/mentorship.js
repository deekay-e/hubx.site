import React, { useState } from 'react'
import Newsletter from '../slices/newsletter'
import ShowMentor from '../slices/showMentor'
import HeroSnip from '../slices/heroSnip'

const Mentorship = () => {
  const info = {
    title: 'Professional mentorship services',
    tagline: 'Build your future with us',
    desc: 'Get outstanding mentorship to help you effectively navigate the challenges of your academic pursuits. With our dedicated team of worldclass professors, we\'ve got you covered.'
  }
  const mentors = [
    {
      id: 1, name: 'Oliver Aguilerra', username: 'olivera', position: 'Product Manager',
      email: 'contact@oliveraguilerra.me', phone: '+44 123 456 789', website: 'oliveraguilerra.me',
      bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.', location: 'London', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    },
    {
      id: 2, name: 'Martha Clermont', username: 'marthaclermont', position: 'Design Team Lead',
      email: 'contact@marthaclermont.me', phone: '+44 123 456 789', website: 'marthaclermont.me',
      bio: 'Amet I love liquorice jujubes pudding croissant I love pudding.', location: 'Sheffield', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    },
    {
      id: 3, name: 'Anthony Geek', username: 'anthonygeek', position: 'CTO Lorem Inc.',
      email: 'contact@anthonygeek.me', phone: '+44 123 456 789', website: 'anthonygeek.me',
      bio: 'Apple pie macaroon toffee jujubes pie tart cookie caramels.', location: 'Ontario', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    },
    {
      id: 4, name: 'Alice Melbourne', username: 'aliceme', position: 'Human Resources',
      email: 'contact@alicemelborne.me', phone: '+44 123 456 789', website: 'alicemelborne.me',
      bio: 'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.', location: 'Melbourne', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    },
    {
      id: 5, name: 'Martin Garix', username: 'martingarix', position: 'Good Guy',
      email: 'contact@martingarix.me', phone: '+44 123 456 789', website: 'martingarix.me',
      bio: 'Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.', location: 'Kiev', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    },
    {
      id: 6, name: 'Andrew Larkin', username: 'andrewlarkin', position: 'Backend Developer',
      email: 'contact@andrewlarkin.me', phone: '+44 123 456 789', website: 'andrewlarkin.me',
      bio: 'Moonfish, steelhead, lamprey southern flounder tadpole fish bigeye.', location: 'Rome', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    },
    {
      id: 7, name: 'Sophie Denmo', username: 'sophiedenmo', position: 'Designer',
      email: 'contact@sophiedenmo.me', phone: '+44 123 456 789', website: 'sophiedenmo.me',
      bio: 'Veggies sunt bona vobis, proinde vos postulo esse magis grape pea.', location: 'Brussels', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    },
    {
      id: 8, name: 'Benedict Caro', username: 'benedictcaro', position: 'Software Engineer',
      email: 'contact@benedictcaro.me', phone: '+44 123 456 789', website: 'benedictcaro.me',
      bio: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi.', location: 'Manchester', birthday: 'June 23, 1988',
      photo: 'https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
      facebook: '', instagram: '', linkedin: '', twitter: ''
    }
  ]
  const features = [
    {
      title: 'Unlimited email support',
      body: 'Get round-the-clock support via email from our mentors and at your convenience. While having effective response provided asap.'
    },
    {
      title: 'Proofreading and editing',
      body: 'Get assignments proofread and edited, improving spelling and grammar. Includes additional consultation for feedback purposes.'
    },
    {
      title: 'Career support services',
      body: 'Includes but not limited to Job application guidance, Linkedin set up and CV editing.'
    },
    {
      title: 'Free resources',
      body: 'Get free and unrestrained access to productivity notion templates, planners and courses.'
    },
    {
      title: 'Presentation preparation',
      body: 'Get a best-in-class help getting ready for your oral presentations and seminars. With quick, actionable and memorable tips on making them a breeze.'
    },
    {
      title: 'Exam and revision support',
      body: 'Get fantastic support in prepping for your tests and exams. Detailed tips engineered to getting you all the help you will need to achieve incredible scores.'
    },
    {
      title: 'Study skills development',
      body: 'This include effective time management, developing learning strategies, note-taking, biography and reference construction and presentation, academic writing style development among others.'
    },
    {
      title: 'Video consultation',
      body: 'Support for individual assignments by critical and effective reading of academic texts, sourcing literature, identifying essay structure, content planning etc.'
    }
  ]
  const [mentor, setMentor] = useState(mentors[0])
  const [mentorOpen, setMentorOpen] = useState(false)

  const closeMentor = () => {
    setMentorOpen(false)
  }

  const openMentor = (m) => {
    setMentor(m)
    setMentorOpen(true)
  }

  const content = (
    <main>
      <section>
        <HeroSnip hero={info} />
      </section>

      <section>
        <div className='max-w-7xl mx-auto py-28 lg:py-36 px-4 lg:px-8'>
          <div className='py-4'>
              <h3 className='text-3xl text-gray-800 dark:text-gray-200 font-semibold lg:text-4xl'>
                Brief <span className='text-blue-600'>summary</span>
              </h3>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed mt-3'>
                Our mentorship offers personalized and comprehensive guidance akin to a professional tutor|counsellor, but with even greater benefits. Contact one of our mentors if you need a coach and someone to keep you accountable.
              </p>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed mt-2'>
                This service is perfect for those seeking individualized support and continous guidance throughout the academic year, and those looking to get ahead in their career.
              </p>
          </div>
          <a
            className='cta-pr-btn px-4 py-2 text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900 rounded-full inline-flex items-center'
            href='/register'>
            Try it out
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 ml-1 duration-150' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
            </svg>
          </a>

          <style jsx>{`
            .cta-pr-btn:hover svg {
              transform: translateX(5px)
            }
          `}</style>
        </div>
      </section>

      <section>
        <div className='max-w-7xl mx-auto px-4 lg:px-8 py-28 lg:py-36'>
          <div className='flex flex-col lg:flex-row'>
            <div className='lg:max-w-xl pr-16 mx-auto mb-10'>
              <h5 className='mb-6 text-3xl lg:text-4xl font-extrabold leading-none text-gray-800 dark:text-gray-200'>
                Mentorship <span className='text-blue-600'>package description</span>
              </h5>
              <p className='mb-6 text-gray-600 dark:text-gray-400'>
                Overview of the individual components of our mentorship package. Get acquainted with them to learn the limits of what our mentorship service entails
              </p>
              <div className='flex items-center'>
                <a
                  href='/register'
                  type='submit'
                  className='inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none'
                >
                  Get started
                </a>
                <a
                  href='#mentors'
                  aria-label=''
                  className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-500'
                >
                  Choose a mentor
                </a>
              </div>
            </div>
            <div className='grid gap-5 row-gap-5 sm:grid-cols-2'>
              {
                features.map((feat, idx) => (
                <div key={idx} className='max-w-md'>
                  <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 dark:bg-blue-900'>
                    <svg
                      className='w-12 h-12 text-blue-600 dark:text-blue-400'
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
                  <h6 className='mb-2 font-semibold leading-5'>{feat.title}</h6>
                  <p className='text-sm text-gray-700 dark:text-gray-300'>{feat.body}</p>
                </div> 
              ))}                        
            </div>
          </div>
        </div>
      </section>

      <section id='mentors'>
        <div className='max-w-7xl mx-auto px-4 lg:px-8 py-28 lg:py-36'>
          <div className='lg:max-w-2xl mb-10 md:mx-auto sm:text-center md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 dark:text-blue-100 uppercase rounded-full bg-blue-100 dark:bg-blue-900'>
                Meet our mentors
              </p>
            </div>
            <h2 className='mb-6 font-sans text-3xl font-bold leading-none tracking-tight lg:text-4xl'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-6 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='1d4040f3-9f3e-4ac7-b117-7d4009658ced'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span className='relative'>Get to know</span>
              </span>{' '}our outstanding{' '}
              <span className='text-blue-600'>mentorship team</span>
            </h2>
            <p className='text-base text-gray-700 dark:text-gray-300 md:text-lg'>
              As the popular saying goes 'If you want to go quicker, go alone. If you want to go farther,
              Get a Mentor!'.
            </p>
          </div>
          <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
            {
              mentors.map(m => (
                <button onClick={() => openMentor(m)}>
                  <div key={m.id}>
                    <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
                      <img
                        className='object-cover w-full h-56 md:h-64 xl:h-80'
                        src={m.image}
                        alt={m.name}
                      />
                      <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black dark:bg-white bg-opacity-70 dark:bg-opacity-30 opacity-0 hover:opacity-100'>
                        <p className='mb-1 text-lg font-bold text-gray-100 dark:text-gray-900'>{m.name}</p>
                        <p className='mb-4 text-xs text-gray-100 dark:text-gray-900'>{m.position}</p>
                        <p className='mb-4 text-xs tracking-wide text-gray-100 dark:text-gray-900'>{m.bio}</p>
                        <div className='flex items-center justify-center space-x-3'>
                          <a
                            href={'https:twitter.com/' + m.twitter}
                            className='text-white transition-colors duration-300 hover:text-blue-300'
                          >
                            <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                              <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
                            </svg>
                          </a>
                          <a
                            href={'https:facebook.com/' + m.facebook}
                            className='text-white transition-colors duration-300 hover:text-blue-700'
                          >
                            <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                              <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
            ))}        
          </div>
        </div>

        <ShowMentor mentor={mentor} open={mentorOpen} close={closeMentor} />
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Mentorship