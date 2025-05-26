import { createContext, useState } from "react";
import type { ReactNode } from 'react';

interface TypeCostumData {
    ModalViewCart: string,
    MoveModal: (e: string) => void
}

export const DataCostum = createContext<TypeCostumData>({
    ModalViewCart: 'hidden',
    MoveModal: ()=> {}
})

//Componente Provider para fornecer os dados do contexto
export const universalCostumData = ({ children }: { children: ReactNode })=>{
    const [ModalViewCart, setvisiblecart]= useState<string>('hidden')


    const MoveModal= (e:string)=>{
        setvisiblecart(e)
    }


    return (
    <DataCostum.Provider value={{ ModalViewCart, MoveModal}}>
      {children}
    </DataCostum.Provider>
  );
}

export default DataCostum