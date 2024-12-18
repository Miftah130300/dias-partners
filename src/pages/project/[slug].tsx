import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "src/component/navbar";
import Head from "next/head";
import { libreBaskerville } from "src/font/font";
import { useProjects } from "../api/data";

const myLoader = ({ src }: { src: string }) => {
    return `${process.env.NEXT_PUBLIC_API_URL}${src}`;
};

export default function DetailProject() {
    const router = useRouter();
    const { slug } = router.query;

    const { projects, loading, error } = useProjects();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    const project = projects.find(
        (proj) => proj.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!project) {
        return <p className="text-red-500">Project not found</p>;
    }

    const projectImageUrl = project.image?.url || "/fallback-image.jpg";
    const projectImages = project.projects || [];

    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <main>
                <Navbar />
                <div className="relative flex h-screen w-full">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={projectImageUrl}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="filter bg-black bg-opacity-50"
                            loader={myLoader}
                        />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-white text-center md:text-start gap-5 md:gap-1">
                        <h1 className="font-bold text-3xl">{project.title}</h1>
                        <p className="text-xl">{project.description}</p>
                    </div>
                </div>
                <div className="w-full flex px-10 py-24 bg-black">
                    <div className="flex flex-col justify-center items-center w-full gap-10">
                        <h1 className="text-white text-xl">
                            <span className="font-bold">The </span>
                            <span className={`${libreBaskerville.className} italic font-sans`}>
                                Results
                            </span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {projectImages.length > 0 ? (
                                projectImages.map((image, index) => (
                                    <div key={index} className="relative w-full h-64">
                                        <Image
                                            src={image.url}
                                            alt={`Project Image ${index + 1}`}
                                            loader={myLoader}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-md"
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="text-white">No image yet</div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}