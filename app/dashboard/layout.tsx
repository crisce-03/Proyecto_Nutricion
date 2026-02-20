"use client"; // Necesario para la interactividad del menú móvil

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Para resaltar el link activo
import Footer from "@/components/ui/Footer"; 
import { 
  LayoutDashboard, 
  Utensils, 
  Dumbbell, 
  Trophy, 
  User, 
  Menu, 
  ShoppingCart, 
  Calendar,     
  Users,
  X 
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const sidebarItems = [
    { name: "Resumen", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
    { name: "Plan Nutricional", icon: <Utensils size={20} />, href: "/dashboard/nutricion" },
    { name: "Entrenamiento", icon: <Dumbbell size={20} />, href: "/dashboard/entrenamiento" },
    { name: "Lista de Compras", icon: <ShoppingCart size={20} />, href: "/dashboard/lista-compras" }, 
    { name: "Calendario", icon: <Calendar size={20} />, href: "/dashboard/calendario" }, 
    { name: "Mis Metas", icon: <Trophy size={20} />, href: "/dashboard/metas" },
    { name: "Comunidad", icon: <Users size={20} />, href: "/dashboard/comunidad" }, 
    { name: "Mi Perfil", icon: <User size={20} />, href: "/dashboard/perfil" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
      {/* Topbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
                {/* Botón Menú Móvil ACTIVO */}
                <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="lg:hidden text-slate-500 hover:text-teal-600 transition-colors p-1"
                >
                    <Menu />
                </button>
                <div className="font-bold text-xl text-teal-700 tracking-tight">
                    Nutri<span className="text-slate-800">Life</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/dashboard/notificaciones" className="p-2 text-slate-400 hover:text-teal-600 transition-colors relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </Link>

                <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-slate-800">Hector Garcia</p>
                    <p className="text-xs text-teal-600 font-medium bg-teal-50 px-2 py-0.5 rounded-full inline-block">Plan Premium</p>
                </div>
                <Link href="/dashboard/perfil" className="h-10 w-10 bg-gradient-to-tr from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/30 hover:scale-105 transition-transform">
                    HG
                </Link>
            </div>
        </div>
      </header>

      {/* OVERLAY MÓVIL (Fondo oscuro) */}
      {isMobileMenuOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR MÓVIL (Slide-in) */}
      <div className={`fixed top-0 left-0 bottom-0 w-3/4 max-w-xs bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 flex justify-between items-center border-b border-slate-100">
              <span className="font-bold text-xl text-teal-700">Menú</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X size={24} />
              </button>
          </div>
          <div className="p-4 overflow-y-auto h-full pb-20">
              {sidebarItems.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-4 mb-1 rounded-xl transition-all ${pathname === item.href ? 'bg-teal-50 text-teal-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                      {item.icon}
                      <span>{item.name}</span>
                  </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link href="/dashboard/suscripcion" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20">
                      Ver Plan Premium
                  </Link>
              </div>
          </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex flex-1 container mx-auto px-4 md:px-6 py-8 gap-8">
        
        {/* Sidebar Flotante (SOLO ESCRITORIO) */}
        <aside className="hidden lg:flex flex-col w-64 space-y-2 sticky top-24 h-fit">
            <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-4 mt-2">Menú Principal</p>
                <div className="space-y-1">
                    {sidebarItems.map((item, idx) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={idx} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive ? 'bg-teal-50 text-teal-700 font-bold' : 'text-slate-600 hover:bg-teal-50 hover:text-teal-700'}`}>
                                <span className={`group-hover:scale-110 transition-transform duration-300 ${isActive ? 'text-teal-600' : 'group-hover:text-teal-500'}`}>{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="bg-gradient-to-br from-[#042834] to-[#0a455a] rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform">
                <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-1">Plan Pro</h4>
                    <p className="text-slate-300 text-xs mb-4">Tienes acceso a todas las recetas premium.</p>
                    <Link href="/dashboard/suscripcion" className="block text-center w-full py-2 bg-teal-500 group-hover:bg-teal-400 text-white text-xs font-bold rounded-lg transition-colors">
                        Ver beneficios
                    </Link>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            </div>
        </aside>

        {/* Dynamic Content */}
        <main className="flex-1 w-full min-w-0">
            {children}
        </main>
      </div>

      {/* Footer Integrado */}
      <div className="mt-auto border-t border-slate-200 bg-white">
        <Footer theme="dark" />
      </div>
    </div>
  );
}