import {
  BarChart3,
  Camera,
  Code2,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Palette,
  PenTool,
  Phone,
  Share2,
  Users
} from 'lucide-react';

export const company = {
  name: 'Solvia Codes',
  tagline: 'SOLUTION THROUGH CODES',
  email: 'Contact@solvia.codes',
  phone: '+92310-9950325',
  location: 'Peshawar, Pakistan'
};

export const navLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Work', to: '#work' },
  { label: 'Contact', to: '#contact' }
];

export const services = [
  {
    icon: Code2,
    title: 'Web/App Development',
    slug: 'development',
    description:
      'Custom websites, web apps, and mobile-ready digital platforms built with clean code, fast performance, and scalable architecture.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    slug: 'design',
    description:
      'Modern interfaces, user journeys, wireframes, prototypes, and design systems that make digital products clear, attractive, and easy to use.'
  },
  {
    icon: Megaphone,
    title: 'Marketing/Social Media',
    slug: 'marketing',
    description:
      'Social media strategy, content planning, campaign support, and performance tracking to help brands reach the right audience consistently.'
  }
];

export const projects = [
  {
    title: 'Business Analytics Dashboard',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'A responsive dashboard concept for tracking customers, revenue, and key business metrics in one clean interface.'
  },
  {
    title: 'Lifestyle Mobile App',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    summary: 'A mobile app interface focused on simple onboarding, habit tracking, progress insights, and smooth daily usage.'
  },
  {
    title: 'Retail Brand Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80',
    summary: 'A social media launch campaign planned around product awareness, visual content, and audience engagement.'
  },
  {
    title: 'SaaS Landing Website',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    summary: 'A conversion-focused landing website structure for explaining features, building trust, and driving inquiries.'
  },
  {
    title: 'Startup Brand System',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    summary: 'A practical visual identity and component system designed to keep product screens and marketing assets consistent.'
  },
  {
    title: 'Social Growth Sprint',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    summary: 'A focused marketing sprint covering audience research, content calendar planning, creative direction, and reporting.'
  }
];

export const processSteps = [
  {
    title: 'Discovery',
    description: 'We understand your goals, target audience, competitors, timeline, and success metrics before planning the work.'
  },
  {
    title: 'Design',
    description: 'We shape the structure, user flow, visual direction, content approach, and prototype so the solution is clear before development.'
  },
  {
    title: 'Development',
    description: 'We develop the website, app, or campaign assets with regular updates, testing, and practical improvements along the way.'
  },
  {
    title: 'Delivery',
    description: 'We launch the final work, review performance, provide handoff support, and guide the next steps for growth.'
  }
];

export const testimonials = [
  {
    quote:
      'Solvia Codes helped us turn a rough idea into a professional digital presence with clear design and strong execution.',
    name: 'Hamza Ali',
    role: 'Founder, Startup Client'
  },
  {
    quote:
      'The process was simple, professional, and focused on our users. The final interface looked modern and was easy to understand.',
    name: 'Ayesha Khan',
    role: 'Product Manager, E-commerce Brand'
  },
  {
    quote:
      'Their marketing support gave our brand a cleaner voice online and helped us plan content with more consistency.',
    name: 'Bilal Ahmed',
    role: 'Marketing Lead, Local Business'
  }
];

export const teamMembers = [
  {
    name: 'Team Member Name',
    role: 'Founder / Lead Developer',
    focus: 'Web apps, technical planning, frontend systems',
    bio: 'Add this person\'s short intro here. Mention experience, main skills, and what they handle at Solvia Codes.'
  },
  {
    name: 'Team Member Name',
    role: 'UI/UX Designer',
    focus: 'User flows, prototypes, visual design',
    bio: 'Add this person\'s short intro here. Mention design strengths, tools, and the kind of product experiences they create.'
  },
  {
    name: 'Team Member Name',
    role: 'Marketing Strategist',
    focus: 'Social media, content planning, campaigns',
    bio: 'Add this person\'s short intro here. Mention marketing approach, platforms, and how they help brands grow online.'
  },
  {
    name: 'Team Member Name',
    role: 'Project / Client Manager',
    focus: 'Communication, delivery, quality control',
    bio: 'Add this person\'s short intro here. Mention how they keep projects clear, organized, and delivered on time.'
  }
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/solvia_codes/?hl=en', icon: Camera },
  { label: 'Email', href: 'mailto:Contact@solvia.codes', icon: Mail }
];

export const contactDetails = [
  { label: company.email, icon: Mail },
  { label: company.phone, icon: Phone },
  { label: company.location, icon: MapPin },
  { label: 'Project planning, progress updates, and growth-focused reporting available', icon: BarChart3 }
];
