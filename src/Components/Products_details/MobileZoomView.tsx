import { useRef, useState, useEffect } from "react";

interface MobileZoomViewProps {
  img: string;
  onClose: () => void;
}

export default function MobileZoomView({ img, onClose }: MobileZoomViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [scale, setScale] = useState(1);
  const [lastDistance, setLastDistance] = useState<number | null>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  const [imageSize, setImageSize] = useState({ w: 0, h: 0 });

  // Read sizes once image loads
  useEffect(() => {
    if (containerRef.current && imgRef.current) {
      setContainerSize({
        w: containerRef.current.offsetWidth,
        h: containerRef.current.offsetHeight,
      });

      setImageSize({
        w: imgRef.current.offsetWidth,
        h: imgRef.current.offsetHeight,
      });
    }
  }, []);

  // Clamp value within min/max
  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(value, max));

  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 1) {
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

    // Dragging image
    if (e.touches.length === 1 && scale > 1) {
      const t = e.touches[0];
      let newX = t.pageX - startPos.x;
      let newY = t.pageY - startPos.y;

      const displayW = imageSize.w * scale;
      const displayH = imageSize.h * scale;

      // Maximum allowed drag before showing background
      const maxX = Math.max(0, (displayW - containerSize.w) / 2);
      const maxY = Math.max(0, (displayH - containerSize.h) / 2);

      // Clamp dragging inside boundaries
      newX = clamp(newX, -maxX, maxX);
      newY = clamp(newY, -maxY, maxY);

      setPos({ x: newX, y: newY });
    }
  };

  const onTouchEnd = () => {
    setLastDistance(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* OUTER CONTAINER */}
      <div
        ref={containerRef}
        className="rounded-md overflow-hidden"
        style={{
          width: "100%",
          height: "50%",
          touchAction: "none",
        }}
        onClick={(e) => e.stopPropagation()}
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
            transition: "none",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      </div>
    </div>
  );
}
