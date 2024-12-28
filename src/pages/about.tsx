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
import { useTeam } from "./api/data";

const myLoader = ({ src }: { src: string }) => {
    return src ? `${process.env.NEXT_PUBLIC_API_URL}${src}` : "/placeholder.png";
};

export default function About() {
    const { teams } = useTeam()
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
                            <p>Dias & Partners is more than just a creative agency—we’re your partners in storytelling. With a passion for excellence and a commitment to delivering high-quality results, we help brands and individuals create memorable experiences.</p>
                        </div>
                        <div className="text-lg md:text-2xl font-sans">
                            <p>Our team blends artistry with strategy to provide services that resonate with your audience and elevate your brand to new heights.</p>
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
                        <div className="flex flex-col md:flex-row gap-10">
                            {[
                                {
                                    icon: <VideocamIcon fontSize="large" />,
                                    title: "Photography & Videography",
                                    description: "Capture your story in the most authentic and visually compelling way. From personal milestones to brand campaigns, our photography and videography services are designed to inspire.",
                                },
                                {
                                    icon: <BrushIcon fontSize="large" />,
                                    title: "Graphic & Motion Design",
                                    description: "Engage your audience with eye-catching graphics and dynamic motion designs. Our creative team crafts visuals that not only look great but also communicate your message effectively.",
                                },
                                {
                                    icon: <InterestsIcon fontSize="large" />,
                                    title: "Brand Development",
                                    description: "Build a brand that stands out. Help you define your identity, tell your story, and connect with your audience through cohesive and impactful strategies.",
                                },
                                {
                                    icon: <WebIcon fontSize="large" />,
                                    title: "Landing Page",
                                    description: "Your digital front door deserves to make a great first impression. Design a sleek, user-friendly landing pages that drive engagement and conversions.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-start text-center w-full md:w-[250px] h-auto gap-4 p-5 border rounded-lg shadow-lg"
                                >
                                    <div className="flex items-center justify-center h-16">{item.icon}</div>
                                    <h1 className="text-xl font-bold h-10 flex items-center">{item.title}</h1>
                                    <p className="text-sm text-white text-opacity-90 flex-grow">{item.description}</p>
                                </div>
                            ))}
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
                                <h1 className="mb-2 text-xl font-semibold">Passion for Creativity</h1>
                                <p className="mb-3 font-normal">We believe in pushing boundaries to create something extraordinary</p>
                            </div>
                            <div className="max-w-xs p-6 bg-white bg-opacity-25 text-white rounded-xl text-center">
                                <h1 className="mb-2 text-xl font-semibold">Client-Centric Approach</h1>
                                <p className="mb-3 font-normal">Your satisfaction is our priority. We work closely with you to ensure every project exceeds expectations</p>
                            </div>
                            <div className="max-w-xs p-6 bg-white bg-opacity-25 text-white rounded-xl text-center">
                                <h1 className="mb-2 text-xl font-semibold">Commitment to Quality</h1>
                                <p className="mb-3 font-normal"> From concept to completion, we uphold the highest standards in everything we do</p>
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
                            {teams.map((team) => (
                                <div key={team.id} className="max-w-sm bg-black text-white text-center border-gray-200 rounded-lg gap-3 flex flex-col">
                                    <div className="relative w-[200px] h-[350px] mx-auto">
                                        <Image
                                            className="rounded-lg object-cover"
                                            loader={myLoader}
                                            layout="fill"
                                            src={team.image.url}
                                            alt={`Image of ${team.name} ${team.lastName}`}
                                        />
                                    </div>
                                    <div>
                                        <h1>
                                            <span className="font-bold">{team.name} </span>
                                            <span className={`${libreBaskerville.className} italic font-sans`}>{team.lastName}</span>
                                        </h1>
                                        <p>{team.position}</p>
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