let urlapi = "https://my-next-firebase-app-git-master-br4mastas-projects.vercel.app"

// Setup global AJAX handlers
$(document).ajaxStart(function() {
    showLoadingSpinner();
});

$(document).ajaxStop(function() {
    hideLoadingSpinner();
});

function serviceList() {
    data = [{
        img: `./assets/images/icon-dev.svg`,
        title: `Web development`,
        description: `High-quality development of sites at the professional level.`
    }, {
        img: `./assets/images/icon-design.svg`,
        title: `Web design`,
        description: `The most modern and high-quality design made at a professional level.`
    },
    {
        img: `./assets/images/new_asset/landing-page-coffee.png`,
        title: `Digital Product`,
        description: `Koleksi produk digital siap pakai, klik untuk lihat detail dan beli.`,
        isDigitalProduct: true
    }
    ]

    let html = '';
    data.map((item, idx) => {
        if(item.isDigitalProduct){
            html += `<li class="service-item digital-product-service" style="cursor:pointer" data-digital-product>
                        <div class="service-icon-box">
                          <img src="${item.img}"
                          alt="digital product icon" width="40">
                        </div>
                        <div class="service-content-box">
                          <h4 class="h4 service-item-title">${item.title}</h4>
                          <p class="service-item-text">
                              ${item.description}
                          </p>
                        </div>
                      </li>`
        }else{
            let serviceType = item.title.toLowerCase().includes('web development') ? 'webdev' : (item.title.toLowerCase().includes('web design') ? 'webdesign' : '');
            html += `<li class="service-item" ${serviceType ? `data-service-type='${serviceType}' style='cursor:pointer'` : ''}>
                        <div class="service-icon-box">
                          <img src="${item.img}"
                          alt="design icon" width="40">
                        </div>
                        <div class="service-content-box">
                          <h4 class="h4 service-item-title">${item.title}</h4>
                          <p class="service-item-text">
                              ${item.description}
                          </p>
                        </div>
                      </li>`
        }
    })

    $('.service-list').html(html)

    // Event klik untuk digital product
    $('[data-digital-product]').on('click', function() {
        if (typeof loadDigitalProducts === 'function') loadDigitalProducts();
        $('[data-page]').removeClass('active');
        $('[data-nav-link]').removeClass('active');
        $('[data-page="digital-product"]').addClass('active');
    });

    // Event klik untuk Web development dan Web design
    $('[data-service-type="webdev"]').on('click', function() {
        $('[data-page]').removeClass('active');
        $('[data-nav-link]').removeClass('active');
        $('[data-page="portfolio"]').addClass('active');
        fetchPortfolio('web development');
    });
    $('[data-service-type="webdesign"]').on('click', function() {
        $('[data-page]').removeClass('active');
        $('[data-nav-link]').removeClass('active');
        $('[data-page="portfolio"]').addClass('active');
        fetchPortfolio('ui/ux');
    });
}



function fetchExperiences() {
    $.ajax({
        url: urlapi+'/api/experiences',
        method: 'GET',
        success: function(response) {
            // Separate work and education experiences
            const workExperiences = response.experiences.filter(exp => exp.type === 'work');
            const educationExperiences = response.experiences.filter(exp => exp.type === 'education');
            
            // Generate HTML for work experiences
            let workHtml = '';
            workExperiences.forEach(item => {
                workHtml += `<li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${item.name}</h4>
                    <span>${item.tahun}</span>
                    <p class="timeline-text">
                        ${item.description}
                    </p>
                </li>`;
            });

            // Generate HTML for education experiences
            let educationHtml = '';
            educationExperiences.forEach(item => {
                educationHtml += `<li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${item.name}</h4>
                    <span>${item.tahun}</span>
                    <p class="timeline-text">
                        ${item.description}
                    </p>
                </li>`;
            });

            // Update the DOM
            $('.experience').html(workHtml);
            $('.education').html(educationHtml);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching experiences:', error);
            // Display error message to user
            $('.experience').html('<p>Failed to load work experience data.</p>');
            $('.education').html('<p>Failed to load education data.</p>');
        }
    });
}

