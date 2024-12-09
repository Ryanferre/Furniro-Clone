import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FilterItens from "../Shop/HookCustum/ContexData"
import { useContext } from "react"
import Aboult from "./componentesProduct/abolt"
import ListProctRelated from "./componentesProduct/listItensProduct"
import ModalTocart from "./componentesProduct/modalProduct"

//icones start
import { FaStar } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

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
    const {getItenscart, ItensCart}= useContext(FilterItens)

    const [AddTocart, setAdd]= useState<number>(0)
    const [removeTotal, setRemove]= useState<number>(0)

    //adicionar iten
    const Add= ()=>{
        setAdd((evt)=> evt+1)
    }

    //remover iten
    const Remove= ()=>{
        setAdd((evt)=> evt-1)
        if(AddTocart>0){
            setRemove((evt=> evt+1))//armazendo a quantidade que foi retirada
        }else{
            setRemove(0)
        }
        console.log(removeTotal)
    }

    //adicionar total no carrinho
    const AddToCartItens= ()=>{
        if(removeTotal>0){//se removeTotal for maior que 0, signifia que retirei
            getItenscart(ItensCart-removeTotal)
            setRemove(0)
            console.log(removeTotal)
        }else{
            getItenscart(ItensCart+AddTocart)
        }
    }

    //verificar se chegou a 0
    useEffect(()=>{
        if(AddTocart < 0){
            setAdd(0)
        }
    }, [AddTocart])
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

    const styleListImg= 'w-[76px] h-[80px] boder rounded-[5px]'
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
            <section className="h-[800px] w-full justify-between pt-9 px-16 border flex flex-row">
                <div className="flex flex-row w-[520px] justify-between">
                    <ul className="h-[450px] flex flex-col justify-start gap-7">
                        <li>
                            <img className={styleListImg} src={objAplid.imgItem} />
                        </li>
                        <li>
                            <img className={styleListImg} src={objAplid.imgItem} />
                        </li>
                        <li>
                            <img className={styleListImg} src={objAplid.imgItem} />
                        </li>
                        <li>
                            <img className={styleListImg} src={objAplid.imgItem} />
                        </li>
                    </ul>
                    <span className="w-[418px] h-[500px] rounded-[5px]" style={{background: `url(${objAplid.imgItem})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></span>
                </div>
                <div className="flex flex-col justify-between">
                <div className="w-[560px] h-[560px] border-b border-b-[#D9D9D9]">
                    <h1 className="text-[42px] font-medium">{objAplid.titleName}</h1>
                    <p className="text-[24px] text-[#9F9F9F] font-semibold">{objAplid.priceDiscount}</p>
                    <div className="w-[250px] h-10 flex flex-row items-center justify-between mt-2">
                        <div className="w-[103px] border-r">
                            <ul className="flex flex-row items-center pt-1 h-[30px] overflow-hidden w-[88px] gap-1">
                                <li>
                                    <FaStar color="#FFC700" />
                                </li>
                                <li>
                                    <FaStar color="#FFC700" />
                                </li>
                                <li>
                                    <FaStar color="#FFC700" />
                                </li>
                                <li>
                                    <FaStar color="#FFC700" />
                                </li>
                                <li>
                                    <FaStar color="#FFC700" />
                                </li>
                            </ul>
                        </div>
                        <p className="text-[16px] text-[#9F9F9F] font-normal">5 Customer Review</p>
                    </div>
                        <p className="w-[450px] font-medium mt-2">Setting the bar as one of the loudest speakers in its class, 
                            the Kilburn is a compact, stout-hearted hero with a well-balanced 
                            audio which boasts a clear midrange and extended highs for a sound.</p>
                        <label className="flex flex-col h-[64px] justify-between mt-4">
                            <p className="text-[#9F9F9F] text-[14px] font-semibold">Size</p>
                            <ul className="flex flex-row w-[115px] justify-between">
                                <li>
                                    <span className="h-[30px] w-[30px] bg-[#B88E2F] flex flex-col items-center justify-center rounded-[5px]"><p className="text-[13px] text-[#FFFFFF]">L</p></span>
                                </li>
                                <li>
                                <span className="h-[30px] w-[30px] bg-[#F9F1E7] flex flex-col items-center justify-center rounded-[5px]"><p className="text-[13px]">XL</p></span>
                                </li>
                                <li>
                                <span className="h-[30px] w-[30px] bg-[#F9F1E7] flex flex-col items-center justify-center rounded-[5px]"><p className="text-[13px]">XS</p></span>
                                </li>
                            </ul>
                        </label>
                        <label className="flex flex-col h-[64px] justify-between mt-4">
                            <p className="text-[#9F9F9F] text-[14px] font-semibold">Color</p>
                            <ul className="flex flex-row w-[115px] justify-between">
                                <li>
                                    <span className="h-[30px] w-[30px] bg-[#816DFA] block rounded-[50px]"></span>
                                </li>
                                <li>
                                <span className="h-[30px] w-[30px] bg-black block rounded-[50px]"></span>
                                </li>
                                <li>
                                <span className="h-[30px] w-[30px] bg-[#B88E2F] block rounded-[50px]"></span>
                                </li>
                            </ul>
                        </label>
                        <div className="w-[385px] h-[60px] justify-between flex flex-row mt-7">
                            <div className="flex flex-row justify-around items-center w-[110px] border rounded-[8px]">
                                <button onClick={Remove}>-</button>
                                <p>{AddTocart}</p>
                                <button onClick={Add}>+</button>
                            </div>
                            <button className="border border-black rounded-[8px] w-[255px] text-[20px] font-medium" onClick={AddToCartItens}>Add To Cart</button>
                        </div>
                    </div>
                    <div className="flex flex-row w-[290px] h-[180px] gap-4 justify-between">
                        <ul>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">SKU</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">Category</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">Tags</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">Share</li>
                        </ul>
                        <ul>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">:</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">:</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">:</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">:</li>
                        </ul>
                        <ul>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">SS001</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">Sofas</li>
                            <li className="mt-[6px] text-[16px] font-medium text-[#9F9F9F]">Sofa, Chair, Home, Shop</li>
                            <li className="flex flex-row items-center h-7 mt-[6px]">
                                <ul className="flex flex-row items-center justify-between w-[100px]">
                                    <li>
                                        <FaFacebook />
                                    </li>
                                    <li>
                                        <FaLinkedin />
                                    </li>
                                    <li>
                                        <FaTwitter />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Aboult Img1={objAplid.imgItem} Img2={objAplid.imgItem} />
            <ListProctRelated />
            <ModalTocart />
        </section>
    )
}


export default ProductPage