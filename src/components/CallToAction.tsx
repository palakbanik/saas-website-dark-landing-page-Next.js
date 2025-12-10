"use client";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const CallToAction = () => {
    return (
        <section className="bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden">
            <div className="container max-w-xl relative">
                <motion.div drag dragSnapToOrigin>
                    <Image
                        src={helixImage}
                        alt="helix image icon"
                        className="absolute top-6 left-[calc(100%+36px)]"
                        draggable={false}
                    />
                </motion.div>
                <motion.div drag dragSnapToOrigin>
                    <Image
                        src={emojiStarImage}
                        alt="emoji star icon"
                        className="absolute -top-[120px] right-[calc(100%+24px)]"
                        draggable={false}
                    />
                </motion.div>
                <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
                    Get instant access
                </h2>
                <p className="text-xl text-white/70 mt-5">
                    Celebrate the joy of accomplishment with an app designed to
                    track your progress and motivate your efforts.
                </p>

                <form
                    action=""
                    className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
                >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your@gmail.com"
                        className="py-3 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] border-none outline-none flex-1"
                    />
                    <button className="bg-white text-black rounded-lg h-12 px-5 border-2 border-white hover:bg-transparent hover:text-white hover:border-2 transition-all cursor-pointer">
                        Get access
                    </button>
                </form>
            </div>
        </section>
    );
};
