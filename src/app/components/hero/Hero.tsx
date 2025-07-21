"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { typeEffectData } from '@/app/constant/dummyData';
import Typewriter from 'typewriter-effect';

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
        <section className='w-full flex flex-col lg:flex-row section-container bg-laundry-blue-light min-h-[80vh] items-center'>
            <motion.div
                className='w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className='text-4xl lg:text-6xl font-extrabold text-laundry-gray-dark'>
                    Laundry <span className="text-laundry-blue"><TypeEffect arrList={typeEffectData} /></span> <br />
                    dan Terpercaya
                </h1>
                <p className='text-laundry-gray text-md lg:text-xl mt-6'>
                    Serahkan urusan cuci-mencuci pada kami. Nikmati pakaian bersih dan wangi tanpa repot.
                </p>
                <a href="#contact" className='btn-laundry w-fit mt-8 mx-auto lg:mx-0'>
                    Hubungi Kami Sekarang
                </a>
            </motion.div>
            <motion.div
                className='w-full hidden lg:w-1/2 lg:flex justify-center mt-10 lg:mt-0'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Anda bisa menggunakan gambar dari unsplash atau membuat ilustrasi sendiri */}
                <img src="https://images.unsplash.com/photo-1582735689369-4dEa34400523?q=80&w=2592&auto=format&fit=crop" alt="Ilustrasi Jasa Laundry" className="w-[500px] h-[500px] object-cover rounded-full" />
            </motion.div>
        </section>
    );
};

export default Hero;