import Newsletter from '../slices/newsletter'
import InstantQuote from '../slices/quote'

import Academic from './academic'
import Accommodation from './accommodation'
import Business from './business'
import Career from './career'
import Conciarge from './conciarge'
import Consultation from './consultation'
import CVCheck from './cvCheck'
import Data from './data'
import DigitalMarketing from './digitalMarketing'
import GraphicsDesign from './graphicsDesign'
import Jobs from './jobs'
import Lifestyle from './lifestyle'
import Mentorship from './mentorship'
import MusicAudio from './musicAudio'
import Photography from './photography'
import ProgrammingTech from './programmingTech'
import Scholarships from './scholarships'
import Translocation from './translocation'
import VideoAnimation from './videoAnimation'
import WritingTranslation from './writingTranslation'

import { Airplane, Award, BalloonHeart, Briefcase, Camera, ClipboardData, CodeSlash, Film, JournalBookmark, MusicPlayer, Palette2, PersonWorkspace, Shop, TelephoneOutbound, Translate, Truck } from 'react-bootstrap-icons'

const Service = () => {
  const services = [
    { name: 'Academic', icon: <Award size={42} />, href: 'academic', desc: 'Theses, dissertations, statements of interest, research proposals etc' },
    { name: 'Career', icon: <PersonWorkspace size={42} />, href: 'career', desc: 'Job sourcing, interview practice and personal statement reviews' },
    { name: 'Mentorship', icon: <JournalBookmark size={42} />, href: 'mentorship', desc: 'Hands-on mentorship, support, academic and career guidance' },
    { name: 'Graphics & Design', icon: <Palette2 size={42} />, href: 'graphics-design', desc: 'Designs to make you stand out' },
    { name: 'Digital Marketing', icon: <Shop size={42} />, href: 'digital-marketing', desc: 'Build your brand. Grow your business' },
    { name: 'Writing & Translation', icon: <Translate size={42} />, href: 'writing-translation', desc: 'Get your words across - in any language' },
    { name: 'Video & Animation', icon: <Film size={42} />, href: 'video-animation', desc: 'Bring your story to life with creative videos' },
    { name: 'Music & Audio', icon: <MusicPlayer size={42} />, href: 'music-audio', desc: 'Don\'t miss a beat. Bring your sound to life' },
    { name: 'Programming & Tech', icon: <CodeSlash size={42} />, href: 'programming-tech', desc: 'You think. A programmer develops it' },
    { name: 'Business', icon: <Briefcase size={42} />, href: 'business', desc: 'Take your business to the next level' },
    { name: 'Lifestyle', icon: <BalloonHeart size={42} />, href: 'lifestyle', desc: 'Your life. Your style. Find your balance' },
    { name: 'Data', icon: <ClipboardData size={42} />, href: 'data', desc: 'Analyze and grow with data-powered insights' },
    { name: 'Photography', icon: <Camera size={42} />, href: 'photography', desc: 'Get the shot you need. Every time' },
    { name: 'Conciarge', icon: <Truck size={42} />, href: 'conciarge', desc: 'Handle bookings, personalized shopping and pickups' },
    { name: 'Translocation', icon: <Airplane size={42} />, href: 'translocation', desc: 'Get proven immigration and visa guidance' },
    { name: 'Consultation', icon: <TelephoneOutbound size={42} />, href: 'consultation', desc: 'Get that safety net with wise counsel. Book by the hour' }
  ]

  const content = (
    <main>
      <section id='services'>
        <div className='relative overflow-hidden'>
          <div aria-hidden='true' className='flex absolute -top-96 left-1/2 transform -translate-x-1/2'>
            <div className='bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-blue-900/50 dark:to-purple-900'></div>
            <div className='bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-blue-900/50 dark:via-blue-900/60 dark:to-blue-900/70'></div>
          </div>

          <div className='px-4 py-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-36'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-28 lg:py-36'>
              <div>
                <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>
                  List of services
                </p>
              </div>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto'>
                <span className='relative inline-block'>
                  <svg
                    viewBox='0 0 52 24'
                    fill='currentColor'
                    className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                  >
                    <defs>
                      <pattern
                        id='18302e52-9e2a-4c8e-9550-0cbb21b38e55'
                        x='0'
                        y='0'
                        width='.135'
                        height='.30'
                      >
                        <circle cx='1' cy='1' r='.7' />
                      </pattern>
                    </defs>
                    <rect
                      fill='url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)'
                      width='52'
                      height='24'
                    />
                  </svg>
                  <span className='relative'>You need it,</span>
                </span>{' '}
                We've got it
              </h2>
              <p className='text-base text-gray-700 dark:text-gray-300 md:text-lg'>
                Learn more about our service offerings. If you can't find the service type you need, do let us know.
                We do handle custom service requests. Sign up today and get started working with us.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y border-r border-b border-gray-200 dark:border-gray-800 divide-gray-200 dark:divide-gray-800'>
              {
                services.map((service, idx) => (
                  <a href={'/services/'+ service.href} key={idx} className={`group py-5 hover:bg-gray-200 h-[10rem] dark:hover:bg-gray-800 duration-300 ${idx === 0 ? 'border-t border-l border-gray-200 dark:border-gray-800':''}`}>
                    <div className='px-3 group-hover:text-blue-600 h-full'>
                      <div className='h-full'>
                        {service.icon}
                      </div>
                      <div className='relative'>
                        <div className='absolute bottom-0'>
                          <h3 className='text-lg group-hover:hidden'>{service.name}</h3>
                          <p className='text-base hidden group-hover:block animate-bounce'>{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section id='quote'>
        <div className='mt-[10rem] mb-[5rem] grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center px-8 py-16 mx-auto lg:max-w-7xl'>
          <aside className=''>
            <InstantQuote />
          </aside>
          <div className='relative ml-4'>
            <img className='w-full rounded-md' src='https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80' alt='Services' />
            <div className='absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0'></div>

            <div className='absolute bottom-0 left-0'>
              <svg className='w-2/3 ml-auto h-auto text-white dark:text-slate-900' width='630' height='451' viewBox='0 0 630 451' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect x='531' y='352' width='99' height='99' fill='currentColor'/>
                <rect x='140' y='352' width='106' height='99' fill='currentColor'/>
                <rect x='482' y='402' width='64' height='49' fill='currentColor'/>
                <rect x='433' y='402' width='63' height='49' fill='currentColor'/>
                <rect x='384' y='352' width='49' height='50' fill='currentColor'/>
                <rect x='531' y='328' width='50' height='50' fill='currentColor'/>
                <rect x='99' y='303' width='49' height='58' fill='currentColor'/>
                <rect x='99' y='352' width='49' height='50' fill='currentColor'/>
                <rect x='99' y='392' width='49' height='59' fill='currentColor'/>
                <rect x='44' y='402' width='66' height='49' fill='currentColor'/>
                <rect x='234' y='402' width='62' height='49' fill='currentColor'/>
                <rect x='334' y='303' width='50' height='49' fill='currentColor'/>
                <rect x='581' width='49' height='49' fill='currentColor'/>
                <rect x='581' width='49' height='64' fill='currentColor'/>
                <rect x='482' y='123' width='49' height='49' fill='currentColor'/>
                <rect x='507' y='124' width='49' height='24' fill='currentColor'/>
                <rect x='531' y='49' width='99' height='99' fill='currentColor'/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl my-[8rem]'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100'>
                How it works
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='84d09fa9-a544-44bd-88b2-08fdf4cddd38'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span className='relative'>See</span>
              </span>{' '}
              the step-by-step approach to get started
            </h2>
            <p className='text-base text-gray-700 dark:text-gray-300 md:text-lg'>
              Here's a brief overview of how our project delivery pipeline works.
              Familiarize yourself with it by trying it out today.
            </p>
          </div>
          <div className='grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3'>
            <div className='p-5 duration-300 transform border-2 border-dashed rounded-md shadow-sm border-blue-100 dark:border-blue-900 hover:-translate-y-2'>
              <div className='flex items-center mb-2'>
                <p className='flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white dark:text-black rounded-full bg-blue-400'>
                  1
                </p>
                <p className='text-lg font-bold leading-5'>Get quote and Sign up</p>
              </div>
              <p className='text-sm'>
                Select your service, delivery date and upload your document to get your word count or you can input it manually. Click "Get a quote" to get our budget estimate of your project. You can add the project to your cart adding write additional comments or attach supporting documentts then proceed to checkout if already signed in or register if not.
              </p>
            </div>
            <div className='p-5 duration-300 transform border-2 border-dashed rounded-md shadow-sm border-blue-200 dark:border-blue-800 hover:-translate-y-2'>
              <div className='flex items-center mb-2'>
                <p className='flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white dark:text-black rounded-full bg-blue-400'>
                  2
                </p>
                <p className='text-lg font-bold leading-5'>Initiate a new project</p>
              </div>
              <p className='text-sm'>
                Once your purchase is made, our AI will automatically match your project to an available agent, who will receive and immediately start on your document. We use Word Track Changes to keep track on the edits we make on your project.
              </p>
            </div>
            <div className='relative p-5 duration-300 transform border-2 rounded-md shadow-sm border-blue-700 hover:-translate-y-2'>
              <div className='flex items-center mb-2'>
                <p className='flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white dark:text-black rounded-full bg-blue-400'>
                  3
                </p>
                <p className='text-lg font-bold leading-5'>Get your project delivered</p>
              </div>
              <p className='text-sm'>
                You'll receive your project within the timeframe you selected while making your quote. Once received, you can request for revisions to be made for a premium, till you're 99% satisfied with the final result. We accept all major credit cards, PayPal, Stripe or Bank transfers.
              </p>
              <p className='absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-blue-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10'>
                <svg
                  className='text-white dark:text-black w-7'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <polyline
                    fill='none'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit='10'
                    points='6,12 10,16 18,8'
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-[85rem] px-8 py-16 lg:px-20 lg:py-24 mx-auto'>
          <div className='aspect-w-16 aspect-h-7'>
            <img className='w-full object-cover rounded-xl h-[30rem] lg:h-[50rem] lg:max-w-7xl' src='https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='' />
          </div>

          <div className='mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12'>
            <div className='lg:col-span-1'>
              <h2 className='font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200'>
                We tackle the challenges students and professionals face
              </h2>
              <p className='mt-2 md:mt-4 text-gray-500'>
                Besides working with students and professionals as a partners for servicing, we have built abundant catalog of resources for common pain points that we have encountered in various services and projects.
              </p>
            </div>

            <div className='lg:col-span-2'>
              <div className='grid sm:grid-cols-2 gap-8 md:gap-12'>
                <div className='flex gap-x-5'>
                  <svg className='flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                    <path d='M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z'/>
                    <path d='M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z'/>
                  </svg>
                  <div className='grow'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                      Creative minds
                    </h3>
                    <p className='mt-1 text-gray-600 dark:text-gray-400'>
                      We choose our teams carefully. Our people are the secret to great work.
                    </p>
                  </div>
                </div>
                
                <div className='flex gap-x-5'>
                  <svg className='flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                    <path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/>
                  </svg>
                  <div className='grow'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                      Simple and affordable
                    </h3>
                    <p className='mt-1 text-gray-600 dark:text-gray-400'>
                      From accomodation booking to jobs and scholarship hunting, there's pretty much nothing you can't secure with HubX.
                    </p>
                  </div>
                </div>
                
                <div className='flex gap-x-5'>
                  <svg className='flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                    <path d='M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z'/>
                    <path d='M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z'/>
                  </svg>
                  <div className='grow'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                      Industry-leading consultation
                    </h3>
                    <p className='mt-1 text-gray-600 dark:text-gray-400'>
                      Our consultation and extensive Client support system contain everything an individual needs to build a custom service.
                    </p>
                  </div>
                </div>
                
                <div className='flex gap-x-5'>
                  <svg className='flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z'/>
                  </svg>
                  <div className='grow'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                      Building for people
                    </h3>
                    <p className='mt-1 text-gray-600 dark:text-gray-400'>
                      We actively pursue the right balance between functionality and efficiency, creating delightful experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:py-20'>
          <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <div className='mx-auto max-w-2xl mb-8 lg:mb-14 text-center'>
              <h2 className='text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200'>
                Explore tools
              </h2>
              <p className='mt-3 text-gray-800 dark:text-gray-200'>
                The powerful and flexible agency for all kinds of students and professionals.
              </p>
            </div>
            
            <div className='mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8'>
              <div className='col-span-6 sm:col-span-4 text-center'>
                <svg className='mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'/>
                  <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/>
                </svg>
                <div className='mt-2 sm:mt-6'>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Responsive
                  </h3>
                </div>
              </div>
              
              <div className='col-span-6 sm:col-span-4 text-center'>
                <svg className='mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z'/>
                  <path d='M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z'/>
                  <path d='M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z'/>
                </svg>
                <div className='mt-2 sm:mt-6'>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Customizable
                  </h3>
                </div>
              </div>
              
              <div className='col-span-6 col-start-4 sm:col-span-4 text-center'>
                <svg className='mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z'/>
                  <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/>
                </svg>
                <div className='mt-2 sm:mt-6'>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    24/7 Support
                  </h3>
                </div>
              </div>
            </div>
            
            <div className='mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8'>
              <div className='hidden md:block col-span-4 md:col-span-3'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80' alt='' />
              </div>
              <div className='col-span-4 md:col-span-3'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80' alt='' />
              </div>
              <div className='col-span-4 md:col-span-3'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80' alt='' />
              </div>
              <div className='col-span-4 md:col-span-3'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80' alt='' />
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
  return content
}

export {
  Academic, Accommodation, Business, Career, Conciarge, Consultation, CVCheck, GraphicsDesign, Data, DigitalMarketing, Jobs, Lifestyle, Scholarships, Mentorship, Photography, ProgrammingTech, MusicAudio, Service, Translocation, VideoAnimation, WritingTranslation
}
