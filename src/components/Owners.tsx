import React from "react";
import "./Owners.css"; // Stillarni ulashni unutmang

const Owners = () => {
  return (
    <div className="relative min-h-screen bg-[#02060c] text-[#94a3b8] font-mono flex items-center justify-center px-5 overflow-hidden cyber-grid">
      {/* Yuqori chiziqli dekoratsiya (Tech header line) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent opacity-50"></div>

      {/* Burchaklardagi dekorativ kiber-elementlar */}
      <div className="absolute top-5 left-5 text-[10px] text-cyan-500/40 tracking-widest hidden sm:block">
        CORE_SYSTEM // V.2.0
      </div>
      <div className="absolute bottom-5 right-5 text-[10px] text-cyan-500/40 tracking-widest hidden sm:block">
        STATUS: ACTIVE
      </div>

      {/* Asosiy Karta */}
      <div className="relative z-10 max-w-xl w-full border border-cyan-500/20 rounded-xl p-8 sm:p-10 cyber-card cyber-glow">
        {/* Kartaning yuqori qismidagi kichik texnik belgi (Tag) */}
        <div className="absolute -top-3 left-6 bg-[#02060c] border border-cyan-500/40 text-cyan-400 text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-sm font-bold text-glow">
          INIT_MODULE
        </div>

        {/* Avatar qismi */}
        <div className="w-24 h-24 mx-auto border-2 border-cyan-500/40 rounded-none flex items-center justify-center text-4xl font-black text-cyan-400 bg-cyan-950/20 shadow-[inset_0_0_15px_rgba(0,242,254,0.2)] mb-6 text-glow relative">
          {/* Burchak chiziqchalari */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></span>
          Y
        </div>

        {/* Sarlavha */}
        <h1 className="text-4xl font-black tracking-[0.2em] text-white text-glow mb-2">
          OWNERS
        </h1>
        <div className="text-[11px] text-cyan-400/60 uppercase tracking-widest mb-6">
          System Developer Profile
        </div>

        {/* Muallif */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
          <span className="text-cyan-400">&gt;</span> Created by Yusuf
        </h2>

        {/* Ta'rif */}
        <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-cyan-500/30 pl-4 my-6 text-left">
          This project is not just a code.
          <br />
          It is a journey, passion and dedication.
        </p>

        {/* Iqtibos */}
        <p className="text-xs text-cyan-400/70 bg-cyan-500/5 border border-cyan-500/10 p-3 rounded italic">
          "I hope this project becomes better and inspires others."
        </p>

        {/* Texnologiyalar (Skills) */}
        <div className="mt-8 pt-6 border-t border-cyan-500/10">
          <div className="text-[10px] text-left text-gray-500 uppercase tracking-wider mb-3">
            // Stack Technologies:
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-left">
            <div className="p-2 bg-slate-900/40 border border-slate-800 flex items-center gap-2 hover:border-cyan-500/30 transition-colors">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>{" "}
              React
            </div>
            <div className="p-2 bg-slate-900/40 border border-slate-800 flex items-center gap-2 hover:border-cyan-500/30 transition-colors">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>{" "}
              TypeScript
            </div>
            <div className="p-2 bg-slate-900/40 border border-slate-800 flex items-center gap-2 hover:border-cyan-500/30 transition-colors">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>{" "}
              JavaScript
            </div>
            <div className="p-2 bg-slate-900/40 border border-slate-800 flex items-center gap-2 hover:border-cyan-500/30 transition-colors">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>{" "}
              Tailwind CSS
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-[10px] text-gray-600 tracking-wider uppercase">
          © 2026 Yusuf. All systems operational.
        </div>
      </div>
    </div>
  );
};

export default Owners;
