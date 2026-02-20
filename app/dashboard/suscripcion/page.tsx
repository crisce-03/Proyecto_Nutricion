import { Check, Star, Shield, Zap } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      
      <div className="text-center max-w-2xl mx-auto pt-8">
         <span className="text-teal-600 font-bold uppercase tracking-wider text-sm bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Invierte en ti</span>
         <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">Elige el plan que transformará tu vida</h1>
         <p className="text-slate-500 text-lg">Desbloquea recetas exclusivas, rutinas avanzadas y análisis detallado de tu progreso con NutriLife Pro.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 items-center">
        
        {/* Plan Básico */}
        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all order-2 md:order-1">
            <h3 className="text-xl font-bold text-slate-900">Gratuito</h3>
            <div className="my-4">
                <span className="text-4xl font-bold text-slate-900">$0</span>
                <span className="text-slate-500">/mes</span>
            </div>
            <p className="text-slate-500 text-sm mb-6">Para empezar a cuidarte sin presiones.</p>
            <button className="w-full py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors">Plan Actual</button>
            <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-600"><Check size={16} className="text-teal-500"/> Menú básico semanal</li>
                <li className="flex items-center gap-3 text-sm text-slate-600"><Check size={16} className="text-teal-500"/> 3 Rutinas de ejercicio</li>
                <li className="flex items-center gap-3 text-sm text-slate-600"><Check size={16} className="text-teal-500"/> Registro de peso</li>
            </ul>
        </div>

        {/* Plan Pro (Destacado) */}
        <div className="p-8 bg-[#042834] rounded-[2.5rem] text-white shadow-2xl relative order-1 md:order-2 transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-400 to-emerald-400 text-[#042834] px-4 py-1 rounded-full text-sm font-black uppercase tracking-wide shadow-lg">
                Más Popular
            </div>
            <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white">NutriLife Pro</h3>
                <Star className="text-yellow-400 fill-yellow-400" />
            </div>
            <div className="my-6">
                <span className="text-5xl font-bold text-white">$9.99</span>
                <span className="text-slate-400">/mes</span>
            </div>
            <p className="text-slate-300 text-sm mb-8">La experiencia completa para resultados reales.</p>
            <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all hover:scale-105">
                Obtener Pro Ahora
            </button>
            <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium"><div className="p-1 bg-white/10 rounded-full"><Check size={12} className="text-teal-300"/></div> Recetas ilimitadas & Smart Kitchen</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="p-1 bg-white/10 rounded-full"><Check size={12} className="text-teal-300"/></div> Rutinas personalizadas por IA</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="p-1 bg-white/10 rounded-full"><Check size={12} className="text-teal-300"/></div> Exportar lista de compras</li>
                <li className="flex items-center gap-3 text-sm font-medium"><div className="p-1 bg-white/10 rounded-full"><Check size={12} className="text-teal-300"/></div> Soporte prioritario</li>
            </ul>
        </div>

        {/* Plan Anual */}
        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all order-3">
            <h3 className="text-xl font-bold text-slate-900">Anual</h3>
            <div className="my-4">
                <span className="text-4xl font-bold text-slate-900">$89</span>
                <span className="text-slate-500">/año</span>
            </div>
            <p className="text-slate-500 text-sm mb-6">Ahorra 2 meses pagando anual.</p>
            <button className="w-full py-3 bg-teal-50 text-teal-700 font-bold rounded-xl hover:bg-teal-100 transition-colors">Elegir Anual</button>
            <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-600"><Check size={16} className="text-teal-500"/> Todo lo del Plan Pro</li>
                <li className="flex items-center gap-3 text-sm text-slate-600"><Check size={16} className="text-teal-500"/> Badge de Miembro Fundador</li>
                <li className="flex items-center gap-3 text-sm text-slate-600"><Check size={16} className="text-teal-500"/> Acceso anticipado a funciones</li>
            </ul>
        </div>

      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 text-slate-400 grayscale opacity-70">
         <div className="flex items-center gap-2 font-bold"><Shield /> Pago Seguro SSL</div>
         <div className="flex items-center gap-2 font-bold"><Zap /> Cancelación Inmediata</div>
         <div className="flex items-center gap-2 font-bold"><Star /> Garantía de 7 días</div>
      </div>
    </div>
  );
}