import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type SelectJson = {
    id: number,
    titleName: string,
    description: string,
    priceTotal: string,
    priceDiscount: string,
    imgItem: string,
    name: string
}

type objAplidHTML= {
        titleName: string,
        description: string,
        priceTotal: string,
        priceDiscount: string,
        imgItem: string
}

const ProductPage= ()=>{
    const {id} = useParams<{id: string}>()
    const [itSelectd, setSelect]= useState<SelectJson []>([])
    const [objAplid, setobj]= useState<objAplidHTML>({
                                                        titleName: '',
                                                        description: '',
                                                        priceTotal: '',
                                                        priceDiscount: '',
                                                        imgItem: ''
                                                    })


    useEffect(()=>{
        if (itSelectd.length > 0) {
            const selectedItem = itSelectd[0]; 
            setobj({
                ...objAplid, // Mantendo os valores anteriores
                titleName: selectedItem.titleName,
                priceTotal: selectedItem.priceTotal,
                priceDiscount: selectedItem.priceDiscount,
                imgItem: selectedItem.imgItem
            });
        }
    }, [itSelectd])

    useEffect(()=>{
        const GetItenUrl= async ()=>{
            axios.get(`http://localhost:3001/products?id=${id}`).then((res)=>{
                setSelect(res.data)
            })
        }
        GetItenUrl()
    }, [])

    return(
        <section>
            <div className="flex flex-col items-start pl-[90px] bg-[#F9F1E7] justify-center h-[75px] gap-[3px] mt-[4px]">
                <div className="flex flex-row justify-between items-center w-[300px]">
                    <div className="flex flex-row justify-between w-[200px] items-center h-8 pr-5 border-r-[2px] border-r-[#9F9F9F]">
                        <p>Home</p>
                        <div className="flex flex-col items-center justify-center h-[20px] gap-[3px] mt-[4px]">
                            <span className="content boder w-[10.4px] h-[2px] transition-transform rotate-[38deg] inline-block bg-black"></span>
                            <span className="content boder w-[10.4px] h-[2px] transition-transform -rotate-[39deg] inline-block bg-black"></span>
                        </div>
                        <p>Shop</p>
                        <div className="flex flex-col items-center justify-center h-[20px] gap-[3px] mt-[4px]">
                            <span className="content boder w-[10.4px] h-[2px] transition-transform rotate-[38deg] inline-block bg-black"></span>
                            <span className="content boder w-[10.4px] h-[2px] transition-transform -rotate-[39deg] inline-block bg-black"></span>
                        </div>
                    </div>
                    <p>{objAplid.titleName}</p>
                </div>
            </div>
            <section>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <span></span>
                </div>
                <div>
                    <h1>{objAplid.titleName}</h1>
                </div>
            </section>
        </section>
    )
}


export default ProductPage