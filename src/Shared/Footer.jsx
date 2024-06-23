import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-[#646464]">
            <div>
                <p>&copy;2024 - All Copyright Reserved by Shamim Ahammad</p>
            </div>
            <div className="flex gap-4">
                <a className="text-2xl" href="https://www.facebook.com/shamim.ahammad.549436"><FaFacebook /></a>
                <a className="text-2xl" href="https://www.linkedin.com/in/shamim-ahammad-a74716216/"><FaLinkedin /></a>
                <a className="text-2xl" href="https://x.com/shamima51169939"><FaXTwitter /></a>
            </div>
        </footer>
        );
}