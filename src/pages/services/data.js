import Newsletter from "../slices/newsletter"
import ServicePage from "../slices/servicePage"

const Data = () => {
  const page = {
    title: 'Data',
    desc: 'Analyze and grow with data-powered insights.',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333714007/Computer%20Vision.png', title: 'Generative Models', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333714000/Web%20Scraping.png', title: 'Web Scraping', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333714001/Formulas%20_%20Macros.png', title: 'Excel Help', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333713994/Business%20Analytics.png', title: 'Data Analyst', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333713997/Dashboards.png', title: 'Dashboard', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333713985/Surveys%20Analysis.png', title: 'Survay Analysis', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333714004/Databases.png', title: 'Database Design', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333713989/Text%20Analysis%20_%20NLP.png', title: 'Text Analysis & NPL', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e099d489c1f140e60bed23c68645aa07-1630333713985/Data%20Typing.png', title: 'Data Entry', link: '' }
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/78b3c9b48a8e6bfb72929657cf60cc38-1682409916266/Data%20Analysis.png', title: 'Data Science & ML', subs: [
        { title: 'Data Science & ML ', link: '' },
        { title: 'Machine Learning', link: '' },
        { title: 'Computer Vision', link: '' },
        { title: 'NLP', link: '' },
        { title: 'Generative Models', link: '' },
        { title: 'Deep Learning', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/efff4278e6ca602b52426c869ee93e7b-1682409929245/Data%20Management.png', title: 'Data Collection', subs: [
        { title: 'Data Collection', link: '' },
        { title: 'Data Entry', link: '' },
        { title: 'Data Scraping', link: '' },
        { title: 'Data Typing', link: '' },
        { title: 'Data Formatting', link: '' },
        { title: 'Data Cleaning', link: '' },
        { title: 'Data Enrichment', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5633067606a43f965d59bbb6e3847c16-1682409955586/Miscellaneous.png', title: 'Data Analysis', subs: [
        { title: 'Data Visualization', link: '' },
        { title: 'Data Annotation', link: '' },
        { title: 'Data Analytics', link: '' },
        { title: 'Dashboards', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4e84780b0a4acec16d15eea94ae8fc0c-1682409942074/Data%20Storage.png', title: 'Data Management', subs: [
        { title: 'Data Processing', link: '' },
        { title: 'Data Engineering', link: '' },
        { title: 'Databases', link: '' },
        { title: 'Data Governance & Protection', link: '' }
      ]}
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/de489cb22421aef893ae23f70d599567-1622646144088/Data%20science-min.jpg', title: 'What is data science?', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5b8960356ae63e5e0776e2f97962408f-1638182899333/databases-min.jpg', title: 'What is database?', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0d18fa7474aa6879fec69b5feb82b26d-1638375322579/data%20visualization-min.jpg', title: 'What is data visualization (and why it is important)', link: '' }
    ],
    faqs: [
      { q: 'Why is data important for my business?', a: "There are many reasons why data is important for your business, so let's jump right in. Data helps you understand and improve business processes and decision-making, refine operations, create new revenue streams, and ultimately impact your business's bottom line. Data helps effectively determine the cause of existing problems and is a crucial tool in budgeting, marketing, and bringing in more customers. It's also an essential engine for collecting valuable consumer database information, allowing for greater personalization and a deeper marketing understanding." },
      { q: "What insight can i get from my Business Data?", a: "Collecting, organizing, and analyzing data will allow your business to develop an in-depth understanding of your consumers, customers, competitors, and your specific industry. You'll be able to see how your customers respond to your messages and content, what and where they buy, their preferred consumption avenue (mobile, laptop, Android, Apple, etc.), if your customer leaves you for a competitor, and where they choose to shop (online marketplaces). Data also provides insights on your customer demographics such as age, gender, salary, location, etc. In short, the insights you receive from your business data are invaluable for increasing ROI and potential customers." },
      { q: "What are the most porpular data services?", a: "Analyzing, processing, research, and data entry are among the most popular data services and cover a wide range of services. Data engineering, visualization, and science are also standard services. Data analytic services cover everything from creating Google and Excel data-sheets, statistic data reports, and building BI, AI, and Big Data reports. Data processing services include data mining, automation, web scraping, formulations, and consultations. And hiring virtual assistants is common for solving research and data entry services, creating email lists and generate leads, and other administrative tasks required for data services." },
      { q: "What is data collecting Process?", a: "The data collection process of gathering and measuring information systematically usually covers six methodical steps. The first step is to identify any issues that require collecting data, and once they are identified, set goals and objectives. Next, a plan should be formulated for collecting the data - which data collection services you will use - looking at both the strengths and weaknesses of each service. Then it's time to collect or survey the data, analyze and interpret it, and lastly, act on the results. The data collection process can be quite lengthy or relatively simple, depending on the type of data you are gathering." },
      { q: "How Do i choose the right freelancer for my data projects?", a: "First and foremost, you should narrow down what type of data specialist you need for your project. Do you need a data analyst or a data entry specialist? Filter down your choices by selecting the correct category for your service. Once you've narrowed down your specific required service, look for a seller with extensive experience who possesses the particular skills you need. It's essential to review what type of past work they have done to ensure that the seller can address your specific challenges. Sellers work with a variety of technologies, so ask upfront what he or she works with. And go with someone who has excellent reviews from past clientele." },
      { q: "What requirements do i need to give?", a: "Each project (and seller) will have unique requirements in order to complete a successful job. A data processing project will have a completely different set of requirements compared to a data engineering one. And because each project is unique, the best way to find out what you need to give is by directly asking the seller what they need. Your seller will send you a list of requirements (both necessary and optional) for you to hand over when you order from them. And you don't need to worry about security - all transactions and data services are completely secure and confidential." },
    ],
    related: [
      { title: 'Data Analytics Consulting', link: '' },
      { title: 'Data Visualization Reports', link: '' },
      { title: 'Data Visualization Consulting', link: '' },
      { title: 'Database Administration', link: '' },
      { title: 'Time Series Analysis', link: '' },
      { title: 'Cloud Based Solutions', link: '' },
      { title: 'Data Processing Automations', link: '' },
      { title: 'Data Processing Consultation', link: '' },
      { title: 'Data Science Consulting', link: '' },
      { title: 'Data Science Ranking', link: '' },
      { title: 'Database Queries', link: '' },
      { title: 'Database Consulting', link: '' },
      { title: 'Data Visualization Graphs', link: '' },
      { title: 'Geographic Information Systems', link: '' },
      { title: 'Oracle Apex', link: '' },
      { title: 'Machine Learning', link: '' }
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

export default Data