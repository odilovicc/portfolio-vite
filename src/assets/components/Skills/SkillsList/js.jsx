import React from "react";
import { Progress } from "antd";
import { motion } from "framer-motion";
function SkillJs() {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="skillCard">
        <div className="cardHeader">
          <img src="/images/js.svg" className="skillName" alt="" />
        </div>
        <div className="cardBody text-white">
          <Progress
            type="circle"
            percent={80}
            className="text-white"
            strokeColor="#FFD600"
          />
        </div>
      </motion.div>
    </div>
  );
}
export default SkillJs;
