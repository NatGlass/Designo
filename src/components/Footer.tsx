import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/shared/desktop/logo-light.png'

import Facebook from '../assets/shared/desktop/icon-facebook.svg'
import Youtube from '../assets/shared/desktop/icon-youtube.svg'
import Twitter from '../assets/shared/desktop/icon-twitter.svg'
import Pinterest from '../assets/shared/desktop/icon-pinterest.svg'
import Instagram from '../assets/shared/desktop/icon-Instagram.svg'

const Container = ({children}: { children: React.ReactNode }) => (
    <div className="relative flex justify-center w-full h-[815px] bg-black mt-[310px] md:h-[423px] md:mt-[378px] lg:h-[393px] lg:mt-[380px]">
        {children}
    </div>
);

const Inner = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full max-w-[1111px] mx-auto px-">
        {children}
    </div>
);

const InnerContent = () => {
    const commonsLink = "text-[white] text-[14px] uppercase list-none md:text-[16px]"
    return (
        <div className="relative flex flex-col w-full h-full px-[24px] pt-[250px] md:pt-[166px] lg:pt-[144px]">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="w-[202px] h-[27px] mx-auto md:mx-0">
                    <img src={Logo} className="w-[202px] h-[27px] object-cover" />
                </div>
                <div className="flex flex-col justify-between h-[106px] text-center mt-[65px] md:flex-row md:w-[370px] md:h-[27px] md:mt-0">
                    <Link to="/company"><li className={`${commonsLink}`}>our company</li></Link>
                    <Link to="/locations"><li className={`${commonsLink}`}>locations</li></Link>
                    <Link to="/contact"><li className={`${commonsLink}`}>contact</li></Link>
                </div>
            </div>
            <div className="flex flex-col mt-[40px] md:flex-row md:justify-between md:w-[456px] md:mt-[72px] lg:w-[475px]">
                <div className="h-[78px] text-center md:text-left">
                    <p className="text-[rgba(255,255,255,.5)] leading-[26px]">
                        <span className="font-bold">Designo Central Office</span>
                        <br />
                        3886 Wellington Street
                        <br />
                        Toronto, Ontario M9C 3J5
                    </p>
                </div>
                <div className="h-[78px] text-center md:text-left">
                    <p className="text-[rgba(255,255,255,.5)] leading-[26px]">
                        <span className="font-bold">Contact Us (Central Office)</span>
                        <br />
                        P : +1 253-863-8967
                        <br />
                        M : contact@designo.co
                    </p>
                </div>
            </div>
            <div className="flex justify-center w-full h-[24px] mx-auto mt-[40px] md:-mt-[25px] md:mx-0 md:justify-end">
                <div className="flex justify-between w-[184px]">
                    <img src={Facebook} />
                    <img src={Youtube} />
                    <img src={Twitter} />
                    <img src={Pinterest} />
                    <img src={Instagram} />
                </div>
            </div>
            <div className="absolute top-[310px] left-2/4 -translate-x-2/4  w-[90%] h-[1px] bg-[rgba(255,255,255,.1)] md:top-[233px] md:w-[95%] lg:top-[210px]" />
        </div>
    );
};

const Extension = () => (
    <div className="absolute top-[-190px] w-[90%] max-w-[1111px] h-[379px] bg-peach rounded-[15px] md:top-[-264px] md:h-[350px] lg:top-[-220px] lg:h-[292px] max:w-full">
        <div className="relative flex flex-col w-full h-full px-[24px] py-[64px] md:p-[58px]">
            <h4 className="text-[white] text-[32px] text-center lg:text-left">Let's talk about your project</h4>
            <p className="text-[white] text-center leading-[25px] mt-[10px] lg:text-left lg:max-w-[459px]">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            <button className="self-center w-[152px] h-[56px] bg-[white] uppercase mt-[24px] rounded-[8px] md:mt-[32px] lg:absolute lg:right-[96px] lg:mt-[50px] transition-colors duration-500 hover:bg-peachLight hover:text-[white]">get in touch</button>
        </div>
    </div>
);

const Footer:React.FC = () => (
    <Container>
        <Extension />
        <Inner>
            <InnerContent />
        </Inner>
    </Container>
);

export default Footer;
