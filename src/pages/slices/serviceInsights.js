const ServiceInsights = ({ title, insights }) => {
  const content = (
    <div>
      <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
        <h2 className='max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none md:mb-6 group'>
          <span className='inline-block mb-1 sm:mb-4'>
            View insights from our pool{' '}
            <br className='hidden md:block' />
            related to {title} services.
          </span>
          <div className='h-1 ml-auto duration-300 origin-left transform bg-blue-600 scale-x-30 group-hover:scale-x-100' />
        </h2>
        <p className='text-gray-700 dark:text-gray-300 lg:text-sm lg:max-w-md'>
          They say 'Knowledge is power'. So from our insights, we intend to arm you with the ability to glean free yet important elements, to solve the challenges you encounter in your career adventure. With this and our service offerings you'll be well-positioned to succeed, if not now then most definitely in the near-future.
        </p>
      </div>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {insights.map((i) => (
          <a href='/' aria-label='View Item' key={i.id}>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={i.image}
                alt={i.title}
              />
              <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black dark:bg-white bg-opacity-75 dark:bg-opacity-25 opacity-0 hover:opacity-100'>
                <p className='mb-4 text-lg font-bold text-gray-100 dark:text-gray-900'>{i.title}</p>
                <p className='text-sm tracking-wide text-gray-300 dark:text-gray-700'>{i.summary}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className='text-center'>
        <a
          href='/blog/'
          aria-label=''
          className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-800'
        >
          See more
          <svg
            className='inline-block w-3 ml-2'
            fill='currentColor'
            viewBox='0 0 12 12'
          >
            <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
          </svg>
        </a>
      </div>
    </div>
  )
  return content
}

export default ServiceInsights