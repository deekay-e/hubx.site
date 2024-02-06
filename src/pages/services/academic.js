import React from 'react'
import Sitemap from '../slices/sitemap'
import HeroSnip from '../slices/heroSnip'
import Newsletter from '../slices/newsletter'
import ScholarshipJob from '../slices/scholarshipJob'
import ServiceInsights from '../slices/serviceInsights'
import { Box2HeartFill, BrightnessHighFill, BuildingFillCheck } from 'react-bootstrap-icons'
import ServicesSnip from '../slices/servicesSnip'

const Academic = () => {
  const info = {
    title: 'Professional academic services',
    tagline: 'Build your future with us',
    desc: 'Get outstanding help with our academic-oriented services, sure to benefit your scholarly pursuits.\nWith our dedicated team of incredible agents and talents, we\'ve got you covered.'
  }
  const services = [
    { title: 'Scholarship awards', desc: '...', url: 'scholarships' },
    { title: 'Proofreading and Editing', desc: '...', url: 'proofreading' },
    { title: 'CV or Resume check', desc: '...', url: 'cv-check' },
    { title: 'Presentation review', desc: '...', url: 'presentation' },
    { title: 'Translation', desc: '...', url: 'translation' },
    { title: 'Conciarge', desc: '...', url: 'conciarge' },
    { title: 'Accommodation', desc: '...', url: 'accommodation' },
    { title: 'Content writing', desc: '...', url: 'writing' }
  ]
  const scp = {
    title: 'scholarships',
    heading: 'University scholarships',
    desc: 'Get access to our database of current scholarships finely curated to help finance your academic journey.',
    items: [
      {
        image: BrightnessHighFill,
        title: 'Gates Cambridge Scholarship',
        desc: 'For non-US internationals pursuing MSc or PhD degrees. Scholarship is either part-time or full-time and deadline is course-dependent',
        href: 'https://www.student-funding.cam.ac.uk/fund/gates-cambridge-scholarship-2022'
      },
      {
        image: Box2HeartFill,
        title: 'Canada Graduate Scholarship',
        desc: 'Get funding for your graduate studies for universities in Canada. Deadline is the 1st of December yearly',
        href: 'https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSM-BESCM_eng.asp'
      },
      {
        image: BuildingFillCheck,
        title: 'Chevening Scholarship',
        desc: 'Provide funding for students pursuing BSc degrees. Proposed open date of early August till early November',
        href: 'https://www.chevening.org/scholarships/application-timeline'
      },
      {
        image: BrightnessHighFill,
        title: 'Gates Cambridge Scholarship',
        desc: 'For non-US internationals pursuing MSc or PhD degrees. Scholarship is either part-time or full-time and deadline is course-dependent',
        href: 'https://www.student-funding.cam.ac.uk/fund/gates-cambridge-scholarship-2022'
      },
      {
        image: Box2HeartFill,
        title: 'Canada Graduate Scholarship',
        desc: 'Get funding for your graduate studies for universities in Canada. Deadline is the 1st of December yearly',
        href: 'https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSM-BESCM_eng.asp'
      },
      {
        image: BuildingFillCheck,
        title: 'Chevening Scholarship',
        desc: 'Provide funding for students pursuing BSc degrees. Proposed open date of early August till early November',
        href: 'https://www.chevening.org/scholarships/application-timeline'
      }
    ]
  }
  const insights = [
    { id: 1, title: 'Build effective research proposals', summary: '...', image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500', slug: '' },
    { id: 2, title: 'Processed your visa yet?', summary: '...', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 3, title: 'How to apply for admissions', summary: '...', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 4, title: 'Get that scholarship!', summary: '...', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' }
  ]

  const content = (
    <main>
      <section>
        <HeroSnip hero={info} />
      </section>

      <section>
        <ServicesSnip services={services} />
      </section>

      <section>
        <div className='p-4 md:px-8 my-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
          <ScholarshipJob title={scp.title} head={scp.heading} desc={scp.desc} items={scp.items} />
        </div>
      </section>

      <section>
        <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20'>
          <div className='sm:text-center my-16'>
            <p className='inline-block p-1 mb-10 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>
              Career insights
            </p>
          </div>
          <ServiceInsights title='academic' insights={insights} />
        </div>
      </section>

      <section>
        <Sitemap />
      </section>

      <Newsletter />
    </main>
  )
  return content
}

export default Academic