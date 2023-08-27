<template>
  <!-- start of experience section -->
  <div id="experience" class="experience-section section" tabindex="-1">
    <div class="container">
      <div class="section-content row">
        <!-- timeline -->
        <div class="experience-timeline col-lg-6">
          <ul class="outer-ul">
            <!-- <ul class="inner-ul" v-for="(group, index) in experienceChunks" :key="index">
              <li
                class="has-ultimate-tooltip"
                tabindex="0"
                v-for="item in group"
                v-for="item in group"
              >
                <template v-if="Object.keys(item).length > 0">
                  <h3>{{ item.date }}</h3>
                  <div class="ultimate-tooltip">
                    <h4 class="ultimate-tooltip-title">{{ item.companyName.en }}</h4>
                    <h5 class="ultimate-tooltip-subtitle">{{ item.jobTitle.en }}</h5>
                    <p>{{ item.desc.en }}</p>
                  </div>
                  <div class="ultimate-tooltip-arrow"></div>
                </template>
              </li>
            </ul> -->
          </ul>
        </div>

        <!-- text box -->
        <div class="experience-text col-lg-6">
          <div class="text-box">
            <!-- <h2>
                    {{ experienceYears }}+ Years of Experience
                    <br>
                  </h2> -->
            <h2>Experience</h2>
            <p>
              For a while after highschool, I wasn’t sure what I wanted to do. Initially studying
              Business, I would later focus on my efforts on Accounting and becoming a CPA.
              Unfortunately, when I finally got an Accounting internship, I quickly realised that it
              wasn’t the life I wanted. After taking a short break, I made a decision to pursue a
              career as a Softare Engineer. In doing so, I began to learn how to code on my own and
              eventually found myself in LA for a coding bootcamp at Hack Reactor. Unfortunately
              when COVID hit, I was unable to find work and was forced to make the hard decision of
              moving back home. To make the most of my time, I worked part time jobs, went back to
              school for my Bachelors in Computer Science, and eventually found work in IT.
              Committed to learning, I will always be grateful for the wealth of knowledge that came
              with the job as well as the opportunities that are to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end of experience section -->
</template>

<style scoped>
.container {
  width: 90vw;
  height: 90vh;
  /* max-width: 1200px; */
  margin: 0 auto;
  background: rgb(131, 211, 235);
}
</style>
