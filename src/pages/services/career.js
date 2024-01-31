import React from 'react'
import Sitemap from '../slices/sitemap'
import HeroSnip from '../slices/heroSnip'
import Newsletter from '../slices/newsletter'
import ServicesSnip from '../slices/servicesSnip'
import ScholarshipJob from '../slices/scholarshipJob'
import ServiceInsights from '../slices/serviceInsights'
import { Bank2, BrightnessHighFill, BuildingFillCheck, Capsule, CashStack, HeartPulseFill } from 'react-bootstrap-icons'

const Career = () => {
  const info = {
    title: 'Professional career services',
    tagline: 'Build your future with us',
    desc: 'Get outstanding orientation to help you effectively navigate the challenges of your career goals.\nWith our dedicated team of awesome agents and talents, we\'ve got you covered.'
  }
  const services = [
    { title: 'Job openings', desc: '...', url: 'jobs' },
    { title: 'Proofreading and Editing', desc: '...', url: 'proofreading' },
    { title: 'CV or Resume check', desc: '...', url: 'cv-check' },
    { title: 'Presentation review', desc: '...', url: 'presentation' },
    { title: 'Translation', desc: '...', url: 'translation' },
    { title: 'Conciarge', desc: '...', url: 'conciarge' },
    { title: 'Accommodation', desc: '...', url: 'accommodation' },
    { title: 'Content writing', desc: '...', url: 'writing' }
  ]
  const job = {
    title: 'jobs',
    heading: 'Corporate jobs',
    desc: 'Get access to our database of current jobs openings, finely curated to help you get started or progress in your career.',
    items: [ 
      {
        image: BrightnessHighFill,
        title: 'Fullstack Software Engineer',
        desc: 'Needs to possess the requisite capacities including but not limited to; DevOps, Low-Level and Higher-Level programming skills among many others',
        href: '/services/career/jobs'
      },
      {
        image: CashStack,
        title: 'Chartered Accountant',
        desc: 'Accounting jobs from startups to well-established corporations are readily available',
        href: '/services/career/jobs'
      },
      {
        image: BuildingFillCheck,
        title: 'Interior Design',
        desc: 'Jobs available for interior designers and designers of any ilk. We also provide support to any prospective client',
        href: '/services/career/jobs'
      },
      {
        image: HeartPulseFill,
        title: 'Registered Nurse|Midwife',
        desc: 'Get access to well-paying nursing, midwivery and care jobs. Our database while nonexhaustive, is sure to meet your caregiving career pathway',
        href: '/services/career/jobs'
      },
      {
        image: Capsule,
        title: 'Registered Pharmacist',
        desc: 'You will not have much difficulty in procuring a job in a pharmaceutical establishment, outlet or hospital',
        href: '/services/career/jobs'
      },
      {
        image: Bank2,
        title: 'Legal Practitioner',
        desc: 'We provide instant access to chambers in search of legal practitioners, with additonal internship opportunities',
        href: '/services/career/jobs'
      }
    ]
  }
  const insights = [
    { id: 1, title: 'Build killer resumes', summary: '...', image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500', slug: '' },
    { id: 2, title: 'What is a presentation review?', summary: '...', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 3, title: 'How to form remote teams', summary: '...', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' },
    { id: 4, title: 'Ace that interview!', summary: '...', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260', slug: '' }
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
          <ScholarshipJob title={job.title} head={job.heading} desc={job.desc} items={job.items} />
        </div>
      </section>

      <section>
        <div className='px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20'>
          <div className='sm:text-center my-16'>
            <p className='inline-block px-3 py-px mb-10 text-xs font-semibold uppercase md:mb-2 tracking-wider text-blue-900 rounded-full bg-blue-100'>
              Career insights
            </p>
          </div>
          <ServiceInsights title='jobs' insights={insights} />
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

export default Career