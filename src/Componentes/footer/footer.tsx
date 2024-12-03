import NavList from "./ListFooter/List"
import Cadestre from "./cadrestHome/cadUser"

/*icones */
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"


const Footer= ()=>{
    return(
        <>
         <section className="h-[440px] flex flex-col items-center justify-center px-[100px]">
            <div className="w-full h-[320px] border-b flex flex-row mt-8">
               <div className="h-[223px] w-[300px] flex flex-col justify-between">
                    <h6 className="font-bold text-[24px]">Funiro</h6>
                    <div className="w-[300px]">
                        <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,</p>
                        <p className="text-[#9F9F9F]">FL 33134 USA</p>
                    </div>

                    <ul className="flex flex-row w-[169px] justify-between">
                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <FaFacebook />
                        </li>

                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <FaInstagram />
                        </li>

                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <FaTwitter />
                        </li>

                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <FaLinkedin />
                        </li>
                    </ul>
               </div>
               <NavList />
               <Cadestre />
            </div>
            <p className="my-8 w-full">2023 furino.All rights reverved</p>
         </section>
        </>
    )
}

export default Footer