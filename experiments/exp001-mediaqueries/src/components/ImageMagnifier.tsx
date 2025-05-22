"use client";
// Import dependencies
import React, { MouseEvent, TouchEvent, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};
// Constants for magnifier size and zoom level
const MAGNIFIER_SIZE = 100;
const ZOOM_LEVEL = 2.5;

// ImageEffect component
const ImageEffect = ({ src, alt, width, height, className }: Props) => {
  // State variables
  const [zoomable, setZoomable] = useState(true);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    mouseX: 0,
    mouseY: 0,
  });
  const [touchPosition, setTouchPosition] = useState({
    tx: 100,
    ty: 100,
    touchX: 0,
    touchY: 0,
  });

  // Event handlers
  const handleMouseEnter = (e: MouseEvent) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e);
  };

  const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      mouseX: x - MAGNIFIER_SIZE / 2,
      mouseY: y - MAGNIFIER_SIZE / 2,
    });
  };

  const handleTouchEnter = (e: TouchEvent) => {
    const element = e.currentTarget as HTMLElement;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updateTouchPosition(e);
  };

  const handleTouchMove = (e: TouchEvent) => {
    updateTouchPosition(e);
  };

  const handleTouchLeave = (e: TouchEvent) => {
    setZoomable(false);
    updateTouchPosition(e);
  };

  const updateTouchPosition = (e: TouchEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect() as DOMRect;
    const tx = e.touches[0].clientX - left;
    const ty = e.touches[0].clientY - top;
    setTouchPosition({
      tx: -tx * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      ty: -ty * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      touchX: tx - MAGNIFIER_SIZE / 2,
      touchY: ty - MAGNIFIER_SIZE / 2,
    });
  };

  // Render method
  return (
    <div className="flex justify-center items-center w-full">
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchEnter}
        onTouchEnd={handleTouchLeave}
        onTouchMove={handleTouchMove}
        className=" relative overflow-hidden"
      >
        <Image
          className={className}
          alt={alt}
          src={src}
          width={width}
          height={height}
        />
        <div
          style={{
            backgroundPosition:
              `${position.x}px ${position.y}px` ||
              `${touchPosition.tx}px ${touchPosition.ty}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${
              imageSize.height * ZOOM_LEVEL
            }px`,
            backgroundRepeat: "no-repeat",
            display: zoomable ? "block" : "none",
            top: `${position.mouseY}px` || `${touchPosition.touchY}px`,
            left: `${position.mouseX}px` || `${touchPosition.touchX}px`,
            width: `${MAGNIFIER_SIZE}px`,
            height: `${MAGNIFIER_SIZE}px`,
          }}
          className={`z-50 border-4 rounded-full pointer-events-none absolute border-gray-500`}
        />
      </div>
    </div>
  );
};

export default ImageEffect;
