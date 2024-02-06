import React from 'react'
import Newsletter from '../slices/newsletter'

const Trust = () => {
  const code = [
    {
      title: 'Respect and Courtesy:',
      para: [
        'Treat all users with respect and courtesy. Avoid engaging in personal attacks, harassment, or discriminatory behaviour based on race, gender, religion, sexual orientation, nationality, or any other protected characteristic.',
        'Use inclusive and appropriate language when communicating with others.',
        'Be open to diverse perspectives and opinions, even if they differ from your own.'
      ]
    },
    {
      title: 'Professionalism:',
      para: [
        'Maintain a professional and constructive tone in all interactions. Refrain from using offensive, vulgar, or inappropriate language.',
        'Focus on the educational nature of the website and refrain from engaging in unrelated discussions or activities.'
      ]
    },
    {
      title: 'Privacy and Confidentiality:',
      para: [
        'Respect the privacy and confidentiality of others. Do not share personal information or any identifying details without explicit permission.',
        'Do not share confidential or proprietary information obtained from consultations or discussions on the website.'
      ]
    },
    {
      title: 'Accuracy and Legality:',
      para: [
        'Provide accurate and reliable information to the best of your knowledge. If you are unsure about a topic, make it clear and avoid spreading misinformation.',
        'Do not engage in illegal activities or promote illegal behaviour.'
      ]
    },
    {
      title: 'No Spam or Advertising:',
      para: [
        'Do not engage in spamming, including unsolicited advertisements, promotional content, or repetitive messages.',
        'Refrain from sharing links or directing users to external websites without prior approval.'
      ]
    },
    {
      title: 'ntellectual Property:',
      para: [
        'Respect intellectual property rights. Do not plagiarise or infringe upon copyright or trademark laws.',
        'When sharing information or resources, give proper credit to the original source.'
      ]
    },
    {
      title: 'Moderation and Reporting:',
      para: [
        'Report any violations of this Code of Conduct or any abusive behaviour to the website administrators.',
        'Follow the instructions of the moderators and administrators. They have the authority to take appropriate actions, including warning, suspension, or banning of users who violate the Code of Conduct.'
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
                  HubX: Code of conduct
                </p>

                <div className='mt-5 max-w-2xl'>
                  <h1 className='block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
                    Trust and Safety
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
        <div className='max-w-3xl mx-auto my-36 px-4 sm:px-6 lg:px-8'>
          <p className='my-7'>At HUBX, we strive to create a supportive and inclusive community where users can engage in meaningful discussions and seek valuable advice. To ensure a positive experience for everyone, we have established this Code of Conduct that outlines the expected behaviour and guidelines for all users. By using our website, you agree to abide by these rules.</p>

          <div>
            {code.map((c, idx) => (
              <div key={idx}>
                <h2 className='uppercase font-semibold mt-7'>{c.title}</h2>
                {c.para.map((p, i) => (<p key={i} className='mt-2'><span className='mx-3'>●</span>{p}</p>))}
              </div>
            ))}
          </div>

          <p className='my-7'>Remember, this Code of Conduct applies to all interactions on our educational consultation website, including public forums, private messages, and consultations. By maintaining a respectful and inclusive environment, we can foster a valuable community for learning and growth.</p>
        </div>
      </section>
      <Newsletter />
    </main>
  )
  return content
}

export default Trust