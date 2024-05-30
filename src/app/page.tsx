import Fab from '@/components/atoms/fab';
import Intro from '@/components/atoms/intro';
import Works from '@/components/atoms/works';
import WorksSlider from '@/components/atoms/worksSlider';

const Home = () => {
  return (
    <div className = "lg:p-[96px] md:p-[56px] py-[32px] px-[24px] w-full flex flex-col items-center md:pb-[150px] lg:pb-[150px] sm:pb-[150px] pb-[150px] md:gap-[48px] gap-[24px]">
      <Intro />
      <div className = "flex md:flex-row flex-col justify-center items-center md:gap-[50px] gap-[24px] w-full">
        <Works />
        <Works />
      </div>
      <div className = "w-full flex justify-center items-center">
        <WorksSlider /> 
      </div>
    </div>
  );
}

export default Home;