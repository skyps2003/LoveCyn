import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MessageBoard = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/messages';

    const fetchMessages = async () => {
        try {
            const res = await axios.get(API_URL);
            setMessages(res.data);
        } catch (err) {
            console.error("Error fetching messages", err);
        }
    };

    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 10000); // Poll every 10s
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        try {
            await axios.post(API_URL, { content: input.trim() });
            setInput('');
            fetchMessages();
        } catch (err) {
            alert('Error sending message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 px-4 max-w-3xl mx-auto">
            <div className="bg-[#7e097e]/20 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-[#a332a1]/30 shadow-[0_0_60px_rgba(126,9,126,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c85bc4] to-transparent opacity-50" />

                {/* Decorative background blobs */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#911d90]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#b646b3]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="text-center mb-10 relative z-10">
                    <div className="inline-block p-4 rounded-full bg-[#911d90]/30 mb-6 ring-1 ring-[#c85bc4]/30 shadow-lg">
                        <MessageCircle size={36} className="text-[#c85bc4]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">Déjame un Mensaje</h2>
                    <p className="text-[#c85bc4] text-sm tracking-wide font-light">Se guardará por siempre en la nube ☁️</p>
                </div>

                <form onSubmit={handleSubmit} className="relative mb-12 z-10">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Escribe algo bonito para nosotros..."
                        className="w-full h-40 bg-black/30 rounded-2xl p-6 text-white text-lg placeholder-[#b646b3]/50 focus:outline-none focus:ring-2 focus:ring-[#c85bc4]/50 resize-none border border-[#a332a1]/20 transition-all focus:bg-black/50 shadow-inner"
                        maxLength={200}
                    />
                    <div className="absolute bottom-4 right-4 flex items-center gap-3">
                        <span className="text-xs text-[#a332a1] font-mono">{input.length}/200</span>
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="bg-gradient-to-r from-[#911d90] to-[#7e097e] hover:from-[#a332a1] hover:to-[#911d90] text-white p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95 shadow-lg shadow-[#7e097e]/40"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </form>

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar relative z-10">
                    <AnimatePresence>
                        {messages.length === 0 ? (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-[#b646b3]/60 italic py-12"
                            >
                                Aún no hay mensajes. ¡Sé el primero en escribir algo especial! ✨
                            </motion.p>
                        ) : (
                            messages.map((msg) => (
                                <motion.div
                                    key={msg._id}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    layout
                                    className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#c85bc4]/30 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <p className="text-gray-100 text-base leading-relaxed font-light">{msg.content}</p>
                                    <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-3">
                                        <div className="h-1 w-1 bg-[#c85bc4]/50 rounded-full" />
                                        <p className="text-xs text-[#b646b3] uppercase tracking-wider group-hover:text-[#c85bc4] transition-colors">
                                            {new Date(msg.date).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default MessageBoard;
