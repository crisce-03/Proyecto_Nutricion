"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Droplets, Moon, Scale, Check, Plus, Minus, Loader2 } from "lucide-react";

export default function LogActivityPage() {
  const [activeTab, setActiveTab] = useState("agua"); // agua, sueno, peso
  
  // --- ESTADOS DE LOS DATOS ---
  const [waterAmount, setWaterAmount] = useState(0);
  const [sleepDuration, setSleepDuration] = useState("07:00"); // 7 horas por defecto
  const [weight, setWeight] = useState(78.5);
  
  // --- ESTADO DE GUARDADO ---
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Funciones lógicas
  const handleAddWater = (amount: number) => {
    setWaterAmount(prev => prev + amount);
    setIsSaved(false); // Resetear estado de guardado si editan
  };

  const handleWeightChange = (amount: number) => {
    setWeight(prev => Number((prev + amount).toFixed(1)));
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simular petición al backend
    setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);
        // Opcional: Resetear form o redirigir
        // setTimeout(() => setIsSaved(false), 3000); 
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto min-h-[80vh] flex flex-col justify-center animate-in fade-in duration-500">
      
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/metas" className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-500">
            <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Registrar Progreso</h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
        
        {/* Tabs de Navegación */}
        <div className="flex border-b border-slate-100">
            <button 
                onClick={() => { setActiveTab("agua"); setIsSaved(false); }} 
                className={`flex-1 py-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'agua' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500' : 'text-slate-500 hover:bg-slate-50'}`}
            >
                <Droplets size={18} /> Agua
            </button>
            <button 
                onClick={() => { setActiveTab("sueno"); setIsSaved(false); }} 
                className={`flex-1 py-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'sueno' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-500' : 'text-slate-500 hover:bg-slate-50'}`}
            >
                <Moon size={18} /> Sueño
            </button>
            <button 
                onClick={() => { setActiveTab("peso"); setIsSaved(false); }} 
                className={`flex-1 py-4 font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'peso' ? 'bg-teal-50 text-teal-600 border-b-2 border-teal-500' : 'text-slate-500 hover:bg-slate-50'}`}
            >
                <Scale size={18} /> Peso
            </button>
        </div>

        {/* Contenido del Formulario */}
        <div className="p-8 min-h-[400px] flex flex-col justify-between">
            
            {/* --- SECCIÓN AGUA --- */}
            {activeTab === "agua" && (
                <div className="text-center space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="w-24 h-24 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <Droplets size={48} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">Hidratación Actual</h2>
                        <p className="text-slate-400 text-sm">Meta diaria: 2,500 ml</p>
                    </div>
                    
                    <div className="relative max-w-xs mx-auto">
                        <div className="flex items-center justify-center gap-2">
                            <input 
                                type="number" 
                                value={waterAmount}
                                onChange={(e) => setWaterAmount(Number(e.target.value))}
                                className="w-40 text-center text-6xl font-bold text-slate-900 border-none outline-none focus:ring-0 bg-transparent p-0" 
                            />
                            <span className="text-xl text-slate-400 font-bold mt-4">ml</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <button 
                            onClick={() => handleAddWater(250)}
                            className="px-6 py-3 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 font-bold transition-all active:scale-95"
                        >
                            +250ml
                        </button>
                        <button 
                            onClick={() => handleAddWater(500)}
                            className="px-6 py-3 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 font-bold transition-all active:scale-95"
                        >
                            +500ml
                        </button>
                    </div>
                </div>
            )}

            {/* --- SECCIÓN SUEÑO --- */}
            {activeTab === "sueno" && (
                <div className="text-center space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <Moon size={48} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">Horas dormidas</h2>
                        <p className="text-slate-400 text-sm">¿Cuánto descansaste anoche?</p>
                    </div>
                    
                    <div className="flex justify-center items-center gap-4">
                        <input 
                            type="time" 
                            value={sleepDuration}
                            onChange={(e) => setSleepDuration(e.target.value)}
                            className="px-8 py-4 bg-slate-50 rounded-2xl text-4xl font-bold text-slate-800 outline-none focus:ring-4 focus:ring-indigo-100 border border-slate-200 transition-all cursor-pointer" 
                        />
                    </div>
                    <p className="text-sm text-slate-500 bg-slate-50 py-2 px-4 rounded-lg inline-block">
                        Calidad estimada: <span className="font-bold text-indigo-600">Buena</span>
                    </p>
                </div>
            )}

            {/* --- SECCIÓN PESO --- */}
            {activeTab === "peso" && (
                <div className="text-center space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <Scale size={48} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">Peso Actual</h2>
                        <p className="text-slate-400 text-sm">Último registro: 78.5kg (Ayer)</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-6">
                        <button 
                            onClick={() => handleWeightChange(-0.1)}
                            className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                        >
                            <Minus size={24} />
                        </button>
                        
                        <div className="relative w-40">
                            <input 
                                type="number" 
                                value={weight} 
                                step="0.1" 
                                onChange={(e) => setWeight(parseFloat(e.target.value))}
                                className="w-full text-center text-6xl font-bold text-slate-900 border-none outline-none focus:ring-0 bg-transparent p-0" 
                            />
                            <span className="absolute -right-4 bottom-2 text-xl text-slate-400 font-bold">kg</span>
                        </div>

                        <button 
                            onClick={() => handleWeightChange(0.1)}
                            className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                        >
                            <Plus size={24} />
                        </button>
                    </div>
                </div>
            )}

            {/* --- BOTÓN CONFIRMAR --- */}
            <div className="mt-8">
                <button 
                    onClick={handleSave}
                    disabled={isSaving || isSaved}
                    className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg
                        ${isSaved 
                            ? "bg-green-500 text-white shadow-green-500/30 cursor-default" 
                            : isSaving 
                                ? "bg-slate-700 text-slate-300 cursor-wait" 
                                : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20 active:scale-95 hover:-translate-y-1"
                        }
                    `}
                >
                    {isSaving ? (
                        <>
                            <Loader2 className="animate-spin" /> Guardando...
                        </>
                    ) : isSaved ? (
                        <>
                            <Check /> ¡Guardado con éxito!
                        </>
                    ) : (
                        <>
                            <Check /> Confirmar Registro
                        </>
                    )}
                </button>
            </div>

        </div>
      </div>
    </div>
  );
}