import { SITEMAP } from '../config/sitemap'

const Sitemap = () => {
  const sitemap = SITEMAP

  const content = (
    <div>
      <div className='flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row'>
        <div className='mb-5 lg:w-1/3 lg:mb-0 lg:mr-20'>
          <h2 className='relative mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Our</span>
            </span>{' '}
            sitemap
          </h2>
          <p className='mb-4 lg:mb-6'>
            Get instant access to important links across the site.
          </p>
          <a
            href='/sitemap'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-500'
          >
            Learn more
            <svg
              className='inline-block w-3 ml-2'
              fill='currentColor'
              viewBox='0 0 12 12'
            >
              <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
            </svg>
          </a>
        </div>
        <div className='flex-grow pt-1'>
          <div className='flex items-center mb-3'>
            <span className='font-bold tracking-wide'>
              Important links
            </span>
            <span className='ml-1'>
              <svg
                className='w-5 h-5 mt-px text-blue-600'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </span>
          </div>
          <div>
            <ul className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
              {sitemap.map((s, idx) => (
                <li key={idx} className='col-span-1'>
                  <a href={s.url} className='transition-colors duration-300 hover:text-blue-600'>{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          className='object-cover w-full h-56 sm:h-96'
          src='https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          alt=''
        />
        <div className='absolute inset-0 bg-gray-900 dark:bg-gray-100 bg-opacity-50' />
      </div>
    </div>
  )
  return content
}

export default Sitemap