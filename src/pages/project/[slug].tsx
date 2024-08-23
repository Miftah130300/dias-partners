import { useRouter } from "next/router"
import Image from "next/image"
import { dataProject } from "../api/data-project"
import Navbar from "src/component/navbar"
import Head from "next/head"
import { StaticImageData } from "next/image"
import { libreBaskerville } from "src/font/font";

interface Project {
    id: number;
    title: string;
    description: string;
    type: string;
    asset1: StaticImageData;
    asset2: StaticImageData;
    asset3: StaticImageData;
    asset4: StaticImageData;
    asset5: StaticImageData;
    asset6: StaticImageData;
    cover: StaticImageData;
    hero: StaticImageData;
}

export default function DetailProject() {
    const route = useRouter()
    const { slug } = route.query
    const data = dataProject.find(item => item.title === slug)
    const assets = [data?.asset1, data?.asset2, data?.asset3, data?.asset4, data?.asset5, data?.asset6]

    if (!data) {
        return (
            <div>No data found</div>
        )
    }
    return (
        <>
            <Head>halo</Head>
            <main>
                <Navbar />
                <div className="relative flex h-screen w-full">
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={data.hero}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="filter bg-black bg-opacity-50"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:text-5xl text-white text-center md:text-start">
                        <h1 className="font-bold">
                            {data.title}
                        </h1>
                        <p className="text-xl">
                            {data.description}
                        </p>
                    </div>
                </div>
                <div className="w-full flex px-10 py-24 bg-black">
                    <div className="flex flex-col justify-center items-center w-full gap-5">
                        <h1 className="text-white">
                            <span className="font-bold">The </span>
                            <span className={`${libreBaskerville.className} italic font-sans`}>Results</span>
                        </h1>
                        <div className="columns-3">
                            {
                                assets.map((asset, index) => (
                                    <div className="w-full py-3" key={index}>
                                        <Image src={asset} alt={`Asset ${index + 1}`} width={300} height={200} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}