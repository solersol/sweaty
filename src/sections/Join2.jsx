

import React from 'react';
import { joinImage, joinBg } from '../assets/images'; // Replace with your actual image paths

const Join2 = () => {
  return (
    <section 
      className="w-full h-screen flex justify-center items-center relative bg-cover bg-center" 
      style={{ backgroundImage: `url(${joinBg})` }}
    >
      {/* Image Link in the Center */}
      <a href="https://t.me/SweatySolana" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
        <img
          src={joinImage}
          alt="Join Us"
          className="w-[990px] h-[250px] mt-[28rem] transition-transform transform hover:scale-105"
        />
      </a>
    </section>
  );
};

export default Join2;
