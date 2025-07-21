"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    // Ganti dengan nomor WhatsApp Anda (gunakan format internasional tanpa '+' atau '0')
    const phoneNumber = "6281234567890";
    const message = "Halo, saya tertarik dengan layanan laundry Anda.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.1 }}
        >
            <FaWhatsapp className="text-4xl" />
        </motion.a>
    );
};

export default FloatingWhatsApp;