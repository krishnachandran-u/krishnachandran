"use client"

import { Pagination, Autoplay } from "swiper/modules";
import WorksSliderCard from "./worksSliderCard";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const WorksSlider = () => {
    return (
        <div className = "max-w-[1250px] w-full h-full flex justify-center items-center bg-[#202124] hover:bg-black transition-all duration-300 rounded-[24px] shadow-lg hover:shadow-2xl xl:p-[32px] md:p-[24px] p-[18px]">
            <div className = "w-[1000px] h-[300px] rounded-[18px] overflow-hidden">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                      dynamicBullets: true,
                      clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className= {`mySwiper size-full`}
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