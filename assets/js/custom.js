
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
        // {
        //     img:`./assets/images/icon-app.svg`,
        //     title:`Mobile apps`,
        //     description:`Professional development of applications for iOS and Android.`
        // },{
        //     img:`./assets/images/icon-photo.svg`,
        //     title:`Photography`,
        //     description:`I make high-quality photos of any category at a professional level.`
        // }
    ]

    let html = '';
    data.map(item => {
        html += `<li class="service-item">
              <div class="service-icon-box">
                <img src="${item.img}
                " alt="design icon" width="40">
              </div>
              <div class="service-content-box">
                <h4 class="h4 service-item-title">${item.title}</h4>
                <p class="service-item-text">
                    ${item.description}
                </p>
              </div>
            </li>`
    })

    $('.service-list').html(html)
}

function timeLineList() {

    data = [{
        name: `University Dr. Soetomo, Surabaya`,
        tahun: `2018 — 2022`,
        description: `Computer Science`
    }, {
        name: `Senior High School 1 Padangan, Bojonegoro`,
        tahun: `2015 — 2018`,
        description: `Natural Sciences`
    }]

    let html = '';
    data.map(item => {
        html += `<li class="timeline-item">
            <h4 class="h4 timeline-item-title">${item.name}</h4>
            <span>${item.tahun}</span>
            <p class="timeline-text">
            ${item.description}
            </p>
        </li>`
    })

    $('.education').html(html)

}

function expericeList() {

    data = [{
        name: `Morning Glory Enteprise - Front End Developer`,
        tahun: `2023 — Now`,
        description: `
        <ul class="timeline-text">
            <li>Converting designs into functional code.</li>
            <li>Developing responsive user interfaces.</li>
            <li>Optimizing web interfaces for performance and usability.</li>
            <li>Enhancing interactivity in user interfaces.</li>
            <li>Collaborating with backend teams to process and display data.</li>
            <li>Coordinating with analysts to develop necessary features.</li>
            <li>Managing time effectively to meet deadlines.</li>
            <li>Handling multiple projects simultaneously.</li>
        </ul>`
    }, {
        name: `Nuri - UI/UX Designer (Internship)`,
        tahun: `2022`,
        description: `
        Solving cash on delivery issues in the E-Commerce application.
        <ul class="timeline-text">
            <li>Learning Google Analytics.</li>
            <li>Conducting User and Competitor Research.</li>
            <li>Creating User Flow and Information Architecture.</li>
            <li>Creating Wireframes.</li>
            <li>Creating Visual Design Prototyping.</li>
        </ul>`
    }, {
        name: `Toko Amanah - UI/UX Designer (Internship)`,
        tahun: `2022`,
        description: `
        Resolving business digitalization issues, in the form of an application to check the availability of goods and adding a payment feature to the Toko Amanah application.
        <ul class="timeline-text">
            <li>Conducting Competitor Research.</li>
            <li>Creating User Flow.</li>
            <li>Creating Card Sorting.</li>
            <li>Creating Information Architecture.</li>
            <li>Creating Wireframes.</li>
            <li>Creating Visual Design.</li>
            <li>Conducting Usability Testing.</li>
        </ul>`
    }, {
        name: `Universitas Dr.Soetomo - Fulstack Web Developer (Internship)`,
        tahun: `2021 - 2022`,
        description: `
        <ul class="timeline-text">
            <li>Responsible to creating a web-based information system for the guidance and final project defense process using Codeigniter 4.</li>
            <li>Responsible to creating the database flow in the thesis system process.</li>
            <li>Responsible to managing the front end of the system.</li>
            <li>Responsible to managing the back end of the system.</li>
            <li>Responsible for reporting any progress to the field supervisor.</li>
        </ul>`
    },]

    let html = '';
    data.map(item => {
        html += `<li class="timeline-item">
            <h4 class="h4 timeline-item-title">${item.name}</h4>
            <span>${item.tahun}</span>
            <p class="timeline-text">
            ${item.description}
            </p>
        </li>`
    })

    $('.experience').html(html)

}

