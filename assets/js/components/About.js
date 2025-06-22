// About.js
export function About() {
  return `
    <article class="about active" data-page="about">
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>
      <section class="about-text">
        <p>
          I am a Front End Developer with 2 years of experience specializing in building fast, responsive, and efficient web applications. With expertise in JavaScript, PHP, React.js, Laravel, and Quasar (Vue.js), I focus on delivering high-performance solutions that enhance user satisfaction. I thrive on optimizing application speed and ensuring scalability, always staying ahead of the latest web technologies.
        </p>
      </section>
      <section class="service">
        <h3 class="h3 service-title">What i'm doing</h3>
        <ul class="service-list">
          <!-- custom js -->
        </ul>
      </section>
      <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>
        <section class="testimonials-modal">
          <button class="modal-close-x close-modall" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img>
            </figure>
            <img src="./assets/images/icon-quote.svg" alt="quote icon">
          </div>
          <div class="modal-content">
            <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>
            <time datetime="2021-06-14">14 June, 2021</time>
            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  `;
} 