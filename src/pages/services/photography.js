import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const Photography = () => {
  const page = {
    title: 'Photography',
    desc: 'Get the shot you need. Every time',
    popular: [
      { thumb: '', title: '', link: '' },
      { thumb: '', title: '', link: '' }
    ],
    cats: [
      { image: '', title: 'Product', subs: [
        { title: 'Product Photographers', link: '' },
        { title: 'Food Photographers', link: '' }
      ]},
      { image: '', title: 'People', subs: [
        { title: '', link: '' },
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
      { image: '', title: 'Scenes', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
      { image: '', title: 'Miscellaneous', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]}
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/adf7e186c2e264b5e43b9e7538ac8a16-1669020469878/how%20to%20hire%20a%20photographer.jpeg', title: 'Capture the Perfect Picture: How to Hire a Photographer', link: '/resources/guides/business/hire-photographer' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/3dd5884a4f3feb3d401a99c76a6514fb-1671024400266/portrait%20photography%20ideas.jpeg', title: '10 Product Photography Ideas to Help You Stand Out', link: '/resources/guides/graphic-design/product-photography-ideas' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/a52923efe8459441bdcc5166e9b600ed-1671027979625/photography%20business.jpeg', title: 'How to start a photography business in 9 steps', link: 'resources/guides/business/photography-business-guide' }
    ],
    faqs: [
      { q: 'What are HubX photography services?', a: 'Photography services offered on HubX include portrait photography, events photography, real estate photography, food photography, and more. Beyond capturing photos, photographers on HubX offer other photography-related services, such as photo retouching, background removal, model casting, and styling. Best of all, you can choose from a variety of local photography services near your area that fit your budget and timeframe.' },
      { q: 'Are HubX photography services offered in-person or remotely?', a: 'HubX photographers offer three types of services: in-person photography, which involves face-to-face interaction between the client and photographer; remote photography, where the photographer is sent to the client\'s location to do a photoshoot; and product photography, where the client ships the product to the photographer for a photo session and the photographer returns the photos and product to the client.' },
      { q: 'What types of photographers can I hire on HubX?', a: 'There is a wide range of experts on HubX who specialize in different types of photography. You’ll find portrait photographers, event photographers, product photographers, aerial photographers, lifestyle & fashion photographers, real estate photographers, and food photographers. Some photographers specialize in niches such as macro and bird photography, photography for acting portfolios, and interior design photography' },
      { q: 'How do I choose the right photographer for my project?', a: 'Choosing the right photographer requires taking the time to research your goals and expectations, as well as the type of photography you need. Make sure you know and understand the different types of photography and whether these will suit your needs or not. You’ll then need to review their HubX profile portfolio to determine their unique skill set and style. Check reviews from previous clients to assess their reputation. Finally, you’ll want to check the photographer\'s location (if applicable to your needs.)' },
      { q: 'How can I find a photographer near my location?', a: 'Whether based in the US or residing overseas, finding a photographer near your location is easy with HubX. Simply type in the keyword of the service you’re looking for in the search bar, and then use the “Service Options” to filter photographers by city. You can also use keyword-specific searches - such as “photographer [location]” - to make things more convenient. Tip: If you live in a small town, you might want to use the nearest city’s location. You can then discuss travel arrangements with your photographer.' },
      { q: 'Why do I need professional photography for my business?', a: 'Professional photography for businesses can range from employee portraits to campaigns and promo projects. These services can help establish your brand, enhance your brand relevancy and authority, communicate the quality of your products or services, and make your visuals look more authentic (rather than relying on stock photography.) Furthermore, high-quality images can make your content more engaging, helping you stand out from the competition.' }
    ],
    related: [
      { title: '', link: '' }
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

export default Photography