import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { WatchData } from "../TopWatches/watchData";
import { Link, useNavigate } from "react-router-dom";

const CARD_GAP = 24;

const Blockbuster = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragMove = useRef(false);

  const [cardWidth, setCardWidth] = useState(297);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  // ----------------------------
  // Responsive Card Width Logic
  // ----------------------------
  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 420) setCardWidth(150);
      else if (screenWidth <= 640) setCardWidth(170);
      else if (screenWidth <= 1024) setCardWidth(150);
      else if (screenWidth <= 1280) setCardWidth(270);
      else if (screenWidth <= 1440) setCardWidth(210);
      else setCardWidth(297);
      setIsTablet(screenWidth <= 1020);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = cardWidth + CARD_GAP;
    const newScrollLeft =
      direction === "right"
        ? Math.min(
            container.scrollLeft + scrollAmount,
            container.scrollWidth - container.clientWidth
          )
        : Math.max(container.scrollLeft - scrollAmount, 0);
    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  // ----------------------------
  // Drag Scroll Logic
  // ----------------------------
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDragMove.current = false;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftStart(container.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    isDragMove.current = true;
    const container = scrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.2;
    container.scrollLeft = scrollLeftStart - walk;
    handleScroll();
  };

  useEffect(() => {
    handleScroll();
  }, []);

  // ----------------------------
  // Convert name → slug
  // ----------------------------
  const toSlug = (name: string) =>
    name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="font-primary text-text select-none">
      <div className="flex justify-between items-center px-2 md:px-8 lg:px-20 mt-6">
        <p className=" text-md lg:text-xl font-semibold">Top Watches</p>
        <Link
          to="/view-all/watch"
          className="flex items-center justify-center gap-x-1 text-[12px] lg:text-sm text-primary"
        >
          View All <FaArrowRight size={12} className="inline-block" />
        </Link>
      </div>

      <div className="relative px-2 md:px-8 lg:px-20 mt-2.5">
        {!isTablet && showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-14 top-1/2 -translate-y-1/2 bg-white p-2 rounded shadow z-10"
          >
            <FaArrowLeft className="text-primary" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-6 no-scrollbar"
          style={{
            cursor: "pointer",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {WatchData.map((item) => (
            <div
              key={item.id}
              className="shrink-0 transition-transform active:scale-95"
              style={{ width: `${cardWidth}px` }}
              onClick={() => {
                if (!isDragMove.current) {
                  navigate(`/product/${toSlug(item.name)}`);
                }
              }}
            >
              <div className="w-full h-[250px] md:h-[250px] lg:h-[260px] xl:h-[300px] 2xl:h-[350px] rounded-md shadow flex flex-col justify-center pt-2 pb-3.5 px-1.5 border border-border bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover pointer-events-none h-40 sm:h-[180px] md:h-[200px] lg:h-auto xl:h-[250px] 2xl:h-[255px]"
                />
                <p className="mt-2 text-[12px] lg:text-sm truncate">{item.name}</p>
                <p className="text-black">{item.price}</p>
                <div className="flex gap-2 items-center">
                  <p className="text-offer text-[12px] font-medium">
                    {item.offer}
                  </p>
                  <p className="line-through text-[12px] text-priceline">
                    {item.line}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isTablet && showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-14 top-1/2 -translate-y-1/2 bg-white p-2 rounded shadow z-10"
          >
            <FaArrowRight className="text-primary" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Blockbuster;
