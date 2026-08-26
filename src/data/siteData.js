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
  { label: 'Blog', to: '/blog' },
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
    id: 1,
    title: 'EHub AI Verse - Student Portal & LMS',
    category: 'SaaS Development',
    tags: ['React', 'REST API', 'PWA', 'Tailwind CSS'],
    image: '/assets/ehub-aiverse-1-login.svg',
    images: [
      '/assets/ehub-aiverse-1-login.svg',
      '/assets/ehub-aiverse-2-dashboard.svg',
      '/assets/ehub-aiverse-3-vocab.svg',
      '/assets/ehub-aiverse-4-band.svg'
    ],
    summary: 'Full-stack cloud LMS & student dashboard featuring secure authentication, 2-step OTP password recovery, test preparation analytics, and PWA capabilities.',
    link: '#',
    featured: true
  },
  {
    id: 2,
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
    title: 'How We Built EHub AI Verse: Online IELTS Preparation Portal',
    category: 'SaaS & Web App',
    readTime: '5 min read',
    date: 'Aug 23, 2026',
    image: '/assets/ehub-aiverse-collage.svg',
    summary: 'How Solvia Codes developed a smart student portal and mobile app for E-Hub Institute, allowing students to practice IELTS Reading, Writing, Listening, and AI Speaking tests from home.',
    link: '#',
    tags: ['EHub AI Verse', 'Student Portal', 'React', 'AI Speaking Evaluation', 'Mobile App'],
    sections: [
      {
        heading: 'Why E-Hub Institute Needed This Portal',
        content: 'Previously, students and teachers relied entirely on physical paper worksheets and in-person checks. Teachers faced heavy workloads checking papers manually, while students could not practice listening or speaking tasks properly from home. E-Hub Institute wanted a modern, easy-to-use digital portal and mobile app where students could practice anytime and track their preparation progress.'
      },
      {
        heading: 'Fast 15-Day Delivery & AI Speaking Evaluation',
        content: 'Solvia Codes built and delivered the complete platform in just 15 days. The biggest achievement was developing the AI Speaking Task Evaluation — enabling students to record cue card responses via microphone and receive an instant, accurate IELTS band score (Band 1.0 to 9.0) with detailed evaluation feedback.'
      },
      {
        heading: 'Key Features Delivered',
        bullets: [
          'Personalized Student Dashboard: Daily study streak tracking, progress overview, and continuing where you left off.',
          'Complete 4-Module IELTS Engine: Reading with countdown timers, Listening with audio tracks, Writing with word counters, and Speaking with instant AI band scores.',
          '1,000+ IELTS Vocabulary Engine: Audio pronunciation for every word with difficulty levels and search filters.',
          'Admin Management Panel: Student management, task assignments, activity curves, and performance leaderboards.',
          'Installable Mobile App (PWA): Students can install the portal directly onto Android, iOS, and PC without any app store setup.',
          'Secure 2-Step OTP Login: Email-based password recovery and secure student accounts.'
        ]
      },
      {
        heading: 'Technology Used',
        content: 'We used React and Tailwind CSS for a fast, responsive interface, combined with Progressive Web App (PWA) technology for mobile installation. The backend uses secure Node.js APIs and cloud databases, integrated with speech recognition for real-time speaking test analysis.'
      },
      {
        heading: 'Results & Success',
        content: 'All active IELTS students of E-Hub Institute now use the portal daily. Teachers save over 70% of their manual checking time, and the institute successfully transitioned to a modern, fully digital ed-tech learning environment.'
      }
    ]
  },
  {
    id: 'ehub-institute-web-design',
    title: 'How We Rebuilt E-Hub Institute\'s Official Website & AI Chatbot in 1 Week',
    category: 'Website & AI Assistant',
    readTime: '4 min read',
    date: 'Aug 19, 2026',
    image: '/assets/ehub-institute.svg',
    summary: 'How Solvia Codes restored E-Hub Institute\'s lost online presence after a website suspension by designing, building, and deploying a new high-speed website with an AI assistant in just 7 days.',
    link: 'https://www.ehubinstitute.com',
    tags: ['E-Hub Institute', 'Web Development', 'AI Chatbot', 'React', 'SEO Recovery', '1-Week Delivery'],
    sections: [
      {
        heading: 'The Crisis: Website Suspension & Lost Online Presence',
        content: 'E-Hub Institute faced a critical situation when their previous website was suspended due to technical strikes, completely removing them from Google search results. This wiped out their digital presence in Peshawar, leaving students unable to find courses, contact administration, or verify credentials online. They needed an urgent, modern website built from scratch to restore their reputation.'
      },
      {
        heading: 'Fast 1-Week Turnaround: Design to Deployment',
        content: 'Solvia Codes mobilized immediately to design, develop, and deploy a brand new official web platform in just 7 days. We crafted a premium royal maroon visual identity, engineered lightning-fast page loading speeds under 0.4 seconds, and structured localized SEO data to rapidly rebuild Google search authority.'
      },
      {
        heading: 'Key Features & Interactive AI Chatbot',
        bullets: [
          '24/7 AI Student Chatbot: An intelligent virtual assistant built into the website to automatically answer student questions regarding course details, timings, and fee structures.',
          'Comprehensive Course Catalog: Clean, filterable sections for IELTS Academic & General, Spoken English, and International Teacher Certifications.',
          'Student Wall of Fame: Highlighting real student scorecards (Band 7.5+ and 8.0+) to establish instant trust and social proof.',
          'British Council Partner Showcase: Highlighting official certifications and partnership credentials.',
          'Quick Admission Inquiry Forms: Streamlined mobile-friendly contact forms delivering instant student leads to management.'
        ]
      },
      {
        heading: 'Modern Tech Stack & SEO Recovery',
        content: 'Built using React, Vite, and Tailwind CSS for exceptional responsiveness on mobile devices. We implemented comprehensive Schema.org JSON-LD structured data and geo-targeted meta profiling to ensure Google immediately re-indexed the institute\'s official domain.'
      },
      {
        heading: 'Results & Restored Digital Authority',
        content: 'The launch completely solved the institute\'s digital absence. E-Hub Institute re-established strong Google profiling for IELTS and English training in Peshawar, while the integrated AI chatbot automated student inquiries round the clock.'
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
