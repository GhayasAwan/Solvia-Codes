"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { cn } from "../lib/utils.js";

export function SpotlightNavbar({
    items = [],
    className,
    onItemClick,
    defaultActiveIndex = 0,
    activeIndex: externalActiveIndex,
    scrolled = false
}) {
    const navRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [isHovered, setIsHovered] = useState(false);

    // Sync internal activeIndex when parent scroll tracking updates it
    useEffect(() => {
        if (externalActiveIndex !== undefined) {
            setActiveIndex(externalActiveIndex);
        }
    }, [externalActiveIndex]);

    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        let rafId = null;

        const handleMouseMove = (e) => {
            setIsHovered(true);
            const clientX = e.clientX;
            if (!rafId) {
                rafId = requestAnimationFrame(() => {
                    if (navRef.current) {
                        const rect = navRef.current.getBoundingClientRect();
                        const x = clientX - rect.left;
                        spotlightX.current = x;
                        navRef.current.style.setProperty("--spotlight-x", `${x}px`);
                    }
                    rafId = null;
                });
            }
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        nav.style.setProperty("--spotlight-x", `${v}px`);
                    }
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove, { passive: true });
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;

            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v;
                    nav.style.setProperty("--ambience-x", `${v}px`);
                },
            });
        }
    }, [activeIndex]);

    const handleItemClick = (item, index) => {
        setActiveIndex(index);
        onItemClick?.(item, index);
    };

    return (
        <div className={cn("relative flex justify-center", className)}>
            <nav
                ref={navRef}
                className={cn(
                    "spotlight-nav relative h-11 rounded-full transition-all duration-300 overflow-hidden flex items-center"
                )}
            >
                <ul className="relative flex items-center h-full px-2 gap-1 z-[10]">
                    {items.map((item, idx) => (
                        <li key={idx} className="relative h-full flex items-center justify-center">
                            <a
                                href={item.href || item.to}
                                data-index={idx}
                                onClick={(e) => {
                                    handleItemClick(item, idx);
                                }}
                                className={cn(
                                    "px-4 py-2 text-xs font-bold transition-colors duration-200 rounded-full",
                                    "focus-visible:outline-none",
                                    activeIndex === idx
                                        ? (scrolled ? "text-teal" : "text-white")
                                        : (scrolled ? "text-navy/70 hover:text-navy" : "text-white/70 hover:text-white")
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* LIGHTING LAYERS */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        background: `
              radial-gradient(
                120px circle at var(--spotlight-x) 100%, 
                rgba(86,124,141,0.15) 0%, 
                transparent 50%
              )
            `
                    }}
                />

                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
                    style={{
                        background: `
                  radial-gradient(
                    60px circle at var(--ambience-x) 0%, 
                    ${scrolled ? '#567C8D' : 'rgba(255,255,255,0.8)'} 0%, 
                    transparent 100%
                  )
                `
                    }}
                />
            </nav>
        </div>
    );
}
