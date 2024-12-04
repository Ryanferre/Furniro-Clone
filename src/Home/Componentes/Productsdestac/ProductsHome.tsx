import React from "react"
import {ArrListItens, ItensType} from "./interItens"

const Destaque: React.FC = ()=>{
    return(
        <section className="w-[1236px] h-[965px] m-auto flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-6">
                <h4 className="text-[40px] font-bold">Our Products</h4>
                <ul className="flex flex-row justify-center flex-wrap gap-6">
                    {ArrListItens.map((Element: ItensType)=>(
                        <li Key={Element.NameIten}>
                            <div className="bg-[#F4F5F7] pb-8 flex flex-col gap-3">
                                <img className="w-[260px]" src={Element.ItenImg}></img>
                                <article className="flex flex-col justify-betweenh-[100px] px-2">
                                    <h5 className="text-[18px] font-semibold">{Element.titleIten}</h5>
                                    <p className="text-[16px] text-[#898989]">{Element.NameIten}</p>
                                    <p className="text-[17px] font-semibold">{Element.Price}</p>
                                </article>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="border border-[#B88E2F] text-[#B88E2F] px-[50px] py-[7px]">Show More</button>
        </section>
    )
}

export default Destaque