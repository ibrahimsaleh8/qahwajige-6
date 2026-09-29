import { WhyUsSectionData } from "@/lib/responseType";
import WhyUsImage from "./AnimatedComponents/WhyUsImage";
import WhyUsIcon from "./WhyUsIcon";

export function WhyUsSection({
  description,
  features,
  label,
  title,
}: WhyUsSectionData) {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 bg-main-color rounded-2xl  gap-12 lg:gap-16 items-center">
          {/* Content - RTL: right side, teal background block */}
          <div className="p-8 lg:p-10 text-white">
            <p className="text-white mb-5 bg-main-color w-fit px-5 py-3 rounded-full text-base md:text-lg max-w-2xl">
              {label}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-white text-base md:text-lg leading-relaxed mb-8">
                {description}
              </p>
            )}
            <ul className="space-y-5">
              {features &&
                features.map((feature) => {
                  return (
                    <li key={feature.title} className="flex items-start gap-4">
                      <WhyUsIcon icon={feature.icon} />
                      <div>
                        <p className="font-bold text-white mb-0.5">
                          {feature.title}
                        </p>
                        {feature.description && (
                          <p className="text-white/96 text-sm">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Image - RTL: left side */}
          <WhyUsImage />
        </div>
      </div>
    </section>
  );
}
