import { createContext, useState, ReactNode, useEffect } from "react";

// Definindo o tipo para o contexto
interface FilterItensContextType {
  itensData: string;
  moveModal: string;
  ItensCart: number;
  getData: (e: string) => void;
  moveMargin: (e: string) => void;
  getItenscart: (e: number) => void;
}

// Inicializando o contexto com valores padrão e tipos
export const FilterItens = createContext<FilterItensContextType>({
  itensData: '',
  moveModal: '96',
  ItensCart: 0,
  getData: () => {},
  moveMargin: () => {},
  getItenscart: () => {}
});

// Componente Provider para fornecer os dados do contexto
export const ItenSearch = ({ children }: { children: ReactNode }) => {
  const [itensData, setItens] = useState<string>('');
  const [moveModal, setMargin] = useState<string>('96');
  const [ItensCart, setIten] = useState<number>(0);

  const getData = (evt: string) => {
    setItens(evt);
  };

  const moveMargin = (evt: string) => {
    setMargin(evt);
  };

  const getItenscart = (e: number) => {
    setIten(e);
  };

  useEffect(() => {
    console.log(ItensCart); // Apenas para debug
  }, [ItensCart]);

  return (
    <FilterItens.Provider value={{ itensData, getData, moveMargin, moveModal, ItensCart, getItenscart }}>
      {children}
    </FilterItens.Provider>
  );
};

export default FilterItens;
