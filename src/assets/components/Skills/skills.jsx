import "./skills.css";

import SkillHtml from "./SkillsList/html";
import SkillCss from "./SkillsList/css";
import SkillSass from "./SkillsList/sass";
import SkillJs from "./SkillsList/js";
import SkillVue from "./SkillsList/vue";
import SkillReact from "./SkillsList/react";
import React from "react";
export default function Skills() {
  return (
    <div className="flex justify-center items-center h-screen" id="skills">
      <section className="skillsSection">
        <div>
          <h1 className="skillsSectionTitle">
            Skills <span className="text-[--primary-text]">#</span>
          </h1> 
        </div>
        <div className="skillsList">
          <SkillHtml></SkillHtml>
          <SkillCss></SkillCss>
          <SkillSass></SkillSass>
          <SkillJs></SkillJs>
          <SkillVue></SkillVue>
          <SkillReact></SkillReact>
        </div>
      </section>
    </div>
  );
}
