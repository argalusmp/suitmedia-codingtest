import React, { useEffect, useRef } from 'react';

const Banner = ({ imageUrl }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        bannerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative h-[400px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Ideas</h1>
        <p className="text-white text-lg">Where all our great things begin</p>
      </div>
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
           d="M0,320L1440,160L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default Banner;
