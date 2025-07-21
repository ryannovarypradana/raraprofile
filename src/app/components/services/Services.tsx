"use client"
import { servicesData } from '@/app/constant/dummyData';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="services" className='section-container bg-white'> 
            <h2 className='section-title'>Apa yang Kami Tawarkan?</h2>
            <p className='section-subtitle'>
                Layanan lengkap untuk memastikan setiap helai pakaian Anda mendapatkan perawatan terbaik.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                {servicesData?.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover cursor-pointer flex flex-col"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // Delay dibuat bertingkat untuk efek stagger
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex justify-center mb-6'>
                            <div className="bg-laundry-blue-light p-5 rounded-full">
                                <item.icon className='text-5xl text-laundry-blue' />
                            </div>
                        </div>
                        <h4 className='text-xl font-bold text-laundry-gray-dark mb-3'>{item.title}</h4>
                        <p className='text-laundry-gray flex-grow'>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;