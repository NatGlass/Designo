import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// images //
import LogoImage from '../assets/shared/desktop/logo-dark.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Container = ({ children }: { children: React.ReactNode }) => (
    <nav className="
        flex w-full z-10 justify-between items-center
        h-[96px] px-[24px]
        md:h-[27px] md:px-[40px] md:my-[64px]
        lg:px-[15px]
        max:px-0
        ">
        {children}
    </nav>
);

const Logo = () => (
    <Link to="/">
        <img src={LogoImage} className="w-[202px] h-[27px]" />
    </Link>
);


const Burger = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <GiHamburgerMenu fontSize="27" /> : <AiOutlineClose fontSize="27"/>}
        </button>
    )
}




const Nav: React.FC = () => {

    return (
        <Container>
            <Logo />
            <Burger />
        </Container>
  )
};

export default Nav;
