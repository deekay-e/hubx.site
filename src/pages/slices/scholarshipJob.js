import { React } from 'react'
import Button from './buttons/button'

const ScholarshipJob = ({title, head, desc, items}) => {
  return (
    <div>
      <div className='max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl'>
        <p className='inline-block px-3 py-px mb-10 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>{head}</p>
        <p className='text-base text-gray-700 md:text-lg dark:text-gray-300'>{desc}</p>
      </div>
      <div className='grid gap-8 row-gap-5 lg:grid-cols-3'>
        {items.map((item, idx) => (
          <div key={idx} className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl dark:border-gray-900'>
            <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-400 group-hover:scale-x-100' />
            <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-400 group-hover:scale-y-100' />
            <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-400 group-hover:scale-x-100' />
            <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-400 group-hover:scale-y-100' />
            <div className='relative p-5 bg-white h-full rounded-sm dark:bg-gray-800'>
              <div className='flex flex-col mb-2 lg:items-center lg:flex-row'>
                <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-blue-50 lg:mb-0 dark:text-gray-700'>
                  <item.image size={16} />
                </div>
                <h6 className='font-semibold leading-5'>{item.title}</h6>
              </div>
              <p className='mb-2 text-sm'>
                {item.desc}
              </p>
              <a
                href={item.href}
                aria-label=''
                className='inline-flex items-center text-sm font-semibold transition-colors duration-200 hover:text-blue-600'
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-10'>
        {/* <a
          href={'/services/' + title}
          className='rounded-lg  bg-blue-600 p-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-5s00 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
        >
          View all {title}
        </a> */}
        <Button linkinfo={{name:'View all'+" " + title, href:'/services/' + title}} />
      </div>
    </div>
  )
}

export default ScholarshipJob