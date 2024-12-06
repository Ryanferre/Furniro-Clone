import Footer from "./Componentes/footer/footer.tsx"
import Header from "./Componentes/Header/Header.tsx"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
