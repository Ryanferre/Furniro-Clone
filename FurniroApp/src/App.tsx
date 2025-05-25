import { useState } from 'react'
import './App.css'
import { Provider } from "react-redux"
import Storecart from './Settings/redux/add'
import { Outlet } from "react-router-dom"
import Footer from './FooterAndHeard/Footer/Footer'
import Header from './FooterAndHeard/Header/Header'
import DataCostum from './Settings/HookCostum/Costum'

function App() {
   const [ModalViewCart, setvisiblecart]= useState<string>('hidden')
   const MoveModal= (e:string)=>{
        setvisiblecart(e)
    }

    
  return (
    <>
    <Provider store={Storecart}>
      <DataCostum.Provider value={{ ModalViewCart, MoveModal}}>
          <Header />
           <Outlet />
          <Footer />
      </DataCostum.Provider>
    </Provider>
    </>
  )
}

export default App
