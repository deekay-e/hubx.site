import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const DigitalMarketing = () => {
  const page = {
    title: 'Digital Marketing',
    desc: 'Build your brand. Grow your business.',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278710/SEO_2x.png', title: 'SEO', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278701/Social%20Media%20Marketing_2x.png', title: 'Social Media Marketing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278703/Video%20Marketing_2x.png', title: 'Video Marketing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278707/E-Commerce%20Marketing_2x.png', title: 'E-Commerce Marketing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278716/SEM_2x.png', title: 'SEM', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278711/Email%20Marketing_2x.png', title: 'E-mail Marketing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278721/Music%20Promotion_2x.png', title: 'Music Promotion', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278720/Social%20Media%20Advertising_2x.png', title: 'Paid Social Media', link: '' }
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/62964ed18102855e3c5063c1ae792181-1682592947057/Search.png', title: 'Search', subs: [
        { title: 'Search Engine Optimisation (SEO)', link: '' },
        { title: 'Search Engine Marketing (SEM)', link: '' },
        { title: 'Local SEO', link: '' },
        { title: 'E-commerce SEO', link: '' },
        { title: 'video SEO', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/62964ed18102855e3c5063c1ae792181-1682592947047/Social.png', title: 'Social', subs: [
        { title: 'Social Media Marketing', link: '' },
        { title: 'Paid Social Media', link: '' },
        { title: 'Influencer Marketing', link: '' },
        { title: 'Community Management', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/62964ed18102855e3c5063c1ae792181-1682592947055/Methods%20_%20Techniques.png', title: 'Methods & Techniques', subs: [
        { title: 'Video Marketing', link: '' },
        { title: 'E-Commerce Marketing', link: '' },
        { title: 'Email Marketing', link: '' },
        { title: 'Guest Posting', link: '' },
        { title: 'Affiliate Marketing', link: '' },
        { title: 'Display Advertising', link: '' },
        { title: 'Public Relations', link: '' },
        { title: 'Text Message Marketing', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/62964ed18102855e3c5063c1ae792181-1682592947064/Analytics%20_%20Strategy.png', title: 'Analytics & Strategy', subs: [
        { title: 'Marketing Strategy', link: '' },
        { title: 'Marketing Advice', link: '' },
        { title: 'Web Analytics', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/62964ed18102855e3c5063c1ae792181-1682592947064/Industry%20_%20Purpose-Specific.png', title: 'Industy and purpose-specific', subs: [
        { title: 'Music Promotion', link: '' },
        { title: 'Podcast Marketing', link: '' },
        { title: 'Books & e-Books Marketing', link: '' },
        { title: 'Mobile App Marketing', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b663d6eba3e009134b7553a5246f63e6-1682593226546/Misc.png', title: 'Miscellaneous', subs: [
        { title: 'Crowdfunding', link: '' },
        { title: 'others', link: '' }
      ]},
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_300/q_auto,f_auto/v1/attachments/generic_asset/asset/bfc0a98965c99e05058f92a2f86f5f35-1593437607696/business%20promotion-fiverr.jpg', title: '15 ways to promote your business online', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/6b23df99e3e3c626761ad7a91c5b941e-1613296428277/youtube%20channel-min.jpg', title: 'How to create a Youtube Channel a Step-by-step Guide', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/876d9015b15187101de4fb30ca753c40-1660552278962/26%20Marketing%20Ideas%20For%20Small%20Business.jpeg', title: '25 Marketing Advice For Small Business', link: '' }
    ],
    faqs: [
      { q: 'What is Digital Marketing?', a: 'By definition digital marketing (aka online marketing) promotes a client’s brand, products and services via the internet or other digital channels. A digital marketing campaign is typically delivered via an electronic device, such as computer, tablet, phone or other medium, and leverages one or more channels, such as social media, search engines, websites, email and others, as chosen by the digital marketer based on your goals, to raise brand awareness amongst potential and current customers' },
      { q: 'What Does a Digital Marketer do?', a: 'A digital marketer finds creative solutions to drive brand awareness and lead generation via free or paid digital channels, including email, search engines, social media, the company’s website and blog. The exact mix will depend on the client’s specific goals. The digital marketer focuses on relevant KPIs (key performance indicators) to measure performance and maximize revenue potential. Some companies have in-house digital marketers whilst others prefer to outsource, seeking different skills in agencies or freelancers, depending on their channel mix.' },
      { q: 'How Does Digital Marketing Works?', a: 'A well-planned and executed digital marketing campaign will target the right prospects for your products or services at the right time, which means they are more likely to buy or book what you offer. It’s more flexible, efficient, and cost-effective than many traditional marketing methods and it allows you to compete with the big guns in your industry even if you are only a small player. It also provides detailed analytics so you can measure everything from the number of visitors, to how long they spent on your page, whether or not they made a sale and so much more, including cost per click and ROI (return on investment)' },
      { q: 'Why is Digital Marketing Important?', a: 'Nowadays, it’s no longer a case of IF you have a digital presence but HOW good you are at making the most of your digital presence so you can be, and stay, competitive. That’s where digital marketing plays a critical role. Consumers are becoming increasingly sophisticated. They have higher expectations when it comes to the brands they engage with and the many ways they can be reached, such as video, email, search engines, social media.' },
      { q: 'What are the Different Type of Digital Marketing?', a: 'You’ll hear a lot of jargon and sometimes a lot of acronyms associated with digital marketing. The most common types of digital marketing include Social Media Management (SMM), Search Engine Optimization (SEO), Search Engine Marketing (SEM), Pay-per-Click (PPC) Marketing, Email Marketing, Website Design and Maintenance, Content Marketing and Sponsored Content, Affiliate Marketing, Native Advertising, Inbound Marketing, and Online PR. A good digital marketer will recommend the best mix for your business based on your specific goals.' },
      { q: 'What are the benefits of Digital MArketing?', a: 'Digital marketing is a must for every business. If you need customers (and who doesn’t?), you need to do online marketing. One of its key benefits is that it provides a cost-effective way to reach a huge audience while simultaneously targeting a specific group within that audience (reach and accuracy). It also allows you to personalize the delivery channel and message to communicate more quickly and effectively with your customers for short- and long-term relationship building.' },
    ],
    related: [
      { title: 'SEO Service', link: '' },
      { title: 'Marketing Strategy', link: '' },
      { title: 'Social Media Marketing', link: '' },
      { title: 'Affiliate Marketing', link: '' },
      { title: 'eCommerce Marketing', link: '' },
      { title: 'influencer Marketing', link: '' },
      { title: 'Music Promotion', link: '' },
      { title: 'Search Engine Marketing', link: '' },
      { title: 'Email Marketing', link: '' },
      { title: 'Video Marketing', link: '' },
      { title: 'Shoutouts & Promotions', link: '' },
      { title: 'Youtube Marketing', link: '' },
      { title: 'Social Content', link: '' },
      { title: 'Web Analytics', link: '' },
      { title: 'Spotify Music Promotion', link: '' },
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

export default DigitalMarketing