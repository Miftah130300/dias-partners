import Head from "next/head";
import { libreBaskerville } from "src/font/font";
import dynamic from "next/dynamic";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
const DynamicHamburger = dynamic(() => import('hamburger-react').then(mod => mod.Sling), { ssr: false });
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.svg";
const Navbar = dynamic(() => import('src/component/navbar'), { ssr: false });
const Footer = dynamic(() => import('src/component/footer'), { ssr: false });
import { dataProject } from "./api/data-project";

export default function Project() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isMobile = useMediaQuery('(max-width:950px)');

    //tabs code
    const categories = ['All', 'Video & Photo', 'Graphic & Motion', 'Brand Dev', 'Landing Page'];

    const filterProjects = (category: any) => {
        if (category === 'All') {
            return dataProject;
        }
        return dataProject.filter(project => project.type === category);
    };
    return (
        <>
            <Head>
                <title>Projects | Dias & Partners</title>
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
                <div className="bg-black text-white flex justify-center items-center px-5 md:px-10 pt-40 pb-10 md:pb-32">
                    <div className="md:w-3/4 text-center flex flex-col gap-5">
                        <div className="text-3xl md:text-5xl mb-4">
                            <h1>
                                <span className="font-bold">Capture Your </span>
                                <span className={`${libreBaskerville.className} italic font-sans`}>Precious</span>
                            </h1>
                            <h1>
                                <span className={`${libreBaskerville.className} italic font-sans`}>Moments </span>
                                <span className="font-bold">with Us</span>
                            </h1>
                        </div>
                        <div className="text-lg md:text-xl font-sans">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla. Proin vel malesuada magna. Nulla facilisi. Aenean ac massa eget urna lacinia fringilla.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-black min-h-screen px-5 md:px-10 py-20">
                    <div className="text-white flex flex-col justify-center items-center gap-10">
                        <div className="text-xl md:text-2xl mb-4">
                            <h1>
                                <span className="font-bold">Our </span>
                                <span className={`${libreBaskerville.className} italic font-sans`}>Projects</span>
                            </h1>
                        </div>
                        <TabGroup className='flex flex-col gap-10'>
                            <TabList className="flex justify-center w-full flex-wrap gap-2 md:gap-10">
                                {categories.map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            `flex-3 p-2 rounded-lg text-center ${selected ? 'bg-white bg-opacity-25 text-white' : 'text-white hover:bg-white hover:bg-opacity-25'}`
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </TabList>
                            <TabPanels>
                                {categories.map((category) => (
                                    <TabPanel key={category} className="text-white">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {filterProjects(category).map((project) => (
                                                <Link key={project.id} href={`/project/${project.title}`}>
                                                    <div className="relative w-full md:w-96 h-72 rounded-lg overflow-hidden">
                                                        <Image
                                                            src={project.cover}
                                                            alt={project.title}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            quality={100}
                                                            className="rounded-lg"
                                                        />
                                                        <div className="absolute inset-0 flex flex-col justify-center p-5 bg-black bg-opacity-0 text-transparent transition-all duration-300 ease-in-out hover:bg-opacity-50 hover:text-white">
                                                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                            <p className="text-lg">{project.type}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
