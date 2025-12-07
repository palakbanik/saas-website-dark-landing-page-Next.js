"use client";

import React from "react";
import { useEffect, useRef } from "react";
import EcoSystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Feature = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    const offsetX = useMotionValue(100);
    const offsetY = useMotionValue(100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    return (
        <div className="border border-white/30 px-5 py-10 text-center rounded-xl flex-1 relative">
            <motion.div
                className="border-2 border-purple-400 absolute inset-0 rounded-xl"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage,
                }}
                ref={border}
            ></motion.div>
            <div className="h-16 w-16 inline-flex items-center justify-center bg-white text-black rounded-lg">
                <EcoSystemIcon />
            </div>
            <h2 className="mt-6 font-bold">{title}</h2>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    );
};
