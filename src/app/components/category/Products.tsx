import Image from "next/image";

const product = [
    {
        productName: "Oversized Flannels",
        price: "150.000"
    },
    {
        productName: "Bucket Hats",
        price: "180.000"
    },
    {
        productName: "Trucker Hats",
        price: "200.000"
    }
]

export function Products(){
    return (
        <section className="pt-8 flex flex-col md:flex-row items-center">

        <div className="w-[30%] flex flex-col items-center">
                <p className="text-[#020016] leading-tight font-extrabold text-[32px] text-center w-[320px] md:w-[200px]">Explore Our Products</p>
                <p className="text-[#FF0042] my-2 font-bold text-center w-[320px] ">Select the products</p>
                
                <div className="flex flex-col">
                    <label htmlFor="Oversized Flannels">
                        <input className="appearance-none border-2 border-gray-300 bg-white w-5 h-5 checked:border-[#FF0042] rounded-full cursor-pointer" type="radio" name= "group" id="1" /> Oversized Flannels
                    </label>

                    <label htmlFor="Bucket Hats">
                        <input className="appearance-none border-2 border-gray-300 bg-white w-5 h-5 checked:border-[#FF0042] rounded-full cursor-pointer" type="radio" name= "group" id="2" /> Bucket Hats
                    </label>

                    <label htmlFor="Trucker Hats">
                        <input className="appearance-none border-2 border-gray-300 bg-white w-5 h-5 checked:border-[#FF0042] rounded-full cursor-pointer" type="radio" name= "group" id="3" /> Trucker Hats
                    </label>
                    <button className="bg-[#FF0042] text-white mt-4 w-[220px] h-[54px] rounded-full hover:scale-105 ease-out duration-300">View All Product</button>
                </div>

        </div>

        <div className="w-[80%] h-[360px] md:h-[450px] flex flex-row items-center justify-center gap-2 ">
        {
            product.map((product, index) => {
                return(
                    <div className="relative" key={index}>
                            <div className="hidden md:block w-[180px] h-[320px] bg-[#F7FCF8] top-[-50px] absolute"></div>
                                <Image className="hover:scale-105 hover:drop-shadow-2xl relative ease-out duration-300 mb-2" src={"/images/buzo.png"} alt="buzo" width={220} height={380} />
                            
                            <div className="ml-4">
                                <p>{product.productName}</p>
                                <p className="text-[#D4372E] my-2">${product.price}</p>
                                <label htmlFor="red" className="gap-2 flex">
                                    <input className="appearance-none bg-[#F53540] w-4 h-4 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "red" id={product.productName} />
                                    <input className="appearance-none bg-[#7CC576] w-4 h-4 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "red" id={product.productName} />
                                    <input className="appearance-none bg-[#333333] w-4 h-4 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "red" id={product.productName} />
                                </label>
                            </div>
                    </div>
                )
            })
        }
        </div>

    </section>
    )
}