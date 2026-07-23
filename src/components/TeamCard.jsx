import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function TeamCard({ member }) {
  return (
    <div className="group relative w-full max-w-[280px] mx-auto rounded-3xl bg-white/90 backdrop-blur-xl border border-skyblue/40 p-6 shadow-soft hover:shadow-[0_20px_40px_-15px_rgba(86,124,141,0.25)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
      {/* Decorative Accent Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal/15 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

      {/* Member Avatar & Details */}
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-4 border-2 border-teal/30 shadow-md group-hover:border-teal transition-colors">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <span className="text-[10px] font-black uppercase tracking-widest text-navy bg-teal/20 border border-teal/30 px-3 py-1 rounded-full mb-2">
          {member.role}
        </span>

        <h4 className="text-xl font-bold font-display text-navy mb-2">
          {member.name}
        </h4>

        <p className="text-xs text-navy-800 leading-relaxed font-medium line-clamp-3">
          {member.bio}
        </p>
      </div>

      {/* Social Links Bar */}
      <div className="mt-6 pt-4 border-t border-skyblue/30 flex items-center justify-center gap-3 relative z-10">
        {member.github && (
          <a 
            href={member.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`${member.name}'s GitHub Profile`}
            className="w-9 h-9 rounded-full bg-skyblue/20 hover:bg-navy hover:text-white text-navy-700 transition-colors flex items-center justify-center border border-skyblue/30"
          >
            <FaGithub size={15} aria-hidden="true" />
            <span className="sr-only">{member.name}'s GitHub Profile</span>
          </a>
        )}
        {member.linkedin && (
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`${member.name}'s LinkedIn Profile`}
            className="w-9 h-9 rounded-full bg-skyblue/20 hover:bg-navy hover:text-white text-navy-700 transition-colors flex items-center justify-center border border-skyblue/30"
          >
            <FaLinkedin size={15} aria-hidden="true" />
            <span className="sr-only">{member.name}'s LinkedIn Profile</span>
          </a>
        )}
        {member.portfolio && (
          <a 
            href={member.portfolio} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`${member.name}'s Portfolio`}
            className="w-9 h-9 rounded-full bg-skyblue/20 hover:bg-navy hover:text-white text-navy-700 transition-colors flex items-center justify-center border border-skyblue/30" 
            title="Portfolio"
          >
            <FaGlobe size={15} aria-hidden="true" />
            <span className="sr-only">{member.name}'s Portfolio</span>
          </a>
        )}
      </div>
    </div>
  );
}
