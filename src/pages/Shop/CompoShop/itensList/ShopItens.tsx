import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

type itensJson = {
    id: number,
    titleName: string,
    description: string,
    priceTotal: string,
    priceDiscount: string,
    imgItem: string,
    name: string
}
const StyleIconsHover = "flex flex-row items-center gap-[2px]"
const IconDescription = "text-white font-semibold text-[16px]"


const ListItens = () => {
    const [itens, setItens] = useState<itensJson[]>([])
    const dispatch = useDispatch();


    const AddItem = (e: any) => {//aqui estou adicionando
        const findElement = e.currentTarget.closest('li')
        const idElement = parseInt(findElement.id)//pega o id do li, que esta com tipo string, transforma em numero inteiro e armazena em uma variavel

        const filterElement = itens.find((objeto) => objeto.id == idElement)//procura o elemento dentro do array com o id igual ao li que foi selecionado

        dispatch({ type: "INCREMENT", payload: { filterElement } });
    };

    useEffect(() => {

        axios.get("https://back-end-ecommerce-d-final.onrender.com/products").then((response) => {
            setItens(response.data)//guarda os itens da resposta no array de objetos chamado "itens"
        }).catch((err) => {
            console.log(err)
        })
    }, [])//vai ser acionando na entrada da pagina carregando os produtos da API


    return (
        <section className="px-[80px] pt-[70px]">
            {itens.length === 0 ? <img className="w-20 m-auto" src={'https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_256.gif'}/> :
            <ul className="flex flex-row justify-around flex-wrap gap-4">
                {itens.map((Products) => (
                    <li className="w-[265px] relative" key={Products.id} id={`${Products.id}`}>
                        {/*conteudo do json server */}
                        <div className="flex flex-col items-center bg-[#F4F5F7]">
                            <img className="w-full" src={Products.imgItem} />
                            <Link key={Products.id} to={`/Productcart/${Products.id}`}>
                                <div className="w-[230px] h-[120px] flex flex-col gap-1 pt-2">
                                    <p className="font-semibold text-[19px]">{Products.titleName}</p>
                                    <p>{Products.description}</p>
                                    <div className="flex flex-row items-center w-full justify-between">
                                        <p className="font-semibold text-[19px]">{Products.priceDiscount}</p>
                                        <s className="text-[#898989] font-medium text-[16px]">{Products.priceTotal}</s>
                                    </div>
                                </div>
                            </Link>
                            {/*Conteudo do hover */}
                            <div className={`id${Products.id} absolute flex flex-col opacity-0 hover:opacity-100 hover:bg-[#0000008a] items-center justify-center inset-0 h-[280px] cursor-pointer`}>
                                <div className="w-full h-[110px] flex flex-col items-center justify-between pt-5">
                                    <button className="w-[202px] h-[48px] bg-white font-semibold text-[16px] text-[#B88E2F]" onClick={AddItem}>Add to cart</button>
                                    <ul className="flex flex-row items-center justify-between w-[230px]">
                                        <li className={StyleIconsHover}>
                                            <svg className="w-[16px] h-[30px]" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46667C5.97333 8.31334 6 8.16 6 8C6 7.84 5.97333 7.68667 5.94 7.53334L10.64 4.79334C11 5.12667 11.4733 5.33334 12 5.33334C13.1067 5.33334 14 4.44 14 3.33334C14 2.22667 13.1067 1.33334 12 1.33334C10.8933 1.33334 10 2.22667 10 3.33334C10 3.49334 10.0267 3.64667 10.06 3.8L5.36 6.54C5 6.20667 4.52667 6 4 6C2.89333 6 2 6.89334 2 8C2 9.10667 2.89333 10 4 10C4.52667 10 5 9.79333 5.36 9.46L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white" />
                                            </svg>
                                            <p className={IconDescription}>Share</p>
                                        </li>
                                        <li className={StyleIconsHover}>
                                            <svg className="w-[16px] h-[30px]" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                                            </svg>
                                            <p className={IconDescription}>Compare</p>
                                        </li>
                                        <li className={StyleIconsHover}>
                                            <svg className="w-[16px] h-[30px]" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99973 14.0361C-5.33333 6.66667 3.99999 -1.33333 7.99973 3.72537C12 -1.33334 21.3333 6.66667 7.99973 14.0361Z" stroke="white" stroke-width="1.8" />
                                            </svg>
                                            <p className={IconDescription}>Like</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>}
        </section>
    )
}

export default ListItens