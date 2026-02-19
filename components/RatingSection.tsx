"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";
import { motion } from "framer-motion";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) {
          setSubmitted(value);
        }
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {
          // localStorage not available
        }
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="relative inline-block">
          {interactive ? (
            <button
              type="button"
              disabled={isLoading || !mounted}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 rounded-lg transition-all duration-200 hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={
                {
                  focusVisibleRingColor: "var(--main-color, #0f8076)",
                } as React.CSSProperties
              }
              aria-label={`تقييم ${star} من 5`}>
              <Star
                className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-200 drop-shadow-sm ${
                  star <= value ? "" : ""
                }`}
                style={{
                  fill: star <= value ? "#f59e0b" : "#e2e8f0",
                  color: star <= value ? "#f59e0b" : "#e2e8f0",
                }}
              />
            </button>
          ) : (
            <Star
              className="w-10 h-10 md:w-12 md:h-12"
              style={{
                fill: star <= value ? "#f59e0b" : "#e2e8f0",
                color: star <= value ? "#f59e0b" : "#e2e8f0",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="rating"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--main-background, #ffffff)" }}>
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--main-color, #0f8076) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft teal glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--main-color, #0f8076)" }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        {/* Section label above card */}
        <div className="text-center mb-8" dir="rtl">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-0"
            style={{
              background: "var(--teal-50, #f0fdfa)",
              color: "var(--main-color, #0f8076)",
              border: "1px solid var(--teal-100, #ccfbf1)",
            }}>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--main-color, #0f8076)" }}
            />
            آراء العملاء
          </span>
        </div>

        {/* Card */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--card-background, #f8fafc)",
            border: "1px solid var(--teal-100, #ccfbf1)",
            boxShadow: "0 8px 40px rgba(15, 128, 118, 0.10)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{ background: "var(--main-color, #0f8076)" }}
          />

          <div className="p-8 md:p-12 text-center" dir="rtl">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight"
              style={{ color: "var(--main-black, #0f172a)" }}>
              قيّم تجربتك{" "}
              <span style={{ color: "var(--main-color, #0f8076)" }}>معنا</span>
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div
                className="h-px w-10"
                style={{ background: "var(--teal-100, #ccfbf1)" }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--main-color, #0f8076)" }}
              />
              <div
                className="h-px w-10"
                style={{ background: "var(--teal-100, #ccfbf1)" }}
              />
            </div>

            <p
              className="text-base md:text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "var(--low-color, #64748b)" }}>
              رأيك يهمنا! ساعدنا في التحسين من خلال تقييم تجربتك
            </p>

            {/* Stats row */}
            {(averageRating > 0 || totalRatings > 0) && (
              <div
                className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 py-4 px-6 rounded-xl"
                style={{
                  background: "var(--teal-50, #f0fdfa)",
                  border: "1px solid var(--teal-100, #ccfbf1)",
                }}>
                {averageRating > 0 && (
                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "var(--main-black, #0f172a)" }}>
                      {averageRating.toFixed(1)}
                    </span>
                    <span style={{ color: "var(--low-color, #64748b)" }}>
                      / 5
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5"
                          style={{
                            fill:
                              star <= Math.round(averageRating)
                                ? "#f59e0b"
                                : "#e2e8f0",
                            color:
                              star <= Math.round(averageRating)
                                ? "#f59e0b"
                                : "#e2e8f0",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div
                    className="text-sm md:text-base"
                    style={{ color: "var(--low-color, #64748b)" }}>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--main-black, #0f172a)" }}>
                      {totalRatings}
                    </span>{" "}
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </div>
                )}
              </div>
            )}

            {submitted !== null && mounted ? (
              <div className="py-4">
                {renderStars(submitted, false)}
                <p
                  className="font-semibold mt-5 text-lg"
                  style={{ color: "var(--main-color, #0f8076)" }}>
                  شكراً لتقييمك!
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--low-color, #64748b)" }}>
                  نسعد بتقييمك وسنعمل على تحسين تجربتك
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {renderStars(displayRating || 0, true)}
                <p
                  className="text-sm"
                  style={{ color: "var(--low-color, #64748b)" }}>
                  {mounted && !isLoading
                    ? "انقر على النجم المناسب للتقييم"
                    : ""}
                  {isLoading && "جاري الإرسال..."}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
