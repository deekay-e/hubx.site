import Newsletter from "../slices/newsletter"
import ServicePage from "../slices/servicePage"

const Business = () => {
  const page = {
    title: 'Business',
    desc: 'Take your business to the next level.',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720700/Frame%20691311530.png', title: 'Accounting & Bookkeeping', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720709/Frame%20691311670.png', title: 'E-Commerce Store Manager', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/01450128a7a217803cc1883e43cf26ec-1631621994546/sales.png', title: 'Lead Generation', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720691/Frame%20691311671.png', title: 'Patent Application', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720693/Frame%20691311667.png', title: 'CRM Management', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720698/Frame%20691311672.png', title: 'Business Plans', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720713/Frame%20691311668.png', title: 'Business Consulting', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720693/Frame%20691311667.png', title: 'Customer Care', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720691/Frame%20691311671.png', title: 'Legal Consulting', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720697/Frame%20691311666.png', title: 'Market Research', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720690/Frame%20691311673.png', title: 'Virtual Assistant', link: '' },
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2bca751b781125eb555ee167eff88342-1681975965018/Business%20Formation.jpg', title: 'Business Formation & Growth', subs: [
        { title: 'Business Registration', link: '' },
        { title: 'Business Plans', link: '' },
        { title: 'Pitch Decks', link: '' },
        { title: 'Startup Consulting', link: '' },
        { title: 'Market Research', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bf87a14bf35ace29a17f5ac9ab0e7ea5-1681980725479/General%20and%20Administrative.jpg', title: 'General & Adminitrative', subs: [
        { title: 'Virtual Assistant', link: '' },
        { title: 'E-Commerce Management', link: '' },
        { title: 'HR Consulting', link: '' },
        { title: 'Project Management', link: '' },
        { title: 'Supply Chain Management', link: '' },
        { title: 'Business Consulting', link: '' },
        { title: 'AI Consulting', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ec574f63dc07f376702350d511a7abbf-1681975924039/Legal%20Consulting%20.jpg', title: 'Legal Services', subs: [
        { title: 'Applications & Registrations', link: '' },
        { title: 'Legal Documents & Contracts', link: '' },
        { title: 'Legal Consulting', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4d90c9c52c897f1b5a3d5fbc98b754da-1681975944485/Financial%20Consulting.jpg', title: 'Accounting $ Finance', subs: [
        { title: 'Tax Consulting', link: '' },
        { title: 'Accounting & Bookkeeping', link: '' },
        { title: 'Financial Consulting', link: '' },
        { title: 'ERP Management', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/dd02355d217c9f37c30711ff346ed7a3-1681980707313/Sales%20_%20Customer%20Care.jpg', title: 'Sales & Customer Care', subs: [
        { title: 'Sales', link: '' },
        { title: 'Lead Generation', link: '' },
        { title: 'Call Center & Calling', link: '' },
        { title: 'Customer Care', link: '' },
        { title: 'CRM Management', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/9d63355f64ecd1c3bfaad6a8b4f4d6b2-1681980688495/Miscellaneous.jpg', title: 'Misselaneous', subs: [
        { title: 'Product Management', link: '' },
        { title: 'Fact Checking', link: '' },
        { title: 'Event Management', link: '' }
      ]},
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/ad34a3b0e09f34497bc5a2fa72348065-1594203657731/virtual%20assistant%20fiverr%20guide-min.jpg', title: 'What is a virtual assistant?', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg', title: '28 Side Hustle Ideas to Work from Home', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/6ad6a4921519f62fef7f74416af51a60-1675781724591/Delegation%20-%20time%20management.jpeg', title: 'How to Hire Freelancers for Your Business Using Delegation in 2023', link: '' }
    ],
    faqs: [
      { q: 'What are the core services a business needs?', a: 'Every business is a system with an external environment. A business manager has to both steer internal processes and respond to that external environment. Consequently, you need services that facilitate your performance as a manager or business owner, such as virtual assistants and business, financial, and HR consulting. Furthermore, your business interacts with a wide range of external parties: customers, business partners, competitors, and legal authorities. For business success, you need to get to know your competitors by conducting market research. When you have a proposal to make, you need an excellent business plan and presentation to convince your business partners and stakeholders. Supply chain management, sales services, and customer care can all help you to deliver a brilliant product and keep your customers satisfied. Last but not least, having a legal consultant on your side is a must to protect your business.' },
      { q: 'What business services do I need for my day-today business tasks?', a: 'First of all, your business needs to sell to generate revenue. Thus, you need sales services to help you acquire new customers. In addition, customer care services are critical for keeping existing clients loyal and convincing them to buy again. If you offer physical goods, you will probably also benefit from supply chain management services. For an online shop, you may want to consider e-commerce management to take care of any technical issues and marketing best practices. When your business grows, there are two major implications. First, you need someone to whom you can delegate daily routine management duties and assist with miscellaneous time-consuming tasks. You can hire project management and virtual assistant service providers who will work with you hand-in-hand to keep your business on the upright curve.' },
      { q: 'What business services do I need for long-term planning?', a: 'Every business needs a long-term strategy. It starts with market research that helps you to identify attractive niches. Already at this stage, but especially during the consequent planning phase, you should consider business consulting and financial consulting services. Moreover, once you have a strategy, you can hire business plan and business presentation service providers to turn your freshly backed strategy into a roadmap. You also need these services for good visualization of your business idea and its proof of concept when negotiating with your business investors. Optionally, you may need to hire legal services to create a legal framework for your business idea. HR consulting services will help you to articulate your personnel needs and form a robust recruitment strategy.' },
      { q: 'What is the difference between financial consulting and business consulting?', a: 'Business consulting is a broader term and can optionally include financial consulting. A business consultant can guide your business venture from the earliest planning and development stages, helping you to shape your ideas, bring them to paper, and, if necessary, keep realizing them on a routine basis. Alternatively, a business consultant may intervene in a specific business that is experiencing problems, helping to define and implement a stabilization strategy. A financial consultant will help in the same way, but with a specific focus on the financial aspects of your business. They will help you to align your cash flows, budgets, insurance, and taxes with your general business strategy or re-arrange your finances for more mature stages of your business. A financial consultant can also help you to save and/or invest your money effectively.' },
      { q: 'Are there business services that can help me recruit new talent?', a: 'Indeed, you can hire a wide range of HR-related services, including recruitment services. Recruitment services all of the many different stages of the recruitment process, from writing job announcements and collecting resumes to screening suitable candidates and interviewing them. Some consultants will even go further and draft you an organizational HR plan, specifying which positions you need to fill and defining your recruitment strategy to catch only the candidates that fit with your company’s culture. You can also hire a legal HR professionals for drafting job contracts. Finally, you can outsource part of the recruitment process or delegate it in its entirety on selected platforms.' },
      { q: 'What should I prepare when ordering business services?', a: 'To get results that meet your highest expectations, it is essential to communicate your expectations clearly. Be prepared to describe the scope of work, the final result, and why you need it, and provide a reasonable deadline. It will also help sellers understand what result will work best for you if you disclose some background information about your business and product and, optionally, about how you want to reuse the result--for example, who the target audience of your business is. Sellers also often specify what they need to see from clients in a briefing. Read this section in the offer carefully and follow all instructions as thoroughly as you can.' }
    ],
    related: [
      { title: 'Lead Generation', link: '' },
      { title: 'Store Management', link: '' },
      { title: 'Product Research', link: '' },
      { title: 'Online Trading Lessons', link: '' },
      { title: 'Domain Name Research', link: '' },
      { title: 'Tax Consulting', link: '' },
      { title: 'Online Survey Services', link: '' },
      { title: 'Accounting Bookkeeping Service', link: '' },
      { title: 'Financial Forecasting And Modeling', link: '' },
      { title: 'Employee Development Services', link: '' },
      { title: 'Skip Tracing', link: '' },
      { title: 'Personal Wealth Management', link: '' },
      { title: 'Business Coaching', link: '' },
      { title: 'Job Search and Apply', link: '' },
      { title: 'Interview Prep', link: '' },
      { title: 'Legal Research', link: '' },
      { title: 'Legal Documents Service', link: '' },
      { title: 'Ebay Store Management', link: '' },
      { title: 'Administrative Virtual Assistant', link: '' },
      { title: 'Shopify Store Management', link: '' }
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

export default Business