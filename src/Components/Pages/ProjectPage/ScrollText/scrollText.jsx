import React, { useState, useEffect } from 'react';

const ScrollText = ({ text }) => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        let value = window.scrollY 
        const textScroll = document.getElementById('scroll-text')
        const description = document.querySelector('.description')
        if(value > 80){
            description.classList.add('active')
            const windowHeight = 2000;
            const percentageScrolled = ((window.scrollY) / windowHeight) * 100;
            const textLengthToType = Math.floor((text.length * percentageScrolled) / 100);
            setTypedText(text.substring(0, textLengthToType));
        }else if(value < 80){
            description.classList.remove('active')
        }
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <p id="scroll-text">
      {typedText}
    </p>
  );
};

export default ScrollText;