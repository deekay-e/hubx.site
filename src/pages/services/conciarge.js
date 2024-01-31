import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const Conciarge = () => {
  const page = {
    title: 'Conciarge',
    desc: 'Handle bookings, personalized shopping and pickups.',
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

export default Conciarge