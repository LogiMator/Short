import Image from "next/image"
import { NavBar } from "../navbar/NavBar"

export function Container() {
    return (
    <div className="bg-[#020016] text-white flex">
        <div className="w-[75%]">
            <NavBar />
                <div className="flex flex-row ">
                <Image src={"/images/caqui.png"} priority={false} width={480} height={520} alt="Modelo" />
                    <div className="w-[420px] mx-auto my-10">
                        <p className="text-[54px] font-bold leading-none">Be Your Street <span className="text-[#FF0042]">Wear</span></p>
                        <p className="my-[18px] text-[14px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque a corporis cumque aliquam labore officiis ex eum corrupti, iste ullam reiciendis veritatis autem amet! Sequi laborum magni doloremque dolorem officia?</p>
                        <button className="bg-[#FF0042] mt-2 px-[56px] py-[20px] rounded-full hover:scale-110 ease-out ml-4 duration-300">Explore Now</button>
                    </div>
                </div>
        </div>

        <div className="w-[25%] bg-[#FF0042] flex flex-col justify-center items-center">
            <Image src={"/images/camisa.png"} className="" width={220} height={320} alt="Camisa" />
            <p className="text-[38px] block text-center font-bold">Everyday Casual</p>
            <a href="#" className="hover:scale-125 my-6 ease-out duration-300"> Shop Now </a>
                <div className="flex gap-2">
                    <input className="accent-[#012123] appearance-none bg-white w-2 h-2 checked:bg-[#022123] rounded-full cursor-pointer" type="radio" name= "group" id="1" />
                    <input className="accent-[#012123] appearance-none bg-white w-2 h-2 checked:bg-[#022123] rounded-full cursor-pointer" type="radio" name= "group" id="2" />
                    <input className="accent-[#012123] appearance-none bg-white w-2 h-2 checked:bg-[#022123] rounded-full cursor-pointer" type="radio" name= "group" id="3" />
                </div>
        </div>
    
        <div className="w-10 h-32 bg-[#FF0042] absolute bottom-[-35px] "></div>

    </div>
    )
}