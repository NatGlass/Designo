import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// images //
import LogoImage from '../assets/shared/desktop/logo-dark.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Container = ({ children }: { children: React.ReactNode}) => (
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

const MobileMenu = () => {
    return (
        <div className="absolute ">
            working
        </div>

    )
}

const Nav: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Logo />
            {/* mobile nav */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
                {open ? <AiOutlineClose fontSize="27" /> : <GiHamburgerMenu fontSize="27"/>}
            </button>
            {open && (<MobileMenu />)}


        </Container>
  )
};

export default Nav;
