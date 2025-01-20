// Header

initScroll()

function initScroll() {
	window.addEventListener('scroll', (e) => {
		if (pageYOffset > 70) {
			$('header').addClass('js-scroll')

		} else {
			$('header').removeClass('js-scroll')

		}
	})
}


// Nav

// const hamMenu = document.querySelector('.header-ham-menu')
// const navMenuMob = document.querySelector('.header-nav-menu-mob')
// const body = document.querySelector('body')

// hamMenu.addEventListener('click', function () {
//     hamMenu.classList.toggle('active')
//     navMenuMob.classList.toggle('active')
//     // body.classList.toggle('overflow')
// })

const hamMenu = document.querySelector('.header-ham-menu')
const hamMenuSpan = document.querySelectorAll('.header-ham-menu span')
const navMenuMob = document.querySelector('.header-nav-menu-mob')
const body = document.querySelector('body')
const tel = document.querySelectorAll('.header-tel')
const logo = document.querySelector('.header-logo')
const main = document.querySelector('main')
const headerBorderMob = document.querySelector('.header-nav-box')
const headerBox = document.querySelector('.header-box')

hamMenu.addEventListener('click', function () {
	hamMenu.classList.toggle('active')
	navMenuMob.classList.toggle('active')
	main.classList.toggle('blur')
	body.classList.toggle('overflow')
	// headerBorderMob.classList.toggle('js-border-none')
	tel.forEach(function (item) {
		item.classList.toggle('black')
	})
    if (hamMenu.classList.contains('active')) {
        logo.setAttribute('src', 'assets/img/ico/logo-black.svg')
        hamMenuSpan.forEach(function (span) {
            span.style.setProperty('background', '#000')
        })
        headerBox.style.setProperty('background', '#fff')

        headerBorderMob.style.setProperty('border-bottom-color', '#000')
    } else {
        logo.setAttribute('src', 'assets/img/ico/logo.svg')
        hamMenuSpan.forEach(function (span) {
            span.style.setProperty('background', '#fff')
        })
        headerBox.style.setProperty('background', 'none')
        headerBorderMob.style.setProperty('border-bottom-color', 'rgba(246, 246, 246, 0.6)')
    }
})

main.addEventListener('click', function () {
	hamMenu.classList.remove('active')
	navMenuMob.classList.remove('active')
	main.classList.remove('blur')
	body.classList.remove('overflow')
	tel.forEach(function (item) {
		item.classList.remove('black')
	})
    logo.setAttribute('src', 'assets/img/ico/logo.svg')
    hamMenuSpan.forEach(function (span) {
        span.style.setProperty('background', '#fff')
    })
    headerBox.style.setProperty('background', 'none')
    headerBorderMob.style.setProperty('border-bottom-color', 'rgba(246, 246, 246, 0.6)')
})

const li = document.querySelectorAll('.js-nav-link')

li.forEach(function (item) {
	item.addEventListener('click', function () {
		hamMenu.classList.toggle('active')
		navMenuMob.classList.toggle('active')
		main.classList.remove('blur')
		body.classList.toggle('overflow')
		// tel.classList.toggle('black')
		tel.forEach(function (item) {
			item.classList.remove('black')
		})
        logo.setAttribute('src', 'assets/img/ico/logo.svg')
        hamMenuSpan.forEach(function (span) {
            span.style.setProperty('background', '#fff')
        })
        headerBox.style.setProperty('background', 'none')
        headerBorderMob.style.setProperty('border-bottom-color', 'rgba(246, 246, 246, 0.6)')
	})
})

// Swiper 

var swiper = new Swiper(".models-swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        780: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const header = document.querySelector(".header");
const headerModelMenu = document.querySelectorAll(".js-header-sub-menu");

initClicks()


function initClicks() {
    document.addEventListener("click", (event) => {
        if (event.target.closest(".header-menu__nav-link")) {
            header.classList.remove("active");
        }
        if (event.target.closest(".js-header-sub-menu")) {
            event.preventDefault()
            headerModelMenu.forEach(item => {
                item.classList.toggle("active");
            });
        }
    })
}
