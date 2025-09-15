import { useState } from "react";
import { motion } from "framer-motion";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center">
      {/* Botão Esquerda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-14 -translate-y-1/2 z-20 bg-[#6A0201] text-white px-3 py-2 rounded-full shadow-lg"
      >
        ‹
      </button>

      {/* Container das imagens */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${currentIndex * 50}%` }} // cada slide tem 50% da largura
          transition={{ type: "tween", duration: 0.6 }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-1/2 flex-shrink-0">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              {slide.caption && (
                <p className="text-center mt-2 text-sm text-gray-700">
                  {slide.caption}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botão Direita */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-14 -translate-y-1/2 z-20 bg-[#6A0201] text-white px-3 py-2 rounded-full shadow-lg"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
