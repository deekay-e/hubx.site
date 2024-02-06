const HeroSnip = ({ hero }) => {
  const content = (
    <div className='py-36' style={{ background: 'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)' }}>
      <div className='max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
        <div className='max-w-xl space-y-3 md:mx-auto'>
          <h3 className='text-blue-600 dark:text-gray-50 font-semibold'>{hero.title}</h3>
          <p className='text-gray-800 dark:text-gray-200 text-3xl font-semibold sm:text-4xl'>{hero.tagline}</p>
          <p className='text-gray-500'>{hero.desc}</p>
        </div>
        <div className='mt-4'>
          <a href='/register' className='inline-block py-2 px-4 text-white dark:text-black font-medium bg-gray-800 dark:bg-gray-200 duration-150 hover:bg-gray-700 dark:hover:bg-gray-300 rounded-lg shadow-md hover:shadow-none'>
            Get started
          </a>
        </div>
      </div>
    </div>
  )
  return content
}

export default HeroSnip