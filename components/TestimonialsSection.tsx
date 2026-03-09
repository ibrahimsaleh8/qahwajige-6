import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "أحمد المطيري",
    role: "صاحب شركة",
    rating: 5,
    comment:
      "خدمة رائعة واحترافية عالية. القهوجيون كانوا في قمة الأدب والاحترافية طوال فترة الفعالية. الجميع أشاد بجودة القهوة العربية والتمور. بالتأكيد سأتعامل معهم مجدداً.",
  },
  {
    id: "2",
    name: "سارة العتيبي",
    role: "منظمة فعاليات",
    rating: 5,
    comment:
      "تعاملت معهم في أكثر من مناسبة وفي كل مرة يتجاوزون توقعاتي. الالتزام بالمواعيد، جودة الخدمة، والأسعار المنافسة تجعلهم الخيار الأول دائماً.",
  },
  {
    id: "3",
    name: "خالد الدوسري",
    role: "رجل أعمال",
    rating: 5,
    comment:
      "أفضل خدمة قهوة عربية في الرياض. نظّموا لنا حفل افتتاح شركتنا واستقطبوا إعجاب جميع الحضور. الديكور التراثي والخدمة الراقية أضافا لمسة مميزة للمناسبة.",
  },
  {
    id: "4",
    name: "نورة الشمري",
    role: "مديرة موارد بشرية",
    rating: 5,
    comment:
      "احترافيون بكل معنى الكلمة. رتبوا ضيافة اليوم الوطني لشركتنا بشكل مثالي. الموظفون أبدوا إعجابهم الشديد بالخدمة، وسيكونون اختيارنا الدائم للفعاليات القادمة.",
  },
  {
    id: "5",
    name: "عبدالله القحطاني",
    role: "صاحب قاعة أفراح",
    rating: 5,
    comment:
      "شركاء نجاح حقيقيون. نتعاون معهم في جميع حفلات الأعراس والمناسبات التي تقام في قاعتنا. عملاؤنا دائماً يثنون على مستوى الخدمة والاحترافية العالية.",
  },
  {
    id: "6",
    name: "منى الزهراني",
    role: "منسقة مناسبات",
    rating: 5,
    comment:
      "من أفضل مزودي خدمات الضيافة العربية في الرياض. سرعة الاستجابة، وجودة المنتجات، واحترافية الفريق تجعلهم متميزين. أنصح بهم لكل من يبحث عن ضيافة راقية.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`تقييم ${rating} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white" id="testimonials">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="inline-block bg-main-color/10 text-main-color-dark font-semibold text-sm md:text-base rounded-full px-5 py-2 mb-4">
            آراء عملائنا
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-color-dark mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            آلاف العملاء وثقوا بنا لتقديم أرقى خدمات الضيافة العربية في مناسباتهم
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 text-right"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-main-color/10 rounded-xl flex items-center justify-center">
                <Quote className="w-5 h-5 text-main-color" />
              </div>

              {/* Comment */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-1">
                {testimonial.comment}
              </p>

              {/* Divider */}
              <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                {/* Author Info */}
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-slate-800 text-base">
                    {testimonial.name}
                  </span>
                </div>

                {/* Stars */}
                <StarRating rating={testimonial.rating} />
              </div>
            </article>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          <div className="bg-slate-50 rounded-xl px-4 py-5 border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-main-color">
              ١٠٠٠+
            </div>
            <div className="text-slate-600 text-sm mt-1">عميل سعيد</div>
          </div>
          <div className="bg-slate-50 rounded-xl px-4 py-5 border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-main-color-dark">
              ٤.٩
            </div>
            <div className="text-slate-600 text-sm mt-1">متوسط التقييم</div>
          </div>
          <div className="bg-slate-50 rounded-xl px-4 py-5 border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-main-color">
              ٩٨٪
            </div>
            <div className="text-slate-600 text-sm mt-1">نسبة الرضا</div>
          </div>
        </div>
      </div>
    </section>
  );
}
