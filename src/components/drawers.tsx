import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { portfolioData } from '@/constants/data';
import FadeInWhenVisible from "./FadeInWhenVisible";

export function SkillsDrawer() {
    const skills = portfolioData.sections.skills.items;

    return (
        <Drawer>
          <FadeInWhenVisible>
          <DrawerTrigger 
            // className="underline underline-offset-4"
            className="px-1 border-1 border-white cursor-pointer"
          >...show all {skills.length} skills
          </DrawerTrigger>
          </FadeInWhenVisible>
          <DrawerContent>
            <DrawerHeader className="px-[28px] md:p-4">
              <DrawerTitle className="hidden">Skills</DrawerTitle>
              <DrawerDescription className="flex justify-center md:px-[32px]">
                <span className="overflow-y-auto flex flex-wrap max-w-[1184px] justify-center">
                    {skills.map((skill, index) => (
                        <span key={index} className="mr-4 my-1 block">
                            <span className="block text-black border-2 px-1 md:text-base text-sm">{skill}</span>
                        </span>
                    ))}
                </span>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="px-[12px] md:px-4 py-[8px]">
              <DrawerClose className="flex justify-center">
                {/* <div 
                    // className="py-1 px-4 rounded-md border-2 border-black text-black max-w-[1280px] cursor-pointer"
                    className="inline-flex items-center justify-center gap-2 
                        rounded-md text-sm font-medium 
                        transition-all 
                        disabled:opacity-50 disabled:pointer-events-none 
                        border bg-background shadow-sm 
                        hover:bg-accent hover:text-accent-foreground 
                        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                        h-9 px-4 py-2 cursor-pointer"
                >Close</div> */}
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    )
}

export function RecommendationDrawer({text, author}: {text: string, author: string}) {
    return (
        <Drawer>
          <DrawerTrigger 
            // className="underline underline-offset-4"
            className="px-1 border-1 border-white cursor-pointer not-italic"
          >...show more</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="px-[28px] md:p-4">
              <DrawerTitle className="hidden">Recommendation</DrawerTitle>
              <DrawerDescription className="flex justify-center md:px-[32px] md:text-base text-sm text-left">
                <span className="block flex-1 max-w-[1184px] text-black">
                    <span className='italic block md:mb-[12px] mb-[8px]'>&quot;{text}&quot;</span>
                    <span className="font-medium block text-right">– {author}</span>
                </span>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="px-[12px] md:px-4 py-[8px]">
              <DrawerClose className="flex justify-center">
                {/* <div 
                    // className="py-1 px-4 rounded-md border-2 border-black text-black max-w-[1280px] cursor-pointer"
                    className="inline-flex items-center justify-center gap-2 
                        rounded-md text-sm font-medium 
                        transition-all 
                        disabled:opacity-50 disabled:pointer-events-none 
                        border bg-background shadow-sm 
                        hover:bg-accent hover:text-accent-foreground 
                        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                        h-9 px-4 py-2 cursor-pointer"
                >Close</div> */}
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    )
}