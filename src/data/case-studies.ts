import { Brand, Outlet as OutletType, CaseStudy } from '../types/index';

export const outlets = [
  {
    id: 'swiftfunnels-agent',
    name: 'SwiftFunnels AI Agent',
    description: 'Closed 40% more leads with a custom AI agent that handles inbound queries, routes leads, and syncs to CRM in real time.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    address: 'Deployed for SwiftFunnels across all social channels and web chat.',
    city: 'Remote',
    phone: 'AI Agent Only',
    hours: '24/7',
    mapLink: 'https://aurea.ai/case-studies/swiftfunnels',
    rating: 5.0,
    brand: 'AIM'
  },
  {
    id: 'taskbolt-mvp',
    name: 'TaskBolt MVP Launch',
    description: 'Built and launched a full-stack MVP in 10 days using Supabase, Tailwind, and automated form-to-dashboard workflows.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    address: 'Startup HQ – Pune, India',
    city: 'Pune',
    phone: '+91 98765 43210',
    hours: 'Mon–Sat 10:00 AM - 7:00 PM',
    mapLink: 'https://aurea.ai/case-studies/taskbolt',
    rating: 4.9,
    brand: 'AIM'
  },
  {
    id: 'luxeglow-automation',
    name: 'LuxeGlow Salon Automation',
    description: 'Saved 25+ hours/month with WhatsApp AI bots handling bookings, reminders, and customer queries.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    address: 'Pan-India deployment in all LuxeGlow outlets.',
    city: 'Mumbai',
    phone: '+91 99887 77665',
    hours: '10:00 AM - 8:00 PM',
    mapLink: 'https://aurea.ai/case-studies/luxeglow',
    rating: 4.8,
    brand: 'AIM'
  },
  {
    id: 'verofinance-website',
    name: 'Vero Finance Website Revamp',
    description: 'Doubled sign-ups with a conversion-focused redesign and high-performance landing pages tailored for fintech.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    address: 'Vero HQ, Bengaluru',
    city: 'Bengaluru',
    phone: '+91 90123 45678',
    hours: 'Mon–Fri 9:00 AM - 6:00 PM',
    mapLink: 'https://aurea.ai/case-studies/verofinance',
    rating: 4.95,
    brand: 'AIM'
  },
  {
    id: 'orbitstudios-tool',
    name: 'Orbit Studios Internal Tool',
    description: 'Replaced 5 different tools with one internal dashboard to manage projects, clients, and reports seamlessly.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    address: 'Orbit Studios, New Delhi',
    city: 'New Delhi',
    phone: '+91 92123 45678',
    hours: 'Mon–Sat 10:00 AM - 7:00 PM',
    mapLink: 'https://aurea.ai/case-studies/orbitstudios',
    rating: 4.9,
    brand: 'AIM'
  },
  {
    id: 'corefit-fullfunnel',
    name: 'CoreFit Full Funnel System',
    description: 'Built a lead-converting ecosystem: website → AI agent → email workflows → CRM. 24/7 growth engine.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    address: 'CoreFit Academy HQ, Hyderabad',
    city: 'Hyderabad',
    phone: '+91 99888 33445',
    hours: 'Mon–Sat 9:00 AM - 9:00 PM',
    mapLink: 'https://aurea.ai/case-studies/corefit',
    rating: 5.0,
    brand: 'AIM'
  }
];

export type Outlet = OutletType;

