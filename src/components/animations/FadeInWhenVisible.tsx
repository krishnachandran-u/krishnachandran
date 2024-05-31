"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({ children, className, flow = "left" }: { children: ReactNode, className?: string, flow?: string,}) {
    const controls: any = useAnimation();
    const [ref, inView] = useInView(); 

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.span
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ 
                type: "spring",
                duration: 0.3,
                delay: 0.2,
                ease: "easeInOut"
            }}
            variants={{
                visible: { 
                    x: 0,
                    y: 0,
                    opacity: 1, 
                    scale: 1 
                },
                hidden: { 
                    x: getX({ flow }),
                    y: getY({ flow }),
                    opacity: 0, 
                    scale: 0 
                }
            }}
            className={className}
        >
            {children}
        </motion.span>
    );
}

function getX({ flow }: { flow: string }) {
    if (flow === "left") {
        return 100;
    }
    else if (flow === "right") {
        return -85;
    }
    else return 0;
}

function getY({ flow }: { flow: string }) {
    if (flow === "up") {
        return 100;
    }
    else if (flow === "down") {
        return -40;
    }
    else return 0;
}