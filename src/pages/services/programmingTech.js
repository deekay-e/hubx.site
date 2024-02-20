import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const ProgrammingTech = () => {
  const page = {
    title: 'Programming & Tech',
    desc: 'You think it. A programmer develops it.',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044812/Python%20Developers_2x.png', title: 'Python Developers', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/d10b2d17b529a4f9e4fcea0cc4036259-1627221464843/Html%20and%20Css.png', title: 'HTML & CSS Developers', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044826/JavaScript%20Developers_2x.png', title: 'Javascript Developers', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044816/WordPress%20Developers_2x.png', title: 'Wordpress Developers', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044812/Shopify%20Developers_2x.png', title: 'Shopify Developers', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044829/Wix%20Developers_2x.png', title: 'Wix Developers', link: '' },
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png', title: 'Websites', subs: [
        { title: 'Website DevelopmentNEW', link: '' },
        { title: 'Website Maintenance', link: '' },
        { title: 'WordPress', link: '' },
        { title: 'Shopify', link: '' },
        { title: 'Custom Websites', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/529ea44f10a2aff520b99859d285b968-1682409451031/Application%20Development.png', title: 'Application Development', subs: [
        { title: 'Web Applications', link: '' },
        { title: 'Desktop Applications', link: '' },
        { title: 'Game Development', link: '' },
        { title: 'Chatbot Development', link: '' },
        { title: 'Browser Extensions', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ef81b98de711dd7acf41673de41d9e68-1698847862069/Software%20Development.png', title: 'Software develpoment ', subs: [
        { title: 'Software Development', link: '' },
        { title: 'AI Development', link: '' },
        { title: 'APIs & Integrations', link: '' },
        { title: 'Scripting', link: '' },
        { title: 'Plugins Development', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2e10aef5cce6986a6b9cf898dd6ac29b-1698847839877/Mobile%20Apps.png', title: 'Mobile Development', subs: [
        { title: 'Mobile App Development', link: '' },
        { title: 'Cross-platform Apps', link: '' },
        { title: 'Android App Development', link: '' },
        { title: 'IOS App Development', link: '' },
        { title: 'Mobile App Maintenance', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b0cb91002a72133eba335482257f618c-1682409435227/Website%20Platforms.png', title: 'Website Platforms', subs: [
        { title: 'Wix', link: '' },
        { title: 'Webflow', link: '' },
        { title: 'GoDaddy', link: '' },
        { title: 'Squarespace', link: '' },
        { title: 'WooCommerce', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/9fb4f27f2fd14209a356f858759f2cf5-1682409462866/Support%20_%20Cybersecurity.png', title: 'Surpport & Cybersecurity', subs: [
        { title: 'Support & IT', link: '' },
        { title: 'DevOps & Cloud', link: '' },
        { title: 'Cybersecurity', link: '' },
        { title: 'Development for Streamers', link: '' },
        { title: 'Convert Files', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/a9a58d5d610faf4134f2f31a90773814-1682409478754/Miscellaneous.png', title: 'Miscellaneous', subs: [
        { title: 'Blockchain & Cryptocurrency', link: '' },
        { title: 'Electronics Engineering', link: '' },
        { title: 'QA & Review', link: '' },
        { title: 'NFT Development', link: '' },
        { title: 'User Testing', link: '' },
        { title: 'Online Coding Lessons', link: '' },
      ]}
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/7d630f2d01a18bfcaece87f6025383bf-1676462818929/Featured%20Banner%20%281%29%20%281%29.jpeg', title: 'How to build a wordpress website for your small business.', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg', title: 'How to find a we developer in 2024', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/f629b1d7ea75a51e7f2badb911c480fa-1665306742078/WEBSITE%20BUILDER.jpeg', title: '10 Best website Bulders for small business', link: '' }
    ],
    faqs: [
      { q: 'What is Web programming?', a: 'Web programming or development use code to focus on the website functionality and ensure it works and is easy to use. It involves markup, writing, network security and coding which is client and server side. The most popular web programming languages are HTML, XML, JavaScript, PHP, ASP.Net and Python.' },
      { q: 'How do I choose the right freelance programmer for my project?', a: 'With so many programming services, it’s a challenge to choose the right programmer. Formulate a clear brief, decide on a budget, deadlines and scope. Select a programmer based not only on their skills and experience but also on how well you might work and communicate.' },
      { q: 'Do I need to prepare something for my programmer?', a: 'Yes, good documentation and a clear brief are crucial for the success of getting the desired result for your project. Formulate your initial high level idea and brainstorm it until you have a clear vision. Next, turn your idea into detailed functionality requirements for the backend programming and detail your technical requirements (platform, devices etc.) Also add non-functional requirements e.g. performance, security, load and clearly specify the scope of the project.' },
      { q: 'What type of services can I find in Programming & Tech?', a: 'Starting with web development for client-side (frontend) and server-side (backend), the category also offers specialists in Wordpress and e-commerce development, mobile or desktop apps, support & cybersecurity, as well as user testing and QA.' },
      { q: 'How do I find good developers on HubX?', a: 'HubX offers a huge choice of developers, so refine your requirements to determine whether you need a full-stack developer - proficient at both backend (server-side) and frontend (client-side) or a more narrow specialist. Get quotes and discuss your needs with at least 3 developers for an informed decision.' },
      { q: 'Can I hire developers in less than 48 hours?', a: 'Yes, on HubX we have developers worldwide available 24/7. If you need urgent bug fixing, have a cyber security emergency or a server load issue, you can be sure that a professional on HubX is within reach. Publish a buyer request or make direct contact for best results.' }
    ],
    related: [
      { title: 'Fivem Script ', link: '' },
      { title: 'Convert Website to App', link: '' },
      { title: 'Custom App', link: '' },
      { title: 'Discord Server', link: '' },
      { title: 'Python Developer', link: '' },
      { title: 'PHP Programmer', link: '' },
      { title: 'Unity Developer', link: '' },
      { title: 'Discord Chatbot', link: '' },
      { title: 'Twitch Trivia Bot', link: '' },
      { title: 'Shopify Expert', link: '' },
      { title: 'Wix website builder', link: '' },
      { title: 'Squarespace Programmer', link: '' },
      { title: 'Roblox Scripter', link: '' },
      { title: 'Bloxburg Builder', link: '' },
      { title: 'Minecraft Builders', link: '' },
      { title: 'Wordpress Customization', link: '' },
      { title: 'Book Formatting', link: '' },
      { title: 'Custom Landing Page', link: '' },
      { title: 'Web Scraping', link: '' },
      { title: 'NFT Promotion', link: '' },
    ]
  }

  const content = (
    <main>
      <ServicePage page={page} />

      <section><Newsletter /></section>
    </main>
  )
  return content
}

export default ProgrammingTech