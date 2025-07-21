"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LuWashingMachine } from "react-icons/lu";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <nav className="flex justify-between items-center px-5 lg:px-20 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <LuWashingMachine className="text-4xl text-laundry-blue" />
                    <span className="font-extrabold text-2xl text-laundry-gray-dark">PristineClean</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 font-semibold text-laundry-gray-dark">
                    <Link href="#services" className="hover:text-laundry-blue transition-colors">Layanan</Link>
                    <Link href="#how-it-works" className="hover:text-laundry-blue transition-colors">Cara Kerja</Link>
                    <Link href="#testimonials" className="hover:text-laundry-blue transition-colors">Testimoni</Link>
                </div>
                <a href="#contact" className="btn-laundry hidden md:block">
                    Pesan Antar-Jemput
                </a>
            </nav>
        </header>
    );
};

export default Navbar;