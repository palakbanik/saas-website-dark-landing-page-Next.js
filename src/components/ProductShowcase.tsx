import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
    return (
        <section className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
                    Intuitive interface
                </h2>
                <div className="max-w-xl mx-auto">
                    <p className="mt-5 text-center text-xl text-white/70">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress, motivate your efforts, and
                        celebrate your sucesses, one task at a time.
                    </p>
                </div>
                <div className="mt-14 flex justify-center">
                    <Image src={appScreen} alt="The product screenshot" />
                </div>
            </div>
        </section>
    );
};
