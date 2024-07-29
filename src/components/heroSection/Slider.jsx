import React, { useState, useEffect } from 'react';

const images = [
  'https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/004/591/188/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/004/591/185/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container w-full h-36 md:h-64 lg:h-96 overflow-hidden relative">
      <div
        className="slider-wrapper flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slider-image-container flex-shrink-0 w-full h-full flex justify-center items-center">
            <img
              src={image}
              alt={`slider ${index}`}
              className="slider-image w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
