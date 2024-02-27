import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const GraphicsDesign = () => {
  const page = {
    title: 'Graphics & Design',
    desc: 'Designs to make you stand out',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png', title: 'Minimalist Logo Design', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png', title: 'Illustration', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/55b9d6349057bb9fe177ea57e2d92f30-1670570507381/Web%20Design.png', title: 'Website Design', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png', title: 'Architecture & Interior Design', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ace985608fce227eb6477959645d09ed-1680446271839/ai%20atrists.png', title: 'Ai Artists', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png', title: 'Image Editing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png', title: 'T-Shirt & Merchandise', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5987755afeb2d9ea01871fdee90a9a05-1670570470543/Product%20_%20industrial%20design.png', title: 'Industrial & Product Design', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101621/Social%20Media%20Design_2x.png', title: 'Social Media Design', link: '' },
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649968/Logo%20_%20Brand%20Identity.png', title: 'Logo & Brand Identity', subs: [
        { title: 'Logo Design', link: '' },
        { title: 'Brand Style Guide', link: '' },
        { title: 'Business Cards & Stationery', link: '' },
        { title: 'Font & Typography', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649980/Web%20_%20App%20Design.png', title: 'Web & App Design', subs: [
        { title: 'Website Design', link: '' },
        { title: 'App Design', link: '' },
        { title: 'Ux Design', link: '' },
        { title: 'Landing Page Design', link: '' },
        { title: 'Icon Design', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649988/Art%20_%20Illustration.png', title: 'Art & Illustration', subs: [
        { title: 'Illustration', link: '' },
        { title: 'Ai Artists', link: '' },
        { title: "Children's Book Illustration", link: '' },
        { title: 'Portraits & Caricatures', link: '' },
        { title: 'Cartoon & Comics', link: '' },
        { title: 'Partern Design', link: '' },
        { title: 'Tatoo Design', link: '' },
        { title: 'Storyboards', link: '' },
        { title: 'NFT Art', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649984/Architecture%20_%20Building%E2%80%A8Design.png', title: 'Architecture & BUilding Design', subs: [
        { title: 'Architecture & Interior Design', link: '' },
        { title: 'Landscape Design', link: '' },
        { title: 'Building Engineering', link: '' },
        { title: 'Building Information Modeling', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649966/Product%20_%20Gaming.png', title: 'Product & Gaming', subs: [
        { title: 'Industrial & Product Design', link: '' },
        { title: 'Character Modeling', link: '' },
        { title: 'Game Art', link: '' },
        { title: 'Graphics for streamers', link: '' },
        { title: 'Twitch Store', link: '' },
        { title: 'Trade Booth Design', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649982/Visual%20Design.png', title: 'Visual Design', subs: [
        { title: 'image Editing', link: '' },
        { title: 'Presentation Design', link: '' },
        { title: 'infographic Design', link: '' },
        { title: 'Vector Trading', link: '' },
        { title: 'Resume Design', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649969/Print%20Design.png', title: 'Print Design', subs: [
        { title: 'Flyer Design', link: '' },
        { title: 'Brochure Design', link: '' },
        { title: 'Poster Design', link: '' },
        { title: 'Catalog Design', link: '' },
        { title: 'Menue Design', link: '' },
        { title: 'Invitation Design', link: '' },
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649987/Packaging%20_%20Labels.png', title: 'Packaging & Cover', subs: [
        { title: 'Packaging & Label Design', link: '' },
        { title: 'Book Design', link: '' },
        { title: 'Book Cover', link: '' },
        { title: 'Album Cover Design', link: '' },
        { title: 'Podcast Cover Art', link: '' },
        { title: 'Car Wraps', link: '' },
      ]},
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_300/f_auto,q_auto/v1/attachments/generic_asset/asset/74773bd8aab051ef8a227380dc4abfc9-1651413395712/how%20to%20chhose%20a%20logo%20font.jpg', title: 'The 4 main types of fonts & how to choose the right font for your brand and logo', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/6f05fb897084d76c87f86da4aece11b8-1649665467147/choosing%20brand%20colors-min.jpg', title: 'The Ultimate guide to choosing the right color for your brand', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/2508960106117021baf4c9699b982213-1593436732817/children%27s%20book%20illustration.jpg', title: "How to Illustrate a children's books: 9 ways to illustrate your book", link: '' }
    ],
    faqs: [
      { q: 'What is graphic design?', a: 'Put simply, graphic design is the art and craft of creating visual content that communicates a concept, an idea or a brand message to the public. Logos, artworks, drawings, illustrations, cards, emails and a whole paraphernalia of designs are all around us. You can see them in print and digital media, in shops, restaurants and cafes, on billboards, books and magazines, in the apps we use, the sites we visit and the physical and digital products we buy. In fact, graphic design is a type of communication medium which uses visual means to convey a message. Designers use different types of physical materials or software to combine images, graphics and text as the main forms of expressing this message. Graphic design is used to sell, to build brand identity or to move people towards specific actions. It is also a form of art but ultimately, the different elements of the graphic representation influence our perceptions and emotions. There are different types of graphic design such as ‘visual identity’ which deals with the visual elements of the brand via shapes, colors and images (e.g. logo design, typography, brand style guides) and ‘marketing and advertising’ which is used directly to generate leads and sales via print (billboards, brochures, flyers, print ads) or digital (social media posts, banners, videos). There are many other types such as website design, industrial and product design, fashion design, book and illustrations, motion graphics design used for example by streamers or in gaming design and many others.' },
      { q: "How to hire top graphic designers?", a: "A captivating visual presence is very important whether you’re a business or a non-commercial entity. Your potential audiences are already forming an opinion and deciding whether to interact with you based on what they see, long before you’ve had a chance to say or write something. So it’s imperative to carefully select the right freelancer to meet your needs and keep you within budget. There are many different areas in which graphic designers specialize so if you want to hire the right talent to meet the requirements of your particular project, here are some easy to follow tips and tricks. - Always research their portfolio on Fiverr and ask for more examples if necessary; - Carefully think about what your style and preferences are so you know what you like, what you don’t like and what you actually want (colors, graphics, images, etc); - Write a clear brief - depending on the size of the project your brief can be very short or contain a lot of detail. What’s important is to be clear on the important points; - Define a budget and be clear to yourself and the freelancer how far you can stretch it; - Form a clear agreement on deadlines and revisions and respect the work of the designer - if you are clear on the above points then there shouldn’t be any surprises; - Think long-term - a good designer will be able to help you holistically and develop an evolving long-term vision for your product or service." },
      {q : "How much does it cost to hire a graphic designer", a: "There is no simple answer to this question as graphic design is not a commodity or a product that has an exact way to be measured or priced. The great thing about Fiverr is that you can find a freelance graphic designer for any budget, starting from just $5 per gig and going up to hundreds or thousands of dollars for more complex and time and resource consuming requirements. However, there are a number of factors that will influence the final price of the project such as the level of experience of the seller (from novices to Top Rated and Pro Sellers), the number or service options included in the gig, delivery times, number of revisions and whether any extras might need to be added at some point. In fact, revisions can be a very tricky area for graphic design projects so it’s key for you to have very clear requirements to start with and also to agree with the seller what their output will be (e.g.how many initial versions they will offer) to avoid any misunderstandings or unwanted surprises on both sides. A more experienced designer will charge more, however, they can also help you define your requirements and save time (and money) in the long-run by keeping you on track for your goals. Alternatively, a new freelancer who’s perhaps less experienced or trying to build their reputation will be priced more competitively but might not have the skills or professional maturity of a seasoned creative director."},
      {q : "How do I write a good creative design brief?", a: "The creative brief is a key document that essentially defines the objectives, scope and key milestones of a design project. It gives the required information to the freelance graphic designer on what needs to be done, who the target audience will be, what key message(s) need to be communicated, what deliverables are expected, by when (deadlines and milestones). The creative brief is basically the blueprint that you’ll need to agree with your internal stakeholders, business partners or colleagues (or if you are a one-person-show - find a friend or someone you trust to use as a sounding board) and then present to the freelancer to guide, inspire them and ensure they deliver the best possible creative results. Here are some universal tips for writing a good creative brief that equally apply to most: - Start by answering the ‘what’ (your goal is) and ‘who’ (your audience is); - Be clear, concise and to the point - less is more in this case so avoid being too prescriptive and don’t elaborate too much; - Set realistic deadlines and factor in the time for feedback and revisions; - Ask for help - from your team, colleagues stakeholders; - Define what success will look like so both you and the designer can measure the results in the end (and stick to your initial definitions). Once you have all this, keep it as a template and use for future briefs as it’ll save you time and will ensure you can build long-term relationships with the graphic designers you work with."},
      {q : "What’s the best way to hire a designer in less than 48 hours?", a: "Finding a good graphic designer is very important for the way your business and brand is presented to your target audience so you need to be very careful in who you put your trust in. You will need to get to grips with some graphic design 101’s in order to become better at selection. Having said that, we know that sometimes there are business emergencies and you might find yourself in a situation when you need to hire a professional logo designer, illustration artist, front-end/UX or web designer or any type of freelance graphic designer in a hurry. The good news is that Fiverr can help you do that even if you only have 48 hours or less to complete your project. We have expert freelancers from around the globe, working 24/7 waiting to satisfy all your needs. Here’s what to do: - Publish a buyer request so you can reach a big audience of freelancers who can offer you their services; - Clearly state your requirements, your budget and your deadline and sellers will start to contact you immediately; - Make sure to follow through with offers and ask relevant questions about experience, how the freelancer will approach the project, expectations about time and milestones before you decide to place an order; - Read buyer reviews and ask for additional portfolio examples if not sure; - Look for the seller rating (Fiver Top Rated and Pro sellers will command higher prices but will have more experience and skills)."},
      {q : "What makes graphic design so important?", a: "We live in a visual society so images, packaging, signage, illustrations, websites, apps and social media all vie for our attention, making it very challenging to become noticeable let alone memorable amongst the overload of visual stimuli. In a nutshell, the most important mission that graphic design plays is communication. Communication of ideas and messages, with the ultimate objective of elicit, prompt or evoke an action or an emotion (which will become an action in the future). So a good graphic designer will build your logo, create your email campaign or company stationery, do everything possible (given the right brief) to set you apart from your competition and convey a message that exudes trust, credibility and builds a consistent brand and company reputation. A well executed design project will ensure that the final output, be it a flyer or your product packaging, or even the design of your office space or your frontline staff’s uniforms summarizes your mission and vision statements and communicates in a clear and simple manner the main ideas that are behind your company or organization and what it stands for. When you hire a good graphic design professional, preferably one you can trust on more than one project, they will ensure that all representations of your products and brand are visually consistent, recognizable and conveying a clear message. Ultimately, when you ask yourself ‘How important is it that my customers recognize me?’, if the answer is ‘very important’ then so should graphic design be for your brand!"},
    ],
    related: [
      { title: 'Bacground Removal', link: '' },
      { title: 'Thumbnail Design', link: '' },
      { title: 'Book Cover Design', link: '' },
      { title: 'Minimalist Logo Design', link: '' },
      { title: 'Twitch Overlay Design', link: '' }, 
      { title: '3D Modeling and Renderind', link: '' }, 
      { title: 'Mid Journey Artist', link: '' }, 
      { title: 'Children Illurstration', link: '' }, 
      { title: 'Watercolor Logo Design', link: '' }, 
      { title: '2D Drawing & Floor Plans', link: '' }, 
      { title: '3D Modeling and Renderind', link: '' }, 
      { title: 'Partern Making $ Fashion', link: '' }, 
      { title: 'Character Design', link: '' }, 
      { title: 'Custom Emotes & Badges', link: '' }, 
      { title: 'Rapld Prototyping', link: '' }, 
      { title: 'Pixel Art Illustration', link: '' }, 
      { title: '3D Logo Design', link: '' }, 
      { title: 'Label Design', link: '' }, 
      { title: 'Technical Drawing', link: '' }, 
      { title: 'Portrait Retouching', link: '' }, 
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

export default GraphicsDesign