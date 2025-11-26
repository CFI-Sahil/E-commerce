import { useState, useRef, type MouseEvent } from "react";

interface ImageMagnifierProps {
  src: string;
  width: number;
  height: number;
  zoom: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  width,
  height,
  zoom,
}) => {
  const [showZoom, setShowZoom] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const imgRef = useRef<HTMLImageElement | null>(null);

  const lensSize = 150;
  const zoomWidth = 350;
  const zoomHeight = 400;

  const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(value, max));
  };

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const zoomedWidth = width * zoom;
  const zoomedHeight = height * zoom;

  const bgX = clamp(position.x * zoom - zoomWidth / 2, 0, zoomedWidth - zoomWidth);
  const bgY = clamp(
    position.y * zoom - zoomHeight / 2,
    0,
    zoomedHeight - zoomHeight
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: width,
        height: "auto",
      }}
    >
      <img
        ref={imgRef}
        src={src}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: `${width} / ${height}`,
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
        alt="magnifier"
      />

      {showZoom && (
        <div
          style={{
            position: "absolute",
            top: position.y - lensSize / 2,
            left: position.x - lensSize / 2,
            width: lensSize,
            height: lensSize,
            border: "2px solid white",
            backgroundColor: "rgba(255,255,255,0.2)",
            pointerEvents: "none",
          }}
        ></div>
      )}

      {showZoom && (
        <div
          style={{
            position: "absolute",
            left: window.innerWidth < 768 ? 0 : width + 60,
            top: window.innerWidth < 768 ? "105%" : 0,
            width: zoomWidth,
            height: zoomHeight,
            border: "1px solid #ccc",
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${zoomedWidth}px ${zoomedHeight}px`,
            backgroundPosition: `-${bgX}px -${bgY}px`,
            overflow: "hidden",
          }}
        ></div>
      )}
    </div>
  );
};

export default ImageMagnifier;
