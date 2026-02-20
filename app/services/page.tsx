import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLeft, Monitor, Smartphone, Database, Lock, Globe, LineChart } from "lucide-react";

export default function ServicesPage() {
    
  const services = [
    { title: "Desarrollo Web", desc: "Sitios web de alto rendimiento con Next.js.", icon: <Globe size={24}/> },
    { title: "Aplicaciones Móviles", desc: "iOS y Android con React Native.", icon: <Smartphone size={24}/> },
    { title: "Sistemas a Medida", desc: "ERPs y Dashboards administrativos.", icon: <Monitor size={24}/> },
    { title: "Base de Datos", desc: "Arquitectura SQL y NoSQL optimizada.", icon: <Database size={24}/> },
    { title: "Ciberseguridad", desc: "Auditoría y protección de sistemas.", icon: <Lock size={24}/> },
    { title: "Consultoría IT", desc: "Digitalización de procesos empresariales.", icon: <LineChart size={24}/> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="p-6">
        <div className="container mx-auto">
             <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors font-medium">
                <ArrowLeft size={20}/> Volver al Inicio
             </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">Soluciones Integrales</h1>
            <p className="text-slate-500 max-w-xl mx-auto">Cubrimos todo el ciclo de vida del desarrollo de software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
                <div key={idx} className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
                    <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </main>

      <div className="mt-20">
        <Footer theme="light" />
      </div>
    </div>
  );
}