import { libreBaskerville } from "../font/font";
import dynamic from "next/dynamic";
import Head from "next/head";
const Footer = dynamic(() => import('src/component/footer'), { ssr: false });
const Navbar = dynamic(() => import('src/component/navbar'), { ssr: false });
export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Dias & Partners</title>
            </Head>
            <main className="bg-black">
                <Navbar />
                <div className="flex flex-col md:flex-row px-10 py-10 md:py-32">
                    <div className="min-h-screen flex items-center bg-black text-white w-full md:w-1/2">
                        <div className="max-w-md w-full">
                            <h1 className="text-3xl mb-6">
                                <span className="font-bold">Ready to capture your </span>
                                <span className={`${libreBaskerville.className} italic`}>precious moments?</span>
                            </h1>
                            <form className="space-y-4 w-full">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                    <input type="text" id="name" className="mt-1 p-2 block w-full rounded-md bg-white bg-opacity-25 text-white placeholder-white placeholder-opacity-25 border-none" placeholder="Input your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                    <input type="email" id="email" className="mt-1 p-2 block w-full rounded-md bg-white bg-opacity-25 text-white placeholder-white placeholder-opacity-25 border-none" placeholder="Input your email" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                                    <input type="tel" id="phone" className="mt-1 p-2 block w-full rounded-md bg-white bg-opacity-25 text-white placeholder-white placeholder-opacity-25 border-none" placeholder="Input your phone number" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                    <textarea id="message" rows={4} className="mt-1 p-2 block w-full rounded-md bg-white bg-opacity-25 text-white placeholder-white placeholder-opacity-25 border-none" placeholder="Input your message"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full py-2 px-4 bg-white hover:bg-opacity-80 text-black font-bold rounded-md">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-1/2 mt-10">
                        <div className="flex justify-center items-center md:justify-start md:items-start flex-col gap-5 text-center md:text-start">
                            <div className="text-white">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl nulla. Proin vel malesuada magna. Nulla facilisi.</p>
                                <p>Contact us at: <span className="font-bold">youremail@gmail.com</span></p>
                            </div>
                            <div className="text-white">OR</div>
                            <button className='p-4 bg-white rounded-lg max-w-52 font-bold hover:bg-white hover:bg-opacity-80'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main >
        </>
    )
}