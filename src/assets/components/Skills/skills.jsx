import { motion } from "framer-motion";
import "./skills.css";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Skills() {
  return (
    <div>
      <section className="skillsSection">
        <h1 className="skillsSectionTitle">
          Skills <span className="text-[--primary-text]">#</span>
        </h1>
      </section>
      <div className="flex items-center">
        <div className="bg-[#1e1e1e] w-max bg-opacity-50">
          <div className="mx-auto">
            
          </div>
        </div>
      </div>
    </div>
  );
}
