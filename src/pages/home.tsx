import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import hero from "/public/hero.jpeg";
import logo from "/public/logo.svg";
import opening1 from "/public/asset/6.jpeg"
import opening2 from "/public/asset/1.jpeg"
import opening3 from "/public/asset/2.jpeg"
import service1 from "/public/asset/5.jpeg"
import service2 from "/public/asset/7.jpeg"
import service3 from "/public/asset/3.jpeg"
import service4 from "/public/asset/4.jpeg"
import { libreBaskerville } from "../font/font";
const Footer = dynamic(() => import('src/component/footer'), { ssr: false });
const Navbar = dynamic(() => import('src/component/navbar'), { ssr: false });
import Link from 'next/link';
import { Carousel } from "flowbite-react";
const DynamicHamburger = dynamic(() => import('hamburger-react').then(mod => mod.Sling), { ssr: false });
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function Home() {
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
                <title>Home | Dias & Partners</title>
            </Head>
            <main className='bg-black'>
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
                <div className="relative flex h-screen w-full">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={hero}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="filter bg-black bg-opacity-50"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-10 text-3xl md:text-5xl text-white text-center md:text-start">
                        <h1>
                            <span className='font-bold'>Capture Your </span><span className={`${libreBaskerville.className} italic font-sans`}>Precious</span>
                        </h1>
                        <h1>
                            <span className={`${libreBaskerville.className} italic font-sans`}>Moments </span><span className='font-bold'>with Us</span>
                        </h1>
                    </div>
                </div>
                <div className="w-full flex bg-black px-10 py-32 justify-center items-center gap-5">
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className="flex flex-col text-white text-center md:text-start md:w-1/2">
                            <div className="text-xl md:text-3xl mb-4">
                                <h1>
                                    <span className="font-bold">Delivering </span>
                                    <span className={`${libreBaskerville.className} italic font-sans`}>the Ultimate</span>
                                </h1>
                                <h1>
                                    <span className={`${libreBaskerville.className} italic font-sans`}>Photography </span>
                                    <span className="font-bold">Experience</span>
                                </h1>
                            </div>
                            <p className="font-sans text-center md:text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla. Proin vel malesuada magna. Nulla facilisi. Aenean ac massa eget urna lacinia fringilla. Vivamus vestibulum augue in neque interdum, ac venenatis mi vehicula.
                            </p>
                        </div>
                        <div className="flex md:w-1/2">
                            <div className="relative w-3/4 h-[300px]">
                                <Image
                                    src={opening1}
                                    alt="Background Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="relative w-3/4 h-[300px] ml-4 flex flex-col gap-4">
                                <div className="relative w-full h-1/2">
                                    <Image
                                        src={opening2}
                                        alt="Image 1"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="relative w-full h-1/2">
                                    <Image
                                        src={opening3}
                                        alt="Image 2"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20 text-white pb-10 md:pb-32'>
                    <h1 className='text-2xl text-white'>
                        <span className="font-bold">What </span>
                        <span className={`${libreBaskerville.className} italic font-sans`}>we do</span>
                    </h1>
                    <div className='flex flex-col justify-center items-center md:justify-start md:items-start md:flex-row md:h-96 md:w-3/4 bg-white bg-opacity-25 rounded-xl p-10 mx-5 parent relative gap-4'>
                        <div className='md:w-1/2 flex flex-col gap-5'>
                            <h1 className='text-xl'>
                                <span className="font-bold">Delivering </span>
                                <span className={`${libreBaskerville.className} italic font-sans`}>the Ultimate</span>
                            </h1>
                            <p className="font-sans">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla. Proin vel malesuada magna. Nulla facilisi. Aenean ac massa eget urna lacinia fringilla. Vivamus vestibulum augue in neque interdum, ac venenatis mi vehicula.
                            </p>
                        </div>
                        <div className='flex justify-end flex-col md:absolute top-[-50px] right-10 gap-4 max-md:w-full'>
                            <div className='w-full md:w-[180px] h-[180px] rounded-lg relative overflow-hidden group'>
                                <Image
                                    src={service1}
                                    alt='oji'
                                    layout="fill"
                                    objectFit="cover"
                                    className='md:absolute inset-0 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-125'
                                />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
                                    <div className='text-center'>
                                        <h1>
                                            <span>Graphic & </span>
                                            <span className={`${libreBaskerville.className} italic font-sans`}>Motion</span>
                                        </h1>
                                        <h1>Design</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-[180px] h-[180px] rounded-lg relative overflow-hidden group'>
                                <Image
                                    src={service2}
                                    alt='oji'
                                    layout="fill"
                                    objectFit="cover"
                                    className='md:absolute inset-0 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-125'
                                />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
                                    <div className='text-center'>
                                        <h1>
                                            <span>Landing </span>
                                            <span className={`${libreBaskerville.className} italic font-sans`}>Page</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end flex-col md:absolute bottom-[-50px] right-60 gap-4 max-md:w-full'>
                            <div className='w-full md:w-[180px] h-[180px] rounded-lg relative overflow-hidden group'>
                                <Image
                                    src={service3}
                                    alt='oji'
                                    layout="fill"
                                    objectFit="cover"
                                    className='absolute inset-0 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-125'
                                />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
                                    <div className='text-center'>
                                        <h1>
                                            <span>Videography & </span>
                                        </h1>
                                        <h1>
                                            <span className={`${libreBaskerville.className} italic font-sans`}>Photography</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-[180px] h-[180px] rounded-lg relative overflow-hidden group'>
                                <Image
                                    src={service4}
                                    alt='oji'
                                    layout="fill"
                                    objectFit="cover"
                                    className='absolute inset-0 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-125'
                                />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
                                    <div className='text-center'>
                                        <h1>
                                            <span>Brand </span>
                                            <span className={`${libreBaskerville.className} italic font-sans`}>Development</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black h-screen flex items-center justify-center'>
                    <Carousel className='px-5 md:px-10' autoFocus>
                        <div className='bg-white bg-opacity-25 w-full h-96 md:w-[700px] rounded-lg flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10'>
                            <div className='border border-white rounded-lg h-52 md:h-full w-full md:w-96'>
                            </div>
                            <div className='flex flex-col justify-center max-md:items-center gap-5'>
                                <h1 className='text-2xl text-white '>
                                    <span className="font-semibold">Lorem ipsum </span>
                                    <span className={`${libreBaskerville.className} italic font-sans`}>dolor </span>
                                    <span className="font-bold">sit</span>
                                </h1>
                                <button className='text-black p-4 bg-white rounded-lg max-w-52 font-bold hover:bg-white hover:bg-opacity-80'>VIEW PROJECT</button>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-25 w-full h-96 md:w-[700px] rounded-lg flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10'>
                            <div className='border border-white rounded-lg h-52 md:h-full w-full md:w-96'>
                            </div>
                            <div className='flex flex-col justify-center max-md:items-center gap-5'>
                                <h1 className='text-2xl text-white '>
                                    <span className="font-semibold">Lorem ipsum </span>
                                    <span className={`${libreBaskerville.className} italic font-sans`}>dolor </span>
                                    <span className="font-bold">sit</span>
                                </h1>
                                <button className='text-black p-4 bg-white rounded-lg max-w-52 font-bold hover:bg-white hover:bg-opacity-80'>VIEW PROJECT</button>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-25 w-full h-96 md:w-[700px] rounded-lg flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10'>
                            <div className='border border-white rounded-lg h-52 md:h-full w-full md:w-96'>
                            </div>
                            <div className='flex flex-col justify-center max-md:items-center gap-5'>
                                <h1 className='text-2xl text-white '>
                                    <span className="font-semibold">Lorem ipsum </span>
                                    <span className={`${libreBaskerville.className} italic font-sans`}>dolor </span>
                                    <span className="font-bold">sit</span>
                                </h1>
                                <button className='text-black p-4 bg-white rounded-lg max-w-52 font-bold hover:bg-white hover:bg-opacity-80'>VIEW PROJECT</button>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className='bg-black h-screen flex flex-col items-center gap-10 px-10 py-20'>
                    <h1 className='text-2xl text-white'>
                        <span className="font-bold">Why </span>
                        <span className={`${libreBaskerville.className} italic font-sans`}>clients </span>
                        <span className="font-bold">love us</span>
                    </h1>
                    <div className='flex flex-col md:flex-row  gap-5'>
                        <div className="w-full md:w-[300px] rounded-lg border-r border-b border-llg:border-l-0 lg:border-t bg-white p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8 gap-3 flex flex-col">
                                <Rating name="read-only" value={4} readOnly />
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>
                            <div className="flex items-center">
                                <Image className="w-10 h-10 rounded-full mr-4" src={service1} alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">CEO of OpenAI</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[300px] rounded-lg border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8 gap-3 flex flex-col">
                                <Rating name="read-only" value={4} readOnly />
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>
                            <div className="flex items-center">
                                <Image className="w-10 h-10 rounded-full mr-4" src={service1} alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">CEO of OpenAI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black h-screen w-full flex flex-col items-center'>
                    <h1 className='text-2xl text-white'>
                        <span className="font-bold">We </span>
                        <span className={`${libreBaskerville.className} italic font-sans`}>worked </span>
                        <span className="font-bold">with</span>
                    </h1>
                </div>
                <div className='bg-black flex flex-col justify-center items-center py-32 gap-5 w-full'>
                    <h1 className='text-white text-2xl'>
                        <span className="font-bold">Ready to </span>
                        <span className={`${libreBaskerville.className} italic font-sans`}>collaborate </span>
                        <span className="font-bold">with us?</span>
                    </h1>
                    <button className='p-4 bg-white rounded-lg max-w-52 font-bold hover:bg-white hover:bg-opacity-80'>BOOK NOW</button>
                </div>
                <Footer />
            </main >
        </>
    );
}
