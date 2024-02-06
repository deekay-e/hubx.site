import React from 'react'
import Newsletter from '../slices/newsletter'

const Impact = () => {
  const impacts = [
    {title: 'Economic Opportunity', summary: 'Filler text is dummy text which has no meaning however looks very similar to real text.'},
    {title: 'Business Integrity', summary: 'Filler text is dummy text which has no meaning however looks very similar to real text.'},
    {title: 'Diversity, Inclusion & Belonging', summary: 'Filler text is dummy text which has no meaning however looks very similar to real text.'},
    {title: 'Workforce Innovation & Wellbeing', summary: 'Filler text is dummy text which has no meaning however looks very similar to real text.'},
    {title: 'Environmental Sustainability', summary: 'Filler text is dummy text which has no meaning however looks very similar to real text.'},
    {title: 'Supplier Engagement', summary: 'Filler text is dummy text which has no meaning however looks very similar to real text.'}
  ]
  const showImpact = () => {

  }
  const content = (
    <main>
      <section>
        <div className='mx-auto max-w-7xl px-4 md:px-8 my-12 sm:my-24 lg:my-36 flex flex-wrap justify-between'>
          <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
            <h1 className='mb-4 md:mb-8 text-4xl font-bold text-black sm:text-5xl md:text-6xl'>Our{' '}<br />Impact</h1>

            <p className='leading-relaxed text-gray-600 xl:text-lg mb-4'>“Our mission is to solve common problems encountered by students and professionals have better lives by lightening their workloads. It also attracts agents to HubX who want to accomplish extraordinary things. And it’s the ‘why’ that guides where and how we seek to have impact.”</p>
            <hr />
            <div>
              <h2 className='mt-2 text-lg font-medium'>Caleb Egbuta</h2>
              <p className='text-gray-500'>President & CEO, HUbX</p>
            </div>
          </div>

          <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
            <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
              <img src='https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550' loading='lazy' alt='' className='h-full w-full object-cover object-center' />
            </div>

            <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
              <img src='https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550' loading='lazy' alt='' className='h-full w-full object-cover object-center' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-white py-6 sm:py-8 lg:py-12 my-12 sm:my-24 lg:my-36'>
          <div className='mx-auto max-w-7xl px-4 md:px-8'>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {impacts.map((impact, idx) => (
                <div key={idx} className='flex flex-col rounded-lg border p-4 md:p-6'>
                  <h3 className='mb-2 text-lg font-semibold md:text-xl'>{impact.title}</h3>
                  <p className='mb-4 text-gray-500'>{impact.summary}</p>
                  <button onClick={showImpact} className='mt-auto font-bold text-blue-600 transition duration-100 hover:text-gray-600 active:text-blue-700'>Learn more</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  )
  return content
}

export default Impact