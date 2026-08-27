"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const phoneNumber = "917297881725";

    const message = encodeURIComponent(
        "Hello, I would like to know more about Inch N Space."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="group fixed bottom-6 right-6 z-[999] flex items-center gap-3"
        >
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-[72px] translate-x-3 whitespace-nowrap border border-[#e9c176]/20 bg-[#18120d] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#eee0d6] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Chat With Us
            </span>

            {/* Floating Button */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#e9c176]/40 bg-[#18120d] text-[#e9c176] shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#e9c176] group-hover:bg-[#e9c176] group-hover:text-[#18120d]">
                {/* Pulse */}
                <span className="absolute inset-0 rounded-full border border-[#e9c176]/40 opacity-20 animate-ping" />

                <FaWhatsapp className="relative z-10 text-[28px]" />
            </div>
        </a>
    );
}