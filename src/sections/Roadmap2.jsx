import React, { useEffect, useRef } from 'react';
import { rdT2, rd2 } from '../assets/images'; // Import the images

const Roadmap2 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === textRef.current) {
          entry.target.classList.add('animate-slide-in-left'); // Add the slide-in-left animation
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, options);

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div
      id="roadmap"
      className="w-full h-screen flex flex-col items-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${rd2})` }} // Set the background image
    >
      {/* Top Centered Image */}
      <div className="w-full flex justify-center mt-8">
        <img
          src={rdT2}
          alt="Top Centered"
          className="w-[750px] h-auto"
        />
      </div>

      {/* Left Side: List of Items */}
      <div
        ref={textRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 p-8 flex flex-col items-center opacity-0 transition-transform duration-1000"
      >
        <ul className="text-xl text-white list-disc list-inside">
          <li className="mb-4">Item 1: Description of the first item.</li>
          <li className="mb-4">Item 2: Description of the second item.</li>
          <li className="mb-4">Item 3: Description of the third item.</li>
          <li className="mb-4">Item 4: Description of the fourth item.</li>
          <li className="mb-4">Item 5: Description of the fifth item.</li>
          <li className="mb-4">Item 6: Description of the sixth item.</li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap2;
