import { useState } from "react"
const Cadestre= ()=>{
    const [ValidEmail, SetEmail]= useState(0)

    const GetValue= (e: string)=>{
        const Email= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(Email.test(e)){
            SetEmail(0)
        }else{
            SetEmail(1)
        }
    }
    return(
        <>
         <div className="w-[290px] h-[96px] hidden lg:flex flex-col justify-between mt-[8px]">
            <p className="font-semibold text-[#9F9F9F]">Newsletter</p>
            <label className="flex flex-row w-full justify-between">
                <input className="outline-none border-b-2 border-black" type="email" placeholder="Enter Your Email Adress" onChange={(e) => GetValue(e.target.value)}/>
                <button className="font-semibold opacity-0 border-b-2 border-black text-black">SUBSCRIBE</button>
            </label>
            <p className={`text-black opacity-${ValidEmail}`}>Email invalido</p>
         </div>
        </>
    )
}

export default Cadestre