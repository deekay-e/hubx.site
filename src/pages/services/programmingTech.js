import React from 'react'
import Newsletter from '../slices/newsletter'
import ServicePage from '../slices/servicePage'

const ProgrammingTech = () => {
  const page = {
    title: 'Programming & Tech',
    desc: 'You think it. A programmer develops it.',
    popular: [
      { thumb: '', title: '', link: '' }
    ],
    cats: [
      { image: '', title: '', subs: [
        { title: '', link: '' }
      ]}
    ],
    guides: [
      { image: '', title: '', link: '' },
      { image: '', title: '', link: '' },
      { image: '', title: '', link: '' }
    ],
    faqs: [
      { q: 'What is Web programming?', a: 'Web programming or development use code to focus on the website functionality and ensure it works and is easy to use. It involves markup, writing, network security and coding which is client and server side. The most popular web programming languages are HTML, XML, JavaScript, PHP, ASP.Net and Python.' },
      { q: 'How do I choose the right freelance programmer for my project?', a: 'With so many programming services, it’s a challenge to choose the right programmer. Formulate a clear brief, decide on a budget, deadlines and scope. Select a programmer based not only on their skills and experience but also on how well you might work and communicate.' },
      { q: 'Do I need to prepare something for my programmer?', a: 'Yes, good documentation and a clear brief are crucial for the success of getting the desired result for your project. Formulate your initial high level idea and brainstorm it until you have a clear vision. Next, turn your idea into detailed functionality requirements for the backend programming and detail your technical requirements (platform, devices etc.) Also add non-functional requirements e.g. performance, security, load and clearly specify the scope of the project.' },
      { q: 'What type of services can I find in Programming & Tech?', a: 'Starting with web development for client-side (frontend) and server-side (backend), the category also offers specialists in Wordpress and e-commerce development, mobile or desktop apps, support & cybersecurity, as well as user testing and QA.' },
      { q: 'How do I find good developers on HubX?', a: 'HubX offers a huge choice of developers, so refine your requirements to determine whether you need a full-stack developer - proficient at both backend (server-side) and frontend (client-side) or a more narrow specialist. Get quotes and discuss your needs with at least 3 developers for an informed decision.' },
      { q: 'Can I hire developers in less than 48 hours?', a: 'Yes, on HubX we have developers worldwide available 24/7. If you need urgent bug fixing, have a cyber security emergency or a server load issue, you can be sure that a professional on HubX is within reach. Publish a buyer request or make direct contact for best results.' }
    ],
    related: [
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

export default ProgrammingTech