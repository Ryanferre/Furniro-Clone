import Img1 from "./fileImg/Rectangle36.png"
import Img2 from "./fileImg/Rectangle37.png"
import Img3 from "./fileImg/Rectangle38.png"
import Img4 from "./fileImg/Rectangle39.png"
import Img5 from "./fileImg/Rectangle40.png"
import Img6 from "./fileImg/Rectangle41.png"
import Img7 from "./fileImg/Rectangle43.png"
import Img8 from "./fileImg/Rectangle44.png"
import Img9 from "./fileImg/Rectangle45.png"


const FileImg= ()=>{


    return(
        <section className="border-b pt-[60px] pb-3">
            <div className="w-full flex flex-col items-center">
                <p className="text-[#616161] font-semibold">Share your setup with</p>
                <h5 className="text-[35px] font-bold">#FuniroFurniture</h5>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', gridTemplateRows: '1.5fr 9fr 2fr 4fr 2fr .4fr', height: '55vmax', gap: '2%'}}>
                    <img style={{gridRow: '1/3', gridColumn: '1', height: '100%'}} src={Img1}/>
                    <img style={{gridRow: '2/3', gridColumn: '1/3', marginLeft: '18.5%', height: '100%', width: '90%'}} src={Img3}/>
                    <img style={{gridRow: '3/6', gridColumn: '1', height: '100%'}} src={Img2}/>
                    <img style={{gridRow: '3/5', gridColumn: '2/4', height: '100%', width: '72%', marginLeft: '-16%'}} src={Img4}/>
                    <img style={{gridRow: '2/5', gridColumn: '3', height: '70%', marginTop: '35%', marginLeft: '13%'}} src={Img5}/>
                    <img style={{gridRow: '3/6', gridColumn: '4', height: '80%', marginTop: '15%', marginLeft: '9%'}} src={Img6}/>
                    <img style={{gridRow: '2/4', gridColumn: '4', height: '81%', marginTop: '12%', marginLeft: '9%'}} src={Img7}/>
                    <img style={{gridRow: '3/5', gridColumn: '5',height: '90%', width: '85%', marginTop: '14%',  marginLeft: '-22%'}} src={Img8}/>
                    <img style={{gridRow: '1/4', gridColumn: '5', height: '90%', width: '95%', marginLeft: '5%'}} src={Img9}/>
            </div>
        </section>
    )
}

export default FileImg