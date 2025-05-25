
import { useContext } from "react";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";


type FilterElement = {
    id: number;
    titleName: string;
    priceDiscount: string;
    imgItem: string;
    Quant: number
  };
  
  type ItensCart = {
    filterElement: FilterElement;
  };
  

const ChoiceItens = ()=>{

    const [AddTocart, setAdd] = useState<number>(0);//adicionando itens
    const [removeTotal, setRemove] = useState<number>(0);//quantidade de vezes que retiro
    const [AddRepeated, setRepeated] = useState<string []> ([]);//array com o id de cada item(é aqui que selecino todos os itens independetemente se ele se repete ou não)
    const [filterRepeated, setItenRepeated]= useState<ItensCart []>([]);//array com somente um item

    const StateCart = useSelector((state) => state.Statecart);


    useEffect(()=>{
        const widthArr= products

        const f= widthArr.map((elemnt)=>(//adiciona o total de item repetidos
          elemnt.filterElement.id
        ))
        setRepeated(f)
  
        const filterRepeatedItem= products.filter((element, i, s)=>(//seleciona somente um elemento
          i === s.findIndex((e) => e.filterElement.id === element.filterElement.id)
        )).map((element) => ({...element,...element.filterElement, Quant: 0}));
  
        setItenRepeated(filterRepeatedItem)
      }, [products])

      //quantas vezes o elemento se repete
      useEffect(()=>{
        const updatedProducts = [...products]; // Faz uma cópia
  
        for (let i = 0; i < updatedProducts.length; i++) {
          // Conta quantas vezes o id aparece no array AddRepeated
          const count = AddRepeated.filter((id) => id === updatedProducts[i].filterElement.id).length;
      
          // Atualiza a propriedade newProperty com a contagem
          updatedProducts[i].filterElement.Quant = count;
        }
        
        console.log(AddRepeated)
      }, [AddRepeated, filterRepeated])


      useEffect(()=>{
          const valuePrice= filterRepeated.map((element)=>(
            element.filterElement.priceDiscount.split(' ')
          ))

          const removeIndex= valuePrice.map(arr => parseFloat(arr.slice(1)[0].replace(/\./g, '')))
          //limpar o preço
          const ReturnResul= removeIndex.reduce((accumulated, ValueTotal)=>  accumulated + ValueTotal, 0)

          setRemove(ReturnResul)
      }, [filterRepeated])

      //Incrementa o valor de Quant
      const incrementQuant = (id: number) => {
        setItenRepeated((prevState) =>
          prevState.map((item) =>
            item.filterElement.id === id ? {...item, filterElement: {...item.filterElement,Quant: item.filterElement.Quant + 1,}, }
              : item
          )
        );
      };
    
      // Decrementa o valor de Quant
      const decrementQuant = (id: number) => {
        setItenRepeated((prevState) =>
          prevState.map((item) => item.filterElement.id === id && item.filterElement.Quant > 0 ? {...item, filterElement: {...item.filterElement, Quant: item.filterElement.Quant - 1, }, } : item));
      };

    return(
        <>
          <div className="w-full h-[310px] bg-contain flex flex-col items-center justify-center" style={{backgroundImage: `url(https://primertesteryan.s3.us-east-2.amazonaws.com/ShopBanner.png`}}>
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
                              <p>Subtotal</p>
                          </li>
                      </ul>
                      <ul className="flex flex-col overflow-auto h-[250px]">
                          {filterRepeated.map((element)=>(
                              <li className="flex flex-row items-center justify-between w-[690px] pr-10">
                                  <img className="w-[100px] rounded-[5px]" src={element.filterElement.imgItem} />
                                  <p>{element.filterElement.titleName}</p>
                                  <p>{element.filterElement.priceDiscount}</p>
                                  <div className="w-[215px] h-[60px] justify-between items-center flex flex-row">
                                      <div className="flex h-full flex-row justify-around items-center w-[110px] border rounded-[8px]">
                                          <button onClick={() => decrementQuant(element.filterElement.id)}>-</button>
                                          <p>{element.filterElement.Quant}</p>
                                          <button onClick={() => incrementQuant(element.filterElement.id)}>+</button>
                                      </div>
                                      <p>Rs. {removeTotal}</p>
                                </div>
                                <FaTrash color="#B88E2F" />
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="bg-[#F9F1E7] w-[380px] h-[380px]">
                      <h2>Cart Totals</h2>
                      <div>
                          <p>Subtotal</p>
                          <p>Rs {removeTotal}</p>
                      </div>
                      <div>
                          <p>Total</p>
                          <p>Rs. 250,000.00</p>
                      </div>
                  </div>
                </div>
            </section>
            
        </>
    )
}

export default ChoiceItens