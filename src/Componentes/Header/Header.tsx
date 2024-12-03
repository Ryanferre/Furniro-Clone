

/*icones */
import { FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
const Header= ()=>{
    return(
        <>
         <header className="flex flex-row items-center justify-between px-10 h-[75px]">

            {/*logo*/}
            <div className="flex flex-row w-[178px] items-center justify-between">
                
                <h1 className="font-bold text-[35px]">Furniro</h1>
            </div>

            {/*lista*/}
            <ul className="flex flex-row w-[400px] align-center justify-between">
                <li className="font-semibold">Home</li>
                <li className="font-semibold">Shop</li>
                <li className="font-semibold">About</li>
                <li className="font-semibold">Contact</li>
            </ul>

            {/*user*/}
            <div className="flex flex-row items-center justify-around w-[100px]">
                <p className="flex flex-row items-center"><FaUser />!</p>
                <FaCartShopping />
            </div>
         </header>
        </>
    )
}

export default Header