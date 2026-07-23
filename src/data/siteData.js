import {
  BarChart3,
  Camera,
  Code2,
  Layers,
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
  location: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  address: 'Peshawar, KPK, Pakistan',
  geo: {
    latitude: '34.0151',
    longitude: '71.5249'
  }
};

export const navLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Team', to: '#team' },
  { label: 'Services', to: '#services' },
  { label: 'Work', to: '#work' },
  { label: 'FAQ', to: '#faq' },
  { label: 'Contact', to: '#contact' }
];

export const services = [
  {
    icon: Code2,
    title: 'SaaS Product Builder & Web/App Development',
    slug: 'development',
    shortTag: 'SaaS Product Builder | Web Development Pakistan',
    description:
      'We operate as a custom SaaS product builder and web app development studio in Peshawar KPK. Building scalable cloud software, responsive web apps, full-stack systems, and mobile development with high performance.'
  },
  {
    icon: Palette,
    title: 'Graphic Designing Agency & UI/UX Design',
    slug: 'design',
    shortTag: 'Graphic Designing Agency | UI/UX Studio Peshawar',
    description:
      'Professional graphic designing and branding services in Peshawar. We create custom logos, visual identity systems, modern UI/UX wireframes, design systems, and marketing graphics for startups and growing businesses.'
  },
  {
    icon: Megaphone,
    title: 'Ads Running Company & Digital Marketing',
    slug: 'marketing',
    shortTag: 'Ads Running Company | Meta & Google Ads Pakistan',
    description:
      'Meta and Google ads running agency for lead generation in Pakistan. We provide digital marketing and social media ad management in Peshawar, sales funnel setup, ROAS optimization, and high-converting campaigns.'
  }
];

export const projects = [
  {
    title: 'Business Analytics SaaS Platform',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'A custom SaaS product builder dashboard for tracking real-time customers, metrics, and cloud analytics.'
  },
  {
    title: 'Lifestyle Mobile App UI UX',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    summary: 'UI UX design and visual identity prototype created by graphic designing experts for modern mobile startups.'
  },
  {
    title: 'Retail Brand Ads Running Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80',
    summary: 'Meta and Google ads running campaign focused on target audience engagement, sales growth, and lead generation in Pakistan.'
  },
  {
    title: 'SaaS Landing & Product Website',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    summary: 'Affordable full stack software development solutions in Pakistan for enterprise web app conversion.'
  },
  {
    title: 'Startup Visual Identity & Graphic Design',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    summary: 'Professional graphic designing and branding system crafted for a fast-growing IT tech startup.'
  },
  {
    title: 'Performance Marketing Ads Sprint',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    summary: 'Digital marketing and social media ad management in Peshawar yielding high ROI and customer leads.'
  }
];

export const processSteps = [
  {
    title: 'Discovery & Requirements',
    description: 'We understand your goals, target keywords, competition in Peshawar & global markets, and plan tech stack requirements.'
  },
  {
    title: 'Design & Architecture',
    description: 'Our graphic designing agency creates visual identities, SaaS architecture, UI/UX prototypes, and ad landing concepts.'
  },
  {
    title: 'Development & Build',
    description: 'As a leading software house in Peshawar, we build web apps, custom SaaS engines, and launch Meta & Google ads.'
  },
  {
    title: 'Delivery & Growth Optimization',
    description: 'We launch digital products, review ROAS performance, provide maintenance, and drive continuous growth.'
  }
];

export const faqs = [
  {
    question: 'What services does Solvia Codes offer?',
    answer: 'Solvia Codes offers web & mobile app development, custom SaaS product building, UI/UX design, graphic designing, brand identity systems, and performance marketing including Meta Ads and Google Ads management — all from Peshawar, Pakistan.'
  },
  {
    question: 'Do you build SaaS products?',
    answer: 'Yes. We design, develop, and launch full-stack SaaS products — including multi-tenant architectures, dashboards, user auth systems, and cloud-hosted backends using React, Node.js, Python, and modern infrastructure.'
  },
  {
    question: 'Which technologies do you use?',
    answer: 'We primarily work with React, Next.js, Node.js, Python, and modern cloud services. For design, we use Figma and Adobe tools. For ads, we manage Meta Business Suite and Google Ads Manager.'
  },
  {
    question: 'How can I request a quote or start a project?',
    answer: 'You can reach us by emailing contact@solvia.codes or calling +92 310 9950325. You can also fill out the contact form on our website and we will get back to you within 24 hours.'
  },
  {
    question: 'Where is Solvia Codes located?',
    answer: 'Solvia Codes is based in Peshawar, Khyber Pakhtunkhwa, Pakistan. We serve clients locally in Pakistan as well as internationally.'
  },
  {
    question: 'Do you run Meta and Google Ads for businesses?',
    answer: 'Yes. We manage complete performance marketing campaigns on Meta (Facebook & Instagram) and Google Ads — including audience targeting, creatives, budget optimization, and ROAS reporting to drive measurable business growth.'
  }
];

export const testimonials = [
  {
    quote:
      'Solvia Codes is definitely the best IT company and software house in Peshawar Pakistan. They built our custom SaaS product builder platform seamlessly.',
    name: 'Muhammad Hamza',
    role: 'Founder, SaaS Startup'
  },
  {
    quote:
      'Their professional graphic designing and branding services in Peshawar transformed our brand identity. The UI/UX was extremely sleek!',
    name: 'Ayesha Khan',
    role: 'Product Manager, E-commerce Brand'
  },
  {
    quote:
      'As a Meta and Google ads running agency for lead generation in Pakistan, Solvia Codes skyrocketed our revenue within weeks.',
    name: 'Bilal Ahmed',
    role: 'Marketing Lead, Local Business'
  }
];

export const teamMembers = [
  {
    name: 'Lead Technical Architect',
    role: 'Founder & Senior SaaS Developer',
    focus: 'Custom SaaS product building, full-stack web apps, software architecture',
    bio: 'Oversees software development, cloud systems, and technical execution at Solvia Codes Peshawar.'
  },
  {
    name: 'Lead UI/UX & Graphic Designer',
    role: 'Creative Director & Visual Strategist',
    focus: 'Graphic designing, brand systems, UI UX prototypes',
    bio: 'Drives graphic designing agency excellence, user experience, and visual branding across all digital products.'
  },
  {
    name: 'Performance Marketing Specialist',
    role: 'Ads Running Lead & Growth Strategist',
    focus: 'Meta ads running, Google PPC, lead generation funnels',
    bio: 'Manages ads running campaigns, performance analytics, and social media marketing strategies for clients.'
  },
  {
    name: 'Project & Client Manager',
    role: 'Delivery & QA Lead',
    focus: 'Client communication, project delivery, quality control',
    bio: 'Ensures projects are delivered on time, meeting high technical and aesthetic standards.'
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
  { label: 'Project planning, SaaS consultation, graphic design & ad performance reporting available', icon: BarChart3 }
];
