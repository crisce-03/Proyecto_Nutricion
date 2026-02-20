"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Pause, Play, SkipForward, Volume2, X, RefreshCw } from "lucide-react";

export default function WorkoutPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [timer, setTimer] = useState(45); // Segundos por ejercicio

  // Simulación simple del timer visual
  useEffect(() => {
    let interval: any;
    if (isPlaying && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col relative overflow-hidden">
        
      {/* Fondo Video Loop */}
      <div className="absolute inset-0 opacity-20 z-0">
         {/* Aquí iría un <video> real en background */}
         <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>
      
      {/* Header Overlay */}
      <div className="relative z-10 p-6 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
         <div>
            <h2 className="text-2xl font-bold">Sentadillas con Salto</h2>
            <p className="text-teal-400 font-bold uppercase tracking-wider text-sm">Serie 2 de 4</p>
         </div>
         <Link href="/dashboard/entrenamiento" className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-red-500/80 transition-colors">
            <X size={20} />
         </Link>
      </div>

      {/* Main Visual */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
         
         {/* Círculo del Timer */}
         <div className="w-64 h-64 rounded-full border-8 border-slate-700 flex items-center justify-center relative shadow-2xl">
             <div className="absolute inset-0 rounded-full border-8 border-teal-500 border-t-transparent animate-spin-slow" style={{animationDuration: '45s'}}></div>
             <div className="text-center">
                 <div className="text-8xl font-black font-mono tracking-tighter">{timer}</div>
                 <div className="text-slate-400 font-bold uppercase text-sm mt-2">Segundos</div>
             </div>
         </div>

         {/* Next Exercise Preview */}
         <div className="mt-12 bg-black/40 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 border border-white/10 max-w-sm w-full mx-6">
             <div className="h-16 w-16 bg-slate-700 rounded-lg overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=200')] bg-cover"></div>
             </div>
             <div>
                 <p className="text-xs text-slate-400 uppercase">Siguiente:</p>
                 <p className="font-bold">Burpees Explosivos</p>
             </div>
             <button className="ml-auto p-2 hover:text-teal-400"><SkipForward /></button>
         </div>
      </div>

      {/* Controls Footer */}
      <div className="relative z-10 p-8 pb-12 bg-gradient-to-t from-black via-black/90 to-transparent flex justify-between items-center">
          <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-slate-300">
             <RefreshCw size={24} />
          </button>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 rounded-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.4)] hover:scale-105 transition-all"
          >
             {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1"/>}
          </button>

          <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-slate-300">
             <Volume2 size={24} />
          </button>
      </div>

    </div>
  );
}