import React from "react";
import { Progress } from "antd";
import { motion } from "framer-motion";
function SkillCss() {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="skillCard">
        <div className="cardHeader">
          <img src="/images/css.svg" className="skillName" alt="" />
        </div>
        <div className="cardBody">
          <Progress type="circle" percent={100} />
        </div>
      </motion.div>
    </div>
  );
}
export default SkillCss;
