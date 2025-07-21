"use client";
import { howItWorksData } from '@/app/constant/dummyData';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className='section-container bg-white'>
            <h2 className='section-title'>Hanya 4 Langkah Mudah</h2>
            <p className='section-subtitle'>
                Kami merancang proses yang simpel untuk memberikan Anda kenyamanan maksimal.
            </p>
            <div className='mt-12 relative flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl mx-auto'>
                {/* Garis penghubung */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-laundry-blue-light hidden lg:block"></div>
                
                {howItWorksData.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className="flex flex-col items-center text-center p-4 z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-laundry-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                            {step.icon ? <step.icon /> : <span>{step.id}</span>}
                        </div>
                        <h3 className='text-lg font-semibold mb-2'>{step.title}</h3>
                        <p className='max-w-xs text-laundry-gray'>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;