"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { typeEffectData } from '@/app/constant/dummyData';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

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
        <section className='relative w-full flex items-center bg-laundry-blue-light min-h-screen px-6 md:px-12 lg:px-20 py-16 lg:py-24'>
            <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                
                {/* Bagian Teks (Kiri) */}
                <div className='w-full lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-left'>
                    {/* PERUBAHAN FINAL DI SINI */}
                    <motion.h1 
                        className='text-4xl lg:text-6xl font-extrabold text-laundry-gray-dark'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Kembali menggunakan span untuk kontrol yang presisi */}
                        <span className="block">
                            Laundry <span className="text-laundry-blue"><TypeEffect arrList={typeEffectData} /></span>
                        </span>
                        {/* Gunakan margin negatif yang lebih kecil */}
                        <span className="block -mt-0">
                            dan Terpercaya
                        </span>
                    </motion.h1>
                    <motion.p 
                        className='text-laundry-gray text-lg lg:text-xl mt-6 max-w-xl'
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
                        <a href="#contact" className='inline-block mt-8 bg-laundry-blue text-white font-bold py-3 px-8 rounded-full hover:bg-laundry-blue-dark transition-all duration-300 ease-in-out hover:scale-105'>
                            Hubungi Kami Sekarang
                        </a>
                    </motion.div>
                </div>

                {/* Bagian Gambar (Kanan) */}
                <div className='w-full lg:w-5/12 flex justify-center lg:justify-end'>
                    <motion.div
                        className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    >
                        <Image 
                            src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2574&auto=format&fit=crop" 
                            alt="Tumpukan pakaian bersih dan wangi" 
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-full shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;