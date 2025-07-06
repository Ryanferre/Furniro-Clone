import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import DataCostum from "../../../Settings/HookCostum/Costum";
import type { RootState } from "../../../Settings/redux/add";

const AddedItencartMobile= ()=>{
    const StoreItens= useSelector((state: RootState)=> state.Statecart.length)

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
            <div className="fixed z-60 m-90 top-45 h-8 w-10 flex lg:hidden flex-col justify-between items-center" onClick={MoveViewCart}>
                <span className="flex flex-col items-center justify-center bg-black -mr-3 w-[18px] h-[18px] z-0 rounded-[50px]"><p className="text-white text-[12px]">{StoreItens}</p></span>
                <FaCartShopping />
            </div>
    )
}

export default AddedItencartMobile