import { useEffect, useState } from "react"
import ImgBanner from "../imgBanner/ShopBanner.png"
import axios from "axios"

type CepData= {
    Cep: string,
    regiao: string,
    logradouro: string,
    localidade: string,
    estado: string
}
const PageCep = ()=>{
    const [Cep, setCep]= useState("")
    const [ResApi, SetRes]= useState<CepData>({ Cep: "", regiao: "", logradouro: "", localidade: "", estado: ""})

    useEffect(()=>{
        const getCep= async ()=>{
            await axios.get(`https://viacep.com.br/ws/${Cep}/json/`).then(
                (e)=>{
                    console.log(e.data)
                    SetRes(e.data)
                }
            )
        }

        getCep()
    }, [Cep])
    return(
        <section>
            <div className="w-full h-[310px] bg-contain flex flex-col items-center justify-center" style={{backgroundImage: `url(${ImgBanner}`}}>
                <h1 className="font-semibold text-[44px]">Checkout</h1>
                <div className="flex flex-row items-center justify-around w-[150px]">
                    <p className="font-semibold text-[16px]">Home</p>
                    <div className="flex flex-col items-center justify-center h-[20px] gap-[3px] mt-[4px]">
                        <span className="content boder w-[10.4px] h-[2px] transition-transform rotate-[38deg] inline-block bg-black"></span>
                        <span className="content boder w-[10.4px] h-[2px] transition-transform -rotate-[39deg] inline-block bg-black"></span>
                    </div>
                    <p>Checkout</p>
                </div>
            </div>

            <section>
                <ul>
                    <li>
                        <div className="flex flex-row">
                            <label>
                              <p>Fist Name</p>
                              <input type="text" />
                            </label>
                            <label>
                              <p>Last Name</p>
                              <input type="text" />
                            </label>
                        </div>
                    </li>
                    <li>
                    <label>
                        <p>Zip code</p>
                        <input type="text" onChange={(e)=> setCep(e.target.value)} />
                    </label>
                    </li>
                    <li>
                    <label>
                        <p>Country / Region</p>
                        <input type="text" value={ResApi.regiao} />
                    </label>
                    </li>
                    <li>
                    <label>
                        <p>street address</p>
                        <input type="text" value={ResApi.logradouro}/>
                    </label>
                    </li>
                    <li>
                    <label>
                        <p>Town / city</p>
                        <input type="text" value={ResApi.localidade}/>
                    </label>
                    </li>
                    <li>
                    <label>
                        <p>Province</p>
                        <input type="text" value={ResApi.estado}/>
                    </label>
                    </li>
                    <li>
                    <label>
                        <p>Add-on Adress</p>
                        <input type="text" />
                    </label>
                    </li>
                    <li>
                    <label>
                        <p>Email adress</p>
                        <input type="text" />
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="text" placeholder="Additional information"/>
                    </label>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default PageCep