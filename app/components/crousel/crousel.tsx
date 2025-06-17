"use client";
import React, { useRef, useEffect, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_18_wall_fan-new.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_22.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_20.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_21.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_23_1.jpg",
    "https://doo9vxlv0gkqf.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/a/banner_24.jpg",
  ];

  const updateSlide = (index: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
      currentIndexRef.current = index;
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex =
      currentIndexRef.current === 0
        ? images.length - 1
        : currentIndexRef.current - 1;
    updateSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndexRef.current === images.length - 1
        ? 0
        : currentIndexRef.current + 1;
    updateSlide(newIndex);
  };

  const handleDotClick = (index: number) => {
    updateSlide(index);
    resetInterval(); // Restart autoplay after manual change
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000); // Every 4 seconds
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoPlay();
  };

  useEffect(() => {
    updateSlide(0); // Initialize
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        ref={trackRef}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-full flex-shrink-0"
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 bg-gray-100 cursor-pointer opacity-50 hover:opacity-100 py-2 px-2 rounded  text-text18 hover:bg-gray-800 hover:text-white border-gray-600  transform -translate-y-1/2 z-10"
        onClick={() => {
          handlePrev();
          resetInterval();
        }}
      >
        <GrPrevious size={30} />
      </button>
      <button
        className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2 z-10  bg-gray-100 py-2 rounded opacity-80 hover:opacity-100 px-2 text-text18  hover:bg-gray-800  hover:text-white border-gray-600 "
        onClick={() => {
          handleNext();
          resetInterval();
        }}
      >
        <GrNext size={30} />
      </button>
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-xs  ${
              index === activeIndex ? "bg-bg8 opacity-50" : "bg-bg14"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
