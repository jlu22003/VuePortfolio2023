<template>
  <!-- start of skills section -->
  <div id="skills" class="skills-section section" tabindex="-1">
    <div class="container">
      <div class="section-content row">
        <!-- text box -->
        <div class="skills-text col-lg-6">
          <div class="text-box">
            <h2>
              What My Programming
              <br />
              Skills Include?
            </h2>
            <p>
              I am a Software Engineer with a keen interest in innovation and development. I am
              currently a Bachelor of Science in Computer Science studying at Kennesaw State
              University I work as an Application Support Specialist at Insight Global. I am a
              student with an interest in the world that is Software Engineering. I love anything
              aesthetic or tech-related. For a period of time I studied Full-Stack development, but
              I am now currently enrolled in school to study Data Science.
            </p>

            <div class="toggle-switch-btn">
              <input
                id="skills-list"
                type="radio"
                name="skillstype"
                value="skills"
                v-model="isSkillsOrTools"
                checked
              />
              <label for="skills-list" class="link-hover">Skills</label>
              <input
                id="tools-list"
                type="radio"
                name="skillstype"
                value="tools"
                v-model="isSkillsOrTools"
              />
              <label for="tools-list" class="link-hover">Tools</label>
              <span class="switcher-toggle"></span>
            </div>
          </div>
        </div>

        <!-- skills items -->
        <div class="skills-items col-lg-6">
          <!-- skills list -->
          <ul v-staggerdelay="50" v-show="isSkillsOrTools === 'skills'">
            <li
              tabindex="0"
              v-for="skill in skillsItems"
              :key="skill.title"
              v-tooltip="{ text: skill.title, dir: 'top' }"
            >
              <div class="skill-icon">
                <img :src="skill.imgUrl" :alt="skill.title" />
              </div>
            </li>
          </ul>

          <!-- tools list -->
          <ul v-staggerdelay="50" v-show="isSkillsOrTools === 'tools'">
            <li
              tabindex="0"
              v-for="tool in toolsItems"
              :key="tool.title"
              v-tooltip="{ text: tool.title, dir: 'top' }"
            >
              <div class="skill-icon">
                <img :src="tool.imgUrl" :alt="tool.title" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end of skills section -->
</template>

<style></style>
