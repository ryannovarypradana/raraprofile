import { LuWashingMachine, LuFacebook, LuTwitter, LuInstagram } from 'react-icons/lu';

const Footer = () => {
    return (
        <footer className='section-container bg-laundry-gray-dark text-white'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='md:col-span-1'>
                    <div className="flex items-center gap-3 mb-4">
                        <LuWashingMachine className="text-4xl text-laundry-blue" />
                        <span className="font-extrabold text-2xl text-white">PristineClean</span>
                    </div>
                    <p className='text-laundry-gray-light'>Solusi laundry modern untuk kehidupan yang lebih praktis.</p>
                </div>

                <div>
                    <h4 className='font-bold text-lg mb-4'>Navigasi</h4>
                    <ul className='space-y-2 text-laundry-gray-light'>
                        <li><a href="#services" className='hover:text-white'>Layanan</a></li>
                        <li><a href="#how-it-works" className='hover:text-white'>Cara Kerja</a></li>
                        <li><a href="#testimonials" className='hover:text-white'>Testimoni</a></li>
                        <li><a href="#contact" className='hover:text-white'>Kontak</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold text-lg mb-4'>Legal</h4>
                    <ul className='space-y-2 text-laundry-gray-light'>
                        <li><a href="#" className='hover:text-white'>Kebijakan Privasi</a></li>
                        <li><a href="#" className='hover:text-white'>Syarat & Ketentuan</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold text-lg mb-4'>Ikuti Kami</h4>
                    <div className='flex gap-4'>
                        <a href="#" className='text-2xl hover:text-laundry-blue'><LuFacebook /></a>
                        <a href="#" className='text-2xl hover:text-laundry-blue'><LuTwitter /></a>
                        <a href="#" className='text-2xl hover:text-laundry-blue'><LuInstagram /></a>
                    </div>
                </div>
            </div>
            <div className='border-t border-laundry-gray mt-8 pt-6 text-center text-sm text-laundry-gray-light'>
                <p>&copy; {new Date().getFullYear()} PristineClean. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;