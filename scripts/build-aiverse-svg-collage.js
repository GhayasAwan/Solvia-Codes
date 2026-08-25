const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\FAIZANz COMp\\.gemini\\antigravity-ide\\brain\\18c53a19-8d10-4756-a69c-2dee9c7967dd\\.user_uploaded';

// 4 images uploaded by user
const img1 = fs.readFileSync(path.join(uploadDir, 'media_1787584181483.png')).toString('base64'); // Speaking Task Evaluation
const img2 = fs.readFileSync(path.join(uploadDir, 'media_1787584181556.png')).toString('base64'); // Dashboard
const img3 = fs.readFileSync(path.join(uploadDir, 'media_1787584181587.png')).toString('base64'); // Vocabulary
const img4 = fs.readFileSync(path.join(uploadDir, 'media_1787584181600.png')).toString('base64'); // Admin Portal

// Build responsive, ultra-premium 1600x900 SVG Collage
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D0316" />
      <stop offset="35%" stop-color="#4C0624" />
      <stop offset="70%" stop-color="#740938" />
      <stop offset="100%" stop-color="#1A020D" />
    </linearGradient>

    <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD1E3" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#EAA1BD" stop-opacity="0.6" />
    </linearGradient>

    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#740938" />
      <stop offset="100%" stop-color="#A51556" />
    </linearGradient>

    <!-- Deep Drop Shadows -->
    <filter id="deepShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000000" flood-opacity="0.55" />
    </filter>

    <filter id="floatingShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.65" />
    </filter>

    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="80" result="blur" />
    </filter>

    <!-- Clip Paths for rounded windows -->
    <clipPath id="clipDashboard">
      <rect x="0" y="0" width="760" height="430" rx="16" />
    </clipPath>

    <clipPath id="clipAdmin">
      <rect x="0" y="0" width="740" height="420" rx="16" />
    </clipPath>

    <clipPath id="clipVocab">
      <rect x="0" y="0" width="740" height="410" rx="16" />
    </clipPath>

    <clipPath id="clipSpeaking">
      <rect x="0" y="0" width="620" height="380" rx="16" />
    </clipPath>
  </defs>

  <!-- Canvas Background with Mesh Glows -->
  <rect width="1600" height="900" fill="url(#bgGrad)" />

  <!-- Ambient Glow Orbs -->
  <circle cx="250" cy="200" r="280" fill="#A51556" opacity="0.35" filter="url(#softGlow)" />
  <circle cx="1350" cy="700" r="320" fill="#740938" opacity="0.45" filter="url(#softGlow)" />
  <circle cx="800" cy="450" r="220" fill="#FF8FB1" opacity="0.15" filter="url(#softGlow)" />

  <!-- Subtle Blueprint Tech Grid Pattern -->
  <g opacity="0.07" stroke="#FFFFFF" stroke-width="1">
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
  <!-- 4-PANEL LAYERED COLLAGE COMPOSITION                       -->
  <!-- ========================================================= -->

  <!-- Panel 1: Top-Left: Student Dashboard Overview -->
  <g transform="translate(50, 45)" filter="url(#deepShadow)">
    <!-- Window Frame -->
    <rect width="760" height="430" rx="16" fill="#1E232D" stroke="url(#cardBorder)" stroke-width="2" />
    <!-- Window Header -->
    <path d="M 0,16 Q 0,0 16,0 L 744,0 Q 760,0 760,16 L 760,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5" fill="#FF5F56" />
    <circle cx="36" cy="17" r="5" fill="#FFBD2E" />
    <circle cx="52" cy="17" r="5" fill="#27C93F" />
    <text x="380" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">STUDENT PORTAL DASHBOARD</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipDashboard)">
      <image href="data:image/png;base64,${img2}" x="0" y="0" width="760" height="396" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Panel 2: Top-Right: Admin Management & Analytics Portal -->
  <g transform="translate(810, 45)" filter="url(#deepShadow)">
    <!-- Window Frame -->
    <rect width="740" height="420" rx="16" fill="#1E232D" stroke="url(#cardBorder)" stroke-width="2" />
    <!-- Window Header -->
    <path d="M 0,16 Q 0,0 16,0 L 724,0 Q 740,0 740,16 L 740,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5" fill="#FF5F56" />
    <circle cx="36" cy="17" r="5" fill="#FFBD2E" />
    <circle cx="52" cy="17" r="5" fill="#27C93F" />
    <text x="370" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">ADMIN CONTROL &amp; ANALYTICS PANEL</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipAdmin)">
      <image href="data:image/png;base64,${img4}" x="0" y="0" width="740" height="386" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Panel 3: Bottom-Left: Interactive 1000+ Vocabulary Bank -->
  <g transform="translate(50, 465)" filter="url(#deepShadow)">
    <!-- Window Frame -->
    <rect width="740" height="400" rx="16" fill="#1E232D" stroke="url(#cardBorder)" stroke-width="2" />
    <!-- Window Header -->
    <path d="M 0,16 Q 0,0 16,0 L 724,0 Q 740,0 740,16 L 740,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5" fill="#FF5F56" />
    <circle cx="36" cy="17" r="5" fill="#FFBD2E" />
    <circle cx="52" cy="17" r="5" fill="#27C93F" />
    <text x="370" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">1,000+ IELTS VOCABULARY ENGINE</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipVocab)">
      <image href="data:image/png;base64,${img3}" x="0" y="0" width="740" height="366" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Panel 4: Bottom-Right: AI Speaking Practice & Band Evaluation Floating Modal -->
  <g transform="translate(860, 465)" filter="url(#floatingShadow)">
    <!-- Window Frame -->
    <rect width="690" height="400" rx="16" fill="#1E232D" stroke="url(#cardBorder)" stroke-width="2.5" />
    <!-- Window Header -->
    <path d="M 0,16 Q 0,0 16,0 L 674,0 Q 690,0 690,16 L 690,34 L 0,34 Z" fill="#181B22" />
    <circle cx="20" cy="17" r="5" fill="#FF5F56" />
    <circle cx="36" cy="17" r="5" fill="#FFBD2E" />
    <circle cx="52" cy="17" r="5" fill="#27C93F" />
    <text x="345" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">AI IELTS SPEAKING TASK EVALUATION</text>
    <!-- Content Image -->
    <g transform="translate(0, 34)" clip-path="url(#clipSpeaking)">
      <image href="data:image/png;base64,${img1}" x="0" y="0" width="690" height="366" preserveAspectRatio="xMidYMid slice" />
    </g>
  </g>

  <!-- Center Floating Badge Pill -->
  <g transform="translate(800, 455)" filter="url(#floatingShadow)">
    <!-- Pill Background -->
    <rect x="-170" y="-22" width="340" height="44" rx="22" fill="#740938" stroke="#FFD1E3" stroke-width="2" />
    <circle cx="-135" cy="0" r="9" fill="#27C93F" />
    <text x="5" y="5" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="900" text-anchor="middle" letter-spacing="1.5">EHUB AI VERSE • FULL SUITE</text>
  </g>
</svg>`;

fs.writeFileSync('public/assets/ehub-aiverse.svg', svgContent);
console.log('✅ Generated 4-screenshot EHub AI Verse SVG collage successfully!');
