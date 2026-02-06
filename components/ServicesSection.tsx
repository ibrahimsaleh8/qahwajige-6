import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, RefreshCw, Heart, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users: RefreshCw,
  Heart,
  Building2: Coffee,
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-white flex mb-5 bg-main-color w-fit px-5 py-3 rounded-full text-base md:text-lg max-w-2xl mx-auto">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-color-dark mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {items &&
            items.map((card) => {
              const IconComponent =
                iconMap[card.icon as keyof typeof iconMap] || Coffee;
              return (
                <div
                  key={card.title}
                  className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-main-color/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-main-color">
                    {<IconComponent className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
