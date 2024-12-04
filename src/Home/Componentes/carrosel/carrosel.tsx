import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { useState } from "react";
//imagens do carrosel
import Slide1 from "./Imgcarrosel/Mask.png"
import Slide2 from "./Imgcarrosel/Rectangle24.png"
import Slide3 from "./Imgcarrosel/Rectangle25.png"


const Carrosel= ()=>{
    return(
        <section>
            <article>
                <div>
                    <h5>50+ Beautiful rooms inspiration</h5>
                    <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                </div>
            </article>
            <div ></div>
            <Swiper spaceBetween={50} slidesPerView={1}>
                <SwiperSlide><img src={Slide1} /></SwiperSlide>
                <SwiperSlide><img src={Slide2} /></SwiperSlide>
                <SwiperSlide><img src={Slide3} /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Carrosel