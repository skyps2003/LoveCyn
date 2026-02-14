import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Gallery = () => {
    const images = Array.from({ length: 10 }, (_, i) => i + 1);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-20 text-center relative z-20 overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#c85bc4] via-white to-[#b646b3]">
                Nuestros Momentos
            </h2>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full py-12"
            >
                {images.map((num) => (
                    <SwiperSlide
                        key={num}
                        className="!w-72 !h-96 bg-[#7e097e]/40 rounded-3xl overflow-hidden glass cursor-pointer border border-[#b646b3]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                        onClick={() => setSelectedImage(num)}
                    >
                        <img
                            src={`/assets/images/${num}.jpg`}
                            alt={`Memoria ${num}`}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = `https://via.placeholder.com/300x400/911d90/ffffff?text=Momentos`;
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#7e097e]/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-black/40 hover:bg-[#c85bc4] text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={`/assets/images/${selectedImage}.jpg`}
                                alt={`Memoria ${selectedImage} Full`}
                                className="max-w-full max-h-[85vh] object-contain"
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/600x800/911d90/ffffff?text=Momentos`;
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-16">
                <a
                    href="https://photos.app.goo.gl/XZub964o3BNGHwxc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#b646b3] to-[#911d90] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(182,70,179,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105"
                >
                    <span>📸 Ver Álbum Completo</span>
                </a>
            </div>
        </section>
    );
};

export default Gallery;
