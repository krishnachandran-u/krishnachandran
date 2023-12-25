// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

import StackIcon from './StackIcon';

const StackSwiper = () => {
  return (
    <Swiper
       effect={'coverflow'}
       cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper" 
    >
      <SwiperSlide>
        <StackIcon icon = {FaReact} IconName = "React"/>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default StackSwiper;