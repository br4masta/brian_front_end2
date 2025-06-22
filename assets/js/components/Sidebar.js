// Sidebar.js
export function Sidebar() {
  return `
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src="./assets/images/new_asset/brian_blue_bg_squere.png" alt="Brian Bramasta" width="80">
        </figure>
        <div class="info-content">
          <h1 class="name" title="Brian Aldy Bramasta">Brian Bramasta</h1>
          <p class="title" style="color:white">Frontend Developer</p>
        </div>
        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      <div class="sidebar-info_more">
        <div class="separator"></div>
        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Email</p>
              <a href="mailto:Brianaldybramasta@gmail.com" class="contact-link">Brianaldybramasta@gmail.com</a>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Phone</p>
              <a href="tel:+62895397115216" class="contact-link">+62-895397115216</a>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Birthday</p>
              <time datetime="1982-06-23">January 27, 2000</time>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Location</p>
              <address>Surabaya, East Java, INA</address>
            </div>
          </li>
        </ul>
        <div class="separator"></div>
        <ul class="social-list">
          <li class="social-item">
            <a href="https://www.linkedin.com/in/brian-aldy-bramasta-718755186/" target='_blank' class="float d-flex align-items-center justify-content-center">
              <img src="./assets/images/new_asset/LinkedIn 2.png" alt="" width="18px" />
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.instagram.com/br4masta/" target='_blank' class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  `;
} 