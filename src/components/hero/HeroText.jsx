import React from 'react';
import btn1 from '../../assets/hero/play_store.svg';
import btn2 from '../../assets/hero/apple-store-black.svg';
import btnsm from '../../assets/hero/apple-sm.svg';
import btn2sm from '../../assets/hero/playstore-sm.svg';
import { motion } from 'framer-motion';

const HeroText = () => {
  return (
    <motion.div
      className="w-full lg:w-1/2 px-5 lg:px-0 lg:ml-20 my-10"
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, stiffness: 100, type: 'spring' }}
    >
      <div className="space-y-5 mb-5">
        <h1 className="text-[141414] font-bold hero-text text-4xl lg:text-7xl leading-[40px] lg:leading-[60px] tracking-[-2%] lg:tracking-[-2.5%]">
          Payment made convenient
        </h1>
        <p className="text-[#475467] font-light text-lg lg:text-xl leading-6 lg:leading-8">
          Beat the cash scarcity, make payment with your camera in-stores.
        </p>
      </div>
      <div className="hidden lg:flex lg:space-x-5">
        <img src={btn1} className="w-40" alt="Download on the Play Store" />
        <img src={btn2} className="w-40" alt="Download on the Apple Store" />
      </div>
      <div className="block lg:hidden space-y-5">
        <img src={btnsm} className="w-full sm:w-96" alt="Download on the Apple Store" />
        <img src={btn2sm} className="w-full sm:w-96" alt="Download on the Play Store" />
      </div>
    </motion.div>
  );
};

export default HeroText;
