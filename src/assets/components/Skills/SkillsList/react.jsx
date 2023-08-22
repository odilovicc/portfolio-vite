import { Progress } from "antd";
import { motion } from "framer-motion";
function SkillReact() {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="skillCard">
        <div className="cardHeader">
          <img src="/images/react.svg" className="skillName" alt="" />
        </div>
        <div className="cardBody">
          <Progress type="circle" percent={50} strokeColor="#80DDEA" />
        </div>
      </motion.div>
    </div>
  );
}
export default SkillReact;
