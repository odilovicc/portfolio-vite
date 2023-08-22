import "./Hero.css";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import Ripples from "react-ripples";
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="defaultFlex text-center w-1/2 mx-auto "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="">
          <AnimatePresence>
            <motion.h1
              className="heroTitle"
              initial="hidden"
              animate="visible"
              variants={textAnimation}
            >
              Bakhtiyor <span className="text-[--secondary]">Shodmonov</span>
            </motion.h1>
          </AnimatePresence>
          <h1 className="typeWriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("is developer?")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("is he professional?")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("why he's young?")
                  .start();
              }}
            />
          </h1>
          <Ripples color="#00ffff" className="rounded-full" during={1000}>
            <a href="#" className="heroButton">
              Learn more about me
            </a>
          </Ripples>
        </div>
      </div>
      <div className="bgEffect"></div>
      <div className="bgEffectTop"></div>
    </div>
  );
}

export default Hero;
