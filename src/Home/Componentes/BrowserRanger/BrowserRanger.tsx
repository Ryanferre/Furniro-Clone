/*imagens temporarias */
import Img1 from "./ImagesBrowser/Image-livingroom.png"
import Img2 from "./ImagesBrowser/Mask.png"
import Img3 from "./ImagesBrowser/MaskGroup.png"

const StyleImg= 'w-[330px] h-[400px]'
const StyleItens= 'flex flex-col items-center'

const BrowserHome= ()=>{
    return(
        <section className="w-full h-[650px] flex flex-col items-center justify-center gap-16">
           <div className="flex flex-col items-center">
            <h3 className="text-[32px] font-bold">Browse The Range</h3>
            <p className="text-[18px] text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
            <ul className="flex flex-row gap-7">
                <li className={StyleItens}>
                    <img className={StyleImg} src={Img1}/>
                    <p className="mt-3 text-[16px] font-semibold">Dining</p>
                </li>
                <li className={StyleItens}>
                    <img className={StyleImg} src={Img2}/>
                    <p className="mt-3 text-[16px] font-semibold">Living</p>
                </li>
                <li className={StyleItens}>
                    <img className={StyleImg} src={Img3}/>
                    <p className="mt-3 text-[16px] font-semibold">Bedrom</p>
                </li>
            </ul>
        </section>
    )
}

export default BrowserHome

