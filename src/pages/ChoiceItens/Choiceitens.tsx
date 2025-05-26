import { filterItens } from "../../Settings/separateItems/separateItems";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaTrash, FaFaceFrown } from "react-icons/fa6";
import ProtectedLink from "../../Settings/RouterIconCart/ProtetedRoute";
import type { RootState } from "../../Settings/redux/add";


const ChoiceItens = ()=>{

    const productsState= useSelector((state: RootState) => state.Statecart);//pega os dados do array que contem os itens
    const {AddRepeated, filterRepeated}= filterItens(productsState);//acessa o Hookcostum de filtro e transfere o array
    const [render, setrender]= useState(0)
  
    const dispatch = useDispatch();

      useEffect(()=>{
        const updatedProducts = [...productsState]; // Faz uma cópia
  
        for (let i = 0; i < updatedProducts.length; i++) {
          // Conta quantas vezes o id aparece no array AddRepeated
          const count = AddRepeated.filter((id) => id === updatedProducts[i].filterElement.id).length;
      
          // Atualiza a propriedade newProperty com a contagem
          updatedProducts[i].filterElement.Quant = count;
        }
        setTimeout(()=>{
          setrender(1)
        }, 100)
        
      }, [filterRepeated])

      // Ação para deletar
      const deleteItem= (id: number) => ({
        type: "DELETE",
        payload: id, // Passa o id do item para deletar
      });

      //limpesa para apresentar total no lado direito
      const cleanPrice= (valor: string): number => {
        const limpo= valor.replace(/[^\d]/g, '');
        return Number(limpo);
      };

      //verificar se a quantidade e zero
      const verifiQuant = (e: number)=>{
        const NumberQuant= 1

        console.log(e)
        if(e == 0){
          return NumberQuant
        }else{
          return e
        }
      }

      const RemoveItem = (id: number) => {
        dispatch(deleteItem(id)); // Dispara a ação DELETE com o id
      }

    return(
        <>
          <div className="w-full h-[310px] bg-contain flex flex-col items-center justify-center" style={{backgroundImage: 'url(https://i.postimg.cc/Vk5jnHQM/Shop-Banner.png'}}>
                <h1 className="font-semibold text-[44px]">Shop</h1>
                <div className="flex flex-row items-center justify-around w-[120px]">
                    <p className="font-semibold text-[16px]">Home</p>
                    <div className="flex flex-col items-center justify-center h-[20px] gap-[3px] mt-[4px]">
                        <span className="content boder w-[10.4px] h-[2px] transition-transform rotate-[38deg] inline-block bg-black"></span>
                        <span className="content boder w-[10.4px] h-[2px] transition-transform -rotate-[39deg] inline-block bg-black"></span>
                    </div>
                    <p>Shop</p>
                </div>
            </div>
            <section className="flex flex-row h-[600px] items-center justify-center px-28">
                <div className="flex flex-row w-full justify-between">
                  <div className="flex flex-col h-[350px] w-[700px] items-center justify-between">
                      <ul className="flex flex-row w-full bg-[#F9F1E7] justify-around py-4 px-[120px] gap-5">
                          <li>
                              <p>Product</p>
                          </li>
                          <li>
                              <p>Price</p>
                          </li>
                          <li className="flex flex-row w-[170px] justify-between">
                              <p>Quantity</p>
                          </li>
                      </ul>
                      <ul className="flex flex-col overflow-auto gap-4 h-[250px]">
                          {filterRepeated.length == 0 ? 
                          <div className="w-full h-full flex flex-col justify-center items-center">
                            <p className="text-[#9F9F9F] text-2xl">carrinho vasio</p>
                            <FaFaceFrown size={50} color="#9F9F9F" />
                          </div> : filterRepeated.map((element)=>(
                              <li className="flex flex-row items-center justify-between w-[44em] pr-10">
                                  <img className="w-[100px] rounded-[5px]" src={element.filterElement.imgItem} />
                                  <p>{element.filterElement.titleName}</p>
                                  <p>{element.filterElement.priceDiscount}</p>
                                  <div className="w-40 h-[60px] justify-between items-center flex flex-row">
                                      <p>X {verifiQuant(element.filterElement.Quant)}</p>
                                </div>
                                <button onClick={() => RemoveItem(element.filterElement.id)}><FaTrash color="#B88E2F" /></button>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="bg-[#F9F1E7] w-[380px] h-[380px] flex flex-col pb-11 pt-4 justify-between items-center">
                      <h2 className="font-semibold text-[35px]">Cart Totals</h2>
                      <div className="h-20 w-72 flex flex-col justify-between">
                         <div className="flex flex-row justify-between w-60">
                           <p className="font-semibold text-[16px]">Subtotal</p>
                           <p className="font-semibold text-[14px] text-[#9F9F9F]">Rs. {productsState.reduce((sum, item)=> sum + cleanPrice(item.filterElement.priceDiscount), 0)}</p>
                         </div>
                         <div className="flex flex-row justify-between w-60">
                            <p className="font-semibold text-[16px]">Total</p>
                             <p className="font-semibold text-[16px] text-[#B88E2F]">Rs. {productsState.reduce((sum, item)=> sum + cleanPrice(item.filterElement.priceDiscount), 0)}</p>
                         </div>
                      </div>
                      <ProtectedLink to="/Adress"><button className='border border-black rounded-2xl px-[60px] py-[15px]'>Checkout</button></ProtectedLink>
                  </div>
                </div>
                <p className="opacity-0">{render}</p>
            </section>
            
        </>
    )
}

export default ChoiceItens