function fetchSkills() {
    $.ajax({
        url: urlapi+'/api/skills',
        method: 'GET',
        success: function(response) {
            // Filter skills by status
            const currentSkills = response.skills.filter(skill => skill.status === 'current');
            const aiSkills = response.skills.filter(skill => skill.status === 'ai');
            const learningSkills = response.skills.filter(skill => skill.status === 'learning');
            
            // Generate HTML for current skills
            let currentHtml = '';
            currentSkills.forEach(item => {
                currentHtml += `
                <div class="image-wraper">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <span class="text-image">${item.name}</span>
                </div>`;
            });

            // Generate HTML for AI skills
            let aiHtml = '<h3 class="h3 service-title" style="margin-top:40px">AI</h3><div class="wrap-image">';
            aiSkills.forEach(item => {
                aiHtml += `
                <div class="image-wraper">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <span class="text-image">${item.name}</span>
                </div>`;
            });
            aiHtml += '</div>';

            // Generate HTML for learning skills
            let learningHtml = '<h3 class="h3 service-title" style="margin-top:40px">On Learning</h3><div class="wrap-image">';
            learningSkills.forEach(item => {
                learningHtml += `
                <div class="image-wraper">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <span class="text-image">${item.name}</span>
                </div>`;
            });
            learningHtml += '</div>';

            // Update the DOM
            $('.skills-text').html('')
            $('.skills-text').html('<div class="wrap-image parent-skills"></div>');
            $('.parent-skills').html(currentHtml);
            $('.parent-skills').after(learningHtml);
            $('.parent-skills').after(aiHtml);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching skills:', error);
            $('.parent-skills').html('<p>Failed to load skills data.</p>');
        }
    });
}
let dataPortfolio = []

// Add carousel functionality
function initCarousel() {
    let currentSlide = 0;
    const track = $('.carousel-track');
    const slides = $('.carousel-slide');
    const dots = $('.dot');
    const totalSlides = slides.length;

    function updateCarousel(newIndex, direction = 'next') {
        const currentTransform = direction === 'next' ? 100 : -100;
        
        // Animate slide transition
        slides.eq(currentSlide).css({
            'transform': `translateX(${-currentTransform}%)`,
            'opacity': '0',
            'transition': 'transform 0.5s ease-in-out, opacity 0.3s ease-in-out'
        });
        
        slides.eq(newIndex).css({
            'transform': 'translateX(0)',
            'opacity': '1',
            'transition': 'transform 0.5s ease-in-out, opacity 0.3s ease-in-out'
        });

        // Update active states
        slides.removeClass('active');
        dots.removeClass('active');
        slides.eq(newIndex).addClass('active');
        dots.eq(newIndex).addClass('active');
        
        currentSlide = newIndex;
    }

    // Next button click
    $('.carousel-btn.next').click(() => {
        const nextSlide = (currentSlide + 1) % totalSlides;
        updateCarousel(nextSlide, 'next');
    });

    // Previous button click
    $('.carousel-btn.prev').click(() => {
        const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel(prevSlide, 'prev');
    });

    // Dot click
    $('.dot').click(function() {
        const newIndex = $(this).data('index');
        const direction = newIndex > currentSlide ? 'next' : 'prev';
        updateCarousel(newIndex, direction);
    });

    // Initialize first slide
    slides.css({
        'position': 'absolute',
        'left': '0',
        'top': '0',
        'width': '100%'
    });
    slides.eq(0).addClass('active').css('opacity', '1');
}

