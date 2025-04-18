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
const NavbarMenu=["आमच्या बद्दल","सिटीझन कॉर्नर","पोलिस कॉर्नर","आम्हाला कळवा","शाखा"]
    return (
        <nav className='flex justify-center bg-white font-khand'>
            <section className="fixed z-50 flex justify-between px-5 h-[65px] bg-white rounded-[15px] xl:w-[1280px] md:w-[768px] shadow-xl w-full">
                <div className={`content-center ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
                    <Link href="/">
                        <Image src='/assets/PoliceLogo.svg' alt='logo' width={52} height={52} />
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
                        <Image src='/assets/NavbarCall.svg' alt='NavbarCall' width={65} height={40} />
                    </div>
                    <div className={`absolute md:static top-[65px] left-0 w-full my-auto  bg-white flex flex-col justify-between ${isMenuOpen?'flex h-[90vh] pb-20 px-4':'md:flex hidden'}`}>
                    <ul
                    className={`flex divide-y-2 md:divide-y-0 divide-Natural-Gray-70 md:flex flex-col md:flex-row md:justify-end text-Natural-Gray-50  pt-5 md:pt-0 gap-8 xl:gap-16 xl:text-p3ExtraLightInter xl:leading-p3ExtraLightInter text-p2ExtraLightInter leading-p2ExtraLightInter font-normal  md:bg-transparent`}
                >
                    {NavbarMenu.map((each,index)=>(
                        <li key={index} className='content-center pb-4 md:pb-0 hover:text-natural-gray-10 hover:font-medium'>
                        <Link href="#">{each}</Link>
                    </li>
                    ))}
                    <li className='content-center md:block hidden'>
                        <Image src='/assets/NavbarCall.svg' alt='NavbarCall' width={65} height={40} />
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