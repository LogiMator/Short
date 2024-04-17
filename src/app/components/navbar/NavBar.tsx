import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";

// Definir los tipos de los iconos
type IconType = typeof IoIosSearch | typeof GoPerson | typeof LuShoppingCart;

// Definir los iconos disponibles
const IconsApp: IconType[] = [IoIosSearch, GoPerson, LuShoppingCart];

export function NavBar() {
    return(
    <nav className="">
        <div className="flex h-20 mx-4 text-sm md:w-full sm:justify-center sm:text-base lg:w-full lg:justify-end items-center lg:pr-24 gap-4">
        <a href="#" className="hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">Home</a>
        <a href="#" className="hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">About</a>
        <a href="#" className="hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">Shop</a>
        <a href="#" className="hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">Contact Us</a>

        {/* Mapear los iconos disponibles y renderizarlos */}
        {IconsApp.map((Icon, index) => (
            <a key={index} href="" className="hover:text-[#F00101]">
            <Icon size={24} />
            </a>
        ))}
        </div>
    </nav>
    )
}