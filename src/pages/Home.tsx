import * as React from 'react';
import { Link } from 'react-router-dom'
import { commonsHero, commonsH1, commonsHeroText, commonsButton, commonsServicesContainer, commonsServicesItem, commonsServicesItemTitle, commonsServicesItemText, commonsServicesWeb, commonsServicesApp, commonsServicesGraphic, commonsIconsContainer, commonsIcon, commonsIconContent, commonsIconTitle, commonsIconText, } from '../ConstStyles';
import HeroImage from '../assets/home/desktop/image-hero-phone.png'
import Passionate from '../assets/home/desktop/illustration-passionate.svg'
import Resourceful from '../assets/home/desktop/illustration-resourceful.svg'
import Friendly from '../assets/home/desktop/illustration-friendly.svg'

const Hero = () => (
    <div className={`${commonsHero} h-screen max-h-[843px] lg:max-h-[640px]`}>
        <h1 className={`${commonsH1} top-[80px] left-2/4 -translate-x-2/4
            md:top-[60px] md:max-w-[573px]
            lg:top-[145px] lg:left-[95px] lg:max-w-[540px] lg:text-left lg:leading-[56px] lg:translate-x-0`}>
            Award-winning custom designs and digital branding solutions
        </h1>
        <p className={`${commonsHeroText} top-[240px] 
            lg:top-[330px] lg:left-[95px] lg:max-w-[445px] lg:text-left lg:translate-x-0
            `}>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
        </p>
        <button className={`${commonsButton} top-[370px] lg:top-[440px] lg:left-[95px]`}>
            learn more
        </button>
        <div className="absolute w-[640px] h-[640px] oval rounded-full left-0 md:top-[101px] md:left-1/4 lg:top-0 lg:left-[43%]" />
        <img src={HeroImage} className="absolute top-[400px] left-2/4 -translate-x-2/4 w-[550px] h-[700px]
            md:top-[350px] md:w-[550px] md:h-[750px]
            lg:top-0 lg:left-3/4 lg:w-[580px] lg:h-[860px]" />
    </div>
);

const Services = () => (
    <div className={`${commonsServicesContainer} h-[800px] md:h-[650px] lg:h-[640px]`}>
        <div className={`${commonsServicesItem} ${commonsServicesWeb} row-span-2 lg:h-full`}>
            <div>
                <Link to="/web-design">
                    <h2 className={`${commonsServicesItemTitle}`}>web design</h2>
                    <p className={`${commonsServicesItemText}`}>view projects</p>
                </Link>
            </div>
        </div>
        <div className={`${commonsServicesItem} ${commonsServicesApp}`}>
            <div>
                <Link to="/">
                    <h2 className={`${commonsServicesItemTitle}`}>app design</h2>
                    <p className={`${commonsServicesItemText}`}>view projects</p>
                </Link>
            </div>
        </div>
        <div className={`${commonsServicesItem} ${commonsServicesGraphic}`}>
            <div>
                <Link to="/">
                    <h2 className={`${commonsServicesItemTitle}`}>graphic design</h2>
                    <p className={`${commonsServicesItemText}`}>view projects</p>
                </Link>
            </div>
        </div>
    </div>
);

const Icons = () => (
    <div className={`${commonsIconsContainer}`}>
        <div className={`${commonsIcon} relative text-center`}>
            <div className="absolute top-[25px] w-[202px] h-[202px] bg-icon passionate-t rounded-full -z-10 opacity-20 md:top-[10px] lg:top-0" />
            <img src={Passionate} />
            <div className={`${commonsIconContent}`}>
                <h3 className={`${commonsIconTitle}`}>passionate</h3>
                <p className={`${commonsIconText}`}>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </div>
        </div>

        <div className={`${commonsIcon} relative text-center`}>
            <div className="absolute top-[25px] w-[202px] h-[202px] bg-icon resourceful-t rounded-full -z-10 opacity-20 md:top-[10px] lg:top-0" />
            <img src={Resourceful} />
            <div className={`${commonsIconContent}`}>
                <h3 className={`${commonsIconTitle}`}>resourceful</h3>
                <p className={`${commonsIconText}`}>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>
        </div>

        <div className={`${commonsIcon} relative text-center`}>
            <div className="absolute top-[25px] w-[202px] h-[202px] bg-icon friendly-t rounded-full -z-10 opacity-20 md:top-[10px] lg:top-0" />
            <img src={Friendly} />
            <div className={`${commonsIconContent}`}>
                <h3 className={`${commonsIconTitle}`}>friendly</h3>
                <p className={`${commonsIconText}`}>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
            </div>
        </div>
    </div>
);

const Home: React.FC = () => (
    <>
        <Hero />
        <Services />
        <Icons />
    </>
);

export default Home;
