const Banner = () => {
  const content = (
    <div className='max-w-7xl px-4 lg:px-8 py-28 mx-auto'>
      <div className='bg-gradient-to-r from-purple-400 to-blue-600 rounded-md'>
        <div className='px-4 py-4 sm:px-6 mx-auto'>
          <div className='grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2'>
            <div className='text-center md:text-left md:order-2 md:flex md:justify-end md:items-center'>
              <p className='mr-5 inline-block text-sm font-semibold text-white'>
                Ready to get started?
              </p>
              <a className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-white font-medium text-white hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm' href='/register'>
                Sign up
              </a>
            </div>

            <div className='flex items-center'>
              <a className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm' href='/'>
                <svg className='w-3 h-3' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z'/>
                </svg>
                Watch demo
              </a>
              <span className='inline-block border-r border-white/[.3] w-px h-5 mx-2'></span>
              <a className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm' href='/services'>
                Get quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return content
}

export default Banner