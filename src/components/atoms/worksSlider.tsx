"use client"

import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import WorksSliderCard from "./worksSliderCard";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

const WorksSlider = () => {
    return (
        <div className = "max-w-[1250px] w-full h-full flex justify-center items-center bg-[#202124] hover:bg-black transition-all duration-300 rounded-[24px] shadow-lg hover:shadow-2xl xl:p-[32px] md:p-[24px] p-[18px]">
            <div className = "w-[1000px] h-[300px] rounded-[18px] overflow-hidden">
                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                      dynamicBullets: true,
                      clickable: true,
                    }}
                   creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-150%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['150%', 0, -800],
            rotate: [0, 0, 90],
          },
        }} 
                    modules={[Autoplay, Pagination, EffectCreative]}
                    className= {`mySwiper5 size-full`}
                >
                    <SwiperSlide><WorksSliderCard /></SwiperSlide>
                    <SwiperSlide><WorksSliderCard /></SwiperSlide>
                    <SwiperSlide><WorksSliderCard /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default WorksSlider;