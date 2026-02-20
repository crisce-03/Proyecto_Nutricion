"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus, X, Clock, MapPin } from "lucide-react";

type Evento = {
  date: number; // Día del mes
  title: string;
  time: string;
  type: "comida" | "entreno" | "recordatorio";
};

export default function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  
  // Datos iniciales de ejemplo
  const [events, setEvents] = useState<Evento[]>([
    { date: 12, title: "Bowl de Pollo", time: "14:00", type: "comida" },
    { date: 12, title: "Leg Day", time: "18:00", type: "entreno" },
    { date: 15, title: "Cita Nutri", time: "10:00", type: "recordatorio" },
  ]);

  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  // Simulando Febrero 2026 (Empieza en Domingo, así que ajustamos visualmente para que empiece lunes)
  // Generamos 28 días
  const daysInMonth = Array.from({ length: 28 }, (_, i) => i + 1);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const handleAddEvent = () => {
    if (selectedDay && newEventTitle) {
      setEvents([...events, { date: selectedDay, title: newEventTitle, time: newEventTime || "Todo el día", type: "recordatorio" }]);
      setNewEventTitle("");
      setNewEventTime("");
      setIsModalOpen(false);
    }
  };

  const getEventsForDay = (day: number) => events.filter(e => e.date === day);

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-12">
      
      {/* Header */}
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-50 text-teal-600 rounded-xl"><CalendarIcon size={24} /></div>
            <div>
                <h1 className="text-xl font-bold text-slate-900">Febrero 2026</h1>
                <p className="text-sm text-slate-500">Recordatorios & Planificación</p>
            </div>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl">
            <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-600"><ChevronLeft size={20}/></button>
            <span className="px-4 text-sm font-bold text-slate-700">Hoy</span>
            <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-600"><ChevronRight size={20}/></button>
        </div>
      </div>

      {/* Grid del Calendario Visual */}
      <div className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm overflow-hidden">
        {/* Días Semana */}
        <div className="grid grid-cols-7 gap-2 mb-4 text-center">
            {days.map((day) => (
                <div key={day} className="text-xs font-bold text-slate-400 uppercase tracking-wider">{day}</div>
            ))}
        </div>

        {/* Días Mes */}
        <div className="grid grid-cols-7 gap-2 md:gap-4">
            {daysInMonth.map((day) => {
                const dayEvents = getEventsForDay(day);
                const isToday = day === 18; // Simulamos que hoy es 18

                return (
                    <div 
                        key={day} 
                        onClick={() => handleDayClick(day)}
                        className={`min-h-[80px] md:min-h-[120px] rounded-2xl border p-2 cursor-pointer transition-all hover:shadow-md relative group
                            ${isToday ? 'bg-teal-50 border-teal-200' : 'bg-white border-slate-100 hover:border-teal-300'}
                        `}
                    >
                        <span className={`text-sm font-bold ${isToday ? 'text-teal-700' : 'text-slate-700'}`}>{day}</span>
                        
                        {/* Botón flotante al hacer hover */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-6 w-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                                <Plus size={14} />
                            </div>
                        </div>

                        {/* Eventos Miniatura */}
                        <div className="mt-2 space-y-1">
                            {dayEvents.map((ev, i) => (
                                <div key={i} className={`text-[10px] px-2 py-1 rounded-md truncate font-medium
                                    ${ev.type === 'entreno' ? 'bg-orange-100 text-orange-700' : 
                                      ev.type === 'comida' ? 'bg-green-100 text-green-700' : 
                                      'bg-blue-100 text-blue-700'}
                                `}>
                                    {ev.title}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      {/* Modal para Añadir Evento */}
      {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
              <div className="bg-white rounded-[2rem] w-full max-w-md p-6 shadow-2xl scale-100">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-slate-900">Añadir el {selectedDay} de Febrero</h3>
                      <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500"><X size={20}/></button>
                  </div>

                  <div className="space-y-4">
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Título del recordatorio</label>
                          <input 
                            autoFocus
                            type="text" 
                            value={newEventTitle}
                            onChange={(e) => setNewEventTitle(e.target.value)}
                            placeholder="Ej. Comprar Vitaminas" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Hora (Opcional)</label>
                          <div className="relative">
                              <Clock className="absolute left-4 top-3.5 text-slate-400" size={18}/>
                              <input 
                                type="time" 
                                value={newEventTime}
                                onChange={(e) => setNewEventTime(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" 
                              />
                          </div>
                      </div>
                      <div className="flex gap-2 pt-4">
                          <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl">Cancelar</button>
                          <button onClick={handleAddEvent} className="flex-1 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 shadow-lg shadow-teal-600/20">Guardar</button>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
}