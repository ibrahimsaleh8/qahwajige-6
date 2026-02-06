import { HeroSectionData } from "@/lib/responseType";
import Image from "next/image";
import HeroImage from "@/public/images/wide.webp";
import HeroLinks from "./AnimatedComponents/HeroLinks";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
}: HeroSectionData) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
alt="قهوجيين الرياض - خدمات الضيافة العربية الفاخرة في الرياض"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
      </div>

      {/* Content over image - centered */}
      <div className="relative z-10 container mx-auto px-4 py-28 md:py-32">
        <div className=" mx-auto text-center flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
            {headline}
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed drop-shadow-sm">
            {subheadline}
          </p>
          <HeroLinks whatsApp={whatsApp} />
        </div>
      </div>
    </section>
  );
}