export const caseStudies: CaseStudy[] = [
  {
    id: 'smart-city',
    title: 'Smart City Initiative',
    client: 'Urban Development Corporation',
    industry: 'Urban Development',
    timeline: '2 Years',
    clientDescription: 'A visionary project aimed at transforming urban living through sustainable infrastructure and digital innovation.',
    challenge: 'The city faced challenges with outdated infrastructure, inefficient public services, and growing environmental concerns. The need for a comprehensive smart city solution was critical to improve quality of life and sustainability.',
    solution: 'We implemented a holistic smart city solution integrating IoT, AI, and sustainable technologies to create an efficient, eco-friendly urban environment.',
    approach: [
      'Conducted comprehensive city-wide assessment and stakeholder interviews',
      'Developed a phased implementation strategy focusing on critical infrastructure',
      'Implemented smart traffic management and public transportation systems',
      'Deployed IoT sensors for environmental monitoring and resource management',
      'Created a centralized digital governance platform for citizen services'
    ],
    results: [
      { metric: 'Traffic Congestion', value: '40% reduction' },
      { metric: 'Energy Consumption', value: '25% decrease' },
      { metric: 'Citizen Satisfaction', value: '90% rate' },
      { metric: 'Public Transport Usage', value: '50% increase' }
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      results: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    relatedCaseStudies: ['green-energy', 'urban-mobility'],
    quote: {
      text: 'The Smart City Initiative has transformed our urban landscape, making it more efficient, sustainable, and citizen-friendly.',
      author: 'John Smith',
      role: 'CEO, Urban Development Corporation'
    },
    technologies: [
      'IoT Sensors',
      'AI & Machine Learning',
      'Cloud Computing',
      'Big Data Analytics',
      'Smart Grid Technology',
      'Mobile Applications'
    ],
    ctaText: 'Transform your city with our smart solutions. Let\'s build a sustainable future together.',
    ctaLink: '/contact'
  },
  {
    id: 'green-energy',
    title: 'Green Energy Park',
    client: 'Renewable Energy Solutions',
    industry: 'Energy',
    timeline: '18 Months',
    clientDescription: 'A pioneering project in renewable energy, combining solar and wind power solutions to create a sustainable energy ecosystem.',
    challenge: 'The region faced energy shortages and heavy reliance on non-renewable sources. The challenge was to create a scalable, sustainable energy solution that could meet growing demand.',
    solution: 'We developed an integrated renewable energy park combining solar, wind, and energy storage solutions to create a reliable, sustainable power source.',
    approach: [
      'Conducted detailed site analysis and energy demand assessment',
      'Designed hybrid solar-wind power generation system',
      'Implemented advanced energy storage solutions',
      'Created smart grid integration for efficient power distribution',
      'Developed monitoring and maintenance systems'
    ],
    results: [
      { metric: 'Energy Generation', value: '100MW capacity' },
      { metric: 'Carbon Emissions', value: '60% reduction' },
      { metric: 'Cost Savings', value: '30% reduction' },
      { metric: 'Households Powered', value: '50,000+' }
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522039553440-46dc941d6b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      results: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    relatedCaseStudies: ['smart-city', 'sustainable-housing'],
    quote: {
      text: 'The Green Energy Park has revolutionized our approach to sustainable energy, setting new standards for renewable power generation.',
      author: 'Sarah Johnson',
      role: 'Director, Renewable Energy Solutions'
    },
    technologies: [
      'Solar Panels',
      'Wind Turbines',
      'Energy Storage Systems',
      'Smart Grid Technology',
      'Energy Management Software',
      'IoT Monitoring'
    ],
    ctaText: 'Power your future with sustainable energy solutions. Let\'s create a greener tomorrow.',
    ctaLink: '/contact'
  },
  {
    id: 'digital-education',
    title: 'Digital Education Hub',
    client: 'Education Innovation Foundation',
    industry: 'Education',
    timeline: '1 Year',
    clientDescription: 'A transformative project creating a modern digital learning environment for students and educators.',
    challenge: 'Traditional education systems were struggling to adapt to digital learning needs, with limited access to technology and outdated teaching methods.',
    solution: 'We created a comprehensive digital education platform integrating modern technology with innovative teaching methodologies.',
    approach: [
      'Developed interactive digital learning platform',
      'Created virtual laboratory environments',
      'Implemented AI-powered learning assistance',
      'Established digital library and resource center',
      'Trained educators in digital teaching methodologies'
    ],
    results: [
      { metric: 'Student Engagement', value: '95% rate' },
      { metric: 'Learning Outcomes', value: '40% improvement' },
      { metric: 'Active Users', value: '10,000+' },
      { metric: 'Teacher Satisfaction', value: '80% rate' }
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      results: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    relatedCaseStudies: ['healthcare', 'sustainable-housing'],
    quote: {
      text: 'The Digital Education Hub has transformed how we deliver education, making learning more accessible and engaging for all students.',
      author: 'Dr. Michael Chen',
      role: 'President, Education Innovation Foundation'
    },
    technologies: [
      'Learning Management System',
      'Virtual Reality',
      'Artificial Intelligence',
      'Cloud Computing',
      'Mobile Applications',
      'Data Analytics'
    ],
    ctaText: 'Revolutionize your educational institution with our digital solutions. Let\'s shape the future of learning.',
    ctaLink: '/contact'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Innovation Center',
    client: 'Medical Research Institute',
    industry: 'Healthcare',
    timeline: '2 Years',
    clientDescription: 'A state-of-the-art facility combining medical research with advanced healthcare technology.',
    challenge: 'The healthcare system needed modernization with integration of AI and telemedicine capabilities while maintaining high standards of patient care.',
    solution: 'We developed an integrated healthcare innovation center combining research, technology, and patient care.',
    approach: [
      'Implemented AI-powered diagnostic systems',
      'Created telemedicine infrastructure',
      'Developed research collaboration platforms',
      'Established digital patient management systems',
      'Integrated advanced medical equipment'
    ],
    results: [
      '50% reduction in diagnosis time',
      '30% increase in research efficiency',
      '90% patient satisfaction rate',
      '40% improvement in treatment outcomes'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: [
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ]
    },
    relatedCaseStudies: ['digital-education', 'urban-mobility']
  },
  {
    id: 'sustainable-housing',
    title: 'Sustainable Housing Project',
    client: 'Green Living Foundation',
    industry: 'Real Estate',
    timeline: '3 Years',
    clientDescription: 'An eco-friendly residential development incorporating smart home technology and sustainable living solutions.',
    challenge: 'Urban housing needed to become more sustainable and energy-efficient while maintaining affordability and modern amenities.',
    solution: 'We created a sustainable housing community with smart home technology and eco-friendly infrastructure.',
    approach: [
      'Implemented green building materials and techniques',
      'Installed smart home automation systems',
      'Created community renewable energy solutions',
      'Developed waste management systems',
      'Established green spaces and community areas'
    ],
    results: [
      '70% reduction in energy consumption',
      '90% waste recycling rate',
      '100% renewable energy usage',
      '95% resident satisfaction rate'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ]
    },
    relatedCaseStudies: ['green-energy', 'smart-city']
  },
  {
    id: 'urban-mobility',
    title: 'Urban Mobility Solution',
    client: 'City Transportation Authority',
    industry: 'Transportation',
    timeline: '2 Years',
    clientDescription: 'An integrated transportation system revolutionizing urban mobility through smart technology and sustainable solutions.',
    challenge: 'The city faced increasing traffic congestion, pollution, and inefficient public transportation systems.',
    solution: 'We developed a comprehensive urban mobility solution integrating public transport, EV infrastructure, and smart traffic management.',
    approach: [
      'Implemented smart traffic management systems',
      'Created EV charging infrastructure',
      'Developed integrated public transport app',
      'Established bike-sharing and micro-mobility solutions',
      'Implemented data-driven route optimization'
    ],
    results: [
      '35% reduction in traffic congestion',
      '50% increase in public transport usage',
      '25% decrease in carbon emissions',
      '80% user satisfaction rate'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: [
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ]
    },
    relatedCaseStudies: ['smart-city', 'healthcare']
  }
];
