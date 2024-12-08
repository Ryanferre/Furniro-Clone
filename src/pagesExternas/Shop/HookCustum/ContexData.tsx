import { createContext, useState, ReactNode, useEffect } from "react";

const FilterItens= createContext({
    itensData: '',
    moveModal: '',
    getData: (e: string)=> {},
    moveMargin: (e: string)=> {}
})

export const ItenSearch= ({children}:{children: ReactNode})=>{
    const [itensData, setitens]= useState<string>('')
    const [moveModal, setMargin]= useState<string>('96')

    const getData= (evt:string)=>{
            setitens(evt)
    }

    const moveMargin= (evt: string)=>{
        setMargin(evt)
    }

    useEffect(()=>{
        console.log(moveModal)
    }, [moveModal])
    return(
        <FilterItens.Provider value={{itensData, getData, moveMargin, moveModal}}>
            {children}
        </FilterItens.Provider>
    )
}

export default FilterItens