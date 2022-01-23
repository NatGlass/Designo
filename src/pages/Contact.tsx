import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { commonsHero, commonsIconsContainer, commonsIcon, commonsIconContent, commonsIconTitle, commonsIconButton } from '../ConstStyles';

import Canada from '../assets/shared/desktop/illustration-canada.svg'
import Australia from '../assets/shared/desktop/illustration-australia.svg'
import UK from '../assets/shared/desktop/illustration-united-kingdom.svg'

const commonInputs = "bg-[transparent] text-[white] placeholder:opacity-50 placeholder:text-[white] border-b-[1px] border-[white] px-[10px] py-[5px] outline-none focus:placeholder:opacity-100 focus:border-b-[3px]"

const Hero = () => (
    <div className={`${commonsHero} h-[764px] md:h-[711px] md:px-[58px] lg:flex lg:h-[480px]`}>
        <div className="px-[24px] py-[72px] md:py-[71px]">
            <h1 className="text-[white] text-[32px] text-center md:text-[48px] md:text-left lg:max-w-[540px]">Contact Us</h1>
            <p className="text-[white] text-center mt-[24px] md:text-left lg:max-w-[540px]">
                Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
            </p>
        </div>
        <div className="w-full h-2/4 lg:max-w-[380px] lg:h-full">
            <form className="flex flex-col justify-between w-[90%] h-full mx-auto md:w-full md:h-[334px] lg:h-[371px] lg:mt-[55px]" onSubmit={(event) => event.preventDefault()}>
                <input type="text" placeholder="Name" className={`${commonInputs} h-[38px] lg:h-[40px]`} />
                <input type="text" placeholder="Email Address" className={`${commonInputs} h-[38px] lg:h-[40px]`} />
                <input type="text" placeholder="Phone" className={`${commonInputs} h-[38px] lg:h-[40px]`} />
                <textarea placeholder="Your Message" className={`${commonInputs} resize-none h-[102px]`} />
                <button value="submit" className="w-[152px] h-[56px] bg-[white] rounded-[8px] uppercase self-center md:self-end hover:bg-peachLight hover:text-[white] transition-colors duration-500">submit</button>
            </form>
        </div>
    </div>
);



const Contact = () => (
    <>
        <Hero />
    </>
)

export default Contact;
