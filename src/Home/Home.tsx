import BannerSection from "./CompoHome/SectionBanner/Banner.tsx";
import BrowserHome from "./CompoHome/BrowserRanger/BrowserRanger.tsx";
import Destaque from "./CompoHome/Productsdestac/ProductsHome.tsx";
import Carrosel from "./CompoHome/carrosel/carrosel.tsx";
import FileImg from "./CompoHome/gridItens/griditens.tsx";

const HomePage= ()=>{
    return(
        <>
         <BannerSection />
         <BrowserHome />
         <Destaque />
         <Carrosel />
         <FileImg />
        </>
    )
}

export default HomePage