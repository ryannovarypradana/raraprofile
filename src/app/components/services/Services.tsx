"use client";
import { servicesData } from '@/app/constant/dummyData';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="services" className='section-container bg-white'>
            <h2 className='section-title'>Apa yang Kami Tawarkan?</h2>
            <p className='section-subtitle'>
                Layanan lengkap untuk memastikan setiap helai pakaian Anda mendapatkan perawatan terbaik.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                {servicesData?.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        className="bg-white p-8 rounded-xl shadow-md text-center card-hover cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex justify-center mb-5'>
                            <item.icon className='text-6xl text-laundry-blue' />
                        </div>
                        <h4 className='text-xl font-bold text-laundry-gray-dark mb-3'>{item.title}</h4>
                        <p className='text-laundry-gray min-h-24'>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;