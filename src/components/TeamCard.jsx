import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

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
          background-color: #ffffff;
          transform: rotateY(0deg); 
        }

        .team-back {
          background-color: #0F172A;
          transform: rotateY(180deg);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .team-back::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 160px;
          height: 160%;
          background: linear-gradient(90deg, transparent, #567C8D, #C8D9E6, #567C8D, transparent);
          animation: rotation_481 4000ms infinite linear;
        }

        .team-back-content {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          background-color: #0F172A;
          border-radius: 18px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px;
          text-align: center;
          z-index: 10;
        }

        @keyframes rotation_481 {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
      `}</style>

      <div className="team-card-content">
        {/* FRONT */}
        <div className="team-front">
          <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
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
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:text-white transition-colors flex items-center justify-center text-skyblue border border-white/10">
                  <FaGithub size={16} />
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:text-white transition-colors flex items-center justify-center text-skyblue border border-white/10">
                  <FaLinkedin size={16} />
                </a>
              )}
              {member.portfolio && (
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal hover:text-white transition-colors flex items-center justify-center text-skyblue border border-white/10" title="Portfolio">
                  <FaGlobe size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
