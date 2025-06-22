// Navbar.js
export function Navbar() {
  return `
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <button class="audio-control" id="audioControl" aria-label="Toggle audio">
            <ion-icon name="volume-mute-outline"></ion-icon>
          </button>
        </li>
        <li class="navbar-item">
          <button class="navbar-link theme-toggle" aria-label="Toggle theme" data-theme-toggle>
            <ion-icon name="contrast-outline"></ion-icon>
          </button>
        </li>
        <li class="navbar-item">
          <button class="navbar-link  active" data-nav-link onclick="serviceList()">About</button>
        </li>
        <li class="navbar-item">
          <button class="navbar-link  " data-nav-link onclick="fetchSkills()">Skills</button>
        </li>
        <li class="navbar-item">
          <button class="navbar-link" data-nav-link onclick="fetchExperiences()">Resume</button>
        </li>
        <li class="navbar-item">
          <button class="navbar-link" data-nav-link onclick="fetchPortfolio()">Portfolio</button>
        </li>
        <li class="navbar-item">
          <button class="navbar-link" data-nav-link onclick="loadMediumArticles()">Article</button>
        </li>
        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>Contact</button>
        </li>
      </ul>
    </nav>
  `;
} 