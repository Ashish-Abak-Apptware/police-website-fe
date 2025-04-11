import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='flex justify-center bg-white'>
            <section className="flex justify-between px-5 h-[65px] bg-white rounded-[15px] xl:w-[1280px]">
            <div className="content-center">
                <Link href="/">
                <Image src='/image/PoliceLogo.svg' alt='logo' width={52} height={52}/>
                </Link>
            </div>
            <ul className="flex my-auto text-black gap-16 text-[16px] leading-6 font-normal">
                <li className='content-center '>
                    <Link href="/about">आमच्या बद्दल</Link>
                </li>
                <li className='content-center'>
                    <Link href="/citizenCorner">सिटीझन कॉर्नर</Link>
                </li>
                <li className='content-center'>
                    <Link href="/policeCorner">पोलिस कॉर्नर</Link>
                </li>
                <li className='content-center'>
                    <Link href="/contactUs">आम्हाला कळवा</Link>
                </li>
                <li className='content-center'>
                    <Link href="/branch">शाखा</Link>
                </li>
                <li className='content-center'>
                    <Image src='/image/NavbarCall.svg' alt='NavbarCall' width={65} height={40}/>
                </li>
            </ul>
        </section>
        </nav>
    );
};

export default Navbar;