import { useEffect, useState } from "react"
import  axios  from "axios"

type itensJson = {
    id: number,
    titleName: string,
    description: string,
    priceTotal: string,
    priceDiscount: string,
    imgItem: string
}
const ListItens= ()=>{
    const [itens, setItens] =useState <itensJson []>([])

    useEffect(()=>{
        
            axios.get("http://localhost:3001/products").then((response)=>{
                setItens(response.data)
            }).catch((err)=>{
                console.log(err)
            })
    }, [])

    useEffect(()=>{
        console.log(itens[0])
    }, [itens])
    return(
        <section>
            <ul>
                {itens.map((Products)=>(
                    <li key={Products.id}>
                        <div>
                          <img src={Products.imgItem} />
                          <div>
                            {Products.titleName}
                            {Products.description}
                            <div>
                              {Products.priceDiscount}
                              {Products.priceTotal}
                            </div>
                          </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ListItens