// Portfolio.js
export function Portfolio() {
  return `
    <article class="portfolio" data-page="portfolio">
      <header>
        <h2 class="h2 article-title">Portfolio</h2>
      </header>
      <section class="projects">
        <ul class="filter-list">
          <li class="filter-item">
            <button class="active" data-filter-btn>All</button>
          </li>
          <li class="filter-item">
            <button data-filter-btn>UI/UX</button>
          </li>
          <li class="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>
        <div class="filter-select-box">
          <button class="filter-select" data-select>
            <div class="select-value" data-selecct-value>Select category</div>
            <div class="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul class="select-list">
            <li class="select-item">
              <button data-select-item>All</button>
            </li>
            <li class="select-item">
              <button data-select-item>UI/UX</button>
            </li>
            <li class="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>
        <ul class="project-list"></ul>
        <div class="portfolio-modal" id="portfolioModal">
          <div class="modal-content">
            <span class="modal-close-x">&times;</span>
            <div class="modal-body">
              <h2 class="modal-title"></h2>
              <div class="modal-image-gallery"></div>
              <div class="project-details">
                <div class="detail-section">
                  <h3>Role</h3>
                  <p class="project-role"></p>
                </div>
                <div class="detail-section">
                  <h3>Project Description</h3>
                  <p class="project-description"></p>
                </div>
                <div class="detail-section">
                  <h3>Skills & Deliverables</h3>
                  <ul class="project-skills"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  `;
} 