import Image from "next/image";
import logo from "/public/logo.svg";

export default function Footer() {
    return (
        <div className="text-white flex flex-col md:flex-row gap-10 md:gap-20 px-10 py-10 bg-black parent">
            <div>
                <div className="relative w-24">
                    <Image
                        src={logo}
                        alt="Background Image"
                        objectFit="cover"
                        height={120}
                        width={120}
                    />
                </div>
                <div>Jakarta, Indonesia</div>
            </div>
            <div>
                <div>Connect with us:</div>
                <div>Instagram name</div>
                <div>YouTube name</div>
                <div>LinkedIn name</div>
            </div>
            <div>
                <div>Let`s collaborate:</div>
                <div>Phone</div>
                <div>Email</div>
            </div>
        </div>
    );
}
