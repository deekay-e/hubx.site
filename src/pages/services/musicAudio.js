import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const MusicAudio = () => {
  const page = {
    title: 'Music & Audio',
    desc: 'Don\'t miss a beat. Bring your sound to life.',
    popular: [
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323563/Voice%20Over_2x.png', title: 'Voice Over', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323574/Producers_Composers_2x.png', title: 'Producer & Composer', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323569/Singers_Vocalists_2x.png', title: 'Singer & Vocalist', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323569/Mixing_Mastering_2x.png', title: 'Mixing & Mastering', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323556/Session%20Musicians_2x.png', title: 'Session Musicians', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323560/Songwriters_2x.png', title: 'Songwriters', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323553/Podcast%20Editing_2x.png', title: 'Podcast Production', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323551/Beats%20%28Beat%20Making%29_2x.png', title: 'Beats', link: '' },
      { thumb: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323558/Sound%20Design_2x.png', title: 'Sound Design', link: '' },
    ],
    cats: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4a3e5be4c3444c820c64bf49d9b5769b-1681898874126/Music%20Production%20_%20Writing.jpg', title: 'Music Production & Writing', subs: [
        { title: 'Producers & Composers', link: '' },
        { title: 'Songwriters', link: '' },
        { title: 'Beat Making', link: '' },
        { title: 'Singers & Vocalists', link: '' },
        { title: 'Session Musicians', link: '' },
        { title: 'Jingles & Intros', link: '' },
        { title: 'Custom Songs', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/54b8566acee6fb3d6a492b11cd828825-1682588022028/Audio%20Engineering%20_%20Post-production.png', title: 'Audio Engineering & Post Production', subs: [
        { title: 'Mixing & Mastering ', link: '' },
        { title: 'Audio Editing', link: '' },
        { title: 'Vocal Tuning', link: '' },
        { title: 'Audio Logo & Sonic Branding', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4a3e5be4c3444c820c64bf49d9b5769b-1681898874112/Voice%20Over%20_%20Streaming.jpg', title: 'Voice Over & Streaming', subs: [
        { title: 'Voice Over', link: '' },
        { title: 'Podcast Production', link: '' },
        { title: 'Audiobook Production', link: '' },
        { title: 'Audio Ads Production', link: '' },
        { title: 'Voice Synthesis & AI', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4a3e5be4c3444c820c64bf49d9b5769b-1681898874117/Lessons%20_%20Transcription.jpg', title: 'Lessons & Transcription', subs: [
        { title: 'Online Music Lessons', link: '' },
        { title: 'Music Transcription', link: '' },
        { title: 'Music & Audio Advice', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4a3e5be4c3444c820c64bf49d9b5769b-1681898874128/DJing.jpg', title: 'Djing', subs: [
        { title: 'Remixing & Mashups', link: '' },
        { title: 'DJ Drops & Tags', link: '' },
        { title: 'DJ Mixing', link: '' }
      ]},
      { image: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4a3e5be4c3444c820c64bf49d9b5769b-1681898874124/Miscellaneous.jpg', title: 'Sound Design', subs: [
        { title: 'Sound Design', link: '' },
        { title: 'Synth Presets', link: '' },
        { title: 'Meditation Music', link: '' }
      ]},
    ],
    guides: [
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_300/q_auto,f_auto/v1/attachments/generic_asset/asset/5a7a6cd5bf1334301d77c29f8c7cdd43-1599921796181/voice%20over-min.jpg', title: 'What is voice Over All you need to know (A Complete Guide)', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_300/f_auto,q_auto/v1/attachments/generic_asset/asset/787c8ca2c9f545350fb11dd987d69af5-1657113227993/shutterstock_2120380775.jpg', title: 'How to Become A Songwriter in 2022', link: '' },
      { image: 'https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/18dab679d0ea68cf6c6430d77c213230-1664872016381/shutterstock_415922566.jpg', title: 'Dj Drops - Learn How to make your own.', link: '' }
    ],
    faqs: [
      { q: 'What are music & audio services?', a: 'These are services provided by professional musicians, singers, composers, producers, music technologists and other broad or narrow specialists. Whether you want to polish your new album, need a jingle for an advert or a voiceover for your course, it’s all in Music & Audio.' },
      { q: 'How do i choose the best freelancer for my music project?', a: "If you want a mixing engineer, voice over expert or a session musician, Fiverr has the right freelancer for your music project. Decide on your needs, deadlines & budget, browse through the list of professionals, view their portfolios and reviews and always contact the seller before ordering" },
      { q: 'What are the benefits of online audio sercives?', a: "Music & Audio experts are all in one place, available 24/7. With Fiverr you can scale your project up or down without lengthy contracts or negotiations, get the work done fast and change the provider or work with multiple freelancers according to your budget and timescale." },
      { q: 'What type of audio services are offered in hubx?', a: "Fiverr provides services for professional musicians by professional musicians including mixing, music lessons, producers & composers and beat making. If you are in advertising and need a jingle, audio ads or voiceover it’s all here under Music & Audio services by experienced freelancers." },
      { q: 'Can i hire musician in less than 48 hours?', a: "Yes, Fiverr puts you in touch with a global selection of providers of Music & Audio services even if you need a professional at the last minute. Whether it’s a session musician to fill in, or a last minute edit of a tune, a podcast or a music remix, you can reach out with a buyer request or contact the freelancers directly any time." },
      { q: 'do i need to perpare something for my music & audio freelancer?', a: "The main thing to do is prepare a clear brief before you set off to search for a music & audio professional. Always view the seller’s FAQs and instructions so you know what to expect and also what the freelancer needs from you before you start and what they will provide so you define your scope clearly." },
    ],
    related: [
      { title: 'Producer Tags', link: '' },
      { title: 'Female voice over', link: '' },
      { title: 'Mashups', link: '' },
      { title: 'Ghost Production', link: '' },
      { title: 'Intros & Outros', link: '' },
      { title: 'Session drummer', link: '' },
      { title: 'Guitar transcription', link: '' },
      { title: 'Rap songwriters', link: '' },
      { title: 'DJ Drops', link: '' },
      { title: 'Video Game Voice Over', link: '' },
      { title: 'Piano Transcription', link: '' },
      { title: 'Audiobook Voice Over', link: '' },
      { title: 'Video Games Composers', link: '' },
      { title: 'Female Singers', link: '' },
      { title: 'Backing Tracks', link: '' },
      { title: 'Bass transcription', link: '' },
      { title: 'Music Production Lessons', link: '' },
      { title: 'British voice over', link: '' },
      { title: 'Jingles', link: '' },
      { title: 'Male voice over', link: '' },
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

export default MusicAudio