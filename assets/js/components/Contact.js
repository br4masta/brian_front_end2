// Contact.js
export function Contact() {
  return `
    <article class="contact" data-page="contact">
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>
      <section class="mapbox" data-mapbox>
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.418580061671!2d112.76534360990672!3d-7.306782292670585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb89f1c42717%3A0x6858ff81a69f99a3!2sMGE%20Morning%20Glory%20Enterprise!5e0!3m2!1sid!2sid!4v1720278114397!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>
      <section class="contact-form">
        <h3 class="h3 form-title">Contact Form</h3>
        <form className="contact-form" action="https://formspree.io/f/mknllwqe" method="POST" class="form" data-form>
          <div class="input-wrapper">
            <input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>
            <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input>
          </div>
          <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>
          <button class="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  `;
} 