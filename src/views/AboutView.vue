<template>
  <!-- start of about section -->
  <div class="container" tabindex="-1">
    <!-- <div class="container"> -->
      <div class="section-content row">
        <!-- about image -->
        <div class="about-img col-lg-6">
          <div class="layer" v-clone>
            <!-- <img src="https://via.placeholder.com/330x500" alt="User Name"> -->
          </div>
        </div>

        <!-- text box -->
        <div class="about-text col-lg-6">
          <div class="text-box">
            <h2>
              Do you have any creative projects in mind?
              <br />
              Let me know how I can help!
            </h2>
            <p>
              Software Engineer with with Full-Stack Proficiency. Capable of bridging the gap
              between front end and back end, with a comprehensive understanding of the entire
              development process. During my time I’ve spent as a student and an Application Support
              Specialist, I have been keen on developing skills that may help me in any position
              moving forward. From proper note taking techniques, planning, and communications
              skills, I’m confident in saying that I have the skills to adapt and learn in any
              environment I’m put into.
            </p>
            <div class="btns-container">
              <a href="#contact" class="btn btn-primary">Contact Me</a>
              <a
                download="JustinLuResume2023.pdf"
                href="./assets/pdf/JustinLuResume2023.pdf"
                class="btn btn-outline-light"
                >Download Resume</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
  <!-- end of about section -->
</template>

<style scoped>
.container {
  width: 90vw;
  height: 90vh;
  /* max-width: 1200px; */
  margin: 0 auto;
  background: #ff1;
}
</style>
