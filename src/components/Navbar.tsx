import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

const navLink = [
    { id: 1, label: "About", link: "#about" },
    { id: 2, label: "Features", link: "#features" },
    { id: 3, label: "Updates", link: "#updates" },
    { id: 4, label: "Help", link: "#help" },
    { id: 5, label: "Customers", link: "#customers" },
];

export const Navbar = () => {
    return (
        <header className="bg-black">
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
                                className="text-white text-opacity-60 hover:text-opacity-100 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="bg-white px-4 py-2 rounded-lg border-2 border-white transition-all hover:bg-transparent hover:text-white">
                            Get for free
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};
