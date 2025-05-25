import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

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
export function filterItens(){
    const productsState = useSelector((state) => state.Statecart);//pega os dados do array que contem os itens

    const [AddRepeated, setRepeated] = useState<string []> ([]);// array com os itens independente se esta repetido ou não
    const [filterRepeated, setItenRepeated]= useState<ItensCart []>([]);//array com os itens filtrados(sem repetições)
    
    return useMemo(()=>{
        console.log(productsState)
        const widthArr= productsState//pega o array que contem os itens


        const itensrepten= widthArr.map((elemnt)=>(//cria um array com os id's dos elementos
            elemnt.filterElement.id//pega o id do elemento
        ))
        setRepeated(itensrepten)//guarda o array

        const filterRepeatedItem= productsState.filter((element, i, s)=>(//seleciona somente um elemento
            i === s.findIndex((e) => e.filterElement.id === element.filterElement.id)
        )).map((element) => ({...element,...element.filterElement, Quant: 0}));

        setItenRepeated(filterRepeatedItem)

        return {AddRepeated , filterRepeated}
    }, [])
}