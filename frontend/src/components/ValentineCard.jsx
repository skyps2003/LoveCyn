import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const ValentineCard = ({ onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(onOpen, 800);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary overflow-hidden">
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5, rotate: 10 }}
                        transition={{ duration: 0.8 }}
                        className="relative cursor-pointer"
                        onClick={handleOpen}
                    >
                        {/* PASTEL AESTHETIC ENVELOPE - WITH SOFT SHADOWS */}
                        <div className="relative w-[320px] h-[220px] drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                            {/* Base */}
                            <div className="absolute inset-0 bg-accent-primary rounded-lg border-2 border-white/80 shadow-inner" />

                            {/* Flap Design */}
                            <div className="absolute top-0 left-0 w-full h-full">
                                <svg viewBox="0 0 320 220" className="w-full h-full fill-none stroke-white/80 stroke-[3]">
                                    <path d="M0 0 L160 110 L320 0" />
                                </svg>
                            </div>

                            {/* Seal - Heart */}
                            <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-14 h-14 bg-accent-secondary rounded-full flex items-center justify-center border-4 border-white shadow-md">
                                <Heart className="text-white w-7 h-7" fill="currentColor" />
                            </div>

                            {/* Text hint */}
                            <div className="absolute -bottom-14 left-0 w-full text-center">
                                <span className="text-text-primary font-poppins text-lg tracking-widest uppercase font-medium drop-shadow-sm">
                                    Para Cynthia
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ValentineCard;
