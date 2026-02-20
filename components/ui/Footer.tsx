import {
  Globe,
  Instagram,
  Linkedin,
  Mail,
  FileText,
  Shield,
  HelpCircle,
  Scale,
} from "lucide-react";

import React from "react";
// CAMBIO OBLIGATORIO: Next.js usa 'next/link', no 'react-router-dom'
import Link from "next/link"; 
import { FloatingDock } from "@/components/ui/FloatingDock"; // Asegúrate que la ruta coincida con tu archivo
import {
  IconBrandGithub,
} from "@tabler/icons-react";

type FooterProps = {
  theme?: "light" | "dark";
  logoLight?: string; 
  logoDark?: string; 
};

export default function Footer({
  theme = "dark",
  logoLight = "/monedas/logo_claro.png",
  logoDark = "/monedas/logo_oscuro.png",
}: FooterProps) {
  const logoToShow = theme === "dark" ? logoLight : logoDark;

  const links = [
    {
      title: "Sitio Web CRG Solutions",
      icon: (
        <Globe className="h-full w-full text-teal-600 dark:text-neutral-300" />
      ),
      href: "https://crgsolutions.com",
    },
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-teal-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <Linkedin className="h-full w-full text-teal-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Email",
      icon: (
        <Mail className="h-full w-full text-teal-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-teal-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <footer
      aria-label="Footer CriptoSV"
      className={
        theme === "dark"
          ? "bg-[#042834] text-slate-100"
          : "bg-[#f7f9fa] text-slate-800"
      }
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + short */}
          <div className="space-y-4">
            <img
              src={logoToShow}
              alt="CRG Solutions - desarrollado por"
              className="w-full px-24 sm:px-48 md:px-12 lg:px-20 h-auto"
              loading="lazy"
            />
            <p
              className={
                theme === "dark" ? "text-slate-200/90 text-center" : "text-slate-600 text-center"
              }
            >
              Desarrollado por{" "}
              <strong
                className={theme === "dark" ? "text-teal-300 text-center" : "text-teal-600 text-center"}
              >
                CRG Solutions
              </strong>
              . Soluciones de software a medida para tu negocio.
            </p>

            <div className="flex items-center justify-center w-full ">
              <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
              />
            </div>
          </div>

          {/* Links rápidos */}
          <div className="flex items-center flex-col">
            <h4
              className={
                theme === "dark"
                  ? "text-teal-300 mb-3 font-semibold"
                  : "text-teal-600 mb-3 font-semibold"
              }
            >
              Enlaces rápidos
            </h4>
            <ul
              className={
                theme === "dark"
                  ? "text-slate-200/90 space-y-2"
                  : "text-slate-700 space-y-2"
              }
            >
              <li>
                <a href="/" className="hover:underline hover:text-teal-200">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-teal-200"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:underline hover:text-teal-200"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-teal-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos / Legal */}
          <div className="flex items-center flex-col">
            <h4
              className={
                theme === "dark"
                  ? "text-teal-300 mb-3 font-semibold"
                  : "text-teal-600 mb-3 font-semibold"
              }
            >
              Recursos & Legal
            </h4>
            <ul
              className={
                theme === "dark"
                  ? "text-slate-200/90 space-y-2"
                  : "text-slate-700 space-y-2"
              }
            >
              <li className="flex items-center gap-2">
                <FileText
                  size={16}
                  className={
                    theme === "dark" ? "text-slate-200/70" : "text-slate-600"
                  }
                />
                <a href="/terminos" className="hover:underline">
                  Términos de uso
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Shield
                  size={16}
                  className={
                    theme === "dark" ? "text-slate-200/70" : "text-slate-600"
                  }
                />
                {/* CAMBIO: 'to' por 'href' para Next.js */}
                <Link href="/politica-privacidad" className="hover:underline">
                  Política de privacidad
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HelpCircle
                  size={16}
                  className={
                    theme === "dark" ? "text-slate-200/70" : "text-slate-600"
                  }
                />
                 {/* CAMBIO: 'to' por 'href' para Next.js */}
                <Link href="/centroayuda" className="hover:underline">
                  Centro de ayuda
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Scale
                  size={16}
                  className={
                    theme === "dark" ? "text-slate-200/70" : "text-slate-600"
                  }
                />
                <a href="/legal" className="hover:underline">
                  Aviso legal
                </a>
              </li>
            </ul> 

            <div
              className="pt-4 mt-4 border-t"
              style={{
                borderColor:
                  theme === "dark"
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(0,0,0,0.06)",
              }}
            >
              <p
                className={
                  theme === "dark"
                    ? "text-slate-300 text-sm"
                    : "text-slate-600 text-sm"
                }
              >
                Contacto:
              </p>
              <a
                href="mailto:info@crgsolutions.com"
                className={
                  theme === "dark"
                    ? "text-teal-200 hover:text-white"
                    : "text-teal-600 hover:text-teal-800"
                }
              >
                crgsolutions2025@outlook.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="mt-8 pt-6 border-t"
          style={{
            borderColor:
              theme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              className={
                theme === "dark"
                  ? "text-slate-300 text-sm"
                  : "text-slate-600 text-sm"
              }
            >
              © {new Date().getFullYear()} CRG Solutions. Todos los derechos
              reservados.
            </p>
            <p
              className={
                theme === "dark"
                  ? "text-slate-400 text-xs"
                  : "text-slate-500 text-xs"
              }
            >
              Hecho con por CRG Solutions —{" "}
              <span
                className={theme === "dark" ? "text-teal-200" : "text-teal-600"}
              >
                Desarrollo de software a medida
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}