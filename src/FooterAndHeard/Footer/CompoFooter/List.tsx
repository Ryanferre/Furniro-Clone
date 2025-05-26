import { Link } from "react-router-dom"

const NavList= ()=>{
    return(
        <>
         <div className="flex flex-row justify-around w-[600px] h-full">
            <nav className="h-[270px] flex flex-col gap-[45px] mt-[8px]">
                <p className="font-semibold text-[#9F9F9F]">Links</p>
                <ul className="flex flex-col justify-between h-full">
                <li className="font-semibold"><Link to="/">Home</Link></li>
                <li className="font-semibold"><Link to="/shop">Shop</Link></li>
                <li className="font-semibold"><Link to="">About</Link></li>
                <li className="font-semibold"><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <nav className="h-[210px] flex flex-col gap-[45px] mt-[8px]">
                <p className="font-semibold text-[#9F9F9F]">Help</p>
                <ul className="flex flex-col justify-between h-full">
                    <li className="font-semibold">Paiment Options</li>
                    <li className="font-semibold">Retuns</li>
                    <li className="font-semibold">Privacy Policies</li>
                </ul>
            </nav>
         </div>
        </>
    )
}

export default NavList