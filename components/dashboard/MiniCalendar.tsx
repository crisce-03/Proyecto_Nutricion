"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MiniCalendar() {
  const [selectedDate, setSelectedDate] = useState(18); // Simulamos hoy es 18

  // Generamos una semana simulada
  const weekDays = [
    { day: "Lun", date: 16 },
    { day: "Mar", date: 17 },
    { day: "Mié", date: 18 },
    { day: "Jue", date: 19 },
    { day: "Vie", date: 20 },
    { day: "Sáb", date: 21 },
    { day: "Dom", date: 22 },
  ];

  return (
    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-4 px-2">
        <span className="font-bold text-slate-800">Febrero 2026</span>
        <div className="flex gap-2">
            <button className="p-1 hover:bg-slate-100 rounded-full text-slate-400"><ChevronLeft size={18}/></button>
            <button className="p-1 hover:bg-slate-100 rounded-full text-slate-400"><ChevronRight size={18}/></button>
        </div>
      </div>
      <div className="flex justify-between gap-1">
        {weekDays.map((d, i) => {
            const isSelected = selectedDate === d.date;
            return (
                <button 
                    key={i} 
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex flex-col items-center justify-center w-10 h-14 rounded-2xl transition-all ${
                        isSelected 
                        ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30 scale-110' 
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                >
                    <span className="text-[10px] font-bold uppercase mb-1 opacity-80">{d.day}</span>
                    <span className="text-lg font-bold">{d.date}</span>
                </button>
            )
        })}
      </div>
    </div>
  );
}