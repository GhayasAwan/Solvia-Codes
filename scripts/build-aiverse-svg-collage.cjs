const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\FAIZANz COMp\\.gemini\\antigravity-ide\\brain\\18c53a19-8d10-4756-a69c-2dee9c7967dd\\.user_uploaded';

// 4 images uploaded by user
const img1 = fs.readFileSync(path.join(uploadDir, 'media_1787584181483.png')).toString('base64'); // Speaking Task Evaluation
const img2 = fs.readFileSync(path.join(uploadDir, 'media_1787584181556.png')).toString('base64'); // Dashboard
const img3 = fs.readFileSync(path.join(uploadDir, 'media_1787584181587.png')).toString('base64'); // Vocabulary
const img4 = fs.readFileSync(path.join(uploadDir, 'media_1787584181600.png')).toString('base64'); // Admin Portal

// Build full-bleed, edge-to-edge 1600x900 SVG Collage
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16010B" />
      <stop offset="35%" stop-color="#34041A" />
      <stop offset="70%" stop-color="#540728" />
      <stop offset="100%" stop-color="#0E0107" />
    </linearGradient>

    <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD1E3" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#EAA1BD" stop-opacity="0.7" />
    </linearGradient>

    <!-- Deep Drop Shadows -->
    <filter id="deepShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.65" />
    </filter>

    <filter id="floatingShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#000000" flood-opacity="0.8" />
    </filter>

    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="80" result="blur" />
    </filter>

    <!-- Clip Paths for rounded windows (775x425) -->
    <clipPath id="clipTopLeft">
      <rect x="0" y="0" width="775" height="391" rx="14" />
    </clipPath>
    <clipPath id="clipTopRight">
      <rect x="0" y="0" width="775" height="391" rx="14" />
    </clipPath>
    <clipPath id="clipBottomLeft">
      <rect x="0" y="0" width="775" height="391" rx="14" />
    </clipPath>
    <clipPath id="clipBottomRight">
      <rect x="0" y="0" width="775" height="391" rx="14" />
    </clipPath>
  </defs>

  <!-- Canvas Background with Mesh Glows -->
  <rect width="1600" height="900" fill="url(#bgGrad)" />

  <!-- Ambient Glow Orbs -->
  <circle cx="280" cy="200" r="320" fill="#A51556" opacity="0.4" filter="url(#softGlow)" />
  <circle cx="1320" cy="700" r="350" fill="#740938" opacity="0.5" filter="url(#softGlow)" />
  <circle cx="800" cy="450" r="240" fill="#FF8FB1" opacity="0.18" filter="url(#softGlow)" />

  <!-- Subtle Blueprint Tech Grid Pattern -->
  <g opacity="0.08" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="150" x2="1600" y2="150" />
    <line x1="0" y1="300" x2="1600" y2="300" />
    <line x1="0" y1="450" x2="1600" y2="450" />
    <line x1="0" y1="600" x2="1600" y2="600" />
    <line x1="0" y1="750" x2="1600" y2="750" />
    <line x1="200" y1="0" x2="200" y2="900" />
    <line x1="400" y1="0" x2="400" y2="900" />
    <line x1="600" y1="0" x2="600" y2="900" />
    <line x1="800" y1="0" x2="800" y2="900" />
    <line x1="1000" y1="0" x2="1000" y2="900" />
    <line x1="1200" y1="0" x2="1200" y2="900" />
    <line x1="1400" y1="0" x2="1400" y2="900" />
  </g>

  <!-- ========================================================= -->
  <!-- 4-PANEL EDGE-TO-EDGE COLLAGE (775x425px Per Window)       -->
  <!-- ========================================================= -->

  <!-- Panel 1: Top-Left: Student Dashboard Overview -->
  <g transform="translate(18, 15)" filter="url(#deepShadow)">
    <rect width="775" height="425" rx="14" fill="#FFFFFF" stroke="url(#cardBorder)" stroke-width="2.5" />
    <!-- Window Header -->
    <path d="M 0,14 Q 0,0 14,0 L 761,0 Q 775,0 775,14 L 775,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5.5" fill="#FF5F56" />
    <circle cx="37" cy="17" r="5.5" fill="#FFBD2E" />
    <circle cx="54" cy="17" r="5.5" fill="#27C93F" />
    <text x="387" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">STUDENT PORTAL DASHBOARD</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipTopLeft)">
      <rect width="775" height="391" fill="#F8FAFC" />
      <image href="data:image/png;base64,${img2}" x="0" y="0" width="775" height="391" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Panel 2: Top-Right: Admin Management & Analytics Portal -->
  <g transform="translate(807, 15)" filter="url(#deepShadow)">
    <rect width="775" height="425" rx="14" fill="#FFFFFF" stroke="url(#cardBorder)" stroke-width="2.5" />
    <!-- Window Header -->
    <path d="M 0,14 Q 0,0 14,0 L 761,0 Q 775,0 775,14 L 775,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5.5" fill="#FF5F56" />
    <circle cx="37" cy="17" r="5.5" fill="#FFBD2E" />
    <circle cx="54" cy="17" r="5.5" fill="#27C93F" />
    <text x="387" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">ADMIN CONTROL &amp; ANALYTICS PANEL</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipTopRight)">
      <rect width="775" height="391" fill="#F8FAFC" />
      <image href="data:image/png;base64,${img4}" x="0" y="0" width="775" height="391" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Panel 3: Bottom-Left: Interactive 1000+ Vocabulary Bank -->
  <g transform="translate(18, 460)" filter="url(#deepShadow)">
    <rect width="775" height="425" rx="14" fill="#FFFFFF" stroke="url(#cardBorder)" stroke-width="2.5" />
    <!-- Window Header -->
    <path d="M 0,14 Q 0,0 14,0 L 761,0 Q 775,0 775,14 L 775,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5.5" fill="#FF5F56" />
    <circle cx="37" cy="17" r="5.5" fill="#FFBD2E" />
    <circle cx="54" cy="17" r="5.5" fill="#27C93F" />
    <text x="387" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">1,000+ IELTS VOCABULARY ENGINE</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipBottomLeft)">
      <rect width="775" height="391" fill="#F8FAFC" />
      <image href="data:image/png;base64,${img3}" x="0" y="0" width="775" height="391" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Panel 4: Bottom-Right: AI Speaking Practice & Band Evaluation -->
  <g transform="translate(807, 460)" filter="url(#deepShadow)">
    <rect width="775" height="425" rx="14" fill="#FFFFFF" stroke="url(#cardBorder)" stroke-width="2.5" />
    <!-- Window Header -->
    <path d="M 0,14 Q 0,0 14,0 L 761,0 Q 775,0 775,14 L 775,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5.5" fill="#FF5F56" />
    <circle cx="37" cy="17" r="5.5" fill="#FFBD2E" />
    <circle cx="54" cy="17" r="5.5" fill="#27C93F" />
    <text x="387" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">AI IELTS SPEAKING EVALUATION</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipBottomRight)">
      <rect width="775" height="391" fill="#F8FAFC" />
      <image href="data:image/png;base64,${img1}" x="0" y="0" width="775" height="391" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Center Floating Badge Pill -->
  <g transform="translate(800, 450)" filter="url(#floatingShadow)">
    <rect x="-195" y="-24" width="390" height="48" rx="24" fill="#740938" stroke="#FFD1E3" stroke-width="2.5" />
    <circle cx="-160" cy="0" r="9" fill="#27C93F" />
    <text x="8" y="5" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5" font-weight="900" text-anchor="middle" letter-spacing="1.5">EHUB AI VERSE • LMS &amp; PWA SUITE</text>
  </g>
</svg>`;

fs.writeFileSync('public/assets/ehub-aiverse-collage.svg', svgContent);
console.log('✅ Generated full-bleed EHub AI Verse SVG collage as ehub-aiverse-collage.svg successfully!');
