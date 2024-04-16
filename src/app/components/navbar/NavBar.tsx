import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";

// Definir los tipos de los iconos
type IconType = typeof IoIosSearch | typeof GoPerson | typeof LuShoppingCart;

// Definir los iconos disponibles
const IconsApp: IconType[] = [IoIosSearch, GoPerson, LuShoppingCart];

export function NavBar() {
    return(
    <nav className="flex w-full h-20 justify-end items-center pr-24">
        <div className="flex gap-4">
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