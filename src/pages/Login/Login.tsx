import { SignInButton } from "@clerk/clerk-react"
import { FaGoogle } from "react-icons/fa"

const Login= ()=>{
    return(
        <div className="m-auto bg-[#FFF3E3] w-[400px] h-[300px] flex flex-col items-center my-20 justify-start gap-9 rounded-[15px]">
            <div>
                <h1 className="text-[52px] text-center w-full text-[#B88E2F] font-bold">Wellcome!</h1>
                <p className="text-center text-[#9F9F9F]">Log in with your social network</p>
            </div>
            <div className="flex flex-col w-[240px] justify-around h-[100px]">
             <SignInButton>
                <span className="border flex items-center justify-around bg-white py-2 px-5 rounded-[8px] shadow cursor-pointer">
                 <FaGoogle className="w-6 h-6" />
                 <p className="w-[150px] text-[#9F9F9F]">Google Acount</p>
                </span>
             </SignInButton>
            </div>
         </div>
    )
}


export default Login