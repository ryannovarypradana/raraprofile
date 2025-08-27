import { LuWashingMachine, LuFacebook, LuTwitter, LuInstagram } from 'react-icons/lu';

const Footer = () => {
    return (
        // INI PERBAIKANNYA: Menambahkan bg-laundry-gray-dark dan text-white
        <footer className='bg-laundry-gray-dark text-white px-6 md:px-12 lg:px-20 py-16'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {/* Kolom 1: Logo & Deskripsi */}
                    <div className='md:col-span-1'>
                        <div className="flex items-center gap-3 mb-4">
                            <LuWashingMachine className="text-4xl text-laundry-blue" />
                            <span className="font-extrabold text-2xl text-white">Rara Laundry</span>
                        </div>
                        <p className='text-laundry-gray-light'>Solusi laundry modern untuk kehidupan yang lebih praktis.</p>
                    </div>

                    {/* Kolom 2: Navigasi */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Navigasi</h4>
                        <ul className='space-y-2 text-laundry-gray-light'>
                            <li><a href="#services" className='hover:text-white'>Layanan</a></li>
                            <li><a href="#how-it-works" className='hover:text-white'>Cara Kerja</a></li>
                            <li><a href="#testimonials" className='hover:text-white'>Testimoni</a></li>
                            <li><a href="#contact" className='hover:text-white'>Kontak</a></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Legal */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Legal</h4>
                        <ul className='space-y-2 text-laundry-gray-light'>
                            <li><a href="#" className='hover:text-white'>Kebijakan Privasi</a></li>
                            <li><a href="#" className='hover:text-white'>Syarat & Ketentuan</a></li>
                        </ul>
                    </div>

                    {/* Kolom 4: Media Sosial */}
                    <div>
                        <h4 className='font-bold text-lg mb-4'>Ikuti Kami</h4>
                        <div className='flex gap-4'>
                            <a href="#" className='text-2xl hover:text-laundry-blue'><LuFacebook /></a>
                            <a href="#" className='text-2xl hover:text-laundry-blue'><LuTwitter /></a>
                            <a href="#" className='text-2xl hover:text-laundry-blue'><LuInstagram /></a>
                        </div>
                    </div>
                </div>
                
                {/* Copyright di bagian bawah */}
                <div className='border-t border-gray-700 mt-12 pt-8 text-center text-sm text-laundry-gray-light'>
                    <p>&copy; {new Date().getFullYear()} Rara Laundry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;