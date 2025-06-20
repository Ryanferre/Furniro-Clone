import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import ProtectedLink from '../../../Settings/RouterIconCart/ProtetedRoute';
import { useContext } from 'react';
import DataCostum from '../../../Settings/HookCostum/Costum';
import { useEffect } from 'react';
import { filterItens } from '../../../Settings/separateItems/separateItems';
import { Link } from 'react-router-dom';
import type { RootState } from '../../../Settings/redux/add';

const ModalTocart = () => {
  const productsState = useSelector((state: RootState) => state.Statecart);//pega os dados do array que contem os itens
  const {AddRepeated, filterRepeated}= filterItens(productsState)

  const dispatch = useDispatch(); // Para disparar a ação de romover ou adicionar

  const {MoveModal, ModalViewCart}= useContext(DataCostum)

  // Ação para deletar
  const deleteItem = (id: number) => ({
    type: "DELETE",
    payload: id, // Passa o id do item para deletar
  });

  const RemoveItem = (id: number) => {
    dispatch(deleteItem(id)); // Dispara a ação DELETE com o id
  }

  const MoveBanner= (e: any)=>{
    const getId= (e.target as HTMLElement).id

    if(getId == '1'){
      MoveModal('hidden')
    }
  }



    useEffect(()=>{
      const updatedProducts = [...productsState]; //Faz uma cópia do array original

      for (let i = 0; i < updatedProducts.length; i++) {
        //Conta quantas vezes o id aparece no array AddRepeated
        const count = AddRepeated.filter((id) => id === updatedProducts[i].filterElement.id).length;
    
        //Atualiza a propriedade Quant com a contagem
        updatedProducts[i].filterElement.Quant = count;
      }
      
    })
  
  return (
    <section className={`absolute ${ModalViewCart} flex-row justify-end w-full h-[2540px] z-0 inset-0 bg-[#20202050]`} id="1" onClick={MoveBanner}>
      <div className='bg-white h-[700px] w-[370px] pt-[30px] flex flex-col z-1 justify-between' id="2">
        <div className='flex flex-col w-[300px] pl-[30px]'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='font-semibold text-[24px]'>Shopping Cart</h1>
            <FaShoppingBag color="#9F9F9F" />
          </div>
          <span className='w-[230px] h-[1px] bg-[#9F9F9F] my-7'></span>
          <div className="w-[280px] h-[440px] flex flex-col pt-1">
            {filterRepeated.length > 0 ? (
              filterRepeated.map((product, i) => {
                return (
                  <div key={i} className="w-full h-[76px] flex flex-row justify-between items-center">
                    <img className='w-[65px] rounded-[5px]' src={product.filterElement.imgItem} alt={product.filterElement.titleName} />
                    <div className='flex flex-col justify-around h-[70px]'>
                      <p>{product.filterElement.titleName}</p>
                      <div className='flex flex-row gap-4'>
                        <p>{product.filterElement.Quant}</p>
                        <p>X</p>
                        <p>{product.filterElement.priceDiscount}</p>
                      </div>
                    </div>
                    <button onClick={() => RemoveItem(product.filterElement.id)}><FaTimes /></button> {/* Passa o id do produto */}
                  </div>
                );
              })
            ) : (
              <p>Sem produtos no carrinho.</p>
            )}
          </div>
          <div className='flex flex-row w-[280px] justify-between'>
            <p className='text-[16px] font-semibold'>Subtotal</p>
            <p className='text-[#B88E2F] text-[16px] font-semibold'>{filterRepeated.map((e) => parseFloat(e.filterElement.priceDiscount.split('Rp')[1].replace(/\./g, ''))).reduce((acc, curr) => acc + curr, 0)}</p>
          </div>
        </div>
        
        <span className='w-full h-[1px] bg-[#9F9F9F]'></span>
        <ul className='flex flex-row w-[320px] ml-[20px] justify-between'>
          <li>
            <button className='border border-black rounded-[50px] px-[30px] py-[5px]'><Link to="/ChoiceItens">Cart</Link></button>
          </li>
          <li>
            <ProtectedLink to="/Adress"><button className='border border-black rounded-[50px] px-[20px] py-[5px]'>Checkout</button></ProtectedLink>
          </li>
          <li>
            <button className='border border-black rounded-[50px] px-[7px] py-[5px]'>Comparison</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ModalTocart;
