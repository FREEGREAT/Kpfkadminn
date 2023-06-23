import React from 'react';
import '../components/css/welcome.css'
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";
import { useTrail, animated } from 'react-spring';

const WelcomePage = () => {
const navigate = useNavigate();

const text = 'Ласкаво просимо';

const trail = useTrail(text.length, {
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
  config: { tension: 200, friction: 14 },
});


  const buttonVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: [-5, 5, -5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };


    const handleWellcome= () => {
        navigate("/login")
      }
  


  return (
    <div className="welcome-page">
      <motion.h1 variants={buttonVariants}>
        <h1>
        {trail.map((styles, index) => (
          <animated.span key={index} style={styles}>
            {text[index]}
          </animated.span>
        ))}
             </h1>
      </motion.h1>
      <motion.p
        variants={buttonVariants}
      >
        Даний проект був створений на чистому інтузіазмі 4-х студентів, які вирішили модернізувати роботу з розкладами пар,
        щоб бухгалтери могли швидко змінювати розклад, а студенти не менш швидко перевіряти зміни на своєму мобільному додакту.
      </motion.p>
      <motion.button 
        
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      onClick={handleWellcome}>Вхід</motion.button>
    </div>
  );
};

export default WelcomePage;