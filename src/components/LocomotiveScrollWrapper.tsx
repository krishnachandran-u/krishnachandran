"use client"

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollWrapper: React.FC = () => {
    useEffect(() => {
        const scrollContainer = document.querySelector<HTMLElement>('#mainContainer'); 

        if (scrollContainer) {
            const scroll = new LocomotiveScroll({
                el: scrollContainer,
                smooth: true,
            });

            return () => {
                if (scroll) {
                    scroll.destroy();
                }
            };
        }
    }, []);

    return null; 
};

export default LocomotiveScrollWrapper;