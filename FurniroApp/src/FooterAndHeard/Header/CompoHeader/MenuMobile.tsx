import { Link } from "react-router-dom";
import DataCostum from "../../../Settings/HookCostum/Costum";
import { useContext } from "react";

const MenuMobile= ()=>{
    const {ModalViewMenu}= useContext(DataCostum)
    return(
           <ul className={`flex absolute ${ModalViewMenu} flex-row h-15 w-[24em] duration-500 z-10 justify-between px-6 bg-white rounded-bl-[.5em] rounded-br-[.5em] items-center`}>
                <li className="font-semibold h-max"><Link to="/">Home</Link></li>
                <li className="font-semibold h-max"><Link to="/shop">Shop</Link></li>
                <li className="font-semibold h-max"><Link to="">About</Link></li>
                <li className="font-semibold h-max"><Link to="/Contact">Contact</Link></li>
            </ul>
    )
}

export default MenuMobile