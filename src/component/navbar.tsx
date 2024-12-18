import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicHamburger = dynamic(() => import("hamburger-react").then((mod) => mod.Sling), { ssr: false });

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isMobile = useMediaQuery("(max-width:950px)");

    return (
        <>
            <nav
                className={`${isScrolled ? "bg-black" : "bg-transparent"} text-white py-4 px-5 md:px-10 fixed z-20 w-full transition-colors duration-300`}
            >
                <div className="container flex justify-between items-center w-full">
                    <div>
                        <div className="relative w-24 flex justify-center items-center">
                            <Image
                                src={logo}
                                alt="Background Image"
                                objectFit="cover"
                                height={100}
                                width={100}
                            />
                        </div>
                    </div>
                    {isMobile ? (
                        <DynamicHamburger toggled={isOpen} toggle={setOpen} size={20} />
                    ) : (
                        <ul className="space-x-8 text-sm flex gap-10">
                            <Link href="/">
                                <li className="hover:underline cursor-pointer">Home</li>
                            </Link>
                            <Link href="/about">
                                <li className="hover:underline cursor-pointer">About</li>
                            </Link>
                            <Link href="/project">
                                <li className="hover:underline cursor-pointer">Projects</li>
                            </Link>
                            <Link href="/contact">
                                <li className="hover:underline cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    )}
                </div>
            </nav>
            <div
                className={`fixed top-0 left-0 h-full w-full bg-black text-white z-30 px-5 py-4 flex flex-col gap-8 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
            >
                <div className="flex w-full justify-end">
                    <DynamicHamburger toggled={isOpen} toggle={setOpen} size={20} />
                </div>
                <div className="flex w-full h-full items-center justify-center">
                    <ul className="flex flex-col gap-5 text-center text-2xl space-y-5">
                        <Link href="/">
                            <li className="hover:underline cursor-pointer" onClick={() => setOpen(false)}>
                                Home
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className="hover:underline cursor-pointer" onClick={() => setOpen(false)}>
                                About
                            </li>
                        </Link>
                        <Link href="/project">
                            <li className="hover:underline cursor-pointer" onClick={() => setOpen(false)}>
                                Projects
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className="hover:underline cursor-pointer" onClick={() => setOpen(false)}>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}