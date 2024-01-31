import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { React } from 'react'
import Button from './buttons/button'

const Newsletter = () => {
  const subscribe = (e) => {
    e.target.preventDefault()
  }

  const content = (
    <div className='py-12 sm:py-24 lg:36 relative'>
      <div className='relative z-10 max-w-screen-xl mx-auto px-8 justify-between items-center gap-12 md:flex'>
        <div className='flex-1 max-w-lg'>
          <h3 className='text-3xl font-medium'>
            Get our beautiful newsletter straight to your inbox.
          </h3>
        </div>
        <div className='flex-1 mt-6 md:mt-0'>
          <form onSubmit={subscribe} className='flex items-center gap-x-3 md:justify-end'>
            <div className='relative'>
              <EnvelopeIcon className='w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto' />
              <input
                name='email'
                type='email'
                required
                autoComplete='email'
                placeholder='Enter your email'
                className='w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-2 border focus:border-blue-600 shadow-sm rounded-lg'
              />
            </div>
            {/* <button className='block rounded-lg bg-blue-600 py-2.5 px-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
              Subscribe
            </button> */}
            <Button linkinfo={{name:'Subscribe'}}/>
          </form>
        </div>
      </div>
      <div className='absolute inset-0 w-full h-full' style={{ background: 'linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)' }}></div>
    </div>
  )
  return content
}

export default Newsletter