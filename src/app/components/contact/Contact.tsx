"use client";
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className='section-container bg-white w-full flex flex-col lg:flex-row items-start gap-12'>
            <motion.div
                className='w-full lg:w-1/2'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className='text-3xl font-bold text-laundry-gray-dark mb-4'>Siap Punya Waktu Luang Lebih?</h2>
                <p className='text-laundry-gray mb-8'>
                    Hubungi kami hari ini untuk layanan antar-jemput atau kunjungi workshop kami. Kami siap membantu!
                </p>

                <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                        <LuPhone className='text-3xl text-laundry-blue' />
                        <div>
                            <h4 className='font-semibold'>Telepon & WhatsApp</h4>
                            <a href="tel:+6281234567890" className='text-laundry-gray hover:text-laundry-blue-dark'>+62 812-3456-7890</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <LuMail className='text-3xl text-laundry-blue' />
                        <div>
                            <h4 className='font-semibold'>Email</h4>
                            <a href="mailto:info@pristineclean.com" className='text-laundry-gray hover:text-laundry-blue-dark'>info@pristineclean.com</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <LuMapPin className='text-3xl text-laundry-blue' />
                        <div>
                            <h4 className='font-semibold'>Alamat Workshop</h4>
                            <p className='text-laundry-gray'>Jl. Kebersihan Raya No. 123, Jakarta</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='w-full lg:w-1/2 bg-laundry-blue-light p-8 rounded-xl shadow-lg'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h3 className='text-2xl font-bold mb-5 text-laundry-gray-dark'>Kirim Pesan Cepat</h3>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor="name" className="sr-only">Nama</label>
                        <input type="text" id="name" placeholder="Nama Anda" className="input input-bordered w-full bg-white"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" id="email" placeholder="Email Anda" className="input input-bordered w-full bg-white"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Pesan</label>
                        <textarea id="message" placeholder="Pesan Anda..." className="textarea textarea-bordered w-full bg-white" rows={4}></textarea>
                    </div>
                    <button type="submit" className='btn-laundry w-full'>Kirim Pesan</button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;