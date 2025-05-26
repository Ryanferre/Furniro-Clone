import { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import DataCostum from "../../../Settings/HookCostum/Costum";


const AddedItencart= ()=>{
    const StoreItens= useSelector((state)=> state.Statecart.length)
    const Stott= useSelector((state)=> state.Statecart)

    console.log(Stott)

    const {MoveModal}= useContext(DataCostum)

    const location = useLocation();
    const navigate = useNavigate();
    const MoveViewCart= ()=>{
        if(location.pathname == '/' || location.pathname == '/shop' || location.pathname == '/Contact'){
            navigate('/ChoiceItens')
        }
        if(location.pathname.startsWith('/Productcart/')){
            MoveModal('flex')
        }
    }
    console.log(StoreItens)
    return(
            <div className="relative h-8 w-10 flex flex-col mb-4 justify-between items-center" onClick={MoveViewCart}>
                <span className="flex flex-col items-center justify-center bg-black -mr-3 w-[18px] h-[18px] z-0 rounded-[50px]"><p className="text-white text-[12px]">{StoreItens}</p></span>
                <FaCartShopping />
            </div>
    )
}

export default AddedItencart