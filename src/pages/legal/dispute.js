const DisputeResolution = () => {
  const disputes = [
    {
      id: 'channels',
      title: 'Communication Channels:',
      para: [
        'We encourage open and honest communication between all parties involved in a dispute. The following communication channels are available for resolving conflicts:',
        ['Primary Channel: Customers should first attempt to resolve the dispute by contacting our customer support team through their preferred mode of communication (phone, email, live chat, etc.). Our support team will make every effort to address the issue and find a satisfactory resolution.',
        'Supervisor or Manager: If the customer is not satisfied with the initial response or feels that the issue requires further attention, they can request to escalate the matter to a supervisor or manager. This can be done by asking the support agent to escalate the issue or by submitting a written request to the designated escalation contact.',
        'Executive Team: If the dispute remains unresolved after escalation to a supervisor or manager, the customer has the option to escalate the matter further to the executive team. They can submit a written request to the executive team contact, clearly outlining the issue and the previous steps taken to resolve it.']
      ]
    },
    {
      id: 'timelines',
      title: 'Timelines and Response Times:',
      para: [
        'We value prompt resolution of disputes and commit to responding to customer concerns within reasonable timeframes. The following response times should be adhered to:',
        ['Primary Channel: Our customer support team will acknowledge receipt of the dispute within [X] business days and provide an initial response within [X] business days. If further investigation is required, the customer will be informed of the expected timeline for resolution.', 'Supervisor or Manager: Upon escalation, a supervisor or manager will acknowledge the escalation within [X] business days and provide an initial response within [X] business days. They will also communicate the anticipated timeline for resolving the dispute or escalating it to the executive team.', 'Executive Team: In case of escalation to the executive team, they will acknowledge receipt of the escalation within [X] business days and provide an initial response within [X] business days. They will also communicate the timeline for resolving the dispute and their plan of action.']
      ]
    },
    {
      id: 'process',
      title: 'Dispute Resolution Process:',
      para: [
        'The following steps outline the general dispute resolution process:',
        ['Investigation: Upon receiving a dispute, the designated team will thoroughly investigate the matter, reviewing all relevant information and records. They may request additional information or evidence from the customer or any other involved party.', 'Mediation and Negotiation: Our team will engage in a cooperative discussion with the customer to understand their concerns and explore potential resolutions. Mediation and negotiation aim to find a mutually agreeable solution that satisfies all parties involved.', 'Escalation: If the dispute remains unresolved after initial investigation and negotiation, it may be escalated to higher levels of management or the executive team, as outlined in section 2.', 'Final Decision: After considering all available information and attempting to reach a fair resolution, a final decision will be made by the authorised personnel. This decision will be communicated to the customer in writing, along with the rationale behind it.']
      ]
    },
    {
      id: 'review',
      title: 'Review and Continuous Improvement:',
      para: [
        'We understand the importance of learning from disputes and continuously improving our processes. Regular reviews will be conducted to identify recurring issues, evaluate the effectiveness of the dispute handling policy, and implement necessary changes to prevent similar disputes in the future.'
      ]
    },
    {
      id: 'confidence',
      title: 'Confidentiality and Data Protection:',
      para: [
        'All information shared during the dispute handling process will be treated with strict confidentiality and handled in accordance with our privacy and data protection policies. Personal information will only be used for the purpose of resolving the dispute and will not be disclosed to any unauthorised parties.'
      ]
    },
    {
      id: 'regulations',
      title: 'Compliance with Applicable Laws and Regulations:',
      para: [
        'This Dispute Handling / Escalation Policy complies with all relevant laws and regulations governing dispute resolution and consumer rights. We are committed to ensuring fairness, transparency, and compliance throughout the process.'
      ]
    }
  ]
  const content = (
    <main>
      <section>
        <div className='relative overflow-hidden'>
          <div aria-hidden='true' className='flex absolute -top-96 left-1/2 transform -translate-x-1/2'>
            <div className='bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900'></div>
            <div className='bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70'></div>
          </div>

          <div className='relative z-10'>
            <div className='max-w-[85rem] mx-auto mt-[5rem] px-8 py-10 lg:mt-[10rem]'>
              <div className='max-w-2xl text-center mx-auto'>
                <p className='inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400'>
                  HubX: A vision for 2023
                </p>

                <div className='mt-5 max-w-2xl'>
                  <h1 className='block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
                    Handling disputes/escalation policy
                  </h1>
                </div>

                <div className='mt-5 max-w-3xl'>
                  <p className='text-lg text-gray-600 dark:text-gray-400'>Last updated: Monday 26th, June 2023.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 sm:py-24 lg:py-36'>
          <div className='sm:flex sm:flex-wrap'>
            <div className='w-full hidden sm:block mt-16 sm:w-1/3 md:w-1/4 lg:w-1/5 sm:pr-3 md:pr-4 lg:pr-8 order-3 sm:order-1'>
              <div className='sm:float-right sm:text-right leading-7 tracking-tight sm:sticky sm:top-4'>
                {disputes.map((c, i) => (
                  <div key={i} className='pb-3 hover:text-blue-600'><a href={'#'+ c.id}>{c.title}</a></div>
                ))}
              </div>
            </div>
            
            <div className='w-full sm:w-2/3 md:w-3/4 lg:w-4/5 order-1 sm:order-2'>
              <div>
                <p>At HUBX, we strive to provide exceptional service to our customers and maintain positive relationships. However, we understand that disputes and conflicts can sometimes arise. This document outlines our Dispute Handling / Escalation Policy, which serves as a guideline for addressing and resolving disputes in a fair, timely, and efficient manner.</p>
              </div>
              <div>
                <div className='text-base leading-7 text-gray-700 dark:text-gray-300'>
                  {
                    disputes.map((dispute, idx) => (
                    <div key={idx}>
                      <h3 id={dispute.id} className='mt-12 text-2xl font-bold tracking-tight'>
                        {dispute.title}
                      </h3>
                      {dispute.para.map((c, id) => (
                        Array.isArray(c) ? 
                        c.map((p, i) => 
                          <div key={i} className='mt-3 flex'>
                            <p className='mr-4 font-semibold'>{i + 1 + '.'}</p>
                            <p>{p}</p>
                          </div>
                        ) :
                        <p key={id} className='mt-3'>{c}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
  return content
}

export default DisputeResolution