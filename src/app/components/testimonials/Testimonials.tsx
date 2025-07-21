"use client";
import { testimonialsData } from '@/app/constant/dummyData';
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <section id="testimonials" className='section-container bg-white'>
            <h2 className='section-title'>Apa Kata Pelanggan Setia Kami?</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto'>
                {testimonialsData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between card-hover"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <FaQuoteLeft className='text-3xl text-laundry-blue mb-4' />
                        <p className='text-laundry-gray italic mb-6 flex-grow'>"{item.quote}"</p>
                        <div>
                            <h6 className='font-bold text-laundry-gray-dark'>{item.name}</h6>
                            <p className='text-sm text-laundry-gray'>{item.position}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;