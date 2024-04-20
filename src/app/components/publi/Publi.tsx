import Image from "next/image"

export function Publi(){
    return(
        <div>

        <div className="h-[340px] bg-[#020016] py-8 flex flex-row relative">
            <Image src={"/images/camisas.png"} className="hidden lg:block" alt="camisas" width={520} height={580} />
            <div>
                <p className="mx-4  text-white w-[420px] mb-2 font-bold text-4xl">Feel Casual Every Day Not Just Fashion, But Class.</p>
                <p className="text-white text-sm mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dignissimos, itaque numquam corrupti sunt perspiciatis? Distinctio eius ipsa sint ducimus temporibus velit repellat doloremque mollitia cum iste, quidem nemo laboriosam?</p>
                <button className="bg-[#FF0042] text-white px-6 py-3 mt-4 mx-auto hover:scale-105 ease-out duration-300 rounded-full block">View All Producst</button>
            </div>
            <div className="w-10 h-32 bg-[#FF0042] absolute bottom-[-35px] right-0"></div>
        </div>


        <div className="grid grid-cols-2">

            <div className="my-7 ml-[64px]">
                <p className="text-[#020016] text-2xl mb-4 font-extrabold">About Beware of Weirdo</p>
                <p className="text-base w-[260px] md:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eum quidem ratione iusto dignissimos nisi laboriosam voluptates atque sed, vero fuga. Obcaecati ut excepturi, vitae blanditiis distinctio harum molestias voluptatum.</p>
            </div>

            <div className="row-span-2 relative hidden lg:block">
                <div className="left-[250px] -rotate-[35deg] bottom-[230px] absolute bg-[#FF0034] leading-none w-[160px] p-4 text-center text-white font-bold z-0">
                    <p className="text-[36px] ">3,831</p>
                    <p className="text-[18px] ">Happy Custom</p>
                </div>
                <Image src={"/images/pose3.png"} className="absolute bottom-0 " alt="modelo" width={420} height={380}/>
            </div>

            <div  className="relative hidden md:block">
                <div className="left-[230px] -rotate-[35deg] bottom-[230px] absolute bg-[#FF0034] leading-none w-[160px] p-4 text-center text-white font-bold z-0">
                    <p className="text-[36px] ">5,821</p>
                    <p className="text-[18px] ">Products Sold</p>
                </div>
                <Image src={"/images/pose1.png"} className="relative ml-[54px] z-10" alt="modelo" width={280} height={420}/>
            </div>
            
        </div>
    </div>
    )


}