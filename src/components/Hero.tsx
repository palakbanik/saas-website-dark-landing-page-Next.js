"use client";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
            <div className="h-[375px] sm:h-[768px] lg:h-[1200px] w-[750px] sm:w-[1536px] lg:w-[2400px] bg-black rounded-[100%] absolute left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

            <div className="container relative">
                <div className="flex items-center justify-center text-white">
                    <a
                        href="#"
                        className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
                    >
                        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD9FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                            Version 2.0 is here
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span>Read More</span>
                            <ArrowIcon />
                        </span>
                    </a>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="inline-flex relative">
                        <motion.h1 className="text-7xl sm:text-9xl font-bold text-center tracking-tighter text-white inline-flex">
                            One Task <br /> at a Time
                        </motion.h1>

                        <motion.div
                            drag
                            dragSnapToOrigin
                            className="w-[200px] h-[200px] absolute top-[108px] right-[576px] hidden sm:inline"
                        >
                            <Image
                                src={cursorImage}
                                alt="cursor icon"
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>
                        <motion.div
                            drag
                            dragSnapToOrigin
                            className="w-[200px] h-[200px] absolute sm:top-[56px] sm:left-[598px] hidden sm:inline"
                        >
                            <Image
                                src={messageImage}
                                alt="message icon"
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-center text-xl mt-8 text-white max-w-md">
                        Celebrate the joy of accomplishment with an app designed
                        to track progress, motivate your efforts, and celebrate
                        your successes.
                    </p>
                </div>

                <div className="flex justify-center mt-8 text-black">
                    <button className="font-medium bg-white text-black px-4 py-2 rounded-lg border-2 border-white transition-all hover:bg-transparent hover:text-white">
                        Get for free
                    </button>
                </div>
            </div>
        </section>
    );
};
