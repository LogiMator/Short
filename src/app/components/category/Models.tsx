import Image from "next/image"

export function Models() {
    return (
    <div>
        <p className="text-2xl font-bold text-center my-6 tracking-tighter">Our Category</p>
        <section className="flex gap-8 place-content-center pb-16">

            <div className=" relative flex flex-col bg-[#F7FCF8] items-center">
                <Image src={"/images/modelazo.png"} className="hover:drop-shadow-2xl hover:scale-105 ease-out duration-300" width={300} height={420} alt="modelo"/>
                <div className="w-[80%] h-[20%] text-white absolute text-center p-[24px] bottom-8 place-items-center bg-[#020016]">
                    <p className="font-bold">Overzised Flannes</p>
                    <button className="text-[12px] hover:text-[14px] ease-out duration-300 "> Shop Now </button>
                </div>
            </div> 
                    
            <div className=" relative flex flex-col bg-[#FDF8F4] items-center hidden md:block">
                <Image src={"/images/mandarina.png"} className="hover:drop-shadow-2xl hover:scale-105 ease-out duration-300" width={300} height={420} alt="modelo"/>
                <div className="w-[80%] h-[20%] text-white absolute text-center p-[24px] bottom-8 place-items-center bg-[#020016]">
                    <p className="font-bold">Distress Bucket Hats</p>
                    <button className="text-[12px] hover:text-[14px] ease-out duration-300 "> Shop Now </button>
                </div>
            </div>

            <div className=" relative flex flex-col bg-[#FFF6F9] items-center hidden md:block">
                <Image src={"/images/chico.png"} className="mt-12 hover:drop-shadow-2xl hover:scale-105 ease-out duration-300" width={300} height={420} alt="modelo" />
                <div className="w-[80%] h-[20%] text-white absolute text-center p-[24px] bottom-8 place-items-center bg-[#020016]">
                    <p className="font-bold">Distress Bucket Hats</p>
                    <button className="text-[12px] hover:text-[14px] ease-out duration-300 "> Shop Now </button>
                </div>
            </div>
        </section>
    </div>
    )
}