import { FaGoogle } from "react-icons/fa"
import axios from "axios"

const Login= ()=>{

    const searchUser= async ()=>{
        try {
            const Search= await axios.get("https://accounts.google.com/o/oauth2/v2/auth",
                {
                    params:{
                        
                    }
                }
            )
        } catch (error) {
            
        }
    }



    return(
        <div className="m-auto bg-[#FFF3E3] w-[610px] h-[430px] flex flex-col items-center justify-center gap-10 p-5 mt-6 rounded-[15px]">
            <h1 className="text-[52px] text-center w-full text-[#B88E2F] font-bold">Wellcome!</h1>
            <form className="h-72 flex flex-col gap-11">
                <label className="flex flex-col gap-1">
                    <p className="font-semibold text-black">enter your email</p>
                    <input className="w-[300px] bg-transparent border-b outline-none" placeholder="Add your email" type="email" />
                </label>
                <label className="flex flex-col gap-1">
                    <p className="font-semibold text-black" >enter your password</p>
                    <input className="w-[300px] bg-transparent border-b outline-none" placeholder="Add your password" type="password" />
                </label>
            </form>

            <button><FaGoogle /></button>
         </div>
    )
}


export default Login