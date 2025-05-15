import { useState, useEffect } from 'react';
import "../scss/slider.scss" ;

function Slider() {
  const rootStyles = getComputedStyle(document.documentElement);
  const sliderWidth = parseInt(rootStyles.getPropertyValue('--slider_width'), 10); //extract slider_width variable from slider.scss

  const sliderOscillationRange = 50 ; // If the user moves the slide further, the slider will change
  const slides = [
    {
        src: "/images/slider1.webp",
        alt: "تا 64 میلیون درآمد ماهانه"
    },
    { 
        src: "/images/slider2.webp",
        alt: "تا 20 میلیون پاداش و تجهیزات رایگان ویژه موتورسواران"
    }
  ] ;

  const [currentIndex, setCurrentIndex] = useState(0) ;

  const nextSlide = () => {
    setCurrentIndex((index) =>  (index + 1) % slides.length ) ;

  } ;

  const sliderHoldTime = 3000 ; // 3 seconds

  useEffect(() => {
    const timer = setTimeout(nextSlide, sliderHoldTime) ;
    return () => clearTimeout(timer) ; //cleanup to avoiding multiple timer in time
  }, [currentIndex])
  return(
    <>
      <div id = "slider">
        <div id = "slides">

          {
            slides.map((slide, index) => {
              return(
                <div 
                className="slide"
                id={"slide" + index}
                key={index}
                style={{
                  transform: `translateX(-${currentIndex*100}%)`,
                }}>
                  <img src={slide.src} alt = {slide.alt} className="slide_img" />
                </div>
              ) ;
            })
          }
        </div>

          <div id = "slider_dots">
            
            {
              slides.map((slide, index) => {
                const slider_dot_status = index == currentIndex ? "active_slider_dot" : "" ;
                return(
                  <div key={index} className={`slider_dot ${slider_dot_status}`}></div>
                ) ;
              }) 
            }
          </div>

      </div>
    </>
  ) ;
}

export default Slider ;