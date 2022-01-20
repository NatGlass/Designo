import * as React from 'react';
import { commonsHero, commonsH1, commonsHeroText, commonsButton } from '../ConstStyles';
import HeroImage from '../assets/home/desktop/image-hero-phone.png'

const Hero = () => {
    return (
        <div className={`${commonsHero} h-screen max-h-[843px] lg:max-h-[640px]`}>
            <h1 className={`${commonsH1} top-[80px] left-2/4 -translate-x-2/4
            md:top-[60px] md:max-w-[573px] md:text-[48px]
            lg:top-[145px] lg:left-[95px] lg:max-w-[540px] lg:text-left lg:leading-[56px]
            `}>
                Award-winning custom designs and digital branding solutions
            </h1>
            <p className={`${commonsHeroText} top-[240px] 
            lg:top-[330px] lg:left-[95px] lg:max-w-[445px] lg:text-left
            `}>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </p>
            <button className={`${commonsButton} top-[370px] lg:top-[440px] lg:left-[95px]`}>
                learn more
            </button>
            <div className="absolute w-[640px] h-[640px] oval rounded-full left-0 md:top-[101px] md:left-1/4 lg:top-0 lg:left-[43%]" />

            <img src={HeroImage} className="absolute top-[400px] left-2/4 -translate-x-2/4 w-[550px] h-[700px] md:top-[350px] md:w-[550px] md:h-[750px] lg:top-[80px] lg:left-3/4 " />
        </div>
    );
};



const Home:React.FC = () => {
    return (
        <>
            <Hero />

        </>
  );
};

export default Home;
