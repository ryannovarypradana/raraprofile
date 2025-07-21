"use client"
import { servicesData } from '@/app/constant/dummyData';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        // Tambahkan kelas utilitas untuk padding, dll, langsung di sini
        <section id="services" className='bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-24'> 
            {/* Judul dan Subjudul dengan kelas utilitas */}
            <h2 className='text-3xl lg:text-4xl font-extrabold text-laundry-gray-dark text-center mb-4'>Apa yang Kami Tawarkan?</h2>
            <p className='text-lg text-laundry-gray text-center max-w-3xl mx-auto'>
                Layanan lengkap untuk memastikan setiap helai pakaian Anda mendapatkan perawatan terbaik.
            </p>
            {/* Grid layout */}
            <div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                {servicesData?.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        className="bg-white p-8 rounded-2xl shadow-lg text-center cursor-pointer flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
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