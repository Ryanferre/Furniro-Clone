import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import AddedItencart from "./CompoHeader/IconCart.tsx";
import DataCostum from "../../Settings/HookCostum/Costum.tsx";
import MenuMobile from "./CompoHeader/MenuMobile.tsx";

/*icones */
import { FaUser } from "react-icons/fa"

const Header= ()=>{
    const {MoveModalMenu, ModalViewMenu}= useContext(DataCostum)

    const ModalMenuVisibleOurNone= ()=>{
        if(ModalViewMenu == 'top-20'){
            MoveModalMenu('-top-90')
        }else{
            MoveModalMenu('top-20')
        }
    }

    return(
        <>
         <header className="flex relative flex-row items-center justify-between px-4 lg:px-10 h-[5em]">

            {/*logo*/}
            <div className="flex flex-row z-30 w-[8em] lg:w-[10em] items-center justify-between">
                <img className="w-9 lg:w-13" src="https://i.postimg.cc/FRrJpCJN/Icon-Header.png" />
                <h1 className="font-bold text-[1.4em] lg:text-3xl sm:text-3xl">Furniro</h1>
            </div>

            {/*lista*/}
            <ul className="hidden lg:flex z-20 flex-row w-[400px] align-center justify-between">
                <li className="font-semibold"><Link to="/">Home</Link></li>
                <li className="font-semibold"><Link to="/shop">Shop</Link></li>
                <li className="font-semibold"><Link to="">About</Link></li>
                <li className="font-semibold"><Link to="/Contact">Contact</Link></li>
            </ul>
            <MenuMobile />
            {/*Botao para o menu */}
            <button className="z-30 flex lg:hidden" onClick={ModalMenuVisibleOurNone}>
                <img className="w-8" src="https://i.postimg.cc/25nWkh0S/menu-aberto.png"/>
            </button>

            {/*user*/}
            <div className="hidden lg:flex z-30 flex-row items-center justify-around w-[100px]">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
                <Link className="flex flex-row items-center" to="/Login"><FaUser />!</Link>
            </SignedOut>
            <AddedItencart />
            </div>
         </header>
        </>
    )
}

export default Header