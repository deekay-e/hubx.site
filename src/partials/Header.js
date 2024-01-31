import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  NewspaperIcon,
  IdentificationIcon,
  LifebuoyIcon,
  ArrowLeftOnRectangleIcon,
  RectangleStackIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import MegaMenuLinks from './header/MegaMenuLinks'
import ThemeToggle from './common/ThemeToggle'
import { ArrowRight } from 'react-bootstrap-icons'

const navigation = {
  services: [
    {head: 'Academic', body: [
      'Get counseling for unviersity options tailored to you and help you gain admission (paid/scholarship) to any university of your choice.',
      {name: 'Overview', href: 'academic'},
      {name: 'Scholarships', href: 'scholarships'},
      {name: 'Admission Processing', href: 'admission'}
    ]},
    {head: 'Career', body: [
      'Get counseling on job opportunities based on your location, qualifications and skillsets, with our well-tested and effective help through your application process.',
      {name: 'Overview', href: 'career'},
      {name: 'Jobs', href: 'jobs'},
      {name: 'CV Checks', href: 'cv-check'}
    ]},
    {head: 'Mentorship', body: [
      'Get hands-on help and guidance to bootstrap and fast-track your academic and/or career goals. With our thoroughly vetted industry experts.',
      {name: 'Overview', href: 'Mentorship'}
    ]},
    {head: 'Freelance Gigs', body: [
      {name: 'Graphics & Design', href: 'graphics-design'},
      {name: 'Digital Marketing', href: 'digital-marketing'},
      {name: 'Writing & Translation', href: 'writing-translation'},
      {name: 'Video & Animation', href: 'video-animation'},
      {name: 'Music & Audio', href: 'music-audio'},
      {name: 'Programming & Tech', href: 'programming-tech'},
      {name: 'Business', href: 'business'},
      {name: 'Lifestyle', href: 'lifestyle'},
      {name: 'Data', href: 'data'},
      {name: 'Photography', href: 'photography'}
    ]}
  ],
  about: [
    { name: 'Our Intro', description: 'Fast-track your academic or career goals', href: '/about/us', icon: HomeModernIcon },
    { name: 'Our Team', description: 'Learn more about our outstanding team', href: '/company/team', icon: NewspaperIcon },
    { name: 'Our Impact', description: 'We love what we do and you will too', href: '/about/press', icon: NewspaperIcon },
    { name: 'Our Process', description: 'Get to know how we work', href: '/about/process', icon: LifebuoyIcon },
    { name: 'Reviews', description: 'Hear what people say about us', href: '/about/reviews', icon: NewspaperIcon },
    { name: 'Financials', description: 'Intending to invest with us, see our financial reports', href: '/about/finances', icon: NewspaperIcon },
    { name: 'Resources', description: 'Free and premium resources to solve your project needs', href: '/about/resources', icon: NewspaperIcon },
    { name: 'Work with us', description: 'Got what it takes to be a part of us?', href: '/company/jobs', icon: NewspaperIcon }
  ],
  insights: {
    categories: [
      {name: 'Scholarship', href: 'scholarship'},
      {name: 'Company', href: ''},
      {name: 'Translation', href: ''},
      {name: 'Academic', href: ''},
      {name: 'Career', href: ''}
    ],
    tags: [
      {name: 'School', href: ''},
      {name: 'Finance', href: ''},
      {name: 'Proposal', href: ''},
      {name: 'Resume', href: ''},
      {name: 'Copywriting', href: ''},
      {name: 'Jobs', href: ''},
      {name: 'View all', href: ''}
    ],
    recents: [
      {title: 'Fund acquisition', desc: 'Get the latest news on our funding efforts. The latest round have only been the best yet, with projected growth in multiple key areas.',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80', date: '', alt: 'funding', href: ''},
      {title: 'New podcast series', desc: 'Tune in to our all-new podcast series on ways to maximize the effects of the efforts you employ for a successful academic or career endeavour.',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80', date: '', alt: 'podcast', href: ''}
    ]
  },
  company: [
    { name: 'Careers', description: 'We are currently hiring', href: '/company/jobs', icon: IdentificationIcon },
  ],
  account: [
    { name: 'Login', description: 'If you\'re already a member', href: '/login', icon: ArrowLeftOnRectangleIcon },
    { name: 'Sign up', description: 'To explore our services, get started today', href: '/register', icon: RectangleStackIcon }
  ],
  callsToAction: [
    { name: 'Login', href: 'login', icon: '' },
    { name: 'Get started', href: 'register', icon: '' },
    { name: 'How it works', href: 'about/process', icon: PlayCircleIcon },
    { name: 'Contact support', href: 'contact', icon: PhoneIcon },
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const content = (
    <header className='absolute inset-x-0 top-0 z-50 bg-white lg:sticky dark:bg-black'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>HubX Consulting</span>
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-100'>
              <img width={16} height={16} src='/media/logos/hubx-logo.svg' alt='Logo' />
            </div>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <div className='hidden lg:flex'>
          <Popover.Group className='flex gap-x-12'>
            {/* <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6'>
                    Services <span>{open ? '●' : '•'}</span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute -left-4 top-full z-50 mt-5 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900'>
                      <div className='p-4'>
                        {navigation.srvs.map((item) => (
                          <div
                            key={item.name}
                            className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-800'
                          >
                            <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-300'>
                              <item.icon className='h-6 w-6 text-gray-600 group-hover:text-blue-600' aria-hidden='true' />
                            </div>
                            <div className='flex-auto'>
                              <a href={'/services/' + item.href} className='block font-semibold text-gray-900 dark:text-gray-300'>
                                {item.name}
                                <span className='absolute inset-0' />
                              </a>
                              <p className='mt-1 text-gray-600 dark:text-gray-400'>{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-800'>
                        {navigation.callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                          >
                            <item.icon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}
            <Popover className='flex'>
              {({ open }) => (
                <>
                  <div className='relative flex'>
                    <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6'>
                      Services <span>{open ? '●' : '•'}</span>
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Popover.Panel className='absolute inset-x-0 top-full text-sm'>
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true' />

                      <div className='relative bg-white dark:bg-gray-900'>
                        <div className='mx-auto max-w-7xl px-8'>
                          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 py-12'>
                            {navigation.services.map((service, idx) => (
                              <div key={idx} className='relative'>
                                <h3 className='font-medium text-xs uppercase text-gray-700 dark:text-gray-300'>
                                  {service.head}
                                </h3>
                                {service.body.map((item, i) => (
                                  <div key={i} className='py-2'>
                                    {typeof item === 'string' ? 
                                      <p className='text-xs text-gray-500'>{item}</p>: 
                                      <a href={'/services/' + item.href} className='font-medium hover:text-blue-600'>{item.name}</a>
                                    }
                                  </div>
                                ))}
                                {idx === 0 ?
                                  <div className='absolute bottom-2'>
                                    <a href='/services#services' className='font-medium hover:text-blue-600 flex items-center group'>
                                      View all services
                                      <span aria-hidden='true' className='my-auto ml-[.125rem]'>
                                        <ArrowRight className='transition ease-linear group-hover:translate-x-1' size={16} />
                                      </span>
                                    </a>
                                  </div>: ''
                                }
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className='flex'>
              {({ open }) => (
                <>
                  <div className='relative flex'>
                    <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6'>
                      About <span>{open ? '●' : '•'}</span>
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Popover.Panel className='absolute inset-x-0 top-full text-sm'>
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true' />

                      <div className='relative bg-white dark:bg-gray-900'>
                        <div className='mx-auto max-w-7xl px-8'>
                          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-12'>
                            {navigation.about.map((about, idx) => (
                              <a key={idx} href={about.href} className='p-6 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'>
                                <h3 className='text-xs uppercase text-gray-600 dark:text-gray-400'>{about.name}</h3>
                                <p className='mt-4 text-sm font-medium'>{about.description}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className='flex'>
              {({ open }) => (
                <>
                  <div className='relative flex'>
                    <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6'>
                      Insights <span>{open ? '●' : '•'}</span>
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Popover.Panel className='absolute inset-x-0 top-full text-sm'>
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true' />

                      <div className='relative bg-white dark:bg-gray-900'>
                        <div className='mx-auto max-w-7xl px-8'>
                          <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-12'>
                            <div className='col-start-2 grid grid-cols-2 gap-x-8'>
                              {navigation.insights.recents.map((item, idx) => (
                                <a key={idx} href={item.href} className='group relative text-base sm:text-sm'>
                                  <div className='aspect-16/9 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden group-hover:opacity-75'>
                                    <img
                                      src={item.image}
                                      alt={item.alt}
                                      className='w-full object-cover rounded-lg h-36'
                                    />
                                  </div>
                                  <h3 className='mt-4 block font-medium'>
                                    <span className='absolute inset-0 z-10' aria-hidden='true' />
                                    {item.title}
                                  </h3>
                                  <p className='text-gray-700 dark:text-gray-300'>{item.desc}</p>
                                  <p aria-hidden='true' className='mt-4 font-medium leading-6 flex group-hover:text-blue-600'>
                                    Click to learn more
                                    <span aria-hidden='true' className='my-auto ml-[.125rem]'>
                                      <ArrowRight className='transition ease-linear group-hover:translate-x-1' size={16} />
                                    </span>
                                  </p>
                                </a>
                              ))}
                            </div>
                            <div className='row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm'>
                              <div>
                                <p id='cat-heading' className='font-medium text-xs uppercase text-gray-700 dark:text-gray-300'>
                                  Categories
                                </p>
                                <ul
                                  aria-labelledby='cat-heading'
                                  className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                >
                                  {navigation.insights.categories.map((cat, idx) => (
                                    <MegaMenuLinks key={idx} item={cat} />
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p id='tag-heading' className='font-medium text-xs uppercase text-gray-700 dark:text-gray-300'>
                                  Tags
                                </p>
                                <ul
                                  aria-labelledby='tag-heading'
                                  className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                >
                                  {navigation.insights.tags.map((tag, idx) => (
                                    <MegaMenuLinks key={idx} item={tag} />
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href='/contact' className='text-sm font-semibold leading-6'>
              Contact us
            </a>
          </Popover.Group>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6'>
                  Account <span>{open ? '●' : '•'}</span>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute right-0 top-full z-50 mt-5 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900'>
                    <div className='p-4'>
                      {navigation.account.map((item) => (
                        <div
                          key={item.name}
                          className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-800'
                        >
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-300'>
                            <item.icon className='h-6 w-6 text-gray-600 group-hover:text-blue-600' aria-hidden='true' />
                          </div>
                          <div className='flex-auto'>
                            <a href={item.href} className='block font-semibold text-gray-900 dark:text-gray-300'>
                              {item.name}
                              <span className='absolute inset-0' />
                            </a>
                            <p className='mt-1 text-gray-600 dark:text-gray-400'>{item.description}</p>
                          </div>
                        </div>
                      ))}
                      <div className='p-4'>
                        <ThemeToggle />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </nav>

      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-[28rem] sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-2'>
              <span className='sr-only'>HubX Consulting</span>
              <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-100'>
                <img width={16} height={16} src='/media/logos/hubx-logo.svg' alt='Logo'/>
              </div>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md text-gray-700 dark:text-gray-300'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex items-center justify-between rounded-lg py-2 px-3 text-base w-full font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800'>
                        Services
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        <div className='grid grid-cols-2 gap-x-4 gap-y-8 px-3'>
                          {navigation.services.map((service, idx) => (
                            <div key={idx} className='relative'>
                              <h3 className='font-medium text-xs uppercase text-gray-700 dark:text-gray-300 py-2'>
                                {service.head}
                              </h3>
                              {service.body.map((item, i) => (
                                <div key={i}>
                                  {typeof item === 'string' ? 
                                    <p className='text-xs text-gray-500 py-2'>{item}</p>: 
                                    <Disclosure.Button
                                      key={item.name}
                                      as='a'
                                      href={'/services/' + item.href}
                                      className='flex rounded-lg py-2 px-3 -ml-3 duration-100 text-sm font-semibold leading-7  hover:bg-gray-50 dark:hover:bg-gray-800 group'
                                    >
                                      {item.name}
                                      <span aria-hidden='true' className='hidden group-hover:flex my-auto ml-auto'>
                                        <ArrowRight className='' size={16} />
                                      </span>
                                    </Disclosure.Button>
                                  }
                                </div>
                              ))}
                              {idx === 2 ?
                                <div className='absolute bottom-2'>
                                  <a href='/services#services' className='font-medium hover:text-blue-600 flex group'>
                                    View all services
                                    <span aria-hidden='true' className='my-auto ml-[.125rem]'>
                                      <ArrowRight className='transition ease-linear group-hover:translate-x-1' size={16} />
                                    </span>
                                  </a>
                                </div>: ''
                              }
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800'>
                        About
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {navigation.about.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800'>
                        Insights
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        <div className='col-start-2 grid grid-cols-2 gap-x-4 px-3'>
                          {navigation.insights.recents.map((item, idx) => (
                            <a href={item.href} key={idx} className='group relative text-base sm:text-sm'>
                              <div className='aspect-h-9 aspect-w-16 overflow-hidden rounded-lg bg-gray-100 dark:hover:bg-gray-800 group-hover:opacity-75'>
                                <img
                                  src={item.image}
                                  alt={item.alt}
                                  className='w-full object-cover rounded-lg h-36'
                                />
                              </div>
                              <h3 className='mt-4 mb-2 block font-medium'>
                                <span className='absolute inset-0 z-10' aria-hidden='true' />
                                {item.title}
                              </h3>
                              <p className='text-gray-700 dark:text-gray-300'>{item.desc}</p>
                              <p aria-hidden='true' className='mt-3 inline-flex items-center text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600'>
                                Learn more
                                <span aria-hidden='true' className='my-auto ml-[.125rem]'>
                                  <ArrowRight className='transition ease-linear group-hover:translate-x-1' size={16} />
                                </span>
                              </p>
                            </a>
                          ))}

                          <div>
                            <p id='cat-heading' className='font-medium text-xs uppercase text-gray-500 pt-6'>
                              Categories
                            </p>
                            <div
                              aria-labelledby='cat-heading'
                              className='mt-4 space-y-4 -ml-3'
                            >
                              {navigation.insights.categories.map(cat => (
                                <Disclosure.Button
                                  key={cat.name}
                                  as='a'
                                  href={cat.href}
                                  className='flex rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800 group'
                                >
                                  {cat.name}
                                  <span aria-hidden='true' className='hidden group-hover:flex my-auto ml-auto'>
                                    <ArrowRight className='' size={16} />
                                  </span>
                                </Disclosure.Button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p id='tag-heading' className='font-medium uppercase text-xs text-gray-500 pt-6'>
                              Tags
                            </p>
                            <div
                              aria-labelledby='tag-heading'
                              className='mt-4 space-y-4 -ml-3'
                            >
                              {navigation.insights.tags.map(tag => (
                                <Disclosure.Button
                                  key={tag.name}
                                  as='a'
                                  href={tag.href}
                                  className='flex rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800 group'
                                >
                                  {tag.name}
                                  <span aria-hidden='true' className='hidden group-hover:flex my-auto ml-auto'>
                                    <ArrowRight className='' size={16} />
                                  </span>
                                </Disclosure.Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              <Disclosure as='div' className='py-6'>
                { navigation.callsToAction.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={'/' + item.href}
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </Disclosure>

              <div className='py-6'>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
  return content
}

export default Header