// import React, { useEffect, useRef } from 'react';
// import { rdT2, rd2 } from '../assets/images'; // Import the images

// const Roadmap2 = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       threshold: 0.1, // Trigger when 10% of the element is visible
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting && entry.target === textRef.current) {
//           entry.target.classList.add('animate-slide-in-left'); // Add the slide-in-left animation
//           observer.unobserve(entry.target); // Stop observing once animated
//         }
//       });
//     }, options);

//     if (textRef.current) observer.observe(textRef.current);

//     return () => {
//       if (textRef.current) observer.unobserve(textRef.current);
//     };
//   }, []);

//   return (
//     <div
//       id="roadmap"
//       className="w-full h-screen flex flex-col items-center relative "
//       style={{ backgroundImage: `url(${rd2})` }} // Set the background image
//     >
//       {/* Top Centered Image */}
//       <div className="w-full flex justify-center mt-8">
//         <img
//           src={rdT2}
//           alt="Top Centered"
//           className="w-[750px] h-auto"
//         />
//       </div>

//       {/* Left Side: List of Items */}
//       <div
//         ref={textRef}
//         className="absolute left-0 top-1/3 transform -translate-y-1/2 w-full md:w-1/2 pl-14   flex flex-col  items-center opacity-0 transition-transform duration-1000"
//       >
//         <ul className="text-[28px] text-black list-none list-inside font-kalam">
//           <li className="mb-4">1.CALLER AT KOFH</li>
//           <li className="mb-4">2.PREPAYING DEX AT AROUND 30K MCAP</li>
//           <li className="mb-4">3.LIVE BURNS  AT EVERY COMPLETED STEP</li>
//           <li className="mb-4">4.DEX ADS AS SOON AS WE ARE LIVE ON RAYDIUM</li>
//           <li className="mb-4">5.MOONTOK LISTING 100k</li>
//           <li className="mb-4">6.MORE BURNS </li>
//           <li className="mb-4">7.BIG CALLERS 200-300k </li>
          

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Roadmap2;

import React from 'react';
import { rdT2, rd2 } from '../assets/images'; // Import the images

const Roadmap2 = () => {
  return (
    <section
      id="roadmap"
      className="w-full h-screen flex flex-col items-center justify-start bg-black text-white"
      style={{ backgroundImage: `url(${rd2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Set the background image
    >
      {/* Top Centered Image */}
      <div className="w-full flex justify-center pt-8 mb-12">
        <img
          src={rdT2}
          alt="Top Centered"
          className="w-[750px] h-auto"
        />
      </div>

      {/* Content Container */}
      <div className="flex w-full max-w-screen-lg">
        {/* Left Side: Background Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={rd2}
            alt="Background Image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-1/2 flex justify-center items-center p-8">
          <div className="text-lg text-white">
            <ul className="list-disc list-inside font-kalam space-y-4">
              <li>1. CALLER AT KOFH</li>
              <li>2. PREPAYING DEX AT AROUND 30K MCAP</li>
              <li>3. LIVE BURNS AT EVERY COMPLETED STEP</li>
              <li>4. DEX ADS AS SOON AS WE ARE LIVE ON RAYDIUM</li>
              <li>5. MOONTOK LISTING 100k</li>
              <li>6. MORE BURNS</li>
              <li>7. BIG CALLERS 200-300k</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap2;
