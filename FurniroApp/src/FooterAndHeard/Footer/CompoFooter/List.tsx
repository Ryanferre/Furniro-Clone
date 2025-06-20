import { Link } from "react-router-dom"

const NavList= ()=>{
    return(
         <div className="flex flex-row gap-7 lg:gap-0 lg:justify-around w-90 lg:w-[600px] h-max lg:h-full">
            <nav className="h-40 lg:h-[270px] flex flex-col gap-3 lg:gap-[45px] mt-[8px]">
                <p className="font-semibold text-[#9F9F9F]">Links</p>
                <ul className="flex flex-col justify-between h-full">
                <li className="font-semibold"><Link to="/">Home</Link></li>
                <li className="font-semibold"><Link to="/shop">Shop</Link></li>
                <li className="font-semibold"><Link to="">About</Link></li>
                <li className="font-semibold"><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <nav className="h-30 lg:h-[210px] flex flex-col gap-2 lg:gap-[45px] mt-[8px]">
                <p className="font-semibold text-[#9F9F9F]">Help</p>
                <ul className="flex flex-col justify-between h-full">
                    <li className="font-semibold">Paiment Options</li>
                    <li className="font-semibold">Retuns</li>
                    <li className="font-semibold">Privacy Policies</li>
                </ul>
            </nav>
         </div>
    )
}

export default NavList