"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { typeEffectData } from '@/app/constant/dummyData';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

// Komponen TypeEffect yang sebelumnya ada di file terpisah, bisa digabungkan di sini
const TypeEffect = ({ arrList }: { arrList: string[] }) => {
    return (
        <Typewriter
            options={{
                strings: arrList,
                autoStart: true,
                loop: true,
            }}
        />
    );
};

const Hero = () => {
    return (
        <section className='relative w-full flex flex-col lg:flex-row section-container bg-laundry-blue-light min-h-[90vh] items-center overflow-hidden'>
            {/* Elemen Dekoratif di Latar Belakang */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-laundry-blue/10 rounded-full filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-laundry-blue/10 rounded-full filter blur-xl opacity-70"></div>

            <div className='w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-10'>
                <motion.h1 
                    className='text-4xl lg:text-6xl font-extrabold text-laundry-gray-dark leading-tight'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Laundry <span className="text-laundry-blue"><TypeEffect arrList={typeEffectData} /></span> <br />
                    dan Terpercaya
                </motion.h1>
                <motion.p 
                    className='text-laundry-gray text-lg lg:text-xl mt-6 max-w-lg mx-auto lg:mx-0'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Serahkan urusan cuci-mencuci pada kami. Nikmati pakaian bersih dan wangi tanpa repot.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#contact" className='btn-laundry w-fit mt-8 mx-auto lg:mx-0 inline-block'>
                        Hubungi Kami Sekarang
                    </a>
                </motion.div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 z-10'>
                <motion.div
                    className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                >
                    {/* Menggunakan gambar nyata dari Unsplash (gratis) */}
                    <Image 
                        src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2574&auto=format&fit=crop" 
                        alt="Tumpukan pakaian bersih dan wangi" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-full shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;