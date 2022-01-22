import * as React from 'react';
import { Link } from 'react-router-dom';
import { commonsIconsContainer, commonsIcon, commonsIconContent, commonsIconTitle, commonsIconButton } from '../ConstStyles';
import HeroSm from '../assets/about/mobile/image-about-hero.jpg'
import HeroMd from '../assets/about/tablet/image-about-hero.jpg'
import HeroLg from '../assets/about/desktop/image-about-hero.jpg'

import WomanSm from '../assets/about/mobile/image-world-class-talent.jpg'
import WomanMd from '../assets/about/tablet/image-world-class-talent.jpg'
import WomanLg from '../assets/about/desktop/image-world-class-talent.jpg'

import HandSm from '../assets/about/mobile/image-real-deal.jpg'
import HandMd from '../assets/about/tablet/image-real-deal.jpg'
import HandLg from '../assets/about/desktop/image-real-deal.jpg'

import Canada from '../assets/shared/desktop/illustration-canada.svg'
import Australia from '../assets/shared/desktop/illustration-australia.svg'
import UK from '../assets/shared/desktop/illustration-united-kingdom.svg'


const Hero = () => (
  <div className="flex flex-col w-[full] h-[715px] mx-auto md:w-[90%] md:mb-[120px] lg:flex-row-reverse lg:w-[95%] lg:h-[480px] lg:mb-[160px] max:w-full">
    <picture className="w-full">
      <source media="(min-width:976px)" srcSet={HeroLg} />
      <source media="(min-width:500px)" srcSet={HeroMd} />
      <img src={HeroSm} className="w-full max-h-[320px] object-cover md:rounded-t-[15px] lg:max-h-[480px] lg:rounded-r-[15px] lg:rounded-l-none" />
    </picture>
    <div className="w-full h-full bg-peach px-[20px] py-[60px] md:px-[40px] md:rounded-b-[15px] lg:rounded-l-[15px] lg:rounded-br-none lg:px-[30px] lg:py-[75px]">
      <h1 className="text-[white] text-center text-[32px] md:text-[48px] lg:text-left ">About Us</h1>
      <p className="text-[white] text-center leading-[25px] mt-[20px] lg:text-left">
        Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
      </p>
    </div>
  </div>
);

const Icons = () => (
  <div className={`${commonsIconsContainer}`}>
    <div className={`${commonsIcon} relative text-center`}>
      <div className="absolute top-[25px] w-[202px] h-[202px] bg-icon canada-t rounded-full -z-10 opacity-20 md:top-[10px] lg:top-0" />
      <img src={Canada} />
      <div className={`${commonsIconContent}`}>
        <h3 className={`${commonsIconTitle}`}>canada</h3>
        <Link to="/locations">
          <button className={`${commonsIconButton}`}>see location</button>
        </Link>
      </div>
    </div>

    <div className={`${commonsIcon} relative text-center`}>
      <div className="absolute top-[25px] w-[202px] h-[202px] bg-icon australia-t rounded-full -z-10 opacity-20 md:top-[10px] lg:top-0" />
      <img src={Australia} />
      <div className={`${commonsIconContent}`}>
        <h3 className={`${commonsIconTitle}`}>australia</h3>
        <Link to="/locations">
          <button className={`${commonsIconButton}`}>see location</button>
        </Link>
      </div>
    </div>

    <div className={`${commonsIcon} relative text-center`}>
      <div className="absolute top-[25px] w-[202px] h-[202px] bg-icon uk-t rounded-full -z-10 opacity-20 md:top-[10px] lg:top-0" />
      <img src={UK} />
      <div className={`${commonsIconContent}`}>
        <h3 className={`${commonsIconTitle}`}>uk</h3>
        <Link to="/locations">
          <button className={`${commonsIconButton}`}>see location</button>
        </Link>
      </div>
    </div>
  </div>
);

const Company = () => (
  <>
    <Hero />
    <div className="flex flex-col w-full h-[865px] mb-[60px] mx-auto md:w-[90%] md:h-[736px] md:mb-[120px] lg:flex-row lg:w-[95%] lg:h-[640px] lg:mb-[160px] max:w-full">
      <picture className="w-full">
        <source media="(min-width:976px)" srcSet={WomanLg} />
        <source media="(min-width:500px)" srcSet={WomanMd} />
        <img src={WomanSm} className="w-full max-h-[320px] md:rounded-t-[15px] lg:max-h-[640px] lg:rounded-tr-none lg:rounded-bl-[15px]" />
      </picture>
      <div className="w-full h-full bg-[#FDF3F0] px-[20px] py-[60px] md:px-[40px] md:rounded-[15px] lg:rounded-l-none lg:px-[30px] lg:py-[75px]">
        <h2 className="text-peach text-center text-[32px] md:text-[40px] lg:text-left">World class talent</h2>
        <p className="text-center leading-[25px] mt-[20px] lg:text-left">
          We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
          <br /><br />
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
      </p>
      </div>
    </div>
    <Icons />
    <div className="flex flex-col w-full h-[865px] mb-[60px] mx-auto md:w-[90%] md:h-[736px] md:mb-[120px] lg:flex-row-reverse lg:w-[95%] lg:h-[640px] lg:mb-[160px] max:w-full">
      <picture className="w-full">
        <source media="(min-width:976px)" srcSet={HandLg} />
        <source media="(min-width:500px)" srcSet={HandMd} />
        <img src={HandSm} className="w-full max-h-[320px] md:rounded-t-[15px] lg:max-h-[640px] lg:rounded-tl-none lg:rounded-br-[15px]" />
      </picture>
      <div className="w-full h-full bg-[#FDF3F0] px-[20px] py-[60px] md:px-[40px] md:rounded-[15px] lg:rounded-r-none lg:px-[30px] lg:py-[75px]">
        <h2 className="text-peach text-center text-[32px] md:text-[40px] lg:text-left">World class talent</h2>
        <p className="text-center leading-[25px] mt-[20px] lg:text-left">
          We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
          <br /><br />
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
      </p>
      </div>
    </div>
  </>
);

export default Company;
