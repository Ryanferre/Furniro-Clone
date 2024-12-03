/*imagens temporarias */
import Img1 from "./ImagesBrowser/Image-livingroom.png"
import Img2 from "./ImagesBrowser/Mask.png"
import Img3 from "./ImagesBrowser/MaskGroup.png"

const StyleImg= 'w-[300px] h-[400px]'

const BrowserHome= ()=>{
    return(
        <section className="">
            <h3>Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="flex flex-row">
                <li>
                    <img className={StyleImg} src={Img1}/>
                    <p>Dining</p>
                </li>
                <li>
                    <img className={StyleImg} src={Img2}/>
                    <p>Living</p>
                </li>
                <li>
                    <img className={StyleImg} src={Img3}/>
                    <p>Bedrom</p>
                </li>
            </ul>
        </section>
    )
}

export default BrowserHome

