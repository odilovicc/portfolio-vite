import React from "react";
import { Progress } from "antd";
import { motion } from "framer-motion";
function SkillSass() {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="skillCard">
        <div className="cardHeader">
          <img src="/images/sass.svg" className="skillName" alt="" />
        </div>
        <div className="cardBody text-white">
          <Progress
            type="circle"
            percent={80}
            className="text-white"
            strokeColor="#F06292"
          />
        </div>
      </motion.div>
    </div>
  );
}
export default SkillSass;
