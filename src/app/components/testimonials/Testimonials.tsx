"use client";
import { testimonialsData } from '@/app/constant/dummyData'; //
import { FaQuoteLeft } from "react-icons/fa"; //
import { motion } from 'framer-motion'; //

const Testimonials = () => {
    return (
        // Terapkan padding dan background
        <section id="testimonials" className='bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-24'>
            {/* Terapkan kelas untuk judul */}
            <h2 className='text-3xl lg:text-4xl font-extrabold text-laundry-gray-dark text-center mb-16'>Apa Kata Pelanggan Setia Kami?</h2>
            
            {/* Gunakan Grid untuk menata testimoni menjadi 2 kolom di layar besar */}
            <div className='w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {testimonialsData.map((item, index) => ( //
                    <motion.div
                        key={item.id}
                        // Tambahkan kelas untuk efek hover
                        className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2"
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

export default Testimonials; //