function portfolio() {
    data = [
        {
            sourceGambar: './assets/images/new_asset/service desk.png',
            judul: 'Service Desk',
            href: '#',
            onHover: 'Service Desk',
            category: 'web development'
        }, {
            sourceGambar: './assets/images/new_asset/gkid.jpg',
            judul: 'Project Management - GKID',
            href: 'https://brianaldybramasta.wixsite.com/brianbramasta/gkdi',
            onHover: 'MGMX',
            category: 'web development'
        },  {
            sourceGambar: './assets/images/new_asset/plastik prima.jpg',
            judul: 'Plastik Prima',
            href: 'http://47.74.214.215:82/pabrik_plastik/auth',
            onHover: 'MGMX',
            category: 'web development'
        }, {
            sourceGambar: './assets/images/new_asset/absensi_yefta.jpg',
            judul: 'Absensi Karyawan',
            href: 'https://github.com/br4masta/absensi_yefta',
            onHover: 'MGMX',
            category: 'web development'
        },{
            sourceGambar: './assets/images/new_asset/MGMX.jpg',
            judul: 'MGMX',
            href: 'https://brianaldybramasta.wixsite.com/brianbramasta/mgmx',
            onHover: 'MGMX',
            category: 'web development'
        },
        {
            sourceGambar: './assets/images/new_asset/AzLogistik.jpg',
            judul: 'AZ Logistic',
            href: 'https://brianaldybramasta.wixsite.com/brianbramasta/az-logistic',
            onHover: 'AZ Logistic',
            category: 'web development'
        },
        {
            sourceGambar: './assets/images/new_asset/FamilyTree.jpg',
            judul: 'Family Tree',
            href: 'http://47.74.214.215:82/family_tree_dev/auth',
            onHover: `Creating User Interface for the Back Office<br />Role: Front End`,
            category: 'web development'
        },
        {
            sourceGambar: './assets/images/new_asset/KBOnline.jpg',
            judul: 'KB Online',
            href: 'http://47.74.214.215:82/purchasing-kb/user/login',
            onHover: 'KB Online',
            category: 'web development'
        }, {
            sourceGambar: './assets/images/new_asset/tracking user.jpg',
            judul: 'Pantau Aja',
            href: 'http://47.74.214.215:82/tracking_user/auth',
            onHover: 'Sistem Tracking',
            category: 'web development'
        },
        {
            sourceGambar: './assets/images/new_asset/payroll sistem.jpg',
            judul: 'Rajapaksi',
            href: 'https://rajapaksidev.mgbix.id/',
            onHover: 'Sistem Absensi dan Penggajian',
            category: 'web development'
        }, {
            sourceGambar: './assets/images/new_asset/LandingPage.jpg',
            judul: 'Landing Page',
            href: 'http://47.74.214.215:82/tracking_compro/',
            onHover: 'Landing Page',
            category: 'web development'
        },
        {
            sourceGambar: './assets/images/new_asset/si.jpg',
            judul: 'Sistem Informasi Manajemen Tugas Akhir',
            href: 'https://brianaldybramasta.wixsite.com/brianbramasta/siteminformasimanajementugasakhir',
            onHover: 'Sistem Informasi Manajemen Tugas Akhir',
            category: 'web development'
        }, {
            sourceGambar: './assets/images/new_asset/tokoamanah.jpg',
            judul: 'Toko Amanah',
            href: 'https://brianaldybramasta.wixsite.com/brianbramasta/toko-amanah',
            onHover: 'UI and UX Design Toko Amanah',
            category: 'ui/ux'
        }, {
            sourceGambar: './assets/images/new_asset/nuri.png',
            judul: 'UX Design PT Nuri',
            href: 'https://brianaldybramasta.wixsite.com/brianbramasta/cashondelivery',
            onHover: 'UI and UX Design Toko Amanah',
            category: 'ui/ux'
        }
        // {
        //     sourceGambar: './assets/images/new_asset/movie search.jpg',
        //     judul: 'Search Movie',
        //     href: 'https://brianaldybramasta.wixsite.com/brianbramasta/siteminformasimanajementugasakhir',
        //     onHover: 'React Consume API, search movie'
        // }
    ]

    let html = '';
    data.map(item => {
        html += `<li class="project-item  active" data-filter-item data-category="${item.category}">
              <a href="${item.href}" target="_blank">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="${item.sourceGambar}" alt="finance" loading="lazy">
                </figure>
                <h3 class="project-title">${item.judul}</h3>
                <p class="project-category">${item.category}</p>
              </a>
            </li>`
    })

    $('.project-list').html(html)

}

$(document).ready(function () {
    console.log('tes')
    serviceList()
    timeLineList()
    expericeList()
    portfolio()
    setInterac()

});