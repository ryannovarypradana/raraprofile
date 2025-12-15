import { LuWashingMachine, LuFacebook, LuTwitter, LuInstagram } from 'react-icons/lu';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-laundry-gray-dark to-black text-white px-6 md:px-12 lg:px-20 py-16 mt-8'>
            <div className='w-full max-w-7xl mx-auto space-y-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {/* Kolom 1: Logo & Deskripsi */}
                    <div className='md:col-span-1'>
                        <div className="flex items-center gap-3 mb-4">
                            <LuWashingMachine className="text-4xl text-laundry-blue" />
                            <span className="font-extrabold text-2xl text-white">Rara Laundry</span>
                        </div>
                        <p className='text-white/80 leading-relaxed'>
                            Solusi laundry modern untuk kehidupan yang lebih praktis.
                        </p>
                    </div>

                    {/* Kolom 2: Navigasi */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Navigasi</h4>
                        <ul className='space-y-2 text-white/80'>
                            <li><a href="#services" className='hover:text-white transition-colors'>Layanan</a></li>
                            <li><a href="#how-it-works" className='hover:text-white transition-colors'>Cara Kerja</a></li>
                            <li><a href="#testimonials" className='hover:text-white transition-colors'>Testimoni</a></li>
                            <li><a href="#contact" className='hover:text-white transition-colors'>Kontak</a></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Legal */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Legal</h4>
                        <ul className='space-y-2 text-white/80'>
                            <li><a href="#" className='hover:text-white transition-colors'>Kebijakan Privasi</a></li>
                            <li><a href="#" className='hover:text-white transition-colors'>Syarat & Ketentuan</a></li>
                        </ul>
                    </div>

                    {/* Kolom 4: Media Sosial */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Ikuti Kami</h4>
                        <div className='flex gap-4'>
                            <a href="#" className='text-2xl hover:text-laundry-blue' aria-label="Facebook"><LuFacebook /></a>
                            <a href="#" className='text-2xl hover:text-laundry-blue' aria-label="Twitter"><LuTwitter /></a>
                            <a href="#" className='text-2xl hover:text-laundry-blue' aria-label="Instagram"><LuInstagram /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright di bagian bawah */}
                <div className='border-t border-white/20 pt-6 text-center text-sm text-white/70 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                    <p>&copy; {new Date().getFullYear()} Rara Laundry. All rights reserved.</p>
                    <p>Kami siap melayani Anda setiap hari.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;