import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const reasons = [
    "Tu sonrisa ilumina mis días más oscuros.",
    "Me inspiras a ser una mejor persona cada día.",
    "Amo cómo me haces sentir en paz.",
    "Eres mi compañera de aventuras favorita.",
    "Tu risa es mi melodía preferida.",
    "Admiro tu fuerza y determinación.",
    "Me encanta cómo me cuidas.",
    "Eres el sueño que no quiero despertar.",
    "Simplemente, eres perfecta para mí."
];

const LoveMessages = () => {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c85bc4] via-white to-[#b646b3] mb-4">
                    Razones por las que te amo
                </h2>
                <div className="h-1 w-24 bg-[#a332a1] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {reasons.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#7e097e]/20 backdrop-blur-xl border border-[#a332a1]/30 p-8 rounded-[2rem] relative group hover:bg-[#911d90]/20 transition-all shadow-[0_0_30px_rgba(126,9,126,0.15)] hover:shadow-[#c85bc4]/20 hover:-translate-y-2"
                    >
                        <Heart
                            className="absolute top-4 right-4 text-[#a332a1]/20 group-hover:text-[#c85bc4]/40 transition-colors"
                            size={40}
                        />
                        <p className="text-lg text-white/90 font-light leading-relaxed italic">
                            "{text}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LoveMessages;
