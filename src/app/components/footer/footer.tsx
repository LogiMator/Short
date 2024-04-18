import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center my-4 gap-4 md:flex-row md:justify-between md:mx-4">
    
    <div className="flex flex-col items-center justify-center">
        <a href="https://short-lime.vercel.app/">
            <Image src={"/images/favicon.ico"} className="" width={84} height={84} alt="icono"/>
        </a>
        
        <div className="flex flex-row gap-2 mt-2">
            <a href="https://github.com/LogiMator" target="_blank">
                <FaGithub size={28}/>
            </a>
            <a href="https://linkedin.com/in/marco-dominguez-8963782b0" target="_blank">
                <FaLinkedin size={28}/>
            </a>
            <a href="https://octubre1600@gmail.com" target="_blank">
                <SiGmail size={28}/>
            </a>
        </div>
    </div>

    <div className="flex flex-col items-center justify-center md:mt-0">
        <p className="mb-2 font-bold">Helpful Links</p>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href="#">Contact Us</a>
    </div>

    <div className="flex flex-col items-center justify-center md:mt-0">
        <p className="mb-2 font-bold">Information</p>
        <a href="#">Terms & Conditions</a>
        <a href="#">Deivery Fees</a>
        <a href="#">FAQs</a>
        <a href="#">Privacy Policy</a>
    </div>

    <div className="flex flex-col items-center justify-center md:mt-0">
        <p className="mb-2 font-bold">Get In Touch</p>
        <a href="#" className="flex items-center">
            <span className="mr-2"><LiaPhoneVolumeSolid /></span>
            123 4567890
        </a>
        <a href="https://octubre1600@gmail.com" className="flex items-center">
            <span className="mr-2"><FiMail /></span>
            octubre1600@gmail.com
        </a>
    </div>

    <div className="flex flex-col items-center justify-center md:mt-0">
        <p className="font-bold">Any New Ideas?</p>
        <input type="text" placeholder="Email Address" className="outline-none hover:border-b-2 hover:border-[#000000] focus:border-b-2 focus:border-[#000000] ease-linear duration-75"/>
        <button className="bg-black text-white w-[50%] mx-auto rounded-full mt-2 hover:shadow-2xl" >Enviar</button>
    </div>
</footer>
    )
}