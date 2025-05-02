import { Brand, Outlet as OutletType } from '../types/index';

export const outlets: OutletType[] = [
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
