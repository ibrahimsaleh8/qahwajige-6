"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// Static FAQ data - hardcoded for coffee service business
const faqData = [
  {
    id: "1",
    question: "ما هي الخدمات التي تقدمونها؟",
    answer:
      "نقدم خدمات الضيافة العربية الشاملة بما في ذلك تقديم القهوة العربية، الشاي، المشروبات الساخنة والباردة، بالإضافة إلى التمور والحلويات. نوفر قهوجيين محترفين لجميع المناسبات والفعاليات.",
  },
  {
    id: "2",
    question: "هل تغطون جميع مناطق الرياض؟",
    answer:
      "نعم، نقدم خدماتنا في جميع أنحاء مدينة الرياض والمناطق المحيطة بها. نحرص على الوصول في الوقت المحدد مع كامل المعدات والمستلزمات اللازمة.",
  },
  {
    id: "3",
    question: "كم يستغرق الحجز المسبق؟",
    answer:
      "يُفضل الحجز قبل الموعد بـ 48 ساعة على الأقل لضمان التوفر. ومع ذلك، نحاول دائماً تلبية الطلبات العاجلة حسب الإمكانية المتاحة.",
  },
  {
    id: "4",
    question: "هل توفرون المعدات والمستلزمات؟",
    answer:
      "نعم، نوفر جميع المعدات والمستلزمات اللازمة بما في ذلك الدلال، الفناجين، الترامس، والديكورات التقليدية. كما نوفر القهوة العربية الفاخرة والتمور والحلويات.",
  },
  {
    id: "5",
    question: "ما هي أسعار خدماتكم؟",
    answer:
      "تختلف الأسعار حسب نوع الفعالية، عدد الضيوف، ومدة الخدمة. يرجى التواصل معنا للحصول على عرض سعر مخصص يناسب احتياجاتكم.",
  },
  {
    id: "6",
    question: "هل يمكن تخصيص الخدمة حسب المناسبة؟",
    answer:
      "بالتأكيد! نقدم خدمات مخصصة لجميع أنواع المناسبات سواء كانت حفلات زواج، مؤتمرات، افتتاحات، أو مناسبات خاصة. نعمل معكم لتصميم تجربة ضيافة مميزة.",
  },
  {
    id: "7",
    question: "هل القهوجيون لديكم مدربون ومحترفون؟",
    answer:
      "نعم، جميع القهوجيين لدينا مدربون على أعلى مستوى من الاحترافية والخبرة في فنون الضيافة العربية. نحرص على المظهر اللائق والأداء المتميز.",
  },
  {
    id: "8",
    question: "كيف يمكنني إلغاء أو تعديل الحجز؟",
    answer:
      "يمكنك التواصل معنا عبر الهاتف أو الواتساب لتعديل أو إلغاء الحجز. نطلب الإشعار قبل 24 ساعة على الأقل من موعد الفعالية لتجنب أي رسوم إضافية.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="py-16 md:py-24 px-4 bg-slate-50" id="faq">
        <div className="container mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="inline-block bg-main-color/10 text-main-color-dark font-semibold text-sm md:text-base rounded-full px-5 py-2 mb-4">
              الأسئلة الشائعة
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-color-dark mb-4">
              كل ما تحتاج معرفته
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-right px-6 py-5 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${faq.id}`}>
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle className="w-5 h-5 text-main-color shrink-0 mt-0.5" />
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 text-right">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0">
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden">
                      <div className="px-6 pb-5 pt-2 pr-14">
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">لم تجد إجابة لسؤالك؟</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-main-color hover:bg-main-color-dark text-white px-6 py-3 rounded-xl font-semibold text-base transition-all shadow-sm">
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
