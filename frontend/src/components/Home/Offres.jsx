import React, { useState, useEffect } from 'react';

const Offres = ({className,offre1,offre2}) => {
    const [currentImage, setCurrentImage] = useState(offre1);
        useEffect(() => {
            const interval = setInterval(() => {
            // Toggle between offre1 and offre2
            setCurrentImage((prevImage) =>
                prevImage === offre1 ? offre2 : offre1
            );
        }, 3000);
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

  return (
    <div className={` relative h-96 scale-[.98] duration-1000 hover:scale-100 rounded-lg overflow-hidden w-[95%] mx-auto ${className}`}>
        <img className=' absolute top-0 left-0 h-full transition opacity-100  w-full ' src={currentImage} alt='' />
    </div>
  )
}

export default Offres