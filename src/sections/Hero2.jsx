// import React from 'react';
// import { logoMain, linkImage1, linkImage2, linkImage3, hr1 } from '../assets/images'; // Replace with your actual image paths

// const Hero2 = () => {
//   return (
//     <section className="w-full h-screen flex flex-col items-center justify-start p-8 bg-black text-white">
//       {/* Logo at the top center */}
//       <div className="w-full flex justify-center mt-4">
//         <img src={logoMain} alt="Logo" className="w-32 h-auto" />
//       </div>

//       <div className="flex w-full h-full mt-12">
//         {/* Left Side: Title and 3 Images */}
//         <div className="w-1/2 flex flex-col justify-start items-start space-y-8 pr-8">
//           {/* Title */}
//           <h1 className="text-4xl font-bold">CA: ???</h1>

//           {/* Linked Images */}
//           <div className="flex flex-col space-y-6">
//             <a href="https://pump.fun/board" className="transition-transform transform hover:scale-105">
//               <img src={linkImage1} alt="Link to Page 1" className="w-48 h-auto rounded-lg" />
//             </a>
//             <a href="https://t.me" className="transition-transform transform hover:scale-105">
//               <img src={linkImage2} alt="Link to Page 2" className="w-48 h-auto rounded-lg" />
//             </a>
//             <a href="https://x.com" className="transition-transform transform hover:scale-105">
//               <img src={linkImage3} alt="Link to Page 3" className="w-48 h-auto rounded-lg" />
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Large Image */}
//         <div className="w-1/2 flex justify-end items-center">
//           <img src={hr1} alt="Large Display" className="w-[80%] h-auto object-cover rounded-lg" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero2;


import React from 'react';
import { logoMain, linkImage1, linkImage2, linkImage3, hr1 } from '../assets/images'; // Replace with your actual image paths

const Hero2 = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-start p-8 bg-black text-white">
      {/* Logo at the top center */}
      <div className="w-full flex justify-center mb-8">
        <img src={logoMain} alt="Logo" className="w-[700px] h-auto" />
      </div>

      <div className="flex w-full h-full">
        {/* Left Side: Title and 3 Images */}
        <div className="w-1/3 flex flex-col justify-center items-center pr-8">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-8">CA: ???</h1>

          {/* Linked Images */}
          <div className="flex flex-col space-y-4 items-center">
            <a href="https://pump.fun/board" className="transition-transform transform hover:scale-105">
              <img src={linkImage1} alt="Link to Page 1" className="w-24 h-auto rounded-lg" />
            </a>
            <a href="https://t.me" className="transition-transform transform hover:scale-105">
              <img src={linkImage2} alt="Link to Page 2" className="w-24 h-auto rounded-lg" />
            </a>
            <a href="https://x.com" className="transition-transform transform hover:scale-105">
              <img src={linkImage3} alt="Link to Page 3" className="w-24 h-auto rounded-lg" />
            </a>
          </div>
        </div>

        {/* Right Side: Large Image */}
        <div className="w-2/3 flex justify-center items-center">
          <img src={hr1} alt="Large Display" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
