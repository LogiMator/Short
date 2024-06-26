import Image from "next/image"
import { NavBar } from "../navbar/NavBar"

export function Container() {
    return (
    <main className="bg-[#020016] text-white justify-center flex relative">
        <div className="w-[70%] md:w-full ">
            <NavBar />
                <div className="flex flex-row md:justify-center ">
                <Image src={"/images/caqui.png"} className="hidden lg:block" width={480} height={520} alt="Modelo" />
                    <div className="w-[420px] mx-auto my-10 ">
                        <p className="text-[54px] font-bold  leading-none">Be Your Street <span className="text-[#FF0042]">Wear</span></p>
                        <p className="my-[18px] text-[14px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque a corporis cumque aliquam labore officiis ex eum corrupti, iste ullam reiciendis veritatis autem amet! Sequi laborum magni doloremque dolorem officia?</p>
                        <button className="bg-[#FF0042] mt-2 px-[56px] py-[20px] rounded-full hover:scale-110 ease-out ml-4 duration-300">Explore Now</button>
                    </div>
                </div>
        </div>

        <div className="hidden w-[30%] bg-[#FF0042] md:flex md:flex-col md:justify-center md:items-center">
            <Image src={"/images/camisa.png"} className="" width={220} height={320} alt="Camisa" />
            <p className=" sm:text-[24px] md:text-[34px] text-center font-bold">Everyday Casual</p>
            <a href="#" className="hover:scale-125 my-6 ease-out duration-300"> Shop Now </a>
                <div className="flex gap-2">
                    <input className="accent-[#012123] appearance-none bg-white w-2 h-2 checked:bg-[#022123] rounded-full cursor-pointer" type="radio" name= "group" id="1" />
                    <input className="accent-[#012123] appearance-none bg-white w-2 h-2 checked:bg-[#022123] rounded-full cursor-pointer" type="radio" name= "group" id="2" />
                    <input className="accent-[#012123] appearance-none bg-white w-2 h-2 checked:bg-[#022123] rounded-full cursor-pointer" type="radio" name= "group" id="3" />
                </div>
        </div>
    
        <div className="w-10 h-32 bg-[#FF0042] absolute bottom-[-35px] left-0"></div>

    </main>
    )
}