import * as React from 'react';
import { Link } from 'react-router-dom'
import { commonsHero, commonsH1, commonsHeroText, commonsButton, commonsServicesContainer, commonsServicesItem, commonsServicesItemTitle, commonsServicesItemText, commonsServicesApp, commonsServicesGraphic, commonsGalleryContainer, commonsGalleryItem, commonsGalleryImage, commonsGalleryContentContainer, commonsGalleryItemTitle, commonsGalleryItemText } from '../ConstStyles';
import Express from '../assets/web-design/desktop/image-express.jpg'
import Transfer from '../assets/web-design/desktop/image-transfer.jpg'
import Photon from '../assets/web-design/desktop/image-photon.jpg'
import Builder from '../assets/web-design/desktop/image-builder.jpg'
import Blogr from '../assets/web-design/desktop/image-blogr.jpg'
import Camp from '../assets/web-design/desktop/image-camp.jpg'


const Hero = () => (
    <div className={`${commonsHero} h-[320px] 
    md:h-[252px]`}>
        <h1 className={`${commonsH1} top-[105px] left-2/4 -translate-x-2/4
        md:top-[64px]`}>
            Web Design
        </h1>
        <p className={`${commonsHeroText} top-[165px]
        md:top-[130px] 
        lg:top-[136px] lg:max-w-[445px]`}>
            We build websites that serve as powerful marketing tools and bring memorable brand experiences.
        </p>
    </div>
);

const Gallery = () => (
    <div className={`${commonsGalleryContainer}`}>
        <div className={`${commonsGalleryItem}`}>
            <img src={Express} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Express</h2>
                <p className={`${commonsGalleryItemText}`}>A multi-carrier shipping website for ecommerce businesses</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Transfer} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Transfer</h2>
                <p className={`${commonsGalleryItemText}`}>Site for low-cost money transfers and sending money within seconds</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Photon} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Photon</h2>
                <p className={`${commonsGalleryItemText}`}>A state-of-the-art music player with high-resolution audio and DSP effects</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Builder} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Builder</h2>
                <p className={`${commonsGalleryItemText}`}>Connects users with local contractors based on their location</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Blogr} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Blogr</h2>
                <p className={`${commonsGalleryItemText}`}>Blogr is a platform for creating an online blog or publication</p>
            </div>
        </div>

        <div className={`${commonsGalleryItem}`}>
            <img src={Camp} className={`${commonsGalleryImage}`} />
            <div className={`${commonsGalleryContentContainer}`}>
                <h2 className={`${commonsGalleryItemTitle}`}>Camp</h2>
                <p className={`${commonsGalleryItemText}`}>Get expert training in coding, data, design, and digital marketing</p>
            </div>
        </div>
    </div>
);

const Services = () => (
    <div className={`${commonsServicesContainer} h-[524px] md:h-[424px] lg:h-[308px]`}>
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

const WebDesign = () => (
    <>
        <Hero />
        <Gallery />
        <Services /> 
    </>
)

export default WebDesign;
