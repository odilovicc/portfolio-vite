import "./About.css";
import * as React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <div>
      <section className="aboutSection">
        <h1 className="title">
          About <span className="text-[--primary-text]">Me #</span>
        </h1>
        <div className="mx-auto">
          <div className="defaultFlexSettings">
            <div className="aboutTextImage">
              <div className="aboutImage">
                <img src="/images/sticker.webp" alt="" />
              </div>
              <div className="aboutText">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                > 
                  I have a rich history in the field of web development.
                  Starting my journey as a self-taught programmer, I quickly
                  developed a passion for creating beautiful and functional
                  websites. Over the years, I have gained extensive experience
                  in HTML, CSS, JavaScript, and various web frameworks. My
                  journey began with simple HTML and CSS projects, where I
                  learned the fundamentals of web design and layout. As my
                  skills grew, I delved into JavaScript to add interactivity and
                  dynamic elements to my websites. This opened up a whole new
                  world of possibilities, and I became fascinated with the power
                  and flexibility of web development. To further expand my
                  knowledge, I started exploring different web frameworks such
                  as React, Angular, and Vue.js. These frameworks allowed me to
                  build complex and scalable web applications with ease. I
                  immersed myself in learning their ins and outs, understanding
                  their best practices, and applying them to real-world
                  projects. Throughout my career, I have worked on various
                  projects ranging from personal websites to large-scale
                  enterprise applications. Each project has presented unique
                  challenges, pushing me to continuously learn and adapt.
                  development.
                </motion.p>

                <div className="secondPart">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    I have honed my problem-solving skills and developed a keen
                    eye for detail, ensuring that every website I create is not
                    only visually appealing but also user-friendly and
                    accessible. In addition to technical skills, I value
                    continuous learning and staying up-to-date with the latest
                    trends and technologies in the industry. I actively
                    participate in online communities, attend web development
                    conferences, and engage in professional development courses
                    to enhance my skills and broaden my perspective. Web
                    development is not just a job for me; it's a passion. I am
                    constantly seeking new ways to improve and innovate, always
                    striving to deliver the best possible user experience
                    through my work. I am excited to continue my journey in this
                    ever-evolving field and contribute to the future of web
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
