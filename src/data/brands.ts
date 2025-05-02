export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  image: string;
  gallery: string[];
  clientInfo: {
    industry: string;
    size: string;
    location: string;
  };
  features: string[];
  results: {
    metric: string;
    value: string;
  }[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-assistant-platform',
    name: 'AI Assistant Platform',
    shortDescription: 'Conversational AI assistant with multi-domain knowledge for enterprise customer support.',
    fullDescription: 'An enterprise-grade AI assistant platform that integrates with existing knowledge bases to provide accurate, context-aware responses across multiple domains. The system leverages advanced NLP and machine learning to continuously improve response accuracy and reduce human intervention.',
    category: 'AI Automation',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1677442340357-10ca1473bfec?q=80&w=1932&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1677442340357-10ca1473bfec?q=80&w=1932&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1671986844784-7ec08bf19a65?q=80&w=2071&auto=format&fit=crop'
    ],
    clientInfo: {
      industry: 'Financial Services',
      size: 'Enterprise',
      location: 'Global'
    },
    features: [
      'Natural Language Understanding',
      'Multi-channel Integration',
      'Real-time Analytics Dashboard',
      'Seamless Knowledge Base Integration'
    ],
    results: [
      {
        metric: 'Customer Support Cost Reduction',
        value: '40%'
      },
      {
        metric: 'Customer Satisfaction',
        value: 'Increased by 35%'
      },
      {
        metric: 'Resolution Time',
        value: 'Decreased by 60%'
      }
    ],
    demoUrl: 'https://ai-assistant-demo.example.com',
    caseStudyUrl: 'https://example.com/case-studies/ai-assistant'
  },
  {
    id: 'workflow-automation-saas',
    name: 'Workflow Automation SaaS',
    shortDescription: 'No-code platform for business process automation with AI-powered optimization.',
    fullDescription: 'A comprehensive SaaS platform enabling businesses to automate complex workflows without coding. The system features AI-powered process optimization that analyzes execution patterns and suggests improvements, resulting in significant efficiency gains.',
    category: 'SaaS',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop'
    ],
    clientInfo: {
      industry: 'Healthcare',
      size: 'Mid-market',
      location: 'North America'
    },
    features: [
      'Visual Workflow Builder',
      'Custom Integration Framework',
      'AI Optimization Engine',
      'Advanced Analytics'
    ],
    results: [
      {
        metric: 'Process Efficiency',
        value: 'Improved by 65%'
      },
      {
        metric: 'Manual Labor Hours',
        value: 'Reduced by 75%'
      },
      {
        metric: 'ROI',
        value: '320% within 6 months'
      }
    ],
    demoUrl: 'https://workflow-automation.example.com',
    caseStudyUrl: 'https://example.com/case-studies/workflow-automation'
  },
  {
    id: 'e-commerce-intelligence',
    name: 'E-Commerce Intelligence',
    shortDescription: 'AI-driven e-commerce platform with predictive analytics and personalization.',
    fullDescription: 'A next-generation e-commerce platform powered by AI that delivers personalized shopping experiences based on real-time customer behavior analysis. The system includes predictive inventory management and dynamic pricing models that maximize revenue.',
    category: 'Web Development',
    technologies: ['Next.js', 'TailwindCSS', 'GraphQL', 'AWS', 'Elasticsearch'],
    image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631624217902-d14c634ab17c?q=80&w=2069&auto=format&fit=crop'
    ],
    clientInfo: {
      industry: 'Retail',
      size: 'Enterprise',
      location: 'Europe'
    },
    features: [
      'AI-Powered Product Recommendations',
      'Behavioral Analytics',
      'Predictive Inventory Management',
      'Dynamic Pricing Engine'
    ],
    results: [
      {
        metric: 'Conversion Rate',
        value: 'Increased by 28%'
      },
      {
        metric: 'Average Order Value',
        value: 'Increased by 15%'
      },
      {
        metric: 'Customer Retention',
        value: 'Improved by 40%'
      }
    ],
    demoUrl: 'https://ecommerce-intelligence.example.com',
    caseStudyUrl: 'https://example.com/case-studies/ecommerce-intelligence'
  }
];