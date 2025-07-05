"use client";
import React, { useRef, useEffect, useState } from "react";
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
    resetInterval();
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoPlay();
  };

  useEffect(() => {
    updateSlide(0);
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
<div className="w-full  mt-0 md:mt-4">
  <div className="relative w-full overflow-hidden">
    {/* Slide Track */}
    <div
      ref={trackRef}
      className="flex transition-transform duration-500 ease-in-out"
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className="w-full flex-shrink-0 object-center  max-h-[400px] sm:max-h-[500px]"
        />
      ))}
    </div>

    {/* Prev Button */}
    <button
      onClick={() => {
        handlePrev();
        resetInterval();
      }}
      className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10 
        bg-gray-100 text-text18 border border-gray-300 
        hover:bg-gray-800 hover:text-white 
        opacity-70 rounded hover:opacity-100 
         p-2"
    >
      <GrPrevious size={22} />
    </button>

    {/* Next Button */}
    <button
      onClick={() => {
        handleNext();
        resetInterval();
      }}
      className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10 
        bg-gray-100 text-text18 border border-gray-300 
        hover:bg-gray-800 hover:text-white 
        opacity-70 rounded hover:opacity-100 
         p-2"
    >
      <GrNext size={22} />
    </button>

    {/* Dots */}
    <div className="flex justify-center mt-4 sm:mt-6 gap-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`h-3 w-3 rounded-xs transition-colors duration-300 ${
            index === activeIndex ? "bg-bg8 opacity-80" : "bg-bg14"
          }`}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default Carousel;
