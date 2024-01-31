export const COURSES = [
  'Software Engineering','Medicine and Surgery','Pharmacy','Geology','Computer Science'
]

export const LOCATIONS = [
  'Nigeria','United Kingdom','United States','China','Israel'
]

export const SCHOLARSHIPS = [
  {
    id: 1,
    logo: '',
    title: 'Gates Cambridge Scholarship',
    about: ['The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation to the University of Cambridge; this is the largest ever single donation to a UK university.', 'Each year Gates Cambridge offers c.80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue a postgraduate degree in any subject available at the University of Cambridge. Approximately two-thirds of these awards will be offered to PhD students, with approximately 25 awards available in the US round and 55 available in the International round.', 'There are at least 225 Scholars from c. 50 countries studying in Cambridge at any one time who pursue the full range of subjects available at the University and are spread across its departments and Colleges.', 'The Gates Cambridge mission is to build a global network of future leaders committed to improving the lives of others. It aims to achieve this mission by selecting outstanding scholars, providing them with financial and non-financial support at one of the world’s leading universities and facilitating community building at and beyond Cambridge.'],
    email: 'info@gatescambridge.org',
    website: 'https://www.gatescambridge.org/',
    award: {
      value: '£30,000 ~ £60,000 (annual)',
      duration: 'Course length',
      purpose: {
        tags: ['Fees (International)', 'Maintenance', 'Student visa cost', 'Student immigration health surcharge'],
        para: ['The Gates Cambridge Scholarship provides funds to fully cover a scholars\' non-controllable study costs. This would typically be between £30,000 - £45,000 per year. The exact amount will depend on the specific course fee and course length and whether the student is in receipt of any other funding awards.', 'In addition, the Gates Cambridge Scholarship provides a wide range of funding beyond fees and maintenance which could add up to a total funding package of around £60,000 per year.', 'This includes: a return flight and/or train ticket to Cambridge, visa costs and the NHS health surcharge; scholars are also eligible to apply for a range of discretionary funding during the tenure of their award such as Academic Development Funding for conferences and Child Allowance if bringing their child (children) with them to Cambridge. Full details can be found at https://www.gatescambridge.org/programme/the-scholarship/', 'Research costs (such as consumables) are not included as these should be covered by the University fee paid by the Trust.']
      },
      year: '2023/24',
      basis: {
        tags: ['Academic merit', 'Other (see below)'],
        para: ['Outstanding intellectual ability', 'Reasons for choice of course', 'Commitment to improving the lives of others', 'Leadership potential']
      }
    },
    eligibility: {
      who: { title: 'Who can apply?', body: ['Prospective applicant'] },
      level: { title: 'Level of study', body: ['Masters', 'PhD'] },
      mode: { title: 'Mode of study', body: ['Full Time', 'Part Time'] },
      location: { title: 'Available to', body: LOCATIONS },
      course: { title: 'Course', body: COURSES }
    },
    /* process: [
      { head: 'Opt in for funding through the Applicant Portal?', body: 'Yes', label: '' },
      { head: 'Additional questions in the Applicant Portal?', body: 'Yes' }
    ], */
    dates: {
      deadline: { local: 'Wednesday 12 October 2022', international: 'either 1 December 2022 or 5 January 2023' },
      results: { local: '01 February 2023', international: '01 April 2023' }
    }
  },
  {
    id: 2,
    logo: '',
    title: 'Canada Graduate Scholarship',
    about: ['The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation to the University of Cambridge; this is the largest ever single donation to a UK university.', 'Each year Gates Cambridge offers c.80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue a postgraduate degree in any subject available at the University of Cambridge. Approximately two-thirds of these awards will be offered to PhD students, with approximately 25 awards available in the US round and 55 available in the International round.', 'There are at least 225 Scholars from c. 50 countries studying in Cambridge at any one time who pursue the full range of subjects available at the University and are spread across its departments and Colleges.', 'The Gates Cambridge mission is to build a global network of future leaders committed to improving the lives of others. It aims to achieve this mission by selecting outstanding scholars, providing them with financial and non-financial support at one of the world’s leading universities and facilitating community building at and beyond Cambridge.'],
    email: 'info@gatescambridge.org',
    website: 'https://www.gatescambridge.org/',
    award: {
      value: '£30,000 ~ £60,000 (annual)',
      duration: 'Course length',
      purpose: {
        tags: ['Fees (International)', 'Maintenance', 'Student visa cost', 'Student immigration health surcharge'],
        para: ['The Gates Cambridge Scholarship provides funds to fully cover a scholars\' non-controllable study costs. This would typically be between £30,000 - £45,000 per year. The exact amount will depend on the specific course fee and course length and whether the student is in receipt of any other funding awards.', 'In addition, the Gates Cambridge Scholarship provides a wide range of funding beyond fees and maintenance which could add up to a total funding package of around £60,000 per year.', 'This includes: a return flight and/or train ticket to Cambridge, visa costs and the NHS health surcharge; scholars are also eligible to apply for a range of discretionary funding during the tenure of their award such as Academic Development Funding for conferences and Child Allowance if bringing their child (children) with them to Cambridge. Full details can be found at https://www.gatescambridge.org/programme/the-scholarship/', 'Research costs (such as consumables) are not included as these should be covered by the University fee paid by the Trust.']
      },
      year: '2023/24',
      basis: {
        tags: ['Academic merit', 'Other (see below)'],
        para: ['Outstanding intellectual ability', 'Reasons for choice of course', 'Commitment to improving the lives of others', 'Leadership potential']
      }
    },
    eligibility: {
      who: { title: 'Who can apply?', body: ['Prospective applicant'] },
      level: { title: 'Level of study', body: ['Masters', 'PhD'] },
      mode: { title: 'Mode of study', body: ['Full Time', 'Part Time'] },
      location: { title: 'Available to', body: LOCATIONS },
      course: { title: 'Course', body: COURSES }
    },
    /* process: [
      { head: 'Opt in for funding through the Applicant Portal?', body: 'Yes', label: '' },
      { head: 'Additional questions in the Applicant Portal?', body: 'Yes' }
    ], */
    dates: {
      deadline: { local: 'Wednesday 12 October 2022', international: 'either 1 December 2022 or 5 January 2023' },
      results: { local: '01 February 2023', international: '01 April 2023' }
    }
  },
  {
    id: 3,
    logo: '',
    title: 'Chevening Scholarship',
    about: ['The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation to the University of Cambridge; this is the largest ever single donation to a UK university.', 'Each year Gates Cambridge offers c.80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue a postgraduate degree in any subject available at the University of Cambridge. Approximately two-thirds of these awards will be offered to PhD students, with approximately 25 awards available in the US round and 55 available in the International round.', 'There are at least 225 Scholars from c. 50 countries studying in Cambridge at any one time who pursue the full range of subjects available at the University and are spread across its departments and Colleges.', 'The Gates Cambridge mission is to build a global network of future leaders committed to improving the lives of others. It aims to achieve this mission by selecting outstanding scholars, providing them with financial and non-financial support at one of the world’s leading universities and facilitating community building at and beyond Cambridge.'],
    email: 'info@gatescambridge.org',
    website: 'https://www.gatescambridge.org/',
    award: {
      value: '£30,000 ~ £60,000 (annual)',
      duration: 'Course length',
      purpose: {
        tags: ['Fees (International)', 'Maintenance', 'Student visa cost', 'Student immigration health surcharge'],
        para: ['The Gates Cambridge Scholarship provides funds to fully cover a scholars\' non-controllable study costs. This would typically be between £30,000 - £45,000 per year. The exact amount will depend on the specific course fee and course length and whether the student is in receipt of any other funding awards.', 'In addition, the Gates Cambridge Scholarship provides a wide range of funding beyond fees and maintenance which could add up to a total funding package of around £60,000 per year.', 'This includes: a return flight and/or train ticket to Cambridge, visa costs and the NHS health surcharge; scholars are also eligible to apply for a range of discretionary funding during the tenure of their award such as Academic Development Funding for conferences and Child Allowance if bringing their child (children) with them to Cambridge. Full details can be found at https://www.gatescambridge.org/programme/the-scholarship/', 'Research costs (such as consumables) are not included as these should be covered by the University fee paid by the Trust.']
      },
      year: '2023/24',
      basis: {
        tags: ['Academic merit', 'Other (see below)'],
        para: ['Outstanding intellectual ability', 'Reasons for choice of course', 'Commitment to improving the lives of others', 'Leadership potential']
      }
    },
    eligibility: {
      who: { title: 'Who can apply?', body: ['Prospective applicant'] },
      level: { title: 'Level of study', body: ['Masters', 'PhD'] },
      mode: { title: 'Mode of study', body: ['Full Time', 'Part Time'] },
      location: { title: 'Available to', body: LOCATIONS },
      course: { title: 'Course', body: COURSES }
    },
    /* process: [
      { head: 'Opt in for funding through the Applicant Portal?', body: 'Yes', label: '' },
      { head: 'Additional questions in the Applicant Portal?', body: 'Yes' }
    ], */
    dates: {
      deadline: { local: 'Wednesday 12 October 2022', international: 'either 1 December 2022 or 5 January 2023' },
      results: { local: '01 February 2023', international: '01 April 2023' }
    }
  },
  {
    id: 4,
    logo: '',
    title: 'Gates Cambridge Scholarship',
    about: ['The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation to the University of Cambridge; this is the largest ever single donation to a UK university.', 'Each year Gates Cambridge offers c.80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue a postgraduate degree in any subject available at the University of Cambridge. Approximately two-thirds of these awards will be offered to PhD students, with approximately 25 awards available in the US round and 55 available in the International round.', 'There are at least 225 Scholars from c. 50 countries studying in Cambridge at any one time who pursue the full range of subjects available at the University and are spread across its departments and Colleges.', 'The Gates Cambridge mission is to build a global network of future leaders committed to improving the lives of others. It aims to achieve this mission by selecting outstanding scholars, providing them with financial and non-financial support at one of the world’s leading universities and facilitating community building at and beyond Cambridge.'],
    email: 'info@gatescambridge.org',
    website: 'https://www.gatescambridge.org/',
    award: {
      value: '£30,000 ~ £60,000 (annual)',
      duration: 'Course length',
      purpose: {
        tags: ['Fees (International)', 'Maintenance', 'Student visa cost', 'Student immigration health surcharge'],
        para: ['The Gates Cambridge Scholarship provides funds to fully cover a scholars\' non-controllable study costs. This would typically be between £30,000 - £45,000 per year. The exact amount will depend on the specific course fee and course length and whether the student is in receipt of any other funding awards.', 'In addition, the Gates Cambridge Scholarship provides a wide range of funding beyond fees and maintenance which could add up to a total funding package of around £60,000 per year.', 'This includes: a return flight and/or train ticket to Cambridge, visa costs and the NHS health surcharge; scholars are also eligible to apply for a range of discretionary funding during the tenure of their award such as Academic Development Funding for conferences and Child Allowance if bringing their child (children) with them to Cambridge. Full details can be found at https://www.gatescambridge.org/programme/the-scholarship/', 'Research costs (such as consumables) are not included as these should be covered by the University fee paid by the Trust.']
      },
      year: '2023/24',
      basis: {
        tags: ['Academic merit', 'Other (see below)'],
        para: ['Outstanding intellectual ability', 'Reasons for choice of course', 'Commitment to improving the lives of others', 'Leadership potential']
      }
    },
    eligibility: {
      who: { title: 'Who can apply?', body: ['Prospective applicant'] },
      level: { title: 'Level of study', body: ['Masters', 'PhD'] },
      mode: { title: 'Mode of study', body: ['Full Time', 'Part Time'] },
      location: { title: 'Available to', body: LOCATIONS },
      course: { title: 'Course', body: COURSES }
    },
    /* process: [
      { head: 'Opt in for funding through the Applicant Portal?', body: 'Yes', label: '' },
      { head: 'Additional questions in the Applicant Portal?', body: 'Yes' }
    ], */
    dates: {
      deadline: { local: 'Wednesday 12 October 2022', international: 'either 1 December 2022 or 5 January 2023' },
      results: { local: '01 February 2023', international: '01 April 2023' }
    }
  },
  {
    id: 5,
    logo: '',
    title: 'Gates Cambridge Scholarship',
    about: ['The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation to the University of Cambridge; this is the largest ever single donation to a UK university.', 'Each year Gates Cambridge offers c.80 full-cost scholarships to outstanding applicants from countries outside the UK to pursue a postgraduate degree in any subject available at the University of Cambridge. Approximately two-thirds of these awards will be offered to PhD students, with approximately 25 awards available in the US round and 55 available in the International round.', 'There are at least 225 Scholars from c. 50 countries studying in Cambridge at any one time who pursue the full range of subjects available at the University and are spread across its departments and Colleges.', 'The Gates Cambridge mission is to build a global network of future leaders committed to improving the lives of others. It aims to achieve this mission by selecting outstanding scholars, providing them with financial and non-financial support at one of the world’s leading universities and facilitating community building at and beyond Cambridge.'],
    email: 'info@gatescambridge.org',
    website: 'https://www.gatescambridge.org/',
    award: {
      value: '£30,000 ~ £60,000 (annual)',
      duration: 'Course length',
      purpose: {
        tags: ['Fees (International)', 'Maintenance', 'Student visa cost', 'Student immigration health surcharge'],
        para: ['The Gates Cambridge Scholarship provides funds to fully cover a scholars\' non-controllable study costs. This would typically be between £30,000 - £45,000 per year. The exact amount will depend on the specific course fee and course length and whether the student is in receipt of any other funding awards.', 'In addition, the Gates Cambridge Scholarship provides a wide range of funding beyond fees and maintenance which could add up to a total funding package of around £60,000 per year.', 'This includes: a return flight and/or train ticket to Cambridge, visa costs and the NHS health surcharge; scholars are also eligible to apply for a range of discretionary funding during the tenure of their award such as Academic Development Funding for conferences and Child Allowance if bringing their child (children) with them to Cambridge. Full details can be found at https://www.gatescambridge.org/programme/the-scholarship/', 'Research costs (such as consumables) are not included as these should be covered by the University fee paid by the Trust.']
      },
      year: '2023/24',
      basis: {
        tags: ['Academic merit', 'Other (see below)'],
        para: ['Outstanding intellectual ability', 'Reasons for choice of course', 'Commitment to improving the lives of others', 'Leadership potential']
      }
    },
    eligibility: {
      who: { title: 'Who can apply?', body: ['Prospective applicant'] },
      level: { title: 'Level of study', body: ['Masters', 'PhD'] },
      mode: { title: 'Mode of study', body: ['Full Time', 'Part Time'] },
      location: { title: 'Available to', body: LOCATIONS },
      course: { title: 'Course', body: COURSES }
    },
    /* process: [
      { head: 'Opt in for funding through the Applicant Portal?', body: 'Yes', label: '' },
      { head: 'Additional questions in the Applicant Portal?', body: 'Yes' }
    ], */
    dates: {
      deadline: { local: 'Wednesday 12 October 2022', international: 'either 1 December 2022 or 5 January 2023' },
      results: { local: '01 February 2023', international: '01 April 2023' }
    }
  }
]