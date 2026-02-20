import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLeft, Search, Book, CreditCard, User, MessageCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar Simple */}
      <Navbar />

      {/* Hero Search */}
      <section className="bg-[#042834] py-20 px-6 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white">¿Cómo podemos ayudarte hoy?</h1>
            <div className="relative">
                <Search className="absolute left-4 top-4 text-slate-400" />
                <input 
                    type="text" 
                    placeholder="Buscar artículos (ej. 'cancelar suscripción', 'cambiar dieta')..." 
                    className="w-full pl-12 pr-4 py-4 rounded-xl shadow-xl outline-none focus:ring-4 focus:ring-teal-500/30 transition-all text-slate-800"
                />
            </div>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-500/20 blur-3xl rounded-full"></div>
      </section>

      {/* Categorías */}
      <main className="container mx-auto px-6 py-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
                { title: "Primeros Pasos", icon: <Book size={24}/>, desc: "Guía rápida para configurar tu perfil." },
                { title: "Planes y Pagos", icon: <CreditCard size={24}/>, desc: "Gestiona tu suscripción Premium." },
                { title: "Mi Cuenta", icon: <User size={24}/>, desc: "Actualizar datos y seguridad." },
            ].map((cat, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-teal-900/10 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{cat.title}</h3>
                    <p className="text-slate-500 text-sm">{cat.desc}</p>
                </div>
            ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
                {[
                    "¿Cómo cambio mis objetivos nutricionales?",
                    "¿Puedo pausar mi suscripción si me voy de vacaciones?",
                    "¿Cómo descargo la lista de compras?",
                    "¿La app se conecta con Apple Health o Google Fit?"
                ].map((faq, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 flex justify-between items-center cursor-pointer hover:border-teal-400 transition-colors group">
                        <span className="font-medium text-slate-700 group-hover:text-teal-700">{faq}</span>
                        <ChevronRight size={18} className="text-slate-400 group-hover:text-teal-500"/>
                    </div>
                ))}
            </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-teal-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">¿No encuentras lo que buscas?</h3>
                <p className="text-teal-200">Nuestro equipo de soporte está disponible 24/7.</p>
            </div>
            <Link href="/contact" className="relative z-10 px-8 py-3 bg-white text-teal-900 font-bold rounded-xl hover:bg-teal-50 transition-colors flex items-center gap-2">
                <MessageCircle size={18}/> Contactar Soporte
            </Link>
            <div className="absolute right-0 top-0 w-64 h-64 bg-teal-500/20 blur-3xl rounded-full"></div>
        </div>
      </main>

      <Footer theme="light" />
    </div>
  );
}