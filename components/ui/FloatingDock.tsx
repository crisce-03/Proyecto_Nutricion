"use client";
import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Definimos la función 'cn' aquí mismo para que no te de error
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FloatingDock = ({ items, mobileClassName }: any) => {
  return (
    <div className={cn("flex gap-4 items-center bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-xl", mobileClassName)}>
      {items.map((item: any, idx: number) => (
        <Link 
          key={idx} 
          href={item.href}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-600/20 hover:bg-teal-500 hover:scale-110 transition-all duration-300 text-teal-600 dark:text-teal-300"
        >
          <div className="h-5 w-5">{item.icon}</div>
        </Link>
      ))}
    </div>
  );
};