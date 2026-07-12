"use client";

import { useRef, useState, useEffect } from "react";
import styles from "@/app/home.module.css";

const testimonials = [
  {
    name: "Ahmed Khan",
    quote:
      "Alhamdulillah! Everything was perfectly organized. Hotels, food, transport - all excellent. Highly recommended!",
  },
  {
    name: "Safeena Begum",
    quote:
      "Great experience with Rashidi Umrah. The guides were very helpful and the entire journey was smooth.",
  },
  {
    name: "Imran Patel",
    quote:
      "Best Umrah service we ever had. They took care of everything with professionalism and care.",
  },
  {
    name: "Zainab Ali",
    quote:
      "A truly spiritual and peaceful journey. The management ensured we faced zero issues during our stay in both holy cities.",
  },
  {
    name: "Omar Farooq",
    quote:
      "From visa processing to the actual pilgrimage, everything was handled flawlessly. May Allah bless their efforts.",
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth > 768 ? 400 : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles["testimonials-wrapper"]}>
      <button 
        className={`${styles["carousel-arrow"]} ${styles["left-arrow"]}`} 
        onClick={() => scrollByAmount("left")}
        disabled={!canScrollLeft}
        aria-label="Previous review"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div 
        className={styles["testimonials-grid"]} 
        ref={scrollRef} 
        onScroll={checkScroll}
      >
        {testimonials.map((t) => (
          <div key={t.name} className={styles["testimonial-card"]}>
            <i className={`fa-solid fa-quote-left ${styles["quote-icon"]}`}></i>
            <p>{t.quote}</p>
            <div className={styles["author-box"]}>
              <div className={styles["author-info"]}>
                <h4>{t.name}</h4>
              </div>
              <div className={styles.stars}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        className={`${styles["carousel-arrow"]} ${styles["right-arrow"]}`} 
        onClick={() => scrollByAmount("right")}
        disabled={!canScrollRight}
        aria-label="Next review"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
