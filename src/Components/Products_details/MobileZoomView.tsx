import { useRef, useState } from "react";

interface MobileZoomViewProps {
  img: string;
  onClose: () => void;
}

export default function MobileZoomView({ img, onClose }: MobileZoomViewProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [lastDistance, setLastDistance] = useState<number | null>(null);

  const onTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2) {
      // Convert TouchList → Array
      const touches = Array.from(e.touches);
      const t1 = touches[0];
      const t2 = touches[1];

      const dist = Math.hypot(t2.pageX - t1.pageX, t2.pageY - t1.pageY);

      if (lastDistance !== null) {
        let newScale = scale + (dist - lastDistance) * 0.005;
        newScale = Math.max(1, Math.min(newScale, 4));
        setScale(newScale);
      }

      setLastDistance(dist);
    }
  };

  const onTouchEnd = () => {
    setLastDistance(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-sm z-9999 flex items-center justify-center"
      onClick={onClose}>
      <img
        ref={imgRef}
        src={img}
        alt="zoom"
        className="max-w-full max-h-full rounded-2xl border- border-border transition-transform duration-100 px-5"
        style={{ transform: `scale(${scale})`,
            touchAction: "none",
         }}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      />
    </div>
  );
}
