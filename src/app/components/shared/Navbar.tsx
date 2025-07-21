"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LuWashingMachine } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi"; // Impor ikon untuk hamburger & close

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk hamburger menu

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fungsi untuk menutup menu saat link di klik (untuk mobile)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <nav className="relative flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
                    <LuWashingMachine className="text-4xl text-laundry-blue" />
                    <span className="font-extrabold text-2xl text-laundry-gray-dark">Rara Laundry</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-semibold text-laundry-gray-dark">
                    <Link href="#services" className="hover:text-laundry-blue transition-colors">Layanan</Link>
                    <Link href="#how-it-works" className="hover:text-laundry-blue transition-colors">Cara Kerja</Link>
                    <Link href="#testimonials" className="hover:text-laundry-blue transition-colors">Testimoni</Link>
                </div>
                <a href="#contact" className="btn-laundry hidden md:block">
                    Pesan Sekarang
                </a>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-laundry-gray-dark focus:outline-none">
                        {isMenuOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu (Hamburger) ✨ */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
                <div className="flex flex-col items-start gap-4 p-6">
                    <Link href="#services" className="font-semibold w-full hover:text-laundry-blue transition-colors" onClick={handleLinkClick}>Layanan</Link>
                    <Link href="#how-it-works" className="font-semibold w-full hover:text-laundry-blue transition-colors" onClick={handleLinkClick}>Cara Kerja</Link>
                    <Link href="#testimonials" className="font-semibold w-full hover:text-laundry-blue transition-colors" onClick={handleLinkClick}>Testimoni</Link>
                    <a href="#contact" className="btn-laundry w-full text-center mt-2" onClick={handleLinkClick}>
                        Pesan Sekarang
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;