import Newsletter from "../slices/newsletter"
import ServicePage from "../slices/servicePage"

const Lifestyle = () => {
  const page = {
    title: 'Lifestyle',
    desc: 'Your life. Your style. Find your balance.',
    popular: [
      { thumb: '', title: '', link: '' },
      { thumb: '', title: '', link: '' },
      { thumb: '', title: '', link: '' },
      { thumb: '', title: '', link: '' },
      { thumb: '', title: '', link: '' }
    ],
    cats: [
      { image: '', title: '', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
      { image: '', title: '', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
      { image: '', title: '', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
      { image: '', title: '', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
      { image: '', title: '', subs: [
        { title: '', link: '' },
        { title: '', link: '' }
      ]},
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
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' },
      { title: '', link: '' }
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

export default Lifestyle