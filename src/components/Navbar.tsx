import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import WhiteButton from "@/smallComponents/WhiteButton";

const navLink = [
    { id: 1, label: "About", link: "#about" },
    { id: 2, label: "Features", link: "#features" },
    { id: 3, label: "Updates", link: "#updates" },
    { id: 4, label: "Help", link: "#help" },
    { id: 5, label: "Customers", link: "#customers" },
];

export const Navbar = () => {
    return (
        <header className="bg-black w-full sticky top-0 left-0 z-50">
            <div className="container">
                <div className="py-4 flex items-center justify-between">
                    <a href="#" className="relative">
                        <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#F892CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
                        <Image
                            src={logoImage}
                            alt="Saas logo"
                            className="h-12 w-12 relative"
                            draggable="false"
                        />
                    </a>
                    <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
                        <MenuIcon className="text-white" />
                    </div>

                    <nav className="hidden sm:flex items-center gap-6">
                        {navLink.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.link}
                                className="text-white text-opacity-60 transition-all hover:scale-105 hover:text-opacity-100"
                            >
                                {link.label}
                            </a>
                        ))}
                        <WhiteButton text={"Get for free"} />
                    </nav>
                </div>
            </div>
        </header>
    );
};
