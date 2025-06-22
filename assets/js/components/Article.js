// Article.js
export function Article() {
  return `
    <article class="article" data-page="article">
      <header>
        <h2 class="h2 article-title">My Articles</h2>
      </header>
      <section class="article-feed">
        <div class="articles-wrapper">
          <div id="medium-articles" class="articles-slider"></div>
          <div class="pagination">
            <button class="pagination-btn prev" disabled>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <div class="pagination-numbers"></div>
            <button class="pagination-btn next">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </section>
    </article>
  `;
} 