function fetchPortfolio(filterCategory) {
    $.ajax({
        url: urlapi+'/api/portfolio',
        method: 'GET',
        success: function(response) {
            dataPortfolio = response.portfolioItems; // Store for modal use
            
            // Generate HTML for portfolio items
            let html = '';
            dataPortfolio.forEach((item, index) => {
                html += `<li class="project-item active" data-filter-item data-category="${item.category}" data-project-index="${index}">
                    <a href="javascript:void(0)" class="project-link">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                            <img src="${item.sourceGambar}" alt="${item.judul}" loading="lazy" style="height: 145.859px; object-fit: contain;">
                        </figure>
                        <h3 class="project-title">${item.judul}</h3>
                        <p class="project-category">${item.category}</p>
                    </a>
                </li>`;
            });

            $('.project-list').html(html);

            // Add click event handlers for portfolio items
            $('.project-list').on('click', '.project-link', function(e) {
                e.preventDefault();
                const index = $(this).closest('.project-item').data('project-index');
                const projectData = dataPortfolio[index];
                
                if (projectData && projectData.modalContent) {
                    let modalContent = `
                        <div class="modal-content">
                            <button class="modal-close-x" aria-label="Close modal">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                            <div class="modal-body">
                                <h2 class="modal-title">${projectData.judul}</h2>
                                <div class="modal-image-gallery">
                                    <div class="carousel-container">
                                        <div class="carousel-track">
                                            ${projectData.modalContent.images.map((img, i) => `
                                                <div class="carousel-slide ${i === 0 ? 'active' : ''}">
                                                    <img src="${img}" alt="Project screenshot">
                                                </div>
                                            `).join('')}
                                        </div>
                                        ${projectData.modalContent.images.length > 1 ? `
                                            <div class="carousel-nav">
                                                <div class="carousel-btn prev">
                                                    <ion-icon name="chevron-back-outline"></ion-icon>
                                                </div>
                                                <div class="carousel-btn next">
                                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                                </div>
                                            </div>
                                            <div class="carousel-dots">
                                                ${projectData.modalContent.images.map((_, i) => `
                                                    <div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>

                                <div class="project-details">
                                    ${projectData.modalContent.role ? `
                                        <div class="detail-section">
                                            <h3>Role</h3>
                                            <p class="project-role">${projectData.modalContent.role}</p>
                                        </div>
                                    ` : ''}

                                    ${projectData.modalContent.description ? `
                                        <div class="detail-section">
                                            <h3>Project Description</h3>
                                            <p class="project-description">${projectData.modalContent.description}</p>
                                        </div>
                                    ` : ''}

                                    ${projectData.modalContent.challenges ? `
                                        <div class="detail-section">
                                            <h3>Challenges</h3>
                                            <ul class="project-challenges">
                                                ${projectData.modalContent.challenges.map(challenge => 
                                                    `<li>${challenge}</li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}

                                    ${projectData.modalContent.achievements ? `
                                        <div class="detail-section">
                                            <h3>Achievements</h3>
                                            <ul class="project-achievements">
                                                ${projectData.modalContent.achievements.map(achievement => 
                                                    `<li>${achievement}</li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}

                                    ${projectData.modalContent.skills ? `
                                        <div class="detail-section">
                                            <h3>Skills & Deliverables</h3>
                                            <ul class="project-skills">
                                                ${projectData.modalContent.skills.map(skill => 
                                                    `<li>${skill}</li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}

                                    <div style="display:flex; flex-direction:row; gap:10px">
                                        ${projectData.href ? `
                                            <a class="form-btn" href="${projectData.href}" target="_blank" rel="noopener noreferrer" data-form-btn style="margin-left:0px">
                                                <span>See The Web</span>
                                            </a>
                                        ` : ''}
                                        ${projectData.linkDetail ? `
                                            <a class="form-btn" href="${projectData.linkDetail}" target="_blank" rel="noopener noreferrer" data-form-btn style="margin-left:0px">
                                                <span>See Detail Process</span>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    $('#portfolioModal').html(modalContent).fadeIn(300);
                    
                    if (projectData.modalContent.images.length > 1) {
                        initCarousel();
                    }
                } else {
                    // Basic modal for projects without detailed content
                    let modalContent = `
                        <div class="modal-content">
                            <button class="modal-close-x" aria-label="Close modal">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                            <div class="modal-body">
                                <h2 class="modal-title">${projectData.judul}</h2>
                                <div class="modal-image-gallery">
                                    <img src="${projectData.sourceGambar}" alt="Project screenshot">
                                </div>
                                <div class="project-details">
                                    ${projectData.href ? `
                                        <a class="form-btn" href="${projectData.href}" target="_blank" rel="noopener noreferrer" data-form-btn style="margin-left:0px">
                                            <span>See The Web</span>
                                        </a>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                    
                    $('#portfolioModal').html(modalContent).fadeIn(300);
                }
            });

            // Modal close handlers
            $(document).on('click', '.modal-close-x', function() {
                $('#portfolioModal').fadeOut(300);
            });

            $(window).on('click', function(e) {
                if ($(e.target).is('#portfolioModal')) {
                    $('#portfolioModal').fadeOut(300);
                }
            });

            setInterac(); // Inisialisasi ulang event filter dan variabel filter setelah render project-list
            // Jalankan filter jika ada filterCategory
            if (filterCategory && typeof window.filterFunc === 'function') {
                window.filterFunc(filterCategory);
                // Set tab aktif juga
                $(".filter-list button").removeClass('active');
                if(filterCategory === 'web development') {
                    $(".filter-list button:contains('Web development')").addClass('active');
                } else if(filterCategory === 'ui/ux') {
                    $(".filter-list button:contains('UI/UX')").addClass('active');
                }
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching portfolio:', error);
            $('.project-list').html('<p>Failed to load portfolio items.</p>');
        }
    });
}

$(document).ready(function () {
    console.log('tes')
    serviceList()
   
    // fetchExperiences()
    // fetchPortfolio()
    setInterac()
    // fetchSkills()
    // loadMediumArticles() // Add this line
});

function loadMediumArticles() {
  const mediumUsername = '@brianaldybramasta';
  const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`;
  const articlesPerPage = 5;
  let currentPage = 1;
  let allArticles = [];

  fetch(rssUrl)
    .then(response => response.json())
    .then(data => {
      allArticles = data.items;
      const totalPages = Math.ceil(allArticles.length / articlesPerPage);
      
      // Initialize pagination
      setupPagination(totalPages);
      // Show first page
      displayArticles(currentPage);
    })
    .catch(error => {
      console.error('Error fetching Medium articles:', error);
      document.getElementById('medium-articles').innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <p>Failed to load articles. Please visit my 
            <a href="https://medium.com/@brianaldybramasta" target="_blank" 
               style="color: var(--orange);">Medium profile</a> directly.</p>
        </div>
      `;
    });

  function displayArticles(page) {
    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const paginatedArticles = allArticles.slice(start, end);
    
    const articlesContainer = document.getElementById('medium-articles');
    let html = '';

    paginatedArticles.forEach(article => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = article.content;
      const firstImage = tempDiv.querySelector('img');
      const imageUrl = firstImage ? firstImage.src : './assets/images/default-article.jpg';

      const pubDate = new Date(article.pubDate);
      const formattedDate = pubDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      html += `
        <div class="article-card">
          <img src="${imageUrl}" alt="${article.title}" class="article-image">
          <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <div class="article-footer">
              <a href="${article.link}" target="_blank" class="article-link">Read More →</a>
              <p class="article-date">${formattedDate}</p>
            </div>
          </div>
        </div>
      `;
    });

    articlesContainer.innerHTML = html;
    updatePaginationState(page);
  }

  function setupPagination(totalPages) {
    const paginationNumbers = document.querySelector('.pagination-numbers');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    
    // Generate page numbers
    let numbersHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      numbersHtml += `<button class="page-number ${i === 1 ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    paginationNumbers.innerHTML = numbersHtml;

    // Add event listeners
    paginationNumbers.addEventListener('click', (e) => {
      if (e.target.classList.contains('page-number')) {
        currentPage = parseInt(e.target.dataset.page);
        displayArticles(currentPage);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayArticles(currentPage);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayArticles(currentPage);
      }
    });
  }

  function updatePaginationState(page) {
    const totalPages = Math.ceil(allArticles.length / articlesPerPage);
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const pageNumbers = document.querySelectorAll('.page-number');

    // Update prev/next buttons
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;

    // Update active page number
    pageNumbers.forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
    });
  }
}

function loadDigitalProducts() {
  $.getJSON('./assets/js/digital-products.json', function(data) {
    let html = '';
    data.products.forEach(product => {
      html += `
        <div class="digital-product-card">
          <img src="${product.image}" alt="${product.title}" class="digital-product-image">
          <div class="digital-product-content">
            <h3 class="digital-product-title">${product.title}</h3>
            <p class="digital-product-desc">${product.description}</p>
            <div class="digital-product-actions">
              <a href="${product.preview}" target="_blank" class="digital-product-btn">Preview</a>
              <a href="${product.buy}" target="_blank" class="digital-product-btn buy">Beli</a>
            </div>
          </div>
        </div>
      `;
    });
    console.log('load digital product',html)
    $('#digital-products').html(html);
  }).fail(function() {
    $('#digital-products').html('<p>Gagal memuat produk digital.</p>');
  });
}