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

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(val, max));

  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      setStartPos({
        x: t.pageX - pos.x,
        y: t.pageY - pos.y,
      });
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2) {
      const [t1, t2] = Array.from(e.touches);
      const dist = Math.hypot(t2.pageX - t1.pageX, t2.pageY - t1.pageY);

      if (lastDistance !== null) {
        let newScale = scale + (dist - lastDistance) * 0.004;
        newScale = Math.max(1, Math.min(newScale, 4));
        setScale(newScale);
      }

      setLastDistance(dist);
      return;
    }

    if (e.touches.length === 1 && scale > 1) {
      const t = e.touches[0];

      let newX = t.pageX - startPos.x;
      let newY = t.pageY - startPos.y;

      const displayW = imageSize.w * scale;
      const displayH = imageSize.h * scale;

      const maxX = Math.max(0, (displayW - containerSize.w) / 2);
      const maxY = Math.max(0, (displayH - containerSize.h) / 2);

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
      <div
        ref={containerRef}
        className="rounded-md overflow-hidden bg-white"
        style={{
          width: "100%",
          height: "46%",
          touchAction: "none",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          ref={imgRef}
          src={img}
          alt=""
          className="w-full h-full object-cover"   // ← FIXED (always covers container)
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transformOrigin: "center center",
            transition: "none",
            touchAction: "none",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      </div>
    </div>
  );
}
