import dynamic from "next/dynamic";
import Head from "next/head";
import { libreBaskerville } from "../font/font";
import Image from 'next/image';
const Footer = dynamic(() => import('src/component/footer'), { ssr: false });
import Link from "next/link";
import logo from "/public/logo.svg";
const DynamicHamburger = dynamic(() => import('hamburger-react').then(mod => mod.Sling), { ssr: false });
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import BrushIcon from '@mui/icons-material/Brush';
import InterestsIcon from '@mui/icons-material/Interests';
import WebIcon from '@mui/icons-material/Web';
import sam from "/public/sam-altman.jpeg"

export default function About() {
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
        <>
            <Head>
                <title>About | Dias & Partners</title>
            </Head>
            <main className="bg-black">
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
                <div className="bg-black text-white flex justify-center items-center px-10 py-32">
                    <div className="md:w-3/4 text-center flex flex-col gap-5">
                        <div className="text-xl md:text-2xl mb-4">
                            <h1>
                                <span className="font-bold">About </span>
                                <span className={`${libreBaskerville.className} italic font-sans`}>Dias&Partners</span>
                            </h1>
                        </div>
                        <div className="text-2xl md:text-3xl font-sans">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla. Proin vel malesuada magna. Nulla facilisi. Aenean ac massa eget urna lacinia fringilla.</p>
                        </div>
                        <div className="text-lg md:text-2xl font-sans">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla. Proin vel malesuada magna. Nulla facilisi. Aenean ac massa eget urna lacinia fringilla.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-black px-10 py-20">
                    <div className="text-white flex flex-col justify-center items-center gap-10">
                        <div className="text-2xl mb-4">
                            <h1>
                                <span className="font-bold">Our </span>
                                <span className={`${libreBaskerville.className} italic font-sans`}>Services</span>
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-20">
                            <div className="flex flex-col items-center text-center w-[200px] gap-3">
                                <VideocamIcon fontSize="large" />
                                <h1 className="text-xl">Photography & Videography</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla.</p>
                            </div>
                            <div className="flex flex-col items-center text-center w-[200px] gap-3">
                                <BrushIcon fontSize="large" />
                                <h1 className="text-xl">Graphic & Motion Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla.</p>
                            </div>
                            <div className="flex flex-col items-center text-center w-[200px] gap-3">
                                <InterestsIcon fontSize="large" />
                                <h1 className="text-xl">Brand Development</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla.</p>
                            </div>
                            <div className="flex flex-col items-center text-center w-[200px] gap-3">
                                <WebIcon fontSize="large" />
                                <h1 className="text-xl">Landing Page</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black px-10 py-20">
                    <div className="text-white flex flex-col justify-center items-center gap-10">
                        <div className="text-2xl mb-4">
                            <h1>
                                <span className="font-bold">Our </span>
                                <span className={`${libreBaskerville.className} italic font-sans`}>Values</span>
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="max-w-xs p-6 bg-white bg-opacity-25 text-white rounded-xl text-center">
                                <h1 className="mb-2 text-xl font-semibold">Need a help in Claim?</h1>
                                <p className="mb-3 font-normal">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            </div>
                            <div className="max-w-xs p-6 bg-white bg-opacity-25 text-white rounded-xl text-center">
                                <h1 className="mb-2 text-xl font-semibold">Need a help in Claim?</h1>
                                <p className="mb-3 font-normal">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            </div>
                            <div className="max-w-xs p-6 bg-white bg-opacity-25 text-white rounded-xl text-center">
                                <h1 className="mb-2 text-xl font-semibold">Need a help in Claim?</h1>
                                <p className="mb-3 font-normal">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black px-10 py-20">
                    <div className="text-white flex flex-col justify-center items-center gap-10">
                        <div className="text-2xl mb-4">
                            <h1>
                                <span className="font-bold">Meet </span>
                                <span className={`${libreBaskerville.className} italic font-sans`}>The Teams</span>
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="max-w-sm bg-black text-white text-center border-gray-200 rounded-lg gap-3 flex flex-col">
                                    <Image className="rounded-lg" src={sam} alt="" />
                                    <div>
                                        <h1>
                                            <span className="font-bold">Sam </span>
                                            <span className={`${libreBaskerville.className} italic font-sans`}>Altman</span>
                                        </h1>
                                        <p>Chief Executive Officer</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}