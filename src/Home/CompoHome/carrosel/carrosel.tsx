import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import { useRef } from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import '../../../../node_modules/swiper/swiper.css'
//imagens do carrosel
import Slide1 from "./Imgcarrosel/Mask.png"
import Slide2 from "./Imgcarrosel/Rectangle24.png"
import Slide3 from "./Imgcarrosel/Rectangle25.png"


const Carrosel = () => {
  const [ImgCurrent, setImg] = useState<string>('');
  const swiperRef = useRef<SwiperType | null>(null);
  const [checkedIten1, setIten1]= useState(false)
  const [checkedIten2, setIten2]= useState(false)
  const [checkedIten3, setIten3]= useState(false)
  const [checkedIten4, setIten4]= useState(false)
  

  const ArrSlide= [
      { id: 1, imgSrc: Slide1 },
      { id: 2, imgSrc: Slide2 },
      { id: 3, imgSrc: Slide3 },
   ];

  const getImgCurret = (swiper: any) => {
    const currentImg = ArrSlide[swiper.realIndex];
    if (currentImg && currentImg.imgSrc) {
      setImg(currentImg.imgSrc);
    }

    switch (currentImg.id) {
      case 1:
        VerifyIten1()
        break;
      case 2:
        VerifyIten2()
        break;
      case 3:
        VerifyIten3()
        break;
      case 4:
        VerifyIten4()
        break;
    
      default:
        break;
    }
    console.log(currentImg)
  };

    const [valid1, setvalue1]= useState(false)
    const [valid2, setvalue2]= useState(false)
    const [valid3, setvalue3]= useState(false)
    const [valid4, setvalue4]= useState(false)
    

    const VerifyIten1= ()=>{
        if(checkedIten1===false){
            setIten1(true)//checked
            setIten2(false)
            setIten3(false)
            setIten4(false)
            setvalue1(false)//habilitado paa click
            //desabilitados para click
            setvalue2(true)
            setvalue3(true)
            setvalue4(true)

        }

    }

    const VerifyIten2= ()=>{
        if(checkedIten2===false){
            setIten2(true)//checked
            setIten1(false)
            setIten3(false)
            setIten4(false)
            setvalue2(false)//habilitado para click
            //desabilitados para click
            setvalue1(true)
            setvalue3(true)
            setvalue4(true)
        }
    }

    const VerifyIten3= ()=>{
        if(checkedIten3===false){
            setIten3(true)//checked
            setIten1(false)
            setIten2(false)
            setIten4(false)
            setvalue3(false)//habilitado para click
            //desabilitados para click
            setvalue1(true)
            setvalue2(true)
            setvalue4(true)
        }
    }
    const VerifyIten4= ()=>{
        if(checkedIten4===false){
            setIten4(true)//checked
            setIten1(false)
            setIten2(false)
            setIten3(false)
            setvalue4(false)//habilitado para click
            //desabilitados para click
            setvalue1(true)
            setvalue2(true)
            setvalue3(true)
        }
    }

    const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <section className="flex h-[670px] flex-row items-center justify-between pl-20 bg-[#FCF8F3]">
      <article className="w-[400px] h-[240px] flex flex-col justify-between">
        <div className="w-full h-[160px] flex flex-col justify-between">
          <h5 className="font-bold text-[40px] leading-[47px]">50+ Beautiful rooms <p>inspiration</p></h5>
          <p className="w-[360px] text-[18px] text-[#616161] font-medium">Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
        </div>
        <button className="bg-[#B88E2F] w-[176px] h-[48px] text-white font-semibold">Explore More</button>
      </article>

      <div className="h-[520px] w-[850px] flex flex-row relative overflow-auto">

        {/* Div com background dinâmico */}
        <div className="w-[370px] absolute flex flex-row h-full items-end px-4 py-4 z-10" style={{ backgroundImage: `url(${ImgCurrent})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="w-[280px] h-[100px] flex flex-row items-end">
            <div className="w-[200px] h-[100px] justify-center items-center flex flex-col bg-[#FFFFFF] opacity-[.9]">
              <div>
                <label className="flex w-[150px] flex-row items-center justify-start gap-1">
                  <p>01</p>
                  <span className="block bg-black w-[34px] h-[2px] mt-[3px]"></span>
                  <p>Bed Room</p>
                </label>
                <p className="text-[30px]">inner Peace</p>
              </div>
            </div>
            <button className="bg-[#B88E2F] p-4"><FaArrowRight color="white" onClick={handleNext}/></button>
          </div>
        </div>

        {/* Swiper */}
        <div className=" flex flex-col w-full justify-between items-end pb-6">
          <Swiper className="h-[450px] w-[840px]"  onSwiper={(swiper) => (swiperRef.current = swiper)} spaceBetween={-70} slidesPerView={2} onSlideChange={getImgCurret} onInit={() => setImg(ArrSlide[0].imgSrc)} loop={true}>
            {ArrSlide.map((Element) => (
              <SwiperSlide key={Element.id} >
                <img className="w-[360px] h-full" src={Element.imgSrc} alt={`Slide ${Element.id}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ul className=" flex flex-row items-center w-[460px] gap-2">
            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe1" className="hidden peer" onChange={VerifyIten1} disabled={valid1} checked={checkedIten1}/>
                <label htmlFor="classe1" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F]"></span>
            </li>

            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe2" className="hidden peer" onChange={VerifyIten2} disabled={valid2} checked={checkedIten2}/>
                <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F]"></span>
            </li>

            <li>
            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe3" className="hidden peer" onChange={VerifyIten3} disabled={valid3} checked={checkedIten3}/>
                <label htmlFor="classe3" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F]"></span>
            </li>
            </li>

            <li>
            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe4" className="hidden peer" onChange={VerifyIten4} disabled={valid4} checked={checkedIten4}/>
                <label htmlFor="classe4" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F]"></span>
            </li>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carrosel