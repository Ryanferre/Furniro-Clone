import axios from "axios"
import { useEffect, useState } from "react"
import ListItens from "../itensList/ShopItens"


const FilterBox= ()=>{
    const [Iten, setIten]= useState("")

    useEffect(()=>{
        axios.get("http://localhost:3001/products", {
            params: {
                name: Iten
            }
        }).then((res)=>{
            console.log(res.data)
        })
    }, [Iten])
    return(
        <div className="absolute inset-0 h-[75px] w-[250px] flex flex-row items-center bg-white border justify-around rounded-[10px]">
            <ul className="flex flex-row w-52 justify-around">
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                     <p>Sofar</p>
                     <input type="checkbox" onChange={()=> setIten('Sofar')}/>
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Cama</p>
                    <input type="checkbox" />
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Asento</p>
                    <input type="checkbox" />
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Mesas</p>
                    <input type="checkbox" />
                    </label>
                </li>
            </ul>
            <button>
            <div className="flex flex-col items-center justify-center h-[20px] gap-[5.4px]">
                <span className="content boder w-[13px] h-[2px] transition-transform -rotate-[38deg] inline-block bg-[#9F9F9F]"></span>
                <span className="content boder w-[13px] h-[2px] transition-transform rotate-[39deg] inline-block bg-[#9F9F9F]"></span>
            </div>
            </button>
            <ListItens />
        </div>
    )
}

export default FilterBox