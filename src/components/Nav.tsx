import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// images //
import LogoImage from '../assets/shared/desktop/logo-dark.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Container = ({ children }: { children: React.ReactNode }) => (
    <nav className="
        flex w-full z-[100] justify-between items-center
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

const Links = ({ open }: { open: boolean }, { setOpen }: { setOpen: Function }) => {
    function CloseNav() {
        setOpen(!open)
    }
    const commonStyles = "text-[white] text-2xl uppercase list-none md:text-black md:text-[16px] md:hover:underline"
    return (
        <>
            <Link to="/" onClick={CloseNav}><li className={commonStyles}>our company</li></Link>
            <Link to="/" onClick={CloseNav}><li className={commonStyles}>locations</li></Link>
            <Link to="/" onClick={CloseNav}><li className={commonStyles}>contact</li></Link>
        </>
    );
};

const MobileMenu = () => (
    <div className="absolute top-[96px] left-0 w-full h-[235px] bg-black px-[48px] py-[48px] z-[100]
        md:hidden
        ">
        <ul className="flex flex-col w-full h-full justify-between">
            <Links open />
        </ul>
        {/* overlay */}
        <div className="absolute top-[235px] left-0 w-full h-screen bg-black opacity-60" />
    </div>
);

const DesktopMenu = ({ children }: { children: React.ReactNode }) => (
    <div className="hidden md:block">
        <ul className="flex justify-between w-[370px]">
            {children}
        </ul>
    </div>
);

const Nav: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Logo />

            {/* mobile nav */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
                {open ? <AiOutlineClose fontSize="30" /> : <GiHamburgerMenu fontSize="30" />}
            </button>
            {open && (<MobileMenu />)}

            {/* tablet & desktop nav */}
            <DesktopMenu>
                <Links open />
            </DesktopMenu>
        </Container>
    );
};

export default Nav;
