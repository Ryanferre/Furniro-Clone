import FilterItens from "../../../pagesExternas/Shop/HookCustum/ContexData"
import { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6"


const AddedItencart= ()=>{
    const {ItensCart}= useContext(FilterItens)
    const [Added, setAdded]= useState<number>(ItensCart)

    useEffect(()=>{
        setAdded(ItensCart)
    }, [ItensCart])

    console.log('atualizou')
    return(
            <div className="relative h-8 flex flex-col w-5 justify-between items-center">
                <span className="flex flex-col items-center justify-center bg-black -mr-3 w-[18px] h-[18px] z-0 rounded-[50px]"><p className="text-white text-[12px]">{Added}</p></span>
                <FaCartShopping />
            </div>
    )
}

export default AddedItencart