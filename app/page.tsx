import Link from "next/link";
import { ArrowRight, Leaf, Activity, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-200">
      {/* Navbar Simple */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-700">Nutri<span className="text-slate-800">Life</span></div>
          <div className="space-x-4">
            <Link href="/auth" className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all">Iniciar Sesión</Link>
            <Link href="/auth" className="px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/30 font-medium transition-all">Empezar Ahora</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-sm font-bold mb-6 tracking-wide uppercase">
            Desarrollado por CRG Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            Tu transformación comienza <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">en el plato.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Algoritmos inteligentes que diseñan tu dieta perfecta basada en tus metas y lo que tienes en tu nevera.
          </p>
          <div className="flex justify-center gap-4">
             <Link href="/auth" className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform">
                <span>Crear mi Plan</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      {/* Features Visuales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Leaf className="w-8 h-8 text-teal-500" />, title: "Nutrición Inteligente", desc: "Menús basados en tus ingredientes." },
              { icon: <Target className="w-8 h-8 text-rose-500" />, title: "Metas Claras", desc: "Seguimiento visual de peso y medidas." },
              { icon: <Activity className="w-8 h-8 text-blue-500" />, title: "Rutinas Híbridas", desc: "Ejercicios adaptados a tu energía diaria." },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
                <div className="mb-4 bg-white p-4 rounded-2xl w-fit shadow-sm">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}