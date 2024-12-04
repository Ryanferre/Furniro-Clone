import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { useEffect, useState } from "react";
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
    const currentImg = ArrSlide[swiper.activeIndex];
    if (currentImg && currentImg.imgSrc) {
      setImg(currentImg.imgSrc);
    }
  };


  return (
    <section className="flex h-[670px] flex-row items-center pl-20 bg-[#FCF8F3]">
      <article className="mb-4">
        <div className="w-[300px]">
          <h5 className="text-lg font-bold">50+ Beautiful rooms inspiration</h5>
          <p>Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
        </div>
      </article>

      <div className="h-[582px] w-full flex flex-row border items-center">

        {/* Div com background dinâmico */}
        <div className="w-[504px] h-full border z-10" style={{ backgroundImage: `url(${ImgCurrent})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        {/* Swiper */}
        <div className=" flex flex-col w-full border -ml-[480px]">
          <Swiper className="h-[486px] w-[700px]" spaceBetween={10} slidesPerView={2} onSlideChange={getImgCurret} onInit={() => setImg(ArrSlide[0].imgSrc)} loop={true}>
            {ArrSlide.map((Element) => (
              <SwiperSlide key={Element.id} >
                <img className="w-[500px] h-full" src={Element.imgSrc} alt={`Slide ${Element.id}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ul className=" flex flex-row items-center justify-center pl-[52px] relative left-0">
            <li>
              <input type="checkbox"/>
            </li>
            <li>
              <input type="checkbox"/>
            </li>
            <li>
              <input type="checkbox"/>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Carrosel