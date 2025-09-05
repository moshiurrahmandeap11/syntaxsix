"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navLinks = <>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/services">Services</Link>
    <Link href="/team">Team</Link>
    <Link href="/contact">Contact</Link>
    </>

    return (
        <div className='flex justify-between max-w-10/12 mx-auto items-center p-4 '>
            <div>
                <h1 className='text-black text-xl'>Syntax Six</h1>
            </div>
            <div className='space-x-4 text-black'>
                {navLinks}
            </div>
            <div>
                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;