import * as React from 'react';
import { Link } from 'react-router-dom'
import { commonsHero, commonsH1, commonsHeroText, commonsServicesContainer, commonsServicesItem, commonsServicesItemTitle, commonsServicesItemText, commonsServicesWeb, commonsServicesApp, commonsGalleryContainer, commonsGalleryItem, commonsGalleryImage, commonsGalleryContentContainer, commonsGalleryItemTitle, commonsGalleryItemText } from '../ConstStyles';
import Change from '../assets/graphic-design/desktop/image-change.jpg'
import Water from '../assets/graphic-design/desktop/image-boxed-water.jpg'
import Science from '../assets/graphic-design/desktop/image-science.jpg'

const Hero = () => (
    <div className={`${commonsHero} h-[320px] md:h-[252px]`}>
        <h1 className={`${commonsH1} top-[105px] left-2/4 -translate-x-2/4
        md:top-[64px]`}>
            Graphic Design
        </h1>
        <p className={`${commonsHeroText} top-[165px]
        md:top-[130px] 
        lg:top-[136px] lg:max-w-[445px]`}>
            We deliver eye-catching branding materials that are tailored to meet your business objectives.
        </p>
    </div>
);

const Gallery = () => (
    <div className={`${commonsGalleryContainer} h-[1514px] md:h-[1004px] lg:h-[478px]`}>
        <div className={`${commonsGalleryItem}`}>
            <img src={Change} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Tim Brown</h2>
                <p className={`${commonsGalleryItemText}`}>A book cover designed for Tim Brown’s new release, ‘Change’</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Water} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Eyecam</h2>
                <p className={`${commonsGalleryItemText}`}>Product that lets you edit your favorite photos and videos at any time</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Science} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Faceit</h2>
                <p className={`${commonsGalleryItemText}`}>Get to meet your favorite internet superstar with the faceit app</p>
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
        <div className={`${commonsServicesItem} ${commonsServicesApp}`}>
            <div>
                <Link to="/app-design">
                    <h2 className={`${commonsServicesItemTitle}`}>app design</h2>
                    <p className={`${commonsServicesItemText}`}>view projects</p>
                </Link>
            </div>
        </div>
    </div>
);

const GraphicDesign:React.FC = () => (
    <>
        <Hero />
        <Gallery />
        <Services /> 
    </>
)

export default GraphicDesign;
