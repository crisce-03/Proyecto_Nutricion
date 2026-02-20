import { Bell, Check, Clock, Star, AlertCircle, Trash2 } from "lucide-react";

export default function NotificationsPage() {
  
  const notifications = [
    { type: "success", title: "¡Meta Alcanzada!", msg: "Has completado 7 días seguidos registrando tus comidas.", time: "Hace 2 horas", read: false },
    { type: "info", title: "Nueva Receta Disponible", msg: "Hemos agregado 'Salmón al Horno' a tu plan semanal.", time: "Hace 5 horas", read: false },
    { type: "alert", title: "Recordatorio de Agua", msg: "Llevas 4 horas sin registrar consumo de agua. ¡Hidrátate!", time: "Hace 1 día", read: true },
    { type: "promo", title: "Descuento en Suplementos", msg: "Usa el código NUTRILIFE20 en nuestra tienda asociada.", time: "Hace 2 días", read: true },
  ];

  const getIcon = (type: string) => {
      switch(type) {
          case "success": return <Star size={20} className="text-yellow-600"/>;
          case "alert": return <AlertCircle size={20} className="text-red-600"/>;
          case "promo": return <Check size={20} className="text-teal-600"/>;
          default: return <Bell size={20} className="text-blue-600"/>;
      }
  };

  const getBg = (type: string) => {
      switch(type) {
          case "success": return "bg-yellow-100";
          case "alert": return "bg-red-100";
          case "promo": return "bg-teal-100";
          default: return "bg-blue-100";
      }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Notificaciones</h1>
            <p className="text-slate-500">Mantente al día con tu progreso y novedades.</p>
        </div>
        <button className="text-sm font-bold text-slate-500 hover:text-teal-600 flex items-center gap-1">
            <Check size={16} /> Marcar todo leído
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
         {notifications.map((notif, i) => (
             <div key={i} className={`p-6 border-b border-slate-50 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer group ${notif.read ? 'opacity-70' : 'bg-white'}`}>
                 <div className={`h-12 w-12 rounded-2xl flex-shrink-0 flex items-center justify-center ${getBg(notif.type)}`}>
                     {getIcon(notif.type)}
                 </div>
                 <div className="flex-1">
                     <div className="flex justify-between items-start">
                         <h4 className={`font-bold text-slate-800 mb-1 ${!notif.read && 'text-teal-800'}`}>
                             {notif.title} {!notif.read && <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-2 align-middle"></span>}
                         </h4>
                         <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                             <Clock size={12}/> {notif.time}
                         </span>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">{notif.msg}</p>
                 </div>
                 <button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all self-center p-2">
                     <Trash2 size={18} />
                 </button>
             </div>
         ))}
         <div className="p-4 text-center">
             <button className="text-teal-600 font-bold text-sm hover:underline">Ver notificaciones antiguas</button>
         </div>
      </div>
    </div>
  );
}