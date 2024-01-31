import React from 'react'
import Newsletter from '../slices/newsletter'

const Inquiries = () => {
  const conflicts = [
    {
      id: 'contact',
      title: 'Contact us',
      para: [
        'At HubX we aim to provide the highest level of customer service. However, if you feel you have cause to complain please contact us so that we can put things right:',
        'By email: You can email our Customer Operations Team at complaints@hubx.consulting',
        'By post: You can write to our Customer Operations Team at HubX Customer Operations, Borough Yards, 13 Dirty Lane, London, SE1 9PA'
      ]
    },
    {
      id: 'info',
      title: 'What information do I need to provide when I make a complaint?',
      para: [
        'Our aim is to resolve your complaint as quickly as possible. To help us do this, please include the following:',
        ['Name of company', 'Full name of company representative', 'Phone number and best time to contact you', 'Account details – so we can locate the account you are complaining about', 'Information about your complaint', 'Any actions you wish us to take to resolve your complaint']
      ]
    },
    {
      id: 'handle',
      title: 'How will HubX handle my complaint?',
      para: [
        'Once we have received your complaint we will:',
        ['Contact you by the close of business the following working day to acknowledge receipt and confirm that we are looking into your concerns.', 'Provide you with a complaint reference number that you can quote should you need to contact us.']
      ]
    },
    {
      id: 'response',
      title: 'When can I expect a response to my complaint?',
      para: [
        'HubX aims to resolve a complaint within 3 business days following receipt of your complaint. If we don\'t manage to resolve the complaint within 3 business days we will:',
        ['Write to you providing an update and let you know when you can expect a full response.', 'Provide you with the name and contact details of the person dealing with your case'],
        'Once all the details of the complaint have been investigated, (we may contact you for further details or to discuss our final response) we will issue a written \'final response\' to your complaint.',
        'The Financial Conduct Authority (FCA) gives us a maximum number of days to issue a final response:',
        ['If your complaint relates to payment services or e-money (e.g. Direct Debit, Online Transactions) we aim to issue a final response within 15 business days after receiving your complaint.', 'If due to exceptional circumstances we are unable to issue a final response within 15 business days we will issue this within 35 business days, which is the maximum time allowed by the FCA.'],
        'If we need more than 15 days to resolve your complaint, we will contact you weekly to provide an update on the progress of our investigation.'
      ]
    },
    {
      id: 'unhappy',
      title: 'What if I’m not happy with the outcome of my complaint?',
      para: [
        'We’re sorry if you’re not happy with our response to your complaint. If you wish to take your complaint further then, depending on your eligibility, you can:',
        'A) Contact the Financial Ombudsman Service, which will consider a complaint if you are:',
        ['A consumer', 'A micro enterprise which has a group annual turnover, and/or balance sheet, of up to €2 million and fewer than 10 staff', 'A small business which has a group annual turnover of up to £6.5 million and fewer than 50 staff or a balance sheet total of less than £5 million', 'A guarantor that has provided a guarantee or security in respect of an obligation of a micro enterprise or small business', 'A charity which has an annual income of less than £6.5 million', 'A trustee of a trust which has a net asset value of less than £5 million'],
        'HubX is a member of The Financial Ombudsman Service which provides a free, independent service for resolving disputes between customers and financial services institutions. You\'ll need to contact them within 6 months of our final response letter – and they\'ll ask to see the letter as a summary of our investigation of your complaint.',
        'Contact details for the Financial Ombudsman Service are:',
        'By post: Financial Ombudsman Service, Exchange Tower, London, E14 9SR',
        'Free phone: 0800 023 4567', 'Low-cost phone: 0300 123 9123', 'Email: complaint.info@financial-ombudsman.org.uk', 'Website: www.financial-ombudsman.org.uk',
        'B) Contact the Centre for Effective Dispute Resolution Service and seek advice about an alternative way to resolve your dispute.', 'Contact details for the Centre for Effective Dispute Resolution are:',
        'By post: Consumer Complaints, 70 Fleet Street, London, EC4Y 1EU', 'By phone: 0207 520 3800', 'By email: applications@cedr.com'
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
                    How to make a complaint
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
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 sm:py-24 lg:py-36'>
          <div className='sm:flex sm:flex-wrap'>
            <div className='w-full hidden sm:block mt-16 sm:w-1/3 md:w-1/4 lg:w-1/5 sm:pr-3 md:pr-4 lg:pr-8 order-3 sm:order-1'>
              <div className='sm:float-right sm:text-right leading-7 tracking-tight sm:sticky sm:top-4'>
                {conflicts.map((c, i) => (
                  <div key={i} className='pb-3 hover:text-blue-600'><a href={'#'+ c.id}>{c.title}</a></div>
                ))}
              </div>
            </div>
            
            <div className='w-full sm:w-2/3 md:w-3/4 lg:w-4/5 order-1 sm:order-2'>
              <div>
                <div className='text-base leading-7 text-gray-700 dark:text-gray-300'>
                  {
                    conflicts.map((conflict, idx) => (
                    <div key={idx}>
                      <h3 id={conflict.id} className='mt-16 text-2xl font-bold tracking-tight'>
                        {conflict.title}
                      </h3>
                      {conflict.para.map((c, id) => (
                        Array.isArray(c) ? 
                        c.map((p, i) => <p key={i} className='mt-6'><span className='mr-4'>•</span>{p}</p>) :
                        <p key={id} className='mt-6'>{c}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Newsletter />
      </section>
    </main>
  )
  return content
}

export default Inquiries