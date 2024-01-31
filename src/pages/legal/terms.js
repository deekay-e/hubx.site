import React from 'react'
import Newsletter from '../slices/newsletter'

const Terms = () => {
  const terms = [
    {
      id: 'account', title: '1. Accounts',
      paragraphs: [
        'When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.'
      ]
    },
    {
      id: 'link', title: '2. Links to other websites',
      paragraphs: [
        'Our Service may contain links to third-party web sites or services that are not owned or controlled by HubX.',
        'HubX has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that HubX shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.',
        'We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.'
      ]
    },
    {
      id: 'terminate', title: '3. Termination',
      paragraphs: [
        'We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
        'All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.',
        'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
        'Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.',
        'All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.'
      ]
    },
    {
      id: 'law', title: '4. Governing law',
      paragraphs: [
        'These Terms shall be governed and construed in accordance with the laws of UK, without regard to its conflict of law provisions.',
        'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.'
      ]
    },
    {
      id: 'alter', title: '5. Changes',
      paragraphs: [
        'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
        'By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.'
      ]
    }
  ]
  const content = (
    <main>
      <section>
        <div className='relative overflow-hidden'>
          <div aria-hidden='true' className='flex absolute -top-96 left-1/2 transform -translate-x-1/2'>
            <div className='bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900'></div>
            <div className='bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70'></div>
          </div>

          <div className='relative z-10'>
            <div className='max-w-[85rem] mx-auto mt-[5rem] px-8 py-10 lg:mt-[10rem]'>
              <div className='max-w-2xl text-center mx-auto'>
                <p className='inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400'>
                  HubX: A vision for 2023
                </p>

                <div className='mt-5 max-w-2xl'>
                  <h1 className='block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
                    Terms of Service
                  </h1>
                </div>

                <div className='mt-5 max-w-3xl'>
                  <p className='text-lg text-gray-600 dark:text-gray-400'>Last updated: Monday 26th, June 2023.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='relative isolate overflow-hidden px-8 py-12 md:px-12 md:py-16 lg:overflow-visible lg:px-32 lg:py-36 mx-auto'>
          <div className='absolute inset-0 -z-10 overflow-hidden'>
            <svg
              className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-800  [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:[mask-image:radial-gradient(64rem_64rem_at_top,black,transparent)]'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                  width={200}
                  height={200}
                  x='50%'
                  y={-1}
                  patternUnits='userHubXOnUse'
                >
                  <path d='M100 200V.5M.5 .5H200' fill='none' />
                </pattern>
              </defs>
              <svg x='50%' y={-1} className='overflow-visible fill-gray-50 dark:fill-gray-900'>
                <path
                  d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                  strokeWidth={0}
                />
              </svg>
              <rect width='100%' height='100%' strokeWidth={0} fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)' />
            </svg>
          </div>
          
          <div className='p-6 sm:p-10 md:p-16 sm:flex sm:flex-wrap'>
            <div className='w-full hidden sm:block sm:w-1/4 md:w-1/5 lg:w-1/6 sm:pr-3 md:pr-4 lg:pr-8 order-3 sm:order-1'>
              <div className='sm:float-right sm:text-right leading-7 tracking-tight sm:sticky sm:top-4'>
                <div className='pb-3 hover:text-blue-600'><a href='#account'>Accounts</a></div>
                <div className='pb-3 hover:text-blue-600'><a href='#link'>External Links</a></div>
                <div className='pb-3 hover:text-blue-600'><a href='#terminate'>Termination</a></div>
                <div className='pb-3 hover:text-blue-600'><a href='#law'>Governing Law</a></div>
                <div className='pb-0 hover:text-blue-600'><a href='#alter'>Changes</a></div>
              </div>
            </div>
            
            <div className='w-full sm:w-3/4 md:w-4/5 lg:w-5/6 order-1 sm:order-2'>
              <div className='max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl'>
                <div className='text-gray-700 dark:text-gray-300'>
                  <div className='text-base leading-7 text-gray-700 dark:text-gray-300'>
                    <p>Thanks for using our products and services ('Services'). The Services are provided by HubX Ltd. ('HubX'), founded in March 2023 with UK company registration number 14722644.</p>
                    <p className='mt-6'>By using our Services, you are agreeing to these terms. Please read them carefully.</p>
                    <p className='mt-6'>Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.</p>
                  </div>
                  { terms.map((term, idx) => (
                    <div key={idx}>
                      <h3 id={term.id} className='mt-16 text-2xl font-bold tracking-tight'>
                        {term.title}
                      </h3>
                      {term.paragraphs.map((p, i) => <p key={i} className='mt-6'>{p}</p>)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Terms