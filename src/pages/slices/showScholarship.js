import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const ShowScholarship = ({ award, close, open }) => {
  const summary = [
    { h: 'Award Value', p: award?.award?.value },
    { h: 'Award Purpose', p: award?.award?.purpose?.tags },
    { h: 'Award Duration', p: award?.award?.duration },
    { h: award?.eligibility?.who?.title, p: award?.eligibility?.who?.body },
    { h: award?.eligibility?.level?.title, p: award?.eligibility?.level?.body },
    { h: award?.eligibility?.mode?.title, p: award?.eligibility?.mode?.body },
    { h: award?.eligibility?.location?.title,
      p: award?.eligibility?.location?.body.length + ' nationalities',
      a: { url: '/', title: 'See full list' }
    },
    { h: 'Application deadline',
      p: <CalendarIcon width={18} />,
      a: { url: '/', title: 'See details below' }
    },
    { h: 'Application results date',
      p: <CalendarIcon width={18} />,
      a: { url: '/', title: 'See details below' }
    },
    { h: 'Award Year', p: award?.award?.year }
  ]
  const body = [
    { title: 'Award details', content: [
      { dt: 'Award value', dd: award?.award?.value },
      { dt: 'Award duration', dd: award?.award?.duration },
      { dt: 'Award purpose', dd: { t: award?.award?.purpose?.tags, b: award?.award?.purpose?.para }},
      { dt: 'No. of awards', dd: '80 (approximately)' },
      { dt: 'Award year', dd: award?.award?.year },
      { dt: 'Extendable duration',
        dd: { t: 'Yes', b: ['Gates Cambridge Scholarships provide a maintenance allowance of up to 4 years for PhD Scholars at the outset. Extensions are considered on a case by case basis in the event of intermission or illness if the scholar cannot complete their studies within the original tenure of their award.']}
      },
      { dt: 'Basis of award grant',
        dd: {
          t: award?.award?.basis?.tags,
          b: ['Candidates are assessed based on four criteria:', award?.award?.basis?.para, 'More information can be found at https://www.gatescambridge.org/apply/criteria/']
        }
      },
      { dt: 'Requirements for applicants to fulfill', dd: 'During the tenure of their award, students will be required to sign in with the Trust each quarter to receive their maintenance payment and they will be asked to provide an annual Gates Cambridge progress report.' },
      { dt: 'Only for advertising?', dd: 'No' }
    ]},
    { title: 'Eligibility', content: [
      { icn: <CheckCircleIcon width={18} color='blue' />,
        dt: award?.eligibility?.who?.title, dd: { t: award?.eligibility?.who?.body }},
      { icn: <CheckCircleIcon width={18} color='blue' />,
        dt: award?.eligibility?.level?.title, dd: {t: award?.eligibility?.level?.body }},
      { icn: <CheckCircleIcon width={18} color='blue' />,
        dt: award?.eligibility?.mode?.title, dd: {t: award?.eligibility?.mode?.body }},
      { icn: <CheckCircleIcon width={18} color='blue' />,
        dt: award?.eligibility?.location?.title,
        dd: {
          p: award?.eligibility?.location?.body.length + ' nationalities, ',
          a: { url: '/', title: 'See all list' }
        }
      },
      { icn: <CheckCircleIcon width={18} color='blue' />,
        dt: award?.eligibility?.course?.title,
        dd: { 
          p: award?.eligibility?.course?.body.length + ' courses, ',
          a: { url: '/', title: 'See all list' }
        }
      }
    ]},
    { title: 'Application process', content: [
      { dt: 'Opt in for funding through the Applicant Portal?', dd: {p: 'Yes', a: {url: '/', title: ''}} },
      { dt: 'Additional questions in the Applicant Portal?', dd: 'Yes' },
    ]},
    { title: 'Key dates', content: [
      { dt: 'Application deadline', ic: <CalendarIcon width={18} />,
        dd: [
          'US Round - US nationals living in the USA should apply by ' + award?.dates?.deadline?.local,
          'International Round - all other nationalities should apply by the funding deadline for their course (' + award?.dates?.deadline?.international + ')'
        ]
      },
      { dt: 'Application results date', ic: <CalendarIcon width={18} />,
        dd: [
          'US Round - successful candidates will be informed by ' + award?.dates?.results?.local,
          'International Round - successful candidates will be informed by ' + award?.dates?.results?.international
        ]
      }
    ]}
  ]

  const content = (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-60' onClose={close}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 align-middle shadow-xl transition-all m-4'>
                <div className='relative bg-blue-50 dark:bg-blue-900'>
                  <div className='absolute inset-x-0 bottom-0'>
                    <svg
                      viewBox='0 0 224 12'
                      fill='currentColor'
                      className='w-full -mb-1 text-white dark:text-gray-900'
                      preserveAspectRatio='none'
                    >
                      <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
                    </svg>
                  </div>
                  <div className='px-6 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
                      <Dialog.Title
                        as='h1'
                        className='text-3xl font-bold leading-6 py-6 md:py-12'
                      >
                        {award?.title}
                      </Dialog.Title>
                      <p className='mb-6 text-base text-gray-700 dark:text-gray-300 md:text-lg'>
                        <a href={award?.website} className='hover:text-blue-600 dark:hover:text-blue-300'>Visit website</a>
                        <span className='mx-7'>·</span>
                        <a href={award?.email} className='hover:text-blue-600 dark:hover:text-blue-300'>Contact us</a>
                      </p>
                    </div>
                  </div>
                  <div className='px-6 md:px-8'>
                    <div className='h-1/2' />
                    <div className='relative grid mx-auto overflow-hidden bg-blue-100 dark:bg-blue-800 rounded-md shadow max-w-6xl sm:grid-cols-3 gap-2 p-6'>
                      {summary.map((item, idx) => (
                        <div key={idx} className='py-3'>
                          <h4 className='text-sm text-gray-700 dark:text-gray-300 mb-2'>{item.h}</h4>
                          {Array.isArray(item.p) ? 
                            item.p.map((p, i) => (
                              <p key={i} className='font-medium inline-flex'>
                                <span className='mr-2 my-auto'>{p}</span>
                              </p>
                            )) :
                            <p className='font-medium flex'>
                              <span className='mr-2 my-auto'>{item.p}</span>
                              <a href={item.a?.url} className='hover:text-blue-600'>{item.a?.title}</a>
                            </p>
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='max-w-6xl mx-auto px-6 md:px-8'>
                  <div className=''>
                    <Dialog.Description>
                      <h2 className='text-xl font-medium mt-10 mb-8'>About</h2>
                      {award?.about.map((p, i) => <p key={i} className='mb-2 text-gray-700 dark:text-gray-300'>{p}</p>)}
                    </Dialog.Description>
                  </div>
                  
                  <div className='mt-10'>
                    {body.map((item, idx) => (
                      <div key={idx} className='mt-10 xl:-mx-8 border-2 border-blue-100 dark:border-gray-800 rounded-md p-6'>
                        <h2 className='uppercase font-medium text-md'>{item?.title}</h2>
                        <dl className=''>
                          {item?.content.map((c, id) => (
                            <div key={id} className='sm:grid sm:grid-cols-3 mt-4'>
                              <dt className='sm:col-span-1 text-gray-500 dark:text-gray-300 text-sm font-normal'>
                                { c?.icn ? 
                                  <span className='flex'><i className='pr-2 mt-[2px]'>{c?.icn}</i> {c?.dt}</span> :
                                  <span>{c?.dt}</span> }
                              </dt>
                              { typeof c?.dd === 'string' ? 
                                <dd className='sm:col-span-2'><p>{c?.dd}</p></dd> : 
                                Array.isArray(c?.dd) ?
                                  <dd className='sm:col-span-2'>
                                    <div className='flex'>
                                      <p className='mt-[2px]'>{c?.ic}</p>
                                      <div className='ml-2'>
                                        {c?.dd?.map((d, i) => (
                                          <p key={i} className='mb-2'>{d}</p>
                                        ))}
                                      </div>
                                    </div>
                                  </dd> :
                                  <dd className='sm:col-span-2'>
                                    { c?.dd?.p ?
                                      <p className='mb-2'>{c?.dd?.p}<a href={c?.dd?.a?.url}>{c?.dd?.a?.title}</a></p> : ''
                                    }
                                    <div className='flex'>
                                      {Array.isArray(c?.dd?.t) ? c?.dd?.t.map((t, i) => (
                                        <p
                                          key={i}
                                          className='py-1.5 px-3 mr-2 bg-blue-200 dark:bg-blue-900 text-xs rounded font-medium text-blue-800 dark:text-blue-300'>
                                          {t}
                                        </p>
                                      )) :
                                        <p>{c?.dd?.t}</p>
                                      }
                                    </div>
                                    <div className='mt-2'>
                                      {Array.isArray(c?.dd?.b) ? c?.dd?.b.map((b, i) => (
                                        Array.isArray(b) ?
                                          b.map((l, id) => (
                                            <p key={id} className='mt-2 ml-4 text-sm'>
                                              {id+1}{'. '+ l}
                                            </p>
                                          )) :
                                          <p key={i} className='mt-2'>{b}</p>
                                      )) : ''
                                      }
                                    </div>
                                  </dd>
                              }
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='text-center mt-24 md:mt-36'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-300 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={close}
                  >
                    Got it, thanks!
                  </button>
                  <button className='ml-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-medium' type='button'>
                    Add to cart
                  </button>
                </div>
                <div className='max-w-4xl mx-auto my-9 p-6 md:p-8 text-center'>
                  <p className='text-xs text-gray-500'>
                    This scholarship award is given to provide an overview to our scholarship service options with the option to get the process handled by our agents for a premium. To learn more about what your project will entail, do reach out to us on any of the <a href='/contact'>options we've provided</a></p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
  return content
}

export default ShowScholarship