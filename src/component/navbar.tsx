import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import dynamic from 'next/dynamic';
const DynamicHamburger = dynamic(() => import('hamburger-react').then(mod => mod.Sling), { ssr: false });

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isMobile = useMediaQuery('(max-width:950px)');

    return (
        <nav className={`${isScrolled ? 'bg-black' : 'bg-transparent'} text-white py-5 px-5 md:px-10 fixed z-10 w-full transition-colors duration-300`}>
            <div className="container mx-auto flex justify-between items-center w-full">
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
                {isMobile ? (<DynamicHamburger />) : (
                    <ul className="space-x-8 text-sm flex gap-10">
                        <Link href="/"><li className="hover:underline">Home</li></Link>
                        <Link href="/about"><li className="hover:underline">About</li></Link>
                        <Link href="/project"><li className="hover:underline">Projects</li></Link>
                        <Link href="/contact"><li className="hover:underline">Contact</li></Link>
                    </ul>
                )}
            </div>
        </nav>
    );
}
