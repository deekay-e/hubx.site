import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const VideoAnimation = () => {
  const page = {
    title: 'Video & Animation',
    desc: 'Bring your story to life with creative videos.',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670390/Video%20Editing.png', title: 'Video Editing', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670370/Short%20Video%20Ads.png', title: 'Video Adds & Commercials', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4e99f7989f6e3ea9fc115fc017051455-1630332866288/Whiteboard%20_%20Animated%20Explainers.png', title: 'Animated Explainer', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670382/Character%20Animation.png', title: 'Character Animator', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/9d0390ca87e4f946f4b4126d5cd15332-1653292063612/Social%20Media%20Videos%20icon%29.png', title: 'Social Media Videos', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/fa31de2cd7a541ba5fd2020e391b844f-1682323856747/ai%20atrists.png', title: 'Ai Music Videos', link: '' },
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments-dev/generic_asset/asset/853522bd8185d62d95c1ba1b858f0b5e-1677664907733/Video%20Editing%20_%20Post-Production.jpg', title: 'Editing & Post-Production', subs: [
        { title: 'Video Editing', link: '' },
        { title: 'Visual Effect', link: '' },
        { title: 'Video Art', link: '' },
        { title: 'Intro & Outro Videos', link: '' },
        { title: 'Video Template Editing', link: '' },
        { title: 'Subtitles & Caption', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments-dev/generic_asset/asset/3f5acca5c1fd134afc797b2d5ccb9bfb-1677664874738/Animation.jpg', title: 'Animation', subs: [
        { title: 'Character Animation', link: '' },
        { title: 'Animated GIFs', link: '' },
        { title: 'Animation for Kids', link: '' },
        { title: 'Animation for Streamers', link: '' },
        { title: 'Rigging ', link: '' },
        { title: 'NFT Animation', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/1f7857f1619218698ba2d19457e49cff-1700571088448/Motion%20Graphics.png', title: 'Motion graphics', subs: [
        { title: 'Logo Animation', link: '' },
        { title: 'Logie & Website Animation', link: '' },
        { title: 'Text Animation', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments-dev/generic_asset/asset/a90dfe08fcdfde1e4eff1e509e376994-1677664983800/Social%20_%20Marketing%20Videos.jpg', title: 'Social & Marketing Videos', subs: [
        { title: 'Video Ads & Commercials', link: '' },
        { title: 'Social Media Videos', link: '' },
        { title: 'UGC Videos', link: '' },
        { title: 'Music Videos', link: '' },
        { title: 'Slideshow Videos', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/d094e6d772d6664a2c2fd3f9026feeae-1700571146067/Tutorials%20_%20Education.png', title: 'Explainer Videos', subs: [
        { title: 'Animated Explainer', link: '' },
        { title: 'Live Action Explainer', link: '' },
        { title: 'Spokeperson Videos', link: '' },
        { title: 'Screencasting Videos', link: '' },
        { title: 'eLearning Video Production', link: '' },
        { title: 'Crowdfunding Video', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments-dev/generic_asset/asset/21075162d0dd38512625ff2e6c0bd00a-1677664928826/Product%20_%20Explainer%20Videos.jpg', title: 'Product Videos', subs: [
        { title: '3D Product Animation', link: '' },
        { title: 'E-Commerce Product Videos', link: '' },
        { title: 'Cooperate Videos', link: '' },
        { title: 'Apps & Website Reveiw', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/85083e0a6fe95b00aba4cdd7c51a5312-1700662611438/Filmed%20Video%20Production.png', title: 'Filmed Video Production', subs: [
        { title: 'Filmed Video Production', link: '' },
        { title: 'Videographers', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2cba0cd863f800481c77efb719a0930e-1700571018156/Miscellaneous.png', title: 'Miscellenous', subs: [
        { title: 'Article To Videos', link: '' },
        { title: 'Game Trailer', link: '' },
        { title: 'Meditation Videos', link: '' },
        { title: 'Real-Estate Promos', link: '' },
        { title: 'Book Trailers', link: '' },
        { title: 'Videos Advice ', link: '' },
        { title: 'Others', link: '' }
      ]},
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/0e58c7ec91d8ee64e13d372de3ee2da7-1593443459781/promo%20video%20-%20fiverr.jpg', title: 'How to create a video promo on a budget', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/3d1b394f7e39a12ac06ec1ecdbeb2e9b-1664779931079/video%20editing.png', title: '10 Best Video Editing Software for Youtubers', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/949d97f95522e571701a7a8c8c132bcc-1664719237294/video%20advertising.jpeg', title: 'The Complete Guide To Successful Video Advertising', link: '' }
    ],
    faqs: [
      { q: 'Why Does My Business Need Videos', a: "In today's marketing strategies, nothing tops the power that videos have - 90% of customers say that videos help them decide whether to buy or not. They visually help showcase products and services that reach and attract new customers. Videos convey more information in less time and are much easier for the audience to become immersed in. They also help your business stand out from your competition by putting a face and name to your brand, instilling confidence and trustworthiness. And the fact that Google loves videos is just another reason to start making those business videos!" },
      { q: 'What Type of videos Does my Business Need', a: "Depending on what type of product or service your business provides, there are a plethora of videos to choose from. Product videos are great for showing off your product's features and benefits in an engaging way. Explainer videos are also popular for teaching or explaining how to solve a problem or issue. They're also great for demonstrating how to use a product or solution. Onboarding, training, and company culture videos are fantastic for the inner working solutions in your business, and testimonial and promotional videos are perfect for promoting your business. And don't forget about those fun social videos that customers love to see!" },
      { q: 'What are the elements of a great Video?', a: "To create a successful video, you should keep these tips in mind. First, keep it short. The rule of thumb for videos is the shorter the better, and keeping it under 2 minutes is essential. Next, you need an attention-grabbing intro. It doesn't matter how short your video is - if you can't grab your audience's attention in the first few seconds, they will move on. You should also take into consideration the background music, video lighting, adding captions, and smooth editing of your business video. And lastly, you should have a decisive call to action (CTA) to finish out strong." },
      { q: 'What are the most porpular video & animation service?', a: 'There are a variety of video services available, but the most popular services are explainers and character animation. Within the explainer category, you can choose a whiteboard explainer video that simulates animated graphics being hand-drawn on a whiteboard. 2 and 3-D animation videos are also quite popular in creating three-dimensional moving images that explain your product or service. Live-action explainers are made with actual shot video footage, which people love, and character animation brings animated characters to life and is excellent for attracting new customers as well as using on social media.' },
      { q: 'How do i choose the right type of service and seller for my video?', a: "When choosing specific services for your video, you should first know what type of video you want to create. This will help you narrow down what services you need tremendously. The best way to choose a seller for your video is by finding someone who will fit your specific business needs. Browse through a seller's experience, niche, and previous work. Then start reaching out and communicate what you're aiming for to determine if it can be a potential match. Ask what types of services the seller provides, how long the process takes, and their suggestions. Ultimately, you want someone who can translate your ideas into actions" },
      { q: 'How Long will it take for my videos to be delivered?', a: "There is honestly no universal answer to how long it will take for your video to be delivered. The process depends on a multitude of factors, including content creation, the editing process, the seller's availability, and your timeline. The best way to have your video delivered promptly and quickly is to have everything prepared and ready for your seller upfront. Create a timeline with your seller for when various video elements will be ready, and try to stick to that timetable. But the most important qualities to remember are flexibility and good communication. This will help the process go smoothly and seamlessly." },
    ],
    related: [
      { title: 'Stinger Transition', link: '' },
      { title: 'Animated Alerts For Streamers', link: '' },
      { title: 'Youtube Intro Maker', link: '' },
      { title: 'Spokespersons Videos', link: '' },
      { title: 'AMV', link: '' },
      { title: 'Music Video Editing', link: '' },
      { title: 'Twitch Animation for Streamers', link: '' },
      { title: 'Jewelry Product Photography', link: '' },
      { title: 'Medical 3d Animation', link: '' },
      { title: 'Color Grading', link: '' },
      { title: '360 Product Photography', link: '' },
      { title: 'Kids Photography Advertising', link: '' },
      { title: 'Architecture 3D Animation', link: '' },
      { title: 'Spanish Subtitles', link: '' },
      { title: 'Gaming video editing', link: '' },
      { title: 'Video Compositing', link: '' },
      { title: 'Youtube Editor', link: '' },
      { title: 'Cartoon Animation', link: '' },
      { title: 'Video Production', link: '' },
      { title: 'Lyric video', link: '' },
      { title: 'Whiteboard Animation', link: '' },
      { title: 'Hire Video Editors', link: '' },
      { title: 'Music Video Editing', link: '' },
      { title: 'Animated Video Ads', link: '' },
      { title: 'Music Video Editing', link: '' },
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

export default VideoAnimation