import { useEffect, useState } from "react"
import axios from "axios"

type CepData= {
    Cep: string,
    regiao: string,
    logradouro: string,
    localidade: string,
    estado: string
}

const Checkstyle= "flex flex-row gap-3"
const styleTittle= "font-semibold text-[20px]"
const PageCep = ()=>{
    const [Cep, setCep]= useState("")
    const [ResApi, SetRes]= useState<CepData>({ Cep: "", regiao: "", logradouro: "", localidade: "", estado: ""})
    const [visible, setvible]= useState('0')

    useEffect(()=>{
        const getCep= async ()=>{
            await axios.get(`https://viacep.com.br/ws/${Cep}/json/`).then(
                (e)=>{
                    SetRes(e.data)
                    console.log(e.data)
                }
            ).catch((err)=>{
                console.log(err)
            })
        }
        getCep()
    }, [Cep])

    const cepRequerid= /^[0-9]{8}$/

    const validCep= (e: any)=>{
        const cepDigit= e.target.value
        if(cepRequerid.test(cepDigit)){
            setCep(e.target.value)
            setvible('0')
        }else{
            setvible('1')
        }
    }



    return(
        <>
        <section>
            <div className="w-full h-[310px] bg-contain flex flex-col items-center justify-center" style={{backgroundImage: 'url(https://i.postimg.cc/Vk5jnHQM/Shop-Banner.png'}}>
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

            <div className="py-[60px] px-[150px] h-[900px] flex flex-row justify-between">
                <section className="flex flex-col gap-8 h-full">
                    <h2 className="text-[30px] font-bold">Billing details</h2>
                    <ul className="h-full flex flex-col justify-between w-[293px]">
                        <li>
                            <div className="flex flex-row justify-start gap-4">
                                <label className="flex flex-col justify-between gap-3">
                                <p>Fist Name</p>
                                <input className="border h-[48px] w-[137px] rounded-[5px] pl-[6px] outline-none" type="text" />
                                </label>
                                <label className="flex flex-col justify-between gap-4">
                                <p>Last Name</p>
                                <input className="border h-[48px] w-[137px] rounded-[5px] pl-[6px] outline-none" type="text" />
                                </label>
                            </div>
                        </li>
                        <li>
                        <label className="flex flex-col justify-between gap-2">
                            <p>Zip code</p>
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-none" type="text" onChange={validCep} />
                            <p className={`opacity-${visible} text-[14.8px] text-red-400`}>adicione um cep valido</p>
                        </label>
                        </li>
                        <li>
                        <label className="flex flex-col justify-between gap-2">
                            <p>Country / Region</p>
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-nonepl-[6px] outline-none" type="text" value={ResApi.regiao} />
                        </label>
                        </li>
                        <li>
                        <label className="flex flex-col justify-between gap-2">
                            <p>street address</p>
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-none" type="text" value={ResApi.logradouro}/>
                        </label>
                        </li>
                        <li>
                        <label className="flex flex-col justify-between gap-2">
                            <p>Town / city</p>
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-none" type="text" value={ResApi.localidade}/>
                        </label>
                        </li>
                        <li>
                        <label className="flex flex-col justify-between gap-2">
                            <p>Province</p>
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-none" type="text" value={ResApi.estado}/>
                        </label>
                        </li>
                        <li>
                        <label className="flex flex-col justify-between gap-2">
                            <p>Add-on Adress</p>
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-none" type="text" />
                        </label>
                        </li>
                        <li>
                        <label className="flex flex-col justify-between gap-2">
                            <p>Email adress</p>
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-none" type="text" />
                        </label>
                        </li>
                        <li>
                        <label className="flex flex-col justify-end h-[60px]">
                            <input className="border h-[40px] rounded-[5px] w-[290px] pl-[6px] outline-none" type="text" placeholder="Additional information"/>
                        </label>
                        </li>
                    </ul>
                </section>

                <div className="w-[450px] flex flex-col h-[700px]">
                    <div>
                        <div className="flex flex-row w-full justify-between items-center h-[200px] border-b">
                            <ul className="flex flex-col gap-[12px]">
                            <p className={styleTittle}>Product</p>
                                <li><p>Guard Sofar</p></li>
                                <li>Sub total</li>
                                <li>Total</li>
                            </ul>
                            <ul className="flex flex-col gap-[12px]">
                            <p className={styleTittle}>Subtotal</p>
                                <li><p>Rs.250,000.00</p></li>
                                <li><p>Rs.250,000.00</p></li>
                                <li><p className="text-[#B88E2F] font-bold text-[22px]">Rs.250,000.00</p></li>
                            </ul>
                        </div>
                        <article className="h-[280px] flex flex-col justify-around pt-2">
                            <label className={Checkstyle}>
                            <input type="checkbox" />
                            <p>Direct Banck Transfer</p>
                            </label>
                            <p>Make your payment directly into our bank account. 
                            Please use your Order ID as the payment reference. 
                            Your order will not be shipped until the funds have 
                            cleared in our account.</p>
                            <div className="h-[54px] flex flex-col justify-between">
                                <label className={Checkstyle}>
                                  <input type="checkbox" />
                                  <p>Direct Banck Transfer</p>
                                </label>
                                <label className={Checkstyle}>
                                  <input type="checkbox" />
                                  <p>Direct Banck Transfer</p>
                                </label>
                            </div>
                            <p className="text-[16px]">Your personal data will be used to support your 
                            experience throughout this website, to manage access
                            to your account, and for other purposes described in our
                            privacy policy.</p>
                        </article>
                    </div>
                    <button>Palce order</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default PageCep