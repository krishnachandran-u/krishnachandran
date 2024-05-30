import Fab from '@/components/atoms/fab';
import Intro from '@/components/atoms/intro';
import Works from '@/components/atoms/works';
import WorksSwiper from '@/components/atoms/worksSwiper';
import Milestones from '@/components/atoms/milestones';
import Stacks from '@/components/atoms/stacks';
import Contact from '@/components/atoms/contact';

import { WorksData } from '@/constants/worksData';

const Home = () => {
  return (
    <div className = "lg:p-[96px] md:p-[56px] py-[32px] px-[24px] w-full flex flex-col items-center md:pb-[150px] lg:pb-[150px] sm:pb-[150px] pb-[150px] md:gap-[48px] gap-[24px]">
      <Intro />
      <div className = "flex md:flex-row flex-col justify-center items-center md:gap-[50px] gap-[24px] w-full">
        <Works item = {WorksData[0]} />
        <Works item = {WorksData[1]} />
      </div>
      <div className = "w-full flex justify-center items-center">
        <WorksSwiper /> 
      </div>
      <div className = "w-full flex justify-center items-center">
        <Stacks />
      </div>
      <div className = "w-full flex justify-center items-center">
        <Milestones />
      </div>
      <div className = "w-full flex justify-center items-center">
        <Contact />
      </div>
    </div>
  );
}

export default Home;