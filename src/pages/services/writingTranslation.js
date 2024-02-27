import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const WritingTranslation = () => {
  const page = {
    title: 'Writing & Translation',
    desc: 'Get your words across - in any language.',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285644/Articles%20_%20Blog%20Posts.png', title: 'Article & Blog Posts', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285630/Translation.png', title: 'Translation', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285651/Ghostwriting.png', title: 'Ghost Writing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285643/Proofreading%20_%20Editing.png', title: 'Preoofreading & Editing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285646/Resume%20Writing.png', title: 'Resume Writing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285650/Website%20Content.png', title: 'Website Content', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285639/Product%20Descriptions.png', title: 'Product Description', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285629/Scriptwriting.png', title: 'Scriptwriting', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285638/Book%20Editing.png', title: 'Book Editing', link: '' },
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2c84ceda4abc75e1cfb21aac999ab50b-1677674562823/Miscellaneous.jpg', title: 'Content Writing', subs: [
        { title: 'Article & Blog Post', link: '' },
        { title: 'Content strategy', link: '' },
        { title: 'Website Content', link: '' },
        { title: 'Sciptwriting ', link: '' },
        { title: 'Creative writing ', link: '' },
        { title: 'Podcast writing ', link: '' },
        { title: 'Speechwriting ', link: '' },
        { title: 'Research & Summaries ', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2c84ceda4abc75e1cfb21aac999ab50b-1677674562836/Content%20Writing%20_%20Editing.jpg', title: 'Editing & Critique', subs: [
        { title: 'Proofering Editing', link: '' },
        { title: 'Ai Content Editing', link: '' },
        { title: 'Writing Advice', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0cb2adcca1a3663c8f658f1b52e68fa9-1700563363243/Book%20Publishing.png', title: 'Book & eBook Publishing', subs: [
        { title: 'Book & eBook Writing', link: '' },
        { title: 'Book Editing', link: '' },
        { title: 'Book Reading', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2c84ceda4abc75e1cfb21aac999ab50b-1677674562836/Content%20Writing%20_%20Editing.jpg', title: 'Translation & Transcription', subs: [
        { title: 'Translation', link: '' },
        { title: 'Localization', link: '' },
        { title: 'Transciption', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2c84ceda4abc75e1cfb21aac999ab50b-1677674562832/Business%20Copy.jpg', title: 'Business & Marketing', subs: [
        { title: 'Brand Voice & Tone', link: '' },
        { title: 'Business Names & Slogan', link: '' },
        { title: 'Case Studies', link: '' },
        { title: 'White Papper', link: '' },
        { title: 'Product Description', link: '' },
        { title: 'Ad copy', link: '' },
        { title: 'Sales Copy', link: '' },
        { title: 'Email Copy', link: '' },
        { title: 'Social Media Copy', link: '' },
        { title: 'Press Releases', link: '' },
        { title: 'UX Writing', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2c84ceda4abc75e1cfb21aac999ab50b-1677674562831/Career%20Writing.jpg', title: 'Career Writing', subs: [
        { title: 'Resume Writing', link: '' },
        { title: 'Cover Latter', link: '' },
        { title: ' Linkden Profile', link: '' },
        { title: 'Job Descriptions', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2c84ceda4abc75e1cfb21aac999ab50b-1677674562842/Storytelling.jpg', title: 'Miscellaneous', subs: [
        { title: 'eLearning Content Development', link: '' },
        { title: 'Technical Writing', link: '' },
        { title: 'Grant Writing', link: '' },
        { title: 'Custom Writing Prompts', link: '' },
        { title: 'Others', link: '' }
      ]},
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_300/q_auto,f_auto/v1/attachments/generic_asset/asset/aaeee9bfb2a9ef57cff84fbcb8affba9-1593435384621/copywriting%20what%20is%20it.jpg', title: 'What is Copy writing & what does a copy writer do?', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/53589f7c4c0cb4793cd7fa48bd2951ff-1669733650423/publish%20a%20book%20featured%20image.jpeg', title: 'So, you have written a Book? Your Guide on How to self-publish your book', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/4404aed1cbd13a0a38c67aaae27106cc-1681327437339/1679516654802-contentmarketingtrendsforSMBsin2023.png', title: '10 Content Marketing Trend for 2023', link: '' }
    ],
    faqs: [
      { q: 'How should i choose a writer?', a: 'Great content is now a must for your business so finding the right writer is one of the keys to success. Clearly define your content goals before you even start looking for a freelancer, then choose the right category and research by reading reviews and looking at portfolios, skills, and experience before you shortlist a few writers. Contact the few sellers you have selected and directly ask them some questions to assess their level of knowledge and expertise.' },
      { q: 'How can content help my business?', a: 'Content can make or break your business so it’s important that you use it in all your channels - website, social media, emails, adverts, etc. - in a way that helps and promotes your business. A good content writer will not only craft compelling text but will be able to ask the right questions beforehand so they can be sure to create an article or advert or microcopy that sells your brand in the right way to the right people.' },
      { q: 'What is the the difference between copy writing & content writing', a: 'Storytelling is key for both copywriters and content writers, but it is used for different purposes. A copywriter aims to convert and sell a product or service with the story. Whereas a content writer is more about engagement and building commitment and it can take many detours before even remotely mentioning the brand or product. Copywriting commands the reader with a clear call to action, whereas content writers craft an intricate interaction through more prolonged conversation with the audience.' },
      { q: 'Why is content important?', a: 'Whether it’s website content, brand identity deck, sales materials, or any other content, it’s the most important tool you have to tell a compelling story. Even though images tell a thousand words, you still need to actually use the words to attract visitors and turn them into (loyal) customers. With so much choice of talent from all different backgrounds and industries, it’s never been easier to achieve thoroughly researched polished content that shines consistently and engages the right audience.' },
      { q: 'What languages do you surport for translation?', a: 'Find a professional certified and/or native translator in almost any language that you need here on Fiverr. Starting with Spanish, French, German, Mandarin, Tamil, Portuguese, Indonesian, and also not so widely spoken languages such as Icelandic or Maltese. Freelancers can take on small niche orders or bigger projects to be delivered in milestones and depending on their experience and competence level can translate from and to any language, with English most frequently the target/source language.' },
      { q: 'What type of writing services can i find on Hubx?', a: 'From blog posts, articles, UX/UX microcopy, and other website content to books, ebooks, technical writing, translations or sales copy, you can find the right freelancer here. A professional can adapt their style to your needs and offer services for your site, brand strategy or creative project, script or resume. Even if you’re confident in your own writing abilities you can get experienced editors to proofread and copy edit your content to ensure it’s fit for your purpose and audience.' },
    ],
    related: [
      { title: 'English To Japanese Translation', link: '' },
      { title: 'Ghost Writing', link: '' },
      { title: 'English To French Translation', link: '' },
      { title: 'Proofreading & Editing', link: '' },
      { title: 'Website Content', link: '' },
      { title: 'English To German Translation', link: '' },
      { title: 'English To Spanish Translation', link: '' },
      { title: 'Resume Writing', link: '' },
      { title: 'Scirptwriting', link: '' },
      { title: 'Translation Services', link: '' },
      { title: 'Ai Content Editing', link: '' },
      { title: 'Article & Blogposts', link: '' },
      { title: 'Book & eBook Writing', link: '' },
      { title: 'Creative Writing', link: '' },
      { title: 'Transcription Letter', link: '' },
      { title: 'Cover Letter', link: '' },
    ]
  }

  const content = (
    <main>
      <ServicePage page={page} />

      <section>
        <Newsletter />
      </section>
    </main>
  )
  return content
}

export default WritingTranslation