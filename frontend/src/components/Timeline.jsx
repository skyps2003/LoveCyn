import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Plane, Gift, MapPin } from 'lucide-react';

const milestones = [
    { date: '2024-04-16', title: 'Start', desc: 'El comienzo de nuestra historia.', icon: Heart },
    { date: '2024-05-16', title: '1 Mes', desc: 'Primer mes juntos.', icon: Calendar },
    { date: '2024-12-25', title: 'Navidad', desc: 'Primera navidad juntos.', icon: Gift },
    { date: '2025-02-14', title: 'San Valentín', desc: 'Día de los enamorados.', icon: Heart },
    { date: '2025-04-16', title: '1 Año', desc: 'Nuestro primer aniversario.', icon: Calendar },
    { date: '2025-09-09', title: 'Cusco Mágico', desc: 'Nuestro viaje inolvidable a Cusco (9-10 Sep).', icon: MapPin },
];

const Timeline = () => {
    return (
        <section className="py-20 px-4 max-w-5xl mx-auto relative">
            {/* Vertical Line: Left on mobile, Center on desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7e097e]/0 via-[#a332a1]/50 to-[#7e097e]/0 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
                {milestones.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }} // Reduced margin for mobile trigger
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row-reverse' : ''} relative`}
                        >
                            <div className="flex-1 w-full hidden md:block" />

                            {/* Icon: Absolute left on mobile, Relative center on desktop */}
                            <div className="absolute left-2 md:static z-10 w-12 h-12 rounded-full bg-[#7e097e] border-4 border-[#b646b3] flex items-center justify-center shadow-[0_0_20px_rgba(163,50,161,0.5)] shrink-0 md:mx-6 transform hover:scale-110 transition-transform duration-300">
                                <item.icon size={20} className="text-white" />
                            </div>

                            <div className={`flex-1 w-full pl-16 md:pl-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="bg-[#911d90]/10 backdrop-blur-md p-6 rounded-2xl hover:bg-[#a332a1]/20 transition-all duration-300 group border border-[#b646b3]/20 shadow-lg hover:shadow-[0_0_30px_rgba(182,70,179,0.2)]">
                                    <span className="text-[#c85bc4] text-sm font-mono tracking-widest uppercase">{item.date}</span>
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1 mb-2 group-hover:text-[#c85bc4] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Timeline;
