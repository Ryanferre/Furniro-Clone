import { useEffect, useState } from "react"
import axios from "axios"

const QRpage= ()=>{
    const [Qrcode, setQR]= useState<any>([''])
    useEffect(()=>{
        const StartgetQr= async()=>{
            try {
                const getQR= await axios.get('https://qrcode-5bpy.onrender.com/codeqrgenerate')
                setQR([getQR.data])

                console.log(getQR.data)
            } catch (error) {
                console.error(error)
            }

        }

        StartgetQr()
    }, [])
    return(
         <div className="bg-[#FFF3E3] w-max px-10 py-4 h-max flex flex-col items-center justify-center m-auto gap-9 rounded-[15px]">
            <div  className="flex flex-col items-center gap-2">
                <h1 className="text-[20px] text-center w-full h-max text-[#B88E2F] font-bold">Pagamento via pix</h1>
                <img src={Qrcode} />
            </div>
         </div>
    )
}

export default QRpage