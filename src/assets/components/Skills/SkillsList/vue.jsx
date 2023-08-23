import React from "react";
import { Progress } from "antd";
import { motion } from "framer-motion";
function SkillVue() {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="skillCard">
        <div className="cardHeader">
          <img src="/images/vuejs.svg" className="skillName" alt="" />
        </div>
        <div className="cardBody">
          <Progress type="circle" percent={40} strokeColor="#81C784" />
        </div>
      </motion.div>
    </div>
  );
}
export default SkillVue;
