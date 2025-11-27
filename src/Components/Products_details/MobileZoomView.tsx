import { useRef, useState } from "react";

interface MobileZoomViewProps {
  img: string;
  onClose: () => void;
}

export default function MobileZoomView({ img, onClose }: MobileZoomViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [scale, setScale] = useState(1);
  const [lastDistance, setLastDistance] = useState<number | null>(null);

  // dragging
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 1) {
      // Start dragging
      const t = e.touches[0];
      setStartPos({ x: t.pageX - pos.x, y: t.pageY - pos.y });
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    // Pinch to zoom
    if (e.touches.length === 2) {
      const touches = Array.from(e.touches);
      const t1 = touches[0];
      const t2 = touches[1];

      const dist = Math.hypot(t2.pageX - t1.pageX, t2.pageY - t1.pageY);

      if (lastDistance !== null) {
        let newScale = scale + (dist - lastDistance) * 0.004;
        newScale = Math.max(1, Math.min(4, newScale));
        setScale(newScale);
      }

      setLastDistance(dist);
      return;
    }

    // dragging
    if (e.touches.length === 1 && scale > 1) {
      const t = e.touches[0];

      setPos({
        x: t.pageX - startPos.x,
        y: t.pageY - startPos.y,
      });
    }
  };

  const onTouchEnd = () => {
    setLastDistance(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-9999 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* OUTER CONTAINER */}
      <div
        ref={containerRef}
        className="bg-whit rounded-md"
        style={{
          width: "100%",
          height: "50%",
          touchAction: "none", // Needed
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking container
      >
        {/* INNER IMAGE */}
        <img
          ref={imgRef}
          src={img}
          alt="zoom"
          className="w-full h-auto"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            touchAction: "none",
            transition: "none", // remove smoothness
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      </div>
    </div>
  );
}
