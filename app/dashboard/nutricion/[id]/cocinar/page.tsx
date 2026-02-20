"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight, ChevronLeft, Clock, CheckCircle2 } from "lucide-react";

export default function CookingModePage() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { title: "Preparar Ingredientes", desc: "Lava la quinoa bajo el grifo. Corta el pollo en cubos de 2cm. Pica los vegetales.", time: "5 min" },
    { title: "Cocinar Quinoa", desc: "En una olla mediana, pon la quinoa con 1 taza de agua y una pizca de sal. Hierve por 15 min.", time: "15 min" },
    { title: "Dorar Pollo", desc: "Calienta el sartén con aceite. Agrega el pollo, salpimienta y cocina hasta que esté dorado.", time: "8 min" },
    { title: "Emplatar", desc: "Sirve la base de quinoa, agrega el pollo y decora con aguacate y tomates cherry.", time: "2 min" }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      
      {/* Topbar Flotante */}
      <div className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
            <Link href="/dashboard/nutricion/1" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <X size={24} />
            </Link>
            <div className="h-2 w-32 md:w-64 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-sm font-bold text-slate-400">Paso {currentStep + 1} de {steps.length}</span>
        </div>
        <div className="flex items-center gap-2 bg-teal-500/20 px-4 py-2 rounded-full text-teal-300 font-bold text-sm animate-pulse">
            <Clock size={16} /> {steps[currentStep].time}
        </div>
      </div>

      {/* Contenido Central */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto w-full">
        
        {/* Imagen del Paso (Placeholder dinámico) */}
        <div className="w-full h-64 md:h-96 bg-slate-800 rounded-[2rem] mb-8 relative overflow-hidden shadow-2xl shadow-black/50 border border-slate-700">
             <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-bold text-xl">
                Video / GIF del Paso {currentStep + 1}
             </div>
             {/* Simulación de video */}
             <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-xs font-bold">Reproduciendo...</div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">{steps[currentStep].title}</h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
            {steps[currentStep].desc}
        </p>

      </div>

      {/* Bottom Controls */}
      <div className="p-6 md:p-10 bg-slate-800/50 backdrop-blur-lg border-t border-white/5 flex justify-between items-center">
        <button 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-300 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
            <ChevronLeft /> Anterior
        </button>

        {currentStep < steps.length - 1 ? (
            <button 
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                className="flex items-center gap-3 px-10 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-500/20 hover:scale-105 transition-all"
            >
                Siguiente Paso <ChevronRight />
            </button>
        ) : (
            <Link 
                href="/dashboard/nutricion"
                className="flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-400 text-white rounded-2xl font-bold text-lg shadow-lg shadow-green-500/20 hover:scale-105 transition-all"
            >
                <CheckCircle2 /> ¡Terminar Cocinado!
            </Link>
        )}
      </div>

    </div>
  );
}