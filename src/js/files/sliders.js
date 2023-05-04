/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.photos__swiper')) {
		new Swiper('.photos__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			effect: 'fade',
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// Arrows
			navigation: {
				nextEl: '.photos-slider__arrows .photos-slider__arrow-next',
				prevEl: '.photos-slider__arrows .photos-slider__arrow-prev',
			},
			breakpoints: {
				1: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				380: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				550: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1000: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}

	if (document.querySelector('.stati__swiper')) {
		new Swiper('.stati__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			effect: 'fade',
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// Arrows
			navigation: {
				nextEl: '.stati-slider__arrows .stati-slider__arrow-next',
				prevEl: '.stati-slider__arrows .stati-slider__arrow-prev',
			},
			breakpoints: {
				1: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				380: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				550: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1000: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}

	if (document.querySelector('.product__gallery-main__swiper')) {
		new Swiper('.product__gallery-main', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs],
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 32,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			lazy: true,
			// Dotts
			thumbs: {
				swiper: {
					el: '.product__gallery-min',
					breakpoints: {
						320: {
							spaceBetween: 0,
							slidesPerView: 2,
							slidesPerGroup: 2,
							direction: 'horizontal'
						},
						480: {
							spaceBetween: 10,
							slidesPerView: 4,
							slidesPerGroup: 2,
							direction: 'vertical'
						},
					}
				}
			},
			// Arrows
			//navigation: {
			//nextEl: '.main-slider__arrows .main-slider__arrow-next',
			//	prevEl: '.main-slider__arrows .main-slider__arrow-prev',
			//},

			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});