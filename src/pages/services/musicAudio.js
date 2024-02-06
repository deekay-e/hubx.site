import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const MusicAudio = () => {
  const page = {
    title: 'Music & Audio',
    desc: 'Don\'t miss a beat. Bring your sound to life.',
    popular: [
      { thumb: '', title: '', link: '' }
    ],
    cats: [
      { image: '', title: '', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
    ],
    guides: [
      { image: '', title: '', link: '' },
      { image: '', title: '', link: '' },
      { image: '', title: '', link: '' }
    ],
    faqs: [
      { q: '', a: '' }
    ],
    related: [
      { title: '', link: '' },
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