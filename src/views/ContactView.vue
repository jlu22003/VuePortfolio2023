<template>
  <!-- start of contact section -->
  <div id="contact" class="contact-section section" tabindex="-1">
    <div class="container">
      <div class="section-content row">
        <!-- text box -->
        <div class="contact-text col-lg-6">
          <div class="text-box">
            <h2>
              Got a project?
              <br />
              Please leave a Message
            </h2>
            <p>
              Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as
              soon as possible.
            </p>
          </div>

          <!-- contact info -->
          <ul class="contact-info">
            <li>
              <!-- <img src="assets/images/icons/address.png" alt="Address" /> -->
              <div>
                <strong>Address:</strong>
                Atlanta, GA
              </div>
            </li>
            <li>
              <!-- <img src="assets/images/icons/phone.png" alt="Phone" /> -->
              <div>
                <strong>Phone:</strong>
                <ul>
                  <li><a href="tel:6789780780" class="ltr-dir">(+1) 678 978 0780</a></li>
                </ul>
              </div>
            </li>
            <li>
              <!-- <img src="assets/images/icons/email.png" alt="Email" /> -->
              <div>
                <strong>Email:</strong>
                <ul>
                  <li><a href="mailto:justinklu75@gmail.com">justinklu75@gmail.com</a></li>
                </ul>
              </div>
            </li>
          </ul>

          <!-- social links -->
          <ul class="social">
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                v-tooltip="{ text: 'YouTube', dir: 'top' }"
              >
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jlu22003"
                target="_blank"
                rel="noreferrer"
                v-tooltip="{ text: 'Github', dir: 'right' }"
              >
                <i class="fa fa-git-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/just_jlu/"
                target="_blank"
                rel="noreferrer"
                v-tooltip="{ text: 'Instagram', dir: 'right' }"
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/justin-lu-b467ba99/"
                target="_blank"
                rel="noreferrer"
                v-tooltip="{ text: 'LinkedIn', dir: 'right' }"
              >
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <!-- contact form -->
        <div class="col-lg-6">
          <form
            ref="contactForm"
            class="contact-form form-styled"
            action="contact_form.php"
            data-success-msg="Message sent successfully!"
            data-err-msg="Oops! something went wrong, please try again."
          >
            <div class="group">
              <label>Name</label>
              <div class="control has-prefix-icon">
                <input type="text" name="name" placeholder="e.g. John Doe" minlength="3" required />
                <i class="fa fa-user-circle prefix-icon" aria-hidden="true"></i>

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="required" type="hidden" value="Name is required" />
                  <input
                    class="minLength"
                    type="hidden"
                    value="Name must be at least 3 characters"
                  />
                </div>
              </div>
            </div>
            <div class="group">
              <label>Email</label>
              <div class="control has-prefix-icon">
                <input
                  class="ltr-dir"
                  type="email"
                  inputmode="email"
                  name="email"
                  placeholder="e.g. john.doe@gmail.com"
                  required
                />
                <i class="fa fa-envelope prefix-icon" aria-hidden="true"></i>

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="required" type="hidden" value="Email is required" />
                  <input class="invalid" type="hidden" value="Please enter a valid email address" />
                </div>
              </div>
            </div>
            <div class="group phone-number">
              <label>Phone <span class="optional">(Optional)</span></label>
              <div class="control has-prefix-icon">
                <input type="tel" inputmode="tel" name="phone" placeholder="Phone Number" />
                <i class="fa fa-phone prefix-icon" aria-hidden="true"></i>

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="invalid" type="hidden" value="Please enter a valid Phone Number" />
                </div>
              </div>
            </div>
            <div class="group">
              <label>Message</label>
              <div class="control has-prefix-icon">
                <textarea name="message" placeholder="Write message..." required></textarea>
                <i class="fa fa-comments prefix-icon" aria-hidden="true"></i>

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="required" type="hidden" value="Message is required" />
                </div>
              </div>
            </div>
            <div class="group">
              <div class="control">
                <button
                  class="submit-btn btn btn-dark"
                  type="button"
                  @click="contactFormValidation"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end of contact section -->
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
