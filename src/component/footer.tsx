import Image from "next/image";
import logo from "/public/logo.svg";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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
                <div className="flex gap-2">
                    <InstagramIcon />
                    <div>Instagram name</div>
                </div>
                <div className="flex gap-2">
                    <YouTubeIcon />
                    <div>YouTube name</div>
                </div>
                <div className="flex gap-2">
                    <LinkedInIcon />
                    <div>LinkedIn name</div>
                </div>
            </div>
            <div>
                <div>Let`s collaborate:</div>
                <div className="flex gap-2">
                    <PhoneIcon />
                    <div>Phone number</div>
                </div>
                <div className="flex gap-2">
                    <EmailIcon />
                    <div>Email address</div>
                </div>
            </div>
        </div>
    );
}
