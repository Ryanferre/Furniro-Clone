import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ProtectedLink from '../../../ProtetedRoute';

type SelectJson = {
  id: string,
  titleName: string,
  description: string,
  priceTotal: string,
  priceDiscount: string,
  imgItem: string,
  name: string
}

type objAplidHTML= {
  titleName: string,
  description: string,
  priceTotal: string,
  priceDiscount: string,
  imgItem: string
}

const ModalTocart = () => {
  const products = useSelector((state) => state.Statecart);
  const [objAplid, setobj]= useState<SelectJson []>([{
                                                      id: '',
                                                      titleName: '',
                                                      description: '',
                                                      priceTotal: '',
                                                      priceDiscount: '',
                                                      imgItem: '',
                                                      name: ''
                                                  }])



  return (
    <section className='absolute flex flex-row justify-end w-full h-[2535px] inset-0 bg-[#20202050]'>
      <div className='bg-white opacity-1 h-[700px] w-[340px]'>
        <div>
        <div className='flex flex-row items-center'>
          <h1>Shopping Cart</h1>
          <FaShoppingBag />
        </div>
          <span></span>
          <div className="w-64 h-60">
            {Array.isArray(products) && objAplid.length > 0 ? (
              objAplid.map((product) => (
                <div className="w-10 h-10" key={product.id}>
                  <p>{product.name}</p> {/* Exibindo o nome do produto */}
                  <p>{product.titleName}</p> {/* Exibindo o título do produto */}
                  <p>{product.description}</p> {/* Exibindo a descrição */}
                  <p>{product.priceTotal}</p> {/* Exibindo o preço total */}
                  <p>{product.priceDiscount}</p> {/* Exibindo o preço com desconto */}
                  <img src={product.imgItem} alt={product.name} /> {/* Exibindo a imagem */}
                </div>
              ))
            ) : (
              <p>Sem produtos no carrinho.</p>
            )}
            <div>
              <p>Subtotal</p>
              <p>Rs. 520,000.00</p>
            </div>
          </div>
          <ul>
            <li>
              <button>Cart</button>
            </li>
            <li>
              <ProtectedLink to="/Adress">Checkout</ProtectedLink>
            </li>
            <li>
              <button>Comparison</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ModalTocart;
