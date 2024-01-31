import Cookies from './cookies'
import Licensing from './licensing'
import Privacy from './privacy'
import Terms from './terms'
import DisputeResolution from './dispute'

const Legal = () => {
  const links = [
    { title: 'Terms', desc:'Terms and conditions of service.', link: 'terms', icon: '' },
    { title: 'Privacy', desc:'Privacy policy.', link: 'privacy', icon: '' },
    { title: 'Cookies', desc:'Cookie policy.', link: 'cookies', icon: '' },
    { title: 'Licensing', desc:'Software licensing agreement.', link: 'licensing', icon: '' },
    { title: 'Conflict resolution', desc:'Here\'s how you can report conflicts.', link: 'conflict-resolution', icon: '' },
    { title: '', desc:'', link: '', icon: '' }
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
                    Legal Information
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
        <div className='max-w-3xl mx-auto mt-20'>
          <p className='mt-2'>HUBX is a limited liability company based in the United Kingdom and is registered with the Companies House with Company Number: 14722644</p>
          <p className='mt-2'>
            Office Address:<br />71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
          </p>
          <p className='mt-2'>Tel:</p>
          <p className='mt-2'>Email: info@hubx.consulting<br />Website: www.hubx.consulting </p>
        </div>
      </section>

      <section>
        <div className='max-w-3xl mx-auto mb-20'>
          <h2 className='uppercase font-semibold mt-10 text-center'>Disclaimer</h2>
          <p className='mt-2'>HUBX maintains this website to provide exceptional educational and career support services. The website is always being updated and enhanced. As new content becomes available, it will be added. HUBX intends and strives to maintain this information as current and accurate as feasible. We will make every effort to fix any inaccuracies that are brought to our attention.</p>
          <p className='mt-2'>However, HUBX cannot and does not guarantee the accuracy, integrity, or timeliness of any material. HUBX accepts no liability or responsibility for any mistakes or omissions in the material of this site and expressly disclaims any duty of any kind for any damage incurred as a result of using the information on this site.</p>
          <p className='mt-2'>HUBX reserves the right to make changes to the information on this website at any time and without notice. Links to other websites or sources are given only for your convenience. HUBX accepts no responsibility for, and does not endorse, the content included in such websites.</p>
          <p className='mt-2'>Our objective is to limit the interruption caused by technological problems. We cannot, however, promise that our service will not be disrupted or otherwise impacted by technical issues. HUBX assumes no responsibility for any difficulties that may arise as a result of using this site or any connected web sites. This disclaimer is not intended to violate any obligations imposed by relevant national law, nor is it intended to exclude liability for issues that may not be excluded under that law.</p>
        </div>
      </section>
      
      <section>
        <div className='max-w-screen-xl mx-auto px-4 py-12 sm:px-6 sm:py-24 lg:px-8 lg:py-36'>
          <div
            className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'
          >
            <div
              className='mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right'
            >
              <h2 className='text-3xl font-bold sm:text-4xl'>View legal documents</h2>

              <p className='mt-4 text-gray-500'>
                Get a deep-dive into the various policies, agreements and binding contracts drafted by our legal team. Endeavor to read them to understand our stand with regards to our services offerings, and any disputes you might encounter while exploring them. We look forward to a productive and longlasting partnership with you.
              </p>

              <a
                href='/register'
                className='mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white dark:text-black transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                Get Started Today
              </a>
            </div>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
              { links.map((item, idx) => (
                <a
                  key={idx}
                  className='block rounded-xl border border-gray-100 dark:border-gray-900 p-4 shadow-sm hover:border-gray-200 dark:hover:border-gray-800 hover:ring-1 hover:ring-gray-200  dark:hover:ring-gray-800 focus:outline-none focus:ring'
                  href={'/legal/' + item.link}
                >
                  <span className='inline-block rounded-lg bg-gray-50 dark:bg-gray-900 p-3'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                      <path
                        d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                      ></path>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                      ></path>
                    </svg>
                  </span>
                  <h2 className='mt-2 font-bold'>{item.title}</h2>
                  <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500'>{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
  return content
}

export { Cookies, Legal, Licensing, Privacy, Terms, DisputeResolution }