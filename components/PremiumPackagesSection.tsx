"use client";
import { motion } from "motion/react";
import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--main-background, #ffffff)" }}>
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--main-color, #0f8076) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--main-color, #0f8076)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18 max-w-2xl mx-auto" dir="rtl">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              background: "var(--teal-50, #f0fdfa)",
              color: "var(--main-color, #0f8076)",
              border: "1px solid var(--teal-100, #ccfbf1)",
            }}>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--main-color, #0f8076)" }}
            />
            باقاتنا
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug"
            style={{ color: "var(--main-black, #0f172a)" }}>
            اختر الباقة{" "}
            <span style={{ color: "var(--main-color, #0f8076)" }}>
              المناسبة لك
            </span>
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="h-px w-12"
              style={{ background: "var(--teal-100, #ccfbf1)" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--main-color, #0f8076)" }}
            />
            <div
              className="h-px w-12"
              style={{ background: "var(--teal-100, #ccfbf1)" }}
            />
          </div>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--low-color, #64748b)" }}>
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto w-full">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              key={pkg.id}
              className="group relative flex flex-col h-full w-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "var(--card-background, #f8fafc)",
                border: "1px solid var(--teal-100, #ccfbf1)",
                boxShadow: "0 2px 16px rgba(15, 128, 118, 0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(15, 128, 118, 0.15)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--teal-600, #0d9488)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 16px rgba(15, 128, 118, 0.06)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--teal-100, #ccfbf1)";
              }}>
              {/* Image */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{ background: "var(--teal-50, #f0fdfa)" }}>
                {pkg.image ? (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--teal-50, #f0fdfa), var(--teal-100, #ccfbf1))",
                    }}>
                    <span
                      className="text-5xl font-extrabold"
                      style={{
                        color: "var(--main-color, #0f8076)",
                        opacity: 0.3,
                      }}>
                      {pkg.title?.charAt(0) ?? "?"}
                    </span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                {/* Package badge */}
                <div className="absolute top-3 right-3" dir="rtl">
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
                    style={{ background: "var(--main-color, #0f8076)" }}>
                    الباقة {index + 1}
                  </span>
                </div>
              </div>

              {/* Top accent bar on hover */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: "var(--main-color, #0f8076)" }}
              />

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7" dir="rtl">
                <h3
                  className="text-xl md:text-2xl font-extrabold mb-4 text-right"
                  style={{ color: "var(--main-black, #0f172a)" }}>
                  {pkg.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-10 h-0.5 rounded-full mb-4"
                  style={{ background: "var(--main-color, #0f8076)" }}
                />

                {/* Features */}
                {pkg.features?.length > 0 ? (
                  <div className="flex-1 mb-6">
                    <p
                      className="text-sm font-bold mb-3 text-right"
                      style={{ color: "var(--main-color, #0f8076)" }}>
                      المميزات :
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-right">
                          <span
                            className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{
                              background: "var(--teal-50, #f0fdfa)",
                              border: "1px solid var(--teal-100, #ccfbf1)",
                            }}>
                            <Check
                              className="w-3 h-3"
                              strokeWidth={3}
                              style={{ color: "var(--main-color, #0f8076)" }}
                            />
                          </span>
                          <span
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: "var(--slate-700, #334155)" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex-1 mb-6" />
                )}

                {/* CTA Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3.5 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-white"
                  style={{ background: "var(--main-color, #0f8076)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--main-color-dark, #0f766e)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--main-color, #0f8076)";
                  }}>
                  <MessageCircle className="w-5 h-5" />
                  اطلب الخدمة عبر واتساب
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
