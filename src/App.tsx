import Header from "./Componentes/Header/Header.tsx"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
     <Header />
     <Outlet />
    </>
  )
}

export default App
