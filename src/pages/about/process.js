import React from 'react'
import Newsletter from '../slices/newsletter'

const Process = () => {
  const content = (
    <main>
      <section>
        <div className='max-w-6xl mx-auto px-4 py-10 lg:px-8 lg:py-14'>
          <div className='min-h-[35vh] bg-[url("https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80")] bg-center bg-cover bg-no-repeat relative rounded-xl md:min-h-[75vh]'>
            <div className='absolute bottom-0 left-0 right-0 max-w-xs text-center mx-auto p-6 md:left-auto md:text-left md:mx-0'>
              <div className='px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-gray-800'>
                <div className='hidden md:block'>
                  <h3 className='text-lg font-bold text-gray-800 sm:text-2xl dark:text-gray-200'>How does HubX work?</h3>
                  <p className='mt-2 text-gray-800 dark:text-gray-200'>Learn more about HubX.</p>
                </div>

                <div className='md:mt-16'>
                  <a className='flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-400' href='/'>
                    <svg className='w-4 h-auto' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'></path>
                      <path d='M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z'></path>
                    </svg>
                    Watch our story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section><Newsletter /></section>
    </main>
  )
  return content
}

export default Process