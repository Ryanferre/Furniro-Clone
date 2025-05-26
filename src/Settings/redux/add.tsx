import { createStore } from "redux";

// Definição do tipo dos itens no carrinho
interface CartItem {
  filterElement: {
    id: string | number;
    titleName: string;
    priceDiscount: string;
    imgItem: string;
  };
}

// Tipo do estado inicial
interface CartState {
  Statecart: CartItem[];//aqui estou dizendo: "a chave que o objeto state vai receber e um array"
}

// Estado(estado sempre e um objeto em redux) inicial tipado. Ele recebe uma chave com array
const Init: CartState = { Statecart: [] };//o array comeca em 0

// Reducer com a tipagem definida
const reducer = (state: CartState = Init, action: any): CartState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, Statecart: [...state.Statecart, action.payload] };//fazendo uma copia do estado, Statecart recebe um novo array com os itens antigos e novos itens

    case "DELETE":
      return {
        ...state,
        Statecart: state.Statecart.filter(
          (product) =>
            String(product.filterElement.id) !== String(action.payload)
        ),
      };

    default:
      return state;
  }
};

// Criar o store
const Storecart = createStore(reducer);

export default Storecart;
