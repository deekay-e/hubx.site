const ServicesSnip = ({ services }) => {
  const content = (
    <div className='bg-blue-100 dark:bg-blue-900'>
      <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0'>
          <svg
            viewBox='0 0 88 88'
            className='w-full max-w-screen-xl text-blue-200 dark:text-blue-800'
          >
            <circle fill='currentColor' cx='44' cy='44' r='15.5' />
            <circle
              fillOpacity='0.2'
              fill='currentColor'
              cx='44'
              cy='44'
              r='44'
            />
            <circle
              fillOpacity='0.2'
              fill='currentColor'
              cx='44'
              cy='44'
              r='37.5'
            />
            <circle
              fillOpacity='0.3'
              fill='currentColor'
              cx='44'
              cy='44'
              r='29.5'
            />
            <circle
              fillOpacity='0.3'
              fill='currentColor'
              cx='44'
              cy='44'
              r='22.5'
            />
          </svg>
        </div>
        <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((s, idx) => (
            <a key={idx} href={'/services/' + s.url}>
              <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white dark:bg-black rounded shadow-xl group hover:shadow-2xl'>
                <div className='p-5'>
                  <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue-50 dark:bg-blue-900'>
                    <svg
                      className='w-8 h-8 text-blue-600 dark:text-blue-400'
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
                  <p className='mb-2 font-bold'>{s.title}</p>
                  <p className='text-sm leading-5 text-gray-900'>{s.desc}</p>
                </div>
                <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
              </div>
            </a>
            
          ))}
        </div>
      </div>
    </div>
  )
  return content
}

export default ServicesSnip