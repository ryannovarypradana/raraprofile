"use client"
import { howItWorksData } from '@/app/constant/dummyData';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
       // Terapkan padding dan background color
       <section id="how-it-works" className='bg-laundry-blue-light px-6 md:px-12 lg:px-20 py-16 lg:py-24'>
            {/* Terapkan kelas untuk judul dan subjudul */}
            <h2 className='text-3xl lg:text-4xl font-extrabold text-laundry-gray-dark text-center mb-4'>Hanya 4 Langkah Mudah</h2>
            <p className='text-lg text-laundry-gray text-center max-w-3xl mx-auto'>
                Kami merancang proses yang simpel untuk memberikan Anda kenyamanan maksimal.
            </p>
            
            {/* Kontainer utama untuk langkah-langkah */}
            <div className='w-full max-w-5xl mx-auto mt-20 relative'>
                {/* Garis putus-putus untuk desktop */}
                <div className="absolute top-10 left-0 w-full h-px hidden lg:block">
                    <svg width="100%" height="2">
                        <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" strokeDasharray="5, 10" className="stroke-laundry-blue/50" />
                    </svg>
                </div>
                
                {/* Kontainer Flex untuk menata langkah-langkah */}
                <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-4">
                    {howItWorksData.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="flex flex-col items-center text-center w-full lg:w-60"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* z-10 agar lingkaran berada di atas garis */}
                            <div className="bg-white text-laundry-blue w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-lg ring-8 ring-laundry-blue-light z-10">
                                {step.icon ? <step.icon /> : <span>{step.id}</span>}
                            </div>
                            <h3 className='text-lg font-semibold text-laundry-gray-dark mb-2'>{step.title}</h3>
                            <p className='text-sm text-laundry-gray'>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;