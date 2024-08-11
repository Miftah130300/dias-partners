import dynamic from "next/dynamic";
import Head from "next/head";
import { libreBaskerville } from "../font/font";
import Image from 'next/image';
const Footer = dynamic(() => import('src/component/footer'), { ssr: false });
const Navbar = dynamic(() => import('src/component/navbar'), { ssr: false });
import VideocamIcon from '@mui/icons-material/Videocam';
import BrushIcon from '@mui/icons-material/Brush';
import InterestsIcon from '@mui/icons-material/Interests';
import WebIcon from '@mui/icons-material/Web';
import oji from "/public/miftah-fauzy.jpg"

export default function About() {
    return (
        <>
            <Head>
                <title>About | Dias & Partners</title>
            </Head>
            <main className="bg-black">
                <Navbar />
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
                                    <Image className="rounded-lg" src={oji} alt="" />
                                    <div>
                                        <h1>
                                            <span className="font-bold">Miftah </span>
                                            <span className={`${libreBaskerville.className} italic font-sans`}>Fauzy</span>
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