// Resume.js
export function Resume() {
  return `
    <article class="resume" data-page="resume">
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>
      <a href="https://drive.google.com/file/d/1L-T_D6n631DbvkSgQFUKYMVkTQu5m4aw/view?usp=sharing" target='_blank' class="form-btn resume-btn" data-form-btn="">
        <span>Resume</span>
      </a>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 class="h3">Education</h3>
        </div>
        <ol class="timeline-list education"></ol>
      </section>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 class="h3">Experience</h3>
        </div>
        <ol class="timeline-list experience"></ol>
      </section>
    </article>
  `;
} 