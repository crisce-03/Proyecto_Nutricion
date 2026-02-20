import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLeft, Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar Minimalista para volver */}
      <nav className="p-6">
        <div className="container mx-auto">
             <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors font-medium">
                <ArrowLeft size={20}/> Volver al Inicio
             </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-6 bg-[#042834] text-white rounded-b-[3rem] shadow-xl relative overflow-hidden">
             <div className="container mx-auto text-center relative z-10">
                <h1 className="text-5xl font-bold mb-6">Innovación con Propósito</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    En <span className="text-teal-400 font-bold">CRG Solutions</span>, no solo escribimos código. Construimos el futuro digital de las empresas en El Salvador y el mundo.
                </p>
             </div>
             {/* Decoración */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </section>

        {/* Misión / Visión Grid */}
        <section className="py-20 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-white rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Rocket size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">Misión</h3>
                    <p className="text-slate-600">Potenciar negocios mediante soluciones de software escalables, seguras y de alto impacto visual.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Target size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">Visión</h3>
                    <p className="text-slate-600">Ser referentes tecnológicos en la región, conocidos por nuestra excelencia en diseño UX/UI y arquitectura.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">Valores</h3>
                    <p className="text-slate-600">Transparencia, innovación constante y compromiso absoluto con la calidad del producto final.</p>
                </div>
            </div>
        </section>
      </main>

      {/* Footer Propio */}
      <Footer theme="dark" />
    </div>
  );
}