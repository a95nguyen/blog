import React, { useEffect, useState } from "react";
import logo from './255-2557821_scroll-to-top-icon-scroll-top-png.png'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible &&
        <div onClick={scrollToTop}>
          <img src={logo} alt='Scroll to top' />
        </div>}
    </div>
  );
}