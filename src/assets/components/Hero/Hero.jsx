import "./Hero.css";
import React from "react";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div className="py-12">
      <div className="defaultFlex">
        <div className="">
          <h1 className="heroTitle">
            Bakhtiyor <span className="text-[--primary-text]">Shodmonov</span>
          </h1>
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa illo
            nisi saepe modi recusandae error voluptatibus id ducimus dolores!
            Esse.
          </p>
        </div>
        <div className="">
          <img src="/images/sticker.webp" className="imgHero" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
