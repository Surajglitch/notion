import React from 'react';

const BackgroundArt = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden bg-white">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-yellow-400 to-orange-400" />
      <svg className="absolute bottom-0 left-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F59E0B" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,112C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default BackgroundArt;