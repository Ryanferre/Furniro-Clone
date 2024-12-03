import Header from "../Componentes/Header/Header.tsx";
import Footer from "../Componentes/footer/footer.tsx";
import BannerSection from "./Componentes/SectionBanner/Banner.tsx";
import BrowserHome from "./Componentes/BrowserRanger/BrowserRanger.tsx";

const HomePage= ()=>{
    console.log('entrou')
    return(
        <>
         <Header />
         <BannerSection />
         <BrowserHome />
         <Footer />
        </>
    )
}

export default HomePage