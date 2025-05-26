import { useEffect, useState } from "react";

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
export function filterItens(itens: any){

    const [AddRepeated, setRepeated] = useState<string []> ([]);// array com os itens independente se esta repetido ou não
    const [filterRepeated, setItenRepeated]= useState<ItensCart []>([]);//array com os itens filtrados(sem repetições)
    useEffect(()=>{
        const widthArr= itens//pega o array que contem os itens


        const itensrepten= widthArr.map((elemnt: any)=>(//cria um array com os id's dos elementos
            elemnt.filterElement.id//pega o id do elemento
        ))
        setRepeated(itensrepten)//guarda o array

        const filterRepeatedItem= itens.filter((element: any, i: any, s: any)=>(//seleciona somente um elemento
            i === s.findIndex((e: any) => e.filterElement.id === element.filterElement.id)
        )).map((element: any) => ({...element,...element.filterElement, Quant: 0}));

        setItenRepeated(filterRepeatedItem)
    }, [itens])

    return {AddRepeated , filterRepeated}
}