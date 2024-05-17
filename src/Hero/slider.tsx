import { useEffect, useState } from "react";
import image1 from "../assets/ronnie-george-9gGvNWBeOq4-unsplash.jpg";
import image2 from "../assets/webaliser-_TPTXZd9mOo-unsplash.jpg";
import image3 from "../assets/todd-kent-178j8tJrNlc-unsplash.jpg";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleHero from "./content";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const images = [image1, image2, image3];

  const goToPreviousSlide = () => {
    setOpacity(0.3); // Fade out the image
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, 400); // Wait for the fade-out animation to complete before changing the image
  };

  const goToNextSlide = () => {
    setOpacity(0.3); // Fade out the image
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 400); // Wait for the fade-out animation to complete before changing the image
  };

  // Automatic slide transition
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 4000); // Change slide every 4 seconds

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    // Fade in the new image after it's changed
    setOpacity(1);
  }, [currentIndex]);

  return (
    <div className="w-full h-full relative">
      <div className="relative flex justify-center items-center w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="min-w-full max-h-[900px] rounded-2xl"
          style={{
            opacity: opacity,
            transform: `scale(${opacity === 1 ? 1 : 0.95}) translateY(${opacity === 1 ? 0 : 10}px)`,
            filter: `blur(${opacity === 1 ? 0 : 5}px)`, // Apply blur effect when opacity is reduced
            transition: "opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease",
          }}
          
        />
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent hover:bg-white/40 text-black rounded-full w-8 h-full flex items-center justify-center"
          onClick={goToNextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent hover:bg-white/40 text-black rounded-full w-8 h-full flex items-center justify-center"
          onClick={goToPreviousSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="absolute mx-auto max-sm:w-[270px]">
          <TitleHero />
        </div>
      </div>
    </div>
  );
};

export default Slider;
