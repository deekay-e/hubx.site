import React from 'react'
import Newsletter from '../slices/newsletter'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Cookies = () => {
  const cookies = [
    { title: 'What are Cookies?', para: [
      'Cookies are small text files that are placed on your computer or mobile device when you visit a website.  Cookies contain information that can later be read by a web server in the domain that issued the Cookie.  Owners of a website can use Cookies for a variety of reasons that can include enabling their websites to work (or work more efficiently), providing personalized content and advertising, and creating website analytics.',
      'Cookies are typically classified as either “session cookies” which are automatically deleted when you close your browser, or “persistent cookies” which will usually remain on your device until you delete them or they expire.  Cookies set by the website owner (in this case, HubX) are called "first party cookies".  Only HubX can access the first party cookies we set. Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and social sharing). The parties that set these third party cookies can recognize your device both when it visits the website in question and also when it visits other websites that have partnered with them.',
      'In addition to cookies, we may use other similar technologies like web beacons (sometimes called "tracking pixels" or "clear gifs") or local storage.  Web beacons are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Services or opened an e-mail that we have sent them.  This allows us, for example, to monitor the traffic patterns of users from one page within our Services to another, to deliver or communicate with cookies, to understand whether you have come to our Services from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns.  Local storage enables a website or application to store information locally on your device(s) in order to enable certain functionality in our Services.  Local storage may be used to improve your experience with our Services, for example, by enabling features, remembering your preferences, and speeding up site functionality.'
    ]},
    { title: 'Why does HubX use Cookies?', para: [
      'We use Cookies for several reasons. Some Cookies are required for technical reasons that are essential for our Services to operate and to provide user-requested functionality; we refer to these as "Strictly Necessary" Cookies. This is described in more detail below.',
      'The specific types of first and third party Cookies served through our Services and the purposes they perform are described in the table below:',
      [
        {
          type: 'Strictly Necessary Cookies',
          desc: 'Strictly Necessary Cookies are essential to provide you with services available through our Website and Services.  Because these Cookies are strictly necessary to deliver the Website and Services to you, they cannot be switched off in our systems.  You can set your browser to block or alert you about these Cookies, but some parts of the Website or Services will then not work.', 
          domain: ['www.hubx.consulting','.msgstore.www.hubx.consulting','.www.hubx.consulting','.hubx.site','.hubx.consulting','calendar.cron.com','cdn.transcend.io','sync.transcend.io','http-inputs-hubx.splunkcloud.com'],
          servers: ['HubX','Loggly','Statsig','Cloudflare','Customer.io','Transcend','Splunk']
        },
        {
          type: 'Functional Cookies:',
          desc: 'These cookies enable us to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly. These Cookies are not used in our mobile apps.', 
          domain: ['.hubx.consulting','.hubx.site'],
          servers: ['Intercom']
        },
        {
          type: 'Analytics Cookies:',
          desc: 'These Cookies allow us to count visits and traffic sources so we can measure and improve the performance and functionality of our site.  They help us know which pages are the most and least popular and see how visitors move around the site.  If you do not allow these Cookies we will not know when you have visited our site in order to monitor performance. These Cookies are not used in our mobile apps.', 
          domain: ['.hubx.consulting','www.hubx.consulting','.hubx.site'],
          servers: ['HubX','Amplitude','Mutiny','Segment']
        },
        {
          type: 'Marketing Cookies:',
          desc: ['These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.', 'Notion may use advertising cookies to assist us in attributing your creation of a Notion account with marketing or advertising campaigns you may have interacted with, for example, where a Notion partner provides an affiliate link that you click on to reach our Website.', 'These Cookies are not used in our mobile apps.'], 
          domain: ['.hubx.consulting'],
          servers: ['Clearbit','Facebook','Google','Marketo','Metadata.io','Madison Logic','LinkedIn','PartnerStack','Integrate','Branch.io','TikTok','Braze','Tatari','Cognism','Twitter','Magellan','Podsights','AdQuick']
        }
      ]
    ]},
    { title: 'How can you control Cookies?', para: [
      'You have the right to decide whether to accept or reject Cookies.  HubX provides settings for you to update your Cookie preferences in our Website and Services.  These settings can be found in the footer of our Website.  If you have a HubX account and are logged in to the Services, you can access your Cookie settings in the “Settings & Members” menu under the “My notifications & settings” section.',
      'For non-logged-in users, you can also control the use of cookies at the browser level, by setting your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website and Services, though your access to some functionality and areas of our Website and Services may be restricted.   As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser\'s help menu for more information.',
      'In addition, most advertising networks offer you a way to opt out of targeted advertising.  If you would like to find out more information on this, please visit the websites:  http://www.aboutads.info/choices/ or http://www.youronlinechoices.com.',
    ]},
    { title: 'How often will we update this Cookie Notice?', para: [
      'We may update this Cookie Notice from time to time in order to reflect, for example, changes to the Cookies we use or for other operational, legal or regulatory reasons.  Please therefore re-visit this Cookie Notice regularly to stay informed about our use of cookies and related technologies.',
      'The date at the bottom of this Cookie Notice indicates when it was last updated.'
    ]},
    { title: 'Where can you get further information?', para: [
      'If you have any questions about our use of Cookies, please email us at privacy@makehubx.com.'
    ]}
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
              <div className='max-w-2xl mx-auto'>
                <p className='inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400'>
                  HubX: A vision for 2023
                </p>

                <div className='mt-5 max-w-2xl'>
                  <h1 className='block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
                    Cookie Notice
                  </h1>
                </div>

                <div className='mt-5 max-w-3xl'>
                  <p className='text-lg text-gray-600 dark:text-gray-400'>Last updated: Monday 02, July 2023.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-2xl px-8 md:px-0 my-16 lg:my-32 mx-auto'>
          <div className='text-base leading-7 text-gray-700 dark:text-gray-300'>
            <p>
              This Cookie Notice explains how HubX Ltd. ("HubX," "we," "us," and "our") uses cookies, pixel tags, local storage, and other similar technologies (collectively referred to as “**Cookies**”) to recognize you when you visit our public website at [hubx.consulting](http://hubx.consulting/) (the “**Website**”), and HubX’s online software-as-a-service platform including any related APIs provided by HubX, together with all related mobile and desktop applications (collectively, “**Services**”).  It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            <p className='mt-2'>
              Please take a look at our [Privacy Policy](https://hubx.consulting/privacy) if you’d like more information about how HubX collects, uses, and shares your personal information.
            </p>
          </div>
          { cookies.map((cookie, idx) => (
            <div key={idx}>
              <h3 className='mt-6 text-2xl font-bold tracking-tight'>{cookie.title}</h3>
              { cookie.para.map((p, idx) => ( typeof p === 'string' ?
                <p key={idx} className='mt-2 text-gray-700 dark:text-gray-300'>{p}</p> :
                <dl className='border border-blue-100 dark:border-blue-900 rounded-md sm:p-6 mt-3'>
                  <div className='hidden font-bold sm:block pb-6 sm:grid sm:grid-cols-7 sm:gap-4'>
                    <dt className='text-sm leading-6 sm:col-span-1'>Types of Cookies</dt>
                    <dd className='mt-2 text-sm sm:col-span-6 sm:mt-0 sm:grid sm:grid-cols-6 sm:gap-4'>
                      <div className='sm:col-span-3 text-sm leading-6'>Description</div>
                      <div className='sm:col-span-2 text-sm leading-6'>Domain</div>
                      <div className='sm:col-span-1'>Who serves these Cookies</div>
                    </dd>
                  </div>
                  { p.map((item, i) => (
                    <div key={i} className={classNames(i % 2 === 0 ? 'bg-blue-100 dark:bg-blue-900' : '', 'sm:bg-transparent dark:sm:bg-transparent px-6 sm:px-0 sm:border-t border-blue-100 dark:border-blue-900 sm:grid sm:grid-cols-7 sm:gap-4 py-3')}>
                      <dt className='text-sm font-bold leading-6 sm:col-span-1'>{item.type}</dt>
                      <dd className='mt-2 text-sm sm:col-span-6 sm:mt-0 sm:grid sm:grid-cols-6 sm:gap-4'>
                        <div className='sm:col-span-3'>
                          {typeof item.desc === 'string' ? <p>{item.desc}</p> :
                            item.desc.map((p, n) => (<p key={n} className='mb-2'>{p}</p>))
                          }
                        </div>
                        <div className='sm:col-span-2'>
                          <span className='mt-2 block sm:hidden font-bold'>Domain:</span>
                          { item.domain.map((p, n) =>
                            <p key={n} className='inline-flex mr-4 sm:mr-0 sm:block mb-1 break-all'>{p}</p>
                          )}
                        </div>
                        <div className='sm:col-span-1'>
                        <span className='mt-2 block sm:hidden font-bold'>Servers:</span>
                          {item.servers.map((p, n) => <p key={n} className='inline-flex mr-4 sm:mr-0 sm:block mb-1'>{p}</p>)}
                        </div>
                      </dd>
                    </div>
                  ))}
                </dl>
              ))}
            </div>
          ))}
        </div>     
      </section>
      <section><Newsletter /></section>
    </main>
  )
  return content
}

export default Cookies