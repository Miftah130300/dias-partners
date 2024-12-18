import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { AxiosError, AxiosResponse } from "axios";

// Define the types for the project data
interface Project {
    id: number;
    attributes: {
        title: string;
        Description: string;
        projectType: string;
        projectCover: {
            data: {
                attributes: {
                    formats: {
                        medium?: {
                            url: string;
                        };
                    };
                };
            };
        } | null;
    };
}

// Custom loader function for handling image URLs
const myLoader = ({ src }: { src: string }) => {
    return `${process.env.NEXT_PUBLIC_API_URL}${src}`;
};

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch project data from the API
    useEffect(() => {
        axios
            .get<{ data: Project[] }>(`${process.env.NEXT_PUBLIC_API_URL}/api/projectdata?populate=*`)
            .then((response: AxiosResponse<{ data: Project[] }>) => {
                setProjects(response.data.data);
                setLoading(false);
            })
            .catch((error: AxiosError) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => {
                    // Safely handle URL creation with null checks
                    const imageUrl = project.attributes.projectCover?.data?.attributes?.formats?.medium?.url || null;

                    return (
                        <div key={project.id} className="border rounded-lg shadow-lg p-4 flex flex-col">
                            <div className="relative w-full h-48 mb-4">
                                {/* Check if imageUrl exists */}
                                {imageUrl ? (
                                    <Image
                                        loader={myLoader} // Use the custom loader
                                        src={imageUrl}
                                        alt={project.attributes.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md">
                                        <span>No Image Available</span>
                                    </div>
                                )}
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{project.attributes.title}</h2>
                            <p className="text-gray-600">{project.attributes.Description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
