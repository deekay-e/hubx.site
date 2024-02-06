import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const Consultation = () => {
  const page = {
    title: 'Consultation',
    desc: 'Get that safety net with wise counsel. Book by the hour.'
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

export default Consultation