import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { testimonialsDataOfPeople } from "./TestiData";
import type { Testimonial } from "./TestiData";

import "./Testi.css"; // optional: contains scrollbar/utility styles

const AUTOPLAY_MS = 4000;

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentIndexRef = useRef<number>(0);
  const autoSlideId = useRef<number | null>(null);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const getCards = (): HTMLElement[] => {
    const container = containerRef.current;
    if (!container) return [];
    return Array.from(container.querySelectorAll<HTMLElement>(".testimonials-card"));
  };

  const scrollToCard = (index: number) => {
    const cards = getCards();
    if (!cards.length || !containerRef.current) return;
    const total = cards.length;
    const newIndex = ((index % total) + total) % total;
    const target = cards[newIndex];
    containerRef.current.scrollTo({
      left: target.offsetLeft - (containerRef.current.offsetWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    });
    setCurrentIndex(newIndex);
  };

  const updateActiveCard = () => {
    const container = containerRef.current;
    if (!container) return;
    const cards = getCards();
    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setCurrentIndex(closestIdx);
  };

  useEffect(() => {
    const startAuto = () => {
      stopAuto();
      autoSlideId.current = window.setInterval(() => {
        scrollToCard(currentIndexRef.current + 1);
      }, AUTOPLAY_MS) as unknown as number;
    };
    const stopAuto = () => {
      if (autoSlideId.current !== null) {
        window.clearInterval(autoSlideId.current);
        autoSlideId.current = null;
      }
    };

    startAuto();

    const handleVisibility = () => {
      if (document.hidden) stopAuto();
      else startAuto();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopAuto();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      if (autoSlideId.current !== null) {
        window.clearInterval(autoSlideId.current);
        autoSlideId.current = null;
      }
      container.classList.add("dragging");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      container.classList.remove("dragging");
      autoSlideId.current = window.setInterval(() => {
        scrollToCard(currentIndexRef.current + 1);
      }, AUTOPLAY_MS) as unknown as number;
      updateActiveCard();
      setTimeout(updateActiveCard, 120);
    };

    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      if (autoSlideId.current !== null) {
        window.clearInterval(autoSlideId.current);
        autoSlideId.current = null;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", endDrag);

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", endDrag);

    const onScroll = () => {
      requestAnimationFrame(updateActiveCard);
    };
    container.addEventListener("scroll", onScroll, { passive: true });

    setTimeout(() => updateActiveCard(), 50);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", endDrag);
      container.removeEventListener("mouseleave", endDrag);

      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", endDrag);

      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="testimonials-section w-full font-primary mt-10">
      <div className="w-full px-3 md:px-10 xl:px-20">
        <div className="max-w-[1800px] w-full block overflow-visible select-none">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-text">
              What Our Customers Say About Us
            </h2>
            <div className="w-20 h-[3px] bg-primary mx-auto mt-2 rounded-full" />
          </div>

          <div
            ref={containerRef}
            className="testimonials-container flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-2 py-2 w-full">
            {testimonialsDataOfPeople.map((item: Testimonial, idx: number) => (
              <article
                key={item.id}
                className={`testimonials-card shrink-0 bg-secondary text-text rounded-2xl p-6 w-80 lg:w-96 transition-all duration-300 ${
                  currentIndex === idx ? "scale-105 shadow-sm" : "scale-100 shadow-md"
                }`}
                aria-hidden={currentIndex !== idx}
              >
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`mr-1 ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                      style={{ fontSize: 16 }}
                    />
                  ))}
                </div>

                <p className="text-center italic text-sm">“{item.feedback}”</p>
                <p className="text-center font-semibold mt-4">{item.name}</p>
              </article>
            ))}
          </div>

          <div className="flex gap-2 mt-4 justify-center">
            {testimonialsDataOfPeople.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => scrollToCard(i)}
                className={`h-2 w-2 rounded-full border border-primary transition-transform ${
                  i === currentIndex ? "bg-primary scale-110" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
