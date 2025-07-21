"use client";
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className='bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-24 w-full'>
            <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12'>
                {/* Kolom Kiri (Informasi Kontak) */}
                <motion.div
                    className='w-full lg:w-1/2'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-3xl lg:text-4xl font-extrabold text-laundry-gray-dark mb-4'>Siap Punya Waktu Luang Lebih?</h2>
                    <p className='text-laundry-gray mb-8'>
                        Hubungi kami hari ini untuk layanan antar-jemput atau kunjungi workshop kami. Kami siap membantu!
                    </p>
                    <div className='space-y-6'>
                        <div className='flex items-center gap-4'>
                            <LuPhone className='text-3xl text-laundry-blue' />
                            <div>
                                <h4 className='font-semibold text-laundry-gray-dark'>Telepon & WhatsApp</h4>
                                <a href="tel:+6281234567890" className='text-laundry-gray hover:text-laundry-blue-dark'>+62 858-6304-8180</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <LuMail className='text-3xl text-laundry-blue' />
                            <div>
                                <h4 className='font-semibold text-laundry-gray-dark'>Email</h4>
                                <a href="mailto:info@Rara Laundry.com" className='text-laundry-gray hover:text-laundry-blue-dark'>info@raralaundry.com</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <LuMapPin className='text-3xl text-laundry-blue' />
                            <div>
                                <h4 className='font-semibold text-laundry-gray-dark'>Alamat Workshop</h4>
                                <p className='text-laundry-gray'>Jl. Sulaiman No.30A, RT.3/RW.4, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Kolom Kanan (Formulir Kontak) - PERBAIKAN DI SINI */}
                <motion.div
                    className='w-full lg:w-1/2 bg-laundry-blue-light p-8 rounded-xl shadow-lg border border-gray-200'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h3 className='text-2xl font-bold mb-5 text-laundry-gray-dark'>Kirim Pesan Cepat</h3>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor="name" className="sr-only">Nama</label>
                            {/* Mengganti kelas input dari DaisyUI dengan Tailwind */}
                            <input type="text" id="name" placeholder="Nama Anda" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-laundry-gray-dark focus:outline-none focus:ring-2 focus:ring-laundry-blue"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            {/* Mengganti kelas input dari DaisyUI dengan Tailwind */}
                            <input type="email" id="email" placeholder="Email Anda" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-laundry-gray-dark focus:outline-none focus:ring-2 focus:ring-laundry-blue"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Pesan</label>
                            {/* Mengganti kelas textarea dari DaisyUI dengan Tailwind */}
                            <textarea id="message" placeholder="Pesan Anda..." className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-laundry-gray-dark focus:outline-none focus:ring-2 focus:ring-laundry-blue" rows={4}></textarea>
                        </div>
                        {/* Memastikan kelas tombol sudah benar */}
                        <button type="submit" className='w-full bg-laundry-blue text-black font-bold py-3 px-8 rounded-full hover:bg-laundry-blue-dark transition-all duration-300 ease-in-out hover:scale-105'>
                            Kirim Pesan
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;