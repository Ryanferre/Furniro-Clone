import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
//imagens do carrosel
import Slide1 from "./Imgcarrosel/Mask.png"
import Slide2 from "./Imgcarrosel/Rectangle24.png"
import Slide3 from "./Imgcarrosel/Rectangle25.png"


const Carrosel = () => {
  const [ImgCurrent, setImg] = useState<string>('');

  const ArrSlide= [
      { id: 1, imgSrc: Slide1 },
      { id: 2, imgSrc: Slide2 },
      { id: 3, imgSrc: Slide3 },
   ];

  const getImgCurret = (swiper) => {
    const currentImg = ArrSlide[swiper.realIndex];
    if (currentImg && currentImg.imgSrc) {
      setImg(currentImg.imgSrc);
    }

    console.log(currentImg)
  };


  return (
    <section className="flex h-[670px] flex-row items-center justify-between pl-20 bg-[#FCF8F3]">
      <article className="mb-4 w-[700px]">
        <div className="w-full">
          <h5 className="font-bold text-[40px]">50+ Beautiful rooms inspiration</h5>
          <p>Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
        </div>
      </article>

      <div className="h-[550px] w-full flex flex-row relative overflow-auto">

        {/* Div com background dinâmico */}
        <div className="w-[420px] absolute flex flex-row h-full items-end px-4 py-4 z-10" style={{ backgroundImage: `url(${ImgCurrent})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <button className="bg-[#B88E2F] p-4"><FaArrowRight color="white" /></button>
          </div>
        </div>

        {/* Swiper */}
        <div className=" flex flex-col w-full border justify-between items-end pb-6">
          <Swiper className="h-[486px] w-[800px]" spaceBetween={40} slidesPerView={2} onSlideChange={getImgCurret} onInit={() => setImg(ArrSlide[0].imgSrc)} loop={true}>
            {ArrSlide.map((Element) => (
              <SwiperSlide key={Element.id} >
                <img className="w-[490px] h-full" src={Element.imgSrc} alt={`Slide ${Element.id}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ul className=" flex flex-row items-center w-[400px] gap-2">
            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe1" className="hidden peer" />
                <label htmlFor="classe1" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F]"></span>
            </li>

            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe2" className="hidden peer" />
                <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F]"></span>
            </li>

            <li>
            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe3" className="hidden peer" />
                <label htmlFor="classe3" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F]"></span>
            </li>
            </li>

            <li>
            <li className="flex flex-row items-center relative">
                <input type="checkbox" id="classe4" className="hidden peer" />
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