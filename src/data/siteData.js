import {
  BarChart3,
  Camera,
  Code2,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  Phone
} from 'lucide-react';

export const company = {
  name: 'Solvia Codes',
  tagline: 'SOLUTION THROUGH CODES',
  email: 'Contact@solvia.codes',
  phone: '+92 349 9088820',
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
  { label: 'Blog', to: '#blog' },
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
    title: 'EHub AI Verse - Student Portal & LMS',
    category: 'SaaS Development',
    tags: ['React', 'REST API', 'PWA', 'Tailwind CSS'],
    image: '/assets/ehub-aiverse.svg',
    summary: 'Full-stack cloud LMS & student dashboard featuring secure authentication, 2-step OTP password recovery, test preparation analytics, and PWA capabilities.',
    link: 'https://aiverse.ehubinstitute.com',
    featured: true
  },
  {
    title: 'E-Hub Institute - Official Web Platform',
    category: 'Web & UI/UX Design',
    tags: ['React', 'Vite', 'UI/UX Design', 'Performance SEO'],
    image: '/assets/ehub-institute.svg',
    summary: 'Modern, high-converting educational institute web platform with course catalog showcases, interactive achievements, and lightning-fast page speeds.',
    link: 'https://www.ehubinstitute.com',
    featured: true
  }
];

export const blogs = [
  {
    id: 'ehub-aiverse-case-study',
    title: 'Inside EHub AI Verse: Engineering a Full-Stack LMS & PWA',
    category: 'SaaS & Cloud Architecture',
    readTime: '5 min read',
    date: 'Aug 23, 2026',
    image: '/assets/ehub-aiverse.svg',
    summary: 'How we built the EHub AI Verse student portal with secure 2-step OTP recovery, interactive IELTS practice tasks, analytics dashboards, and offline-capable PWA technology.',
    link: 'https://aiverse.ehubinstitute.com',
    tags: ['EHub AI Verse', 'LMS', 'PWA', 'React', 'REST API'],
    sections: [
      {
        heading: 'Project Overview & Objectives',
        content: 'EHub AI Verse was conceived as an intelligent, high-speed learning management ecosystem tailored specifically for students preparing for IELTS and English language certifications. The primary goal was to eliminate traditional learning friction by providing a unified digital portal equipped with automated progress analytics, practice tasks, and instant device installability.'
      },
      {
        heading: 'Key Architectural Modules Built',
        bullets: [
          '2-Step OTP Authentication & Security: Implemented secure email-based OTP password recovery and encrypted session management ensuring zero account compromises.',
          'Comprehensive IELTS Practice Modules: Dedicated interactive engines for Reading (with passage timers), Listening, Writing (timed submissions), Speaking, and 1000+ Vocabulary flashcards.',
          'Student Analytics & Progress Streaks: Real-time visual dashboards tracking daily study streaks, module completion percentages, and personalized weakness analytics.',
          'Progressive Web App (PWA) Integration: Engineered complete service worker caching and web manifests allowing students to install the app natively on Android, iOS, and Desktop with offline resiliency.'
        ]
      },
      {
        heading: 'Technical Stack & Engineering Decisions',
        content: 'We utilized React 18 for component modularity, Tailwind CSS for high-performance visual design, and structured REST API bridges for real-time authentication and dashboard data fetching. By optimizing initial bundle sizes and implementing lazy routing, the portal achieves near-instant interaction speeds.'
      },
      {
        heading: 'Outcome & Measurable Impact',
        content: 'Following the launch, EHub AI Verse successfully onboarded over 1,000+ active students in its initial cycle, drastically reducing manual administration overhead and boosting daily student test practice by over 60%.'
      }
    ]
  },
  {
    id: 'ehub-institute-web-design',
    title: 'Designing for Education: The UI/UX Behind E-Hub Institute',
    category: 'UI/UX & Web Design',
    readTime: '4 min read',
    date: 'Aug 19, 2026',
    image: '/assets/ehub-institute.svg',
    summary: 'Crafting a high-converting web platform for Peshawar\'s premier English training institute — featuring royal maroon branding, dynamic course catalogs, and interactive student success showcases.',
    link: 'https://www.ehubinstitute.com',
    tags: ['E-Hub Institute', 'UI/UX Design', 'Branding', 'Design System', 'SEO'],
    sections: [
      {
        heading: 'The Vision & Brand Strategy',
        content: 'As the leading English language and IELTS training institute in Peshawar, E-Hub Institute required a digital flagship that conveyed academic prestige, trust, and modern accessibility. We developed a distinct visual identity anchored in deep royal maroon (#660033) and elegant gold accents (#C5A059), paired with editorial typography.'
      },
      {
        heading: 'Key Platform Highlights',
        bullets: [
          'High-Conversion Course Catalog: Clean, filterable course pathways for IELTS Academic & General, Spoken English, and international TEFL/TESOL teacher certifications.',
          'Student Wall of Fame & Social Proof: Highlighting real student test scores, university admissions, and verified video testimonials to build immediate applicant trust.',
          'Sub-Second Core Web Vitals: Engineered critical inline CSS and parallel font preloading to achieve an initial paint time of under 0.4 seconds on mobile networks.',
          'Interactive Campus & Event Showcases: Fluid multimedia galleries documenting British Council partnership meets, student graduations, and masterclasses.'
        ]
      },
      {
        heading: 'Local SEO & Discoverability',
        content: 'Integrated comprehensive Schema.org JSON-LD structured data (Organization, LocalBusiness, Service ItemLists, and FAQPage schemas) with localized geo-coordinates (Peshawar, PK-KP) to secure top-tier organic search rankings.'
      },
      {
        heading: 'Business Results',
        content: 'The new digital platform resulted in a 45% increase in online student enrollment inquiries within the first month and delivered a seamless gateway into the EHub AI Verse student portal.'
      }
    ]
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
    answer: 'You can reach us by emailing contact@solvia.codes or calling +92 349 9088820. You can also fill out the contact form on our website and we will get back to you within 24 hours.'
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
