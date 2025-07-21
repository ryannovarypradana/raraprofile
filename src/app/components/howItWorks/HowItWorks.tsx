"use client"
import { howItWorksData } from '@/app/constant/dummyData';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className='section-container bg-laundry-blue-light'>
            <h2 className='section-title'>Hanya 4 Langkah Mudah</h2>
            <p className='section-subtitle'>
                Kami merancang proses yang simpel untuk memberikan Anda kenyamanan maksimal.
            </p>
            <div className='mt-20 relative flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl mx-auto'>
                {/* Garis penghubung putus-putus (hanya di desktop) */}
                <div className="absolute top-8 left-0 w-full h-1 hidden lg:block">
                    <svg width="100%" height="100%">
                        <line x1="0" y1="50%" x2="100%" y2="50%" strokeDasharray="10, 15" stroke="#2196F3" strokeWidth="2" />
                    </svg>
                </div>

                {howItWorksData.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className="flex flex-col items-center text-center p-4 z-10 w-60"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white text-laundry-blue w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-lg ring-8 ring-laundry-blue-light">
                            {step.icon ? <step.icon /> : <span>{step.id}</span>}
                        </div>
                        <h3 className='text-lg font-semibold mb-2'>{step.title}</h3>
                        <p className='text-sm text-laundry-gray'>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;