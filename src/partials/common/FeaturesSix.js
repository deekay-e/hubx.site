const FeaturesSix = ({icon, title, count, url}) => {
  const content = (
    <div className='relative p-px overflow-hidden transition duration-300 transform border dark:border-gray-900 rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
      <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100' />
      <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100' />
      <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100' />
      <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100' />
      <div className='relative p-5 bg-white dark:bg-black rounded-sm'>
        <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-blue-50 dark:bg-gray-900 lg:mb-0'>
          {icon}
        </div>
        <h6 className='font-semibold leading-5 mb-2'>{title}</h6>
        <p className='mb-2 text-sm'>
          {count} articles
        </p>
        <a
          href={url}
          aria-label=''
          className='inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-500 hover:text-blue-800'
        >
          See all articles
        </a>
      </div>
    </div>
  )
  return content
}

export default FeaturesSix