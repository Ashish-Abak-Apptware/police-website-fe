'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { MenuSquareIcon } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex justify-center bg-white'>
            <section className="fixed z-50 flex justify-between px-5 h-[65px] bg-white rounded-[15px] xl:w-[1280px] md:w-[768px] shadow-xl w-full">
                <div className={`content-center ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
                    <Link href="/">
                        <Image src='/image/PoliceLogo.svg' alt='logo' width={52} height={52} />
                    </Link>
                </div>
                <button
                    className={`my-auto ${isMenuOpen ? 'hidden' : 'block md:hidden'}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <MenuSquareIcon color='#03018D' size={30}/>
                </button>
                <div className={`content-center ${isMenuOpen ? 'hidden' : 'block md:hidden'}`}>
                        <Image src='/image/NavbarCall.svg' alt='NavbarCall' width={65} height={40} />
                    </div>
                    <div className={`absolute md:static top-[65px] left-0 w-full my-auto  bg-white flex flex-col justify-between ${isMenuOpen?'flex h-screen pb-20 px-4':'md:flex hidden'}`}>
                    <ul
                    className={`flex divide-y-2 xl:divide-y-0 divide-Natural-Gray-70 md:flex flex-col md:flex-row md:justify-end text-Natural-Gray-50 pt-5 md:pt-0 gap-8 xl:gap-16 text-[16px] leading-6 font-normal  md:bg-transparent`}
                >
                    <li className='content-center pb-4 xl:pb-0'>
                        <Link href="#">आमच्या बद्दल</Link>
                    </li>
                    <li className='content-center pb-4 xl:pb-0'>
                        <Link href="#">सिटीझन कॉर्नर</Link>
                    </li>
                    <li className='content-center pb-4 xl:pb-0'>
                        <Link href="#">पोलिस कॉर्नर</Link>
                    </li>
                    <li className='content-center pb-4 xl:pb-0'>
                        <Link href="#">आम्हाला कळवा</Link>
                    </li>
                    <li className='content-center pb-4 xl:pb-0'>
                        <Link href="#">शाखा</Link>
                    </li>
                    <li className='content-center md:block hidden'>
                        <Image src='/image/NavbarCall.svg' alt='NavbarCall' width={65} height={40} />
                    </li>
                    
                </ul>
                <div className={`content-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <button
                            className="text-Natural-Gray-100 bg-Primary-Blue-30 w-full rounded-lg py-4 text-center font-bold"
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            मेनू बंद करा
                        </button>
                    </div>
                    </div>
                
                
            </section>
        </nav>
    );
};

export default Navbar;