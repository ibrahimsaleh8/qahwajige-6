"use client";
import { motion } from "motion/react";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function HeroLinks({
  whatsApp,
}: {
  whatsApp?: string | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {whatsApp && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/${whatsApp.replace(/\+/g, "")}?text=`}
            className="inline-flex items-center gap-2 bg-main-color-dark hover:bg-main-color text-white border-2 border-main-color-dark px-6 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg">
            احجز الآن
            <ChevronLeft className="w-5 h-5" />
          </a>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, x: "-30px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}>
        <Link
          href="#contact"
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3.5 rounded-xl font-semibold text-base transition-all">
          تواصل معنا
        </Link>
      </motion.div>
    </div>
  );
}
