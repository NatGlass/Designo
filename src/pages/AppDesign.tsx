import * as React from 'react';
import { Link } from 'react-router-dom'
import { commonsHero, commonsH1, commonsHeroText, commonsServicesContainer, commonsServicesItem, commonsServicesItemTitle, commonsServicesItemText, commonsServicesWeb, commonsServicesGraphic, commonsGalleryContainer, commonsGalleryItem, commonsGalleryImage, commonsGalleryContentContainer, commonsGalleryItemTitle, commonsGalleryItemText } from '../ConstStyles';
import Airfilter from '../assets/app-design/desktop/image-airfilter.jpg'
import Eyecam from '../assets/app-design/desktop/image-eyecam.jpg'
import Faceit from '../assets/app-design/desktop/image-faceit.jpg'
import Todo from '../assets/app-design/desktop/image-todo.jpg'
import Loopstudios from '../assets/app-design/desktop/image-loopstudios.jpg'

const Hero = () => (
    <div className={`${commonsHero} h-[320px] md:h-[252px]`}>
        <h1 className={`${commonsH1} top-[105px] left-2/4 -translate-x-2/4
        md:top-[64px]`}>
            App Design
        </h1>
        <p className={`${commonsHeroText} top-[165px]
        md:top-[130px] 
        lg:top-[136px] lg:max-w-[445px]`}>
            Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
        </p>
    </div>
);

const Gallery = () => (
    <div className={`${commonsGalleryContainer} h-[2550px] md:h-[1688px] lg:h-[988px]`}>
        <div className={`${commonsGalleryItem}`}>
            <img src={Airfilter} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Airfilter</h2>
                <p className={`${commonsGalleryItemText}`}>Solving the problem of poor indoor air quality by filtering the air</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Eyecam} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Eyecam</h2>
                <p className={`${commonsGalleryItemText}`}>Product that lets you edit your favorite photos and videos at any time</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Faceit} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Faceit</h2>
                <p className={`${commonsGalleryItemText}`}>Get to meet your favorite internet superstar with the faceit app</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Todo} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Todo</h2>
                <p className={`${commonsGalleryItemText}`}>A todo app that features cloud sync with light and dark mode</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Loopstudios} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Loopstudios</h2>
                <p className={`${commonsGalleryItemText}`}>A VR experience app made for Loopstudios</p>
            </div>
        </div>
    </div>
);

const Services = () => (
    <div className={`${commonsServicesContainer} h-[524px] md:h-[424px] lg:h-[308px]`}>
        <div className={`${commonsServicesItem} ${commonsServicesWeb}`}>
            <div>
                <Link to="/web-design">
                    <h2 className={`${commonsServicesItemTitle}`}>web design</h2>
                    <p className={`${commonsServicesItemText}`}>view projects</p>
                </Link>
            </div>
        </div>
        <div className={`${commonsServicesItem} ${commonsServicesGraphic}`}>
            <div>
                <Link to="/graphic-design">
                    <h2 className={`${commonsServicesItemTitle}`}>graphic design</h2>
                    <p className={`${commonsServicesItemText}`}>view projects</p>
                </Link>
            </div>
        </div>
    </div>
);

const AppDesign:React.FC = () => (
    <>
        <Hero />
        <Gallery />
        <Services /> 
    </>
)

export default AppDesign;
