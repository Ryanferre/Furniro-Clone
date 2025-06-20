import { createContext, useState } from "react";
import type { ReactNode } from 'react';

interface TypeCostumData {
    ModalViewCart: string,//modal do carrinho
    ModalViewMenu: string,//modal menu mobile
    MoveModal: (e: string) => void,//controla modal do carrinho
    MoveModalMenu: (e: string) => void
}

export const DataCostum = createContext<TypeCostumData>({
    ModalViewCart: 'hidden',
    ModalViewMenu: '-top-90',
    MoveModal: ()=> {},
    MoveModalMenu: ()=> {}
})

//Componente Provider para fornecer os dados do contexto
export const universalCostumData = ({ children }: { children: ReactNode })=>{
    const [ModalViewCart, setvisiblecart]= useState<string>('hidden')
    const [ModalViewMenu, setvisiblemenu]= useState<string>('-top-90')


    const MoveModal= (e:string)=>{
        setvisiblecart(e)
    }

    const MoveModalMenu= (e: string)=>{
      setvisiblemenu(e)
    }


    return (
    <DataCostum.Provider value={{ ModalViewCart, MoveModal, ModalViewMenu, MoveModalMenu}}>
      {children}
    </DataCostum.Provider>
  );
}

export default DataCostum