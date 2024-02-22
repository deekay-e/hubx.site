import { useState } from 'react'
import { ArrowRight, ChevronDown, PlayCircle } from 'react-bootstrap-icons'

const FaqsCard = ({ title, children, isOpen, onShow }) => {
  return (
    <div>
      <button
        type='button'
        aria-label='Open faq'
        title='Open faq'
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={onShow}
      >
        <p className='text-lg font-medium'>{title}</p>
        <div className='flex items-center justify-center w-8 h-8'>
          <ChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} size={18} />
        </div>
      </button>
      {isOpen && (
        <div className='p-4 pt-0'>
          <div className='text-gray-700 dark:text-gray-300'>{children}</div>
        </div>
      )}
    </div>
  )
}

const ServicePage = ({ page }) => {
  const faqs = page.faqs
  const [activeIdx, setActiveIdx] = useState('0')

  const handleToggle = (i) => {
    if (activeIdx === i) return setActiveIdx('0')
    setActiveIdx(i)
  }

  const content = (
    <>
      {/* Hero */}
      <section>
        <div className='max-w-7xl px-4 lg:px-8 mt-36 mx-auto'>
          <div className='relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-sbe-light before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-sbe-dark'>
            <div className='mx-auto px-4 lg:px-8 p-10'>
              <div className='flex justify-center'>
                <a className='inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400 group' href='/services'>
                  Explore the Capital Services
                  <span className='flex items-center gap-x-1'>
                    <span className='border-l border-gray-200 text-blue-600 pl-2 dark:text-blue-500'>Explore</span>
                    <svg className='w-2.5 h-2.5 text-blue-600 group-hover:translate-x-1' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                      <path d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14' stroke='currentColor' stroke-width='2' stroke-linecap='round' />
                    </svg>
                  </span>
                </a>
              </div>

              <div className='mt-5 max-w-2xl text-center mx-auto'>
                <h1 className='block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
                  {page.title}
                </h1>
              </div>

              <div className='mt-5 max-w-3xl text-center mx-auto'>
                <p className='text-lg text-gray-600 dark:text-gray-400'>{page.desc}</p>
              </div>

              <div className='mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center'>
                <a className='inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800' href='/about/process'>
                  <PlayCircle size={18} /> How HubX Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular */}
      {(page.popular && page.popular.length > 0) &&
        <section>
          <div className='flex flex-col flex-nowrap max-w-7xl mx-auto px-4 lg:px-8 py-12'>
            <div className='mb-4'>
              <h2 className='font-semibold text-2xl'>Most Popular in {page.title}</h2>
            </div>
            <div className='flex gap-x-4 overflow-x-scroll w-full hide-scroll-bar  py-6 px-6 '>
              {page.popular.map((pop, idx) => (
                <div key={idx} className=' rounded-md px-2 py-4 shadow-lg hover:text-blue-500 shadow-gray-400 mt-4 w-full'>
                  <a href={pop.link} className='flex flex-nowrap shrink overflow-visible gap-4 '>
                    <img className='w-8 h-8 rounded' src={pop.thumb} alt='' />
                    <span className='whitespace-nowrap mt-1'>{pop.title}</span>
                    <ArrowRight className='mt-2 w-32 -ml-10 -mr-10' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* Categories */}
      {(page.cats && page.cats.length > 0) &&
        <section>
          <div className='max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20'>
            <div>
              <h2 className='font-semibold text-2xl'>Explore {page.title}</h2>
            </div>
            <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
              {page.cats.map((cat, idx) => (
                <div key={idx}>
                  <div className='aspect-16/9'>
                    <img className='rounded-lg w-full h-full' src={cat.image} alt='' />
                  </div>
                  <div><h3 className='my-2 font-bold text-xl'>{cat.title}</h3></div>
                  <div>
                    {cat.subs.map((sub, id) => (
                      <div key={id} className=' group text-base'>
                        <a
                          href={sub.link}
                          className='flex px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 -mx-3'>
                          <span className='text-lg text-gray-500'>{sub.title}</span>
                          <span aria-hidden='true' className='hidden group-hover:flex my-auto ml-auto'>
                            <ArrowRight className='' size={16} />
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* Guides */}
      {(page.guides && page.guides.length > 0) &&
        <section>
          <div className='max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20'>
            <div className='flex'>
              <h2 className='font-semibold text-2xl'>{page.title} Related Guides</h2>
              <a className='ml-auto' href='/support/guides'>View all guides</a>
            </div>
            <div className='grid md:grid-cols-3 gap-x-8'>
              {page.guides.map((guide, idx) => (
                <div key={idx}>
                  <a href={guide.link}>
                    <div>
                      <img className='rounded-lg h-full w-full' src={guide.image} alt='' />
                    </div>
                    <p className='my-3 font-bold leading-4'>{guide.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* FAQs */}
      {(page.faqs && page.faqs.length > 0) &&
        <section>
          <div className='bg-blue-50 dark:bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:pt-20 lg:pb-28'>
              <div className='text-center pb-10'>
                <h2 className='font-semibold text-2xl'>{page.title} FAQs</h2>
              </div>
              <div>
                <div className='divide-y divide-blue-100 rounded-xl dark:divide-gray-800'>
                  {faqs.map((item, idx) => (
                    <FaqsCard key={idx} title={item.q} isOpen={activeIdx === idx} onShow={() => handleToggle(idx)}>
                      {Array.isArray(item.a) ?
                        item.a.map((ans, id) => (
                          <p key={id} className={id === 0 ? '' : 'mt-2'}>{ans}</p>
                        )) :
                        <p>{item.a}</p>
                      }
                    </FaqsCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {/* Related Services */}
      {(page.related && page.related.length > 0) &&
        <section>
          <div className='max-w-8xl items-center mx-auto px-4 lg:px-8 py-12 lg:py-20'>
            <div className='text-center'>
              <h2 className='font-semibold text-2xl'>Services Related To {page.title}</h2>
            </div>
            <div className='m-10'>
              <div className='flex flex-wrap gap-4 justify-center'>
                {page.related.map((rel, idx) => (
                  <a
                    key={idx}
                    href={rel.link}
                    className='rounded-full py-1.5 px-4 font-semibold text-sm text-gray-500 bg-gray-200 hover:underline text-center'
                  >{rel.title}</a>
                ))}
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
  return content
}

export default ServicePage