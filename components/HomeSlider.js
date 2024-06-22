
import data from '../public/Slider.json'
import { useState, useEffect, useRef } from 'react';


/*const HomeSlider = () => {
  

  return (
    <>
     <div className="slider_wrapper" >
   {data.map((index) => (
        <div className="slider_content">
          <img className="img" 
          key={index.id}
          src={currentSlider} alt="" />
          
        </div>
))}
    </div>
    </>
  )
}
export default HomeSlider;*/
const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000); // 5000ms = 5 segundos
    };

    const stopInterval = () => {
      clearInterval(intervalRef.current);
    };

    startInterval();

    return () => {
      stopInterval();
    };
  }, []);

  return (
    <div className="slider_wrapper">
      {data.map((item, index) => (
        <div
        className={`slider_content ${index === currentIndex ? 'active' : ''}`}
        key={item.id}
        >
          <img className="img" src={item.image} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default HomeSlider;