import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

interface Team {
    id: number;
    name: string;
    lastName: string;
    position: string;
    image: {
        url: string;
    }
}

interface Partner {
    id: number;
    name: string;
    image: {
        url: string;
    }
}

interface Project {
    id: number;
    title: string;
    description: string;
    type: string;
    image: {
        url: string;
    }
    projects: {
        url: string;
    }[]
    statusProject: string;
}

interface Testimony {
    id: number;
    name: string;
    occupation: string;
    testimony: string;
    image: {
        url: string;
    }
}

export const useTeam = () => {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dias-teams?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    },
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch cities");
                }
                const data = await res.json();
                setTeams(data.data || []);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    return { teams };
};

export const usePartner = () => {
    const [partners, setPartners] = useState<Partner[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dias-partners?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    },
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch cities");
                }
                const data = await res.json();
                setPartners(data.data || []);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    return { partners };
};

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/dias-projects?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                        },
                    }
                );
                setProjects(response.data.data);
            } catch (err) {
                const axiosError = err as AxiosError;
                console.error("Error fetching data:", axiosError.message);
                setError("Failed to load projects. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};

export const useTestimony = () => {
    const [testimonies, setTestimonies] = useState<Testimony[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dias-testimonies?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    },
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch cities");
                }
                const data = await res.json();
                setTestimonies(data.data || []);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    return { testimonies };
};