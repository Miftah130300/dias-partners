import Head from "next/head";
import { libreBaskerville } from "src/font/font";
import dynamic from "next/dynamic";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProjects } from "./api/data";
import Image from "next/image";

// Custom loader function for handling image URLs
const myLoader = ({ src }: { src: string }) => {
    return src ? `${process.env.NEXT_PUBLIC_API_URL}${src}` : "/placeholder.png";
};

const Navbar = dynamic(() => import("src/component/navbar"), { ssr: false });
const Footer = dynamic(() => import("src/component/footer"), { ssr: false });

export default function Project() {
    const { projects, loading, error } = useProjects();

    const categories = ["All", "Video & Photo", "Graphic & Motion", "Brand Dev", "Landing Page"];

    const filterProjects = (category: string) => {
        if (category === "All") {
            return projects;
        }
        return projects.filter((project) => project.type === category);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <>
            <Head>
                <title>Projects | Dias & Partners</title>
            </Head>
            <main className="bg-black">
                <Navbar />
                <div className="bg-black text-white flex justify-center items-center px-5 md:px-10 pt-40 pb-20">
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
                            <p>
                                At Dias & Partners, we understand the value of every moment. Whether it’s a wedding, a product launch, or a personal milestone, we’re here to ensure your memories are beautifully preserved for a lifetime.
                            </p>
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
                        <TabGroup className="flex flex-col gap-10">
                            <TabList className="flex justify-center w-full flex-wrap gap-2 md:gap-10">
                                {categories.map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            `flex-3 p-2 rounded-lg text-center ${selected
                                                ? "bg-white bg-opacity-25 text-white"
                                                : "text-white hover:bg-white hover:bg-opacity-25"
                                            }`
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
                                            {filterProjects(category).length > 0 ? (
                                                filterProjects(category).map((project) => (
                                                    <Link key={project.id} href={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                        <div className="relative w-full md:w-96 h-72 rounded-lg overflow-hidden">
                                                            <Image
                                                                loader={myLoader}
                                                                src={
                                                                    project.image.url || "/placeholder.png"
                                                                }
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
                                                ))) : (
                                                <div className="italic">No project available yet</div>
                                            )}
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