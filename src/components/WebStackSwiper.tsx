"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules';

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
import { DiJqueryLogo, DiJqueryUiLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

import StackIcon from './StackIcon';
import { useEffect, useState } from 'react';

const WebStackSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const vwValue = 90;
      const calculatedValueInPixels = (vwValue * window.innerWidth) / 100;

      const remValue = 10;
      const calculatedRemValueInPixels = remValue * 16; 

      const finalCalculatedValue = Math.floor(calculatedValueInPixels / calculatedRemValueInPixels);
      setSlidesPerView(finalCalculatedValue);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      slidesPerView={Math.min(slidesPerView, 9)}
       effect={'coverflow'}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper" 
    >
      <SwiperSlide>
        <StackIcon icon = {FaReact} IconName = "REACT"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {BiLogoTypescript} IconName = "TYPESCRIPT"/>  
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {SiNextdotjs} IconName = "NEXTJS"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {SiPrisma} IconName = "PRISMA"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {BiLogoPostgresql} IconName = "POSTGRESQL"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {IoLogoJavascript} IconName = "JAVASCRIPT"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {DiJqueryLogo} IconName = "JQUERY"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {FaNodeJs} IconName = "NODEJS"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {SiTailwindcss} IconName = "TAILWINDCSS"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {FaSass} IconName = "SASS"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {FaHtml5} IconName = "HTML5"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {FaCss3Alt} IconName = "CSS"/>
      </SwiperSlide>
      <SwiperSlide>
        <StackIcon icon = {SiMongodb} IconName = "MONGODB"/>  
      </SwiperSlide>
    </Swiper>
  );
}

export default WebStackSwiper;