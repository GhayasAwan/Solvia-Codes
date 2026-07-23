import React from 'react';

// Lightweight Inline SVG Icons for 0kB Icon Library Overhead
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default function TeamCard({ member }) {
  return (
    <div className="relative w-full h-[280px] max-w-[260px] mx-auto perspective-1000 group">
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        
        .team-card-content {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
          border-radius: 20px;
          will-change: transform;
          transform: translateZ(0);
          contain: layout style paint;
        }

        .group:hover .team-card-content {
          transform: rotateY(180deg);
        }

        .team-front, .team-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
        }

        .team-front {
          background-color: #0F172A;
        }

        .team-back {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          transform: rotateY(180deg);
          border: 1px solid rgba(86, 124, 141, 0.3);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .team-back::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(86, 124, 141, 0.25), transparent 70%);
          pointer-events: none;
        }

        .team-back-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        @keyframes rotation_481 {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
      `}</style>

      <div className="team-card-content">
        {/* FRONT */}
        <div className="team-front">
          <img
            src={member.image}
            alt={`${member.name} - ${member.role} at Solvia Codes Software House Peshawar`}
            width="400"
            height="500"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent flex flex-col justify-end h-1/2">
            <span className="text-[10px] font-black uppercase tracking-widest text-white bg-teal/80 backdrop-blur-md w-fit px-2 py-0.5 rounded shadow-sm mb-1">
              {member.role}
            </span>
            <h4 className="text-xl font-bold font-display text-white">{member.name}</h4>
          </div>
        </div>

        {/* BACK */}
        <div className="team-back">
          <div className="team-back-content">
            <h4 className="text-xl font-bold font-display text-white mb-1">{member.name}</h4>
            <span className="text-[10px] font-black uppercase tracking-widest text-white bg-skyblue/30 px-3 py-1 rounded-full mb-4 inline-block">{member.role}</span>
            <p className="text-xs text-white/80 leading-relaxed mb-6 font-medium">
              {member.bio}
            </p>
            
            <div className="mt-auto flex items-center gap-3">
              {member.github && (
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`${member.name}'s GitHub Profile`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:text-white transition-colors flex items-center justify-center text-skyblue border border-white/10"
                >
                  <GithubIcon aria-hidden="true" />
                  <span className="sr-only">{member.name}'s GitHub Profile</span>
                </a>
              )}
              {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`${member.name}'s LinkedIn Profile`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:text-white transition-colors flex items-center justify-center text-skyblue border border-white/10"
                >
                  <LinkedinIcon aria-hidden="true" />
                  <span className="sr-only">{member.name}'s LinkedIn Profile</span>
                </a>
              )}
              {member.portfolio && (
                <a 
                  href={member.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`${member.name}'s Portfolio`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:text-white transition-colors flex items-center justify-center text-skyblue border border-white/10"
                >
                  <GlobeIcon aria-hidden="true" />
                  <span className="sr-only">{member.name}'s Portfolio</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
