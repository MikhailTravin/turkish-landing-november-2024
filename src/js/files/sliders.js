/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
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
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Перечень слайдеров
// Проверяем, есть ли слайдер на стронице

if (document.querySelector('.program__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.program__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 3.3,
		autoHeight: false,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,

		/*
		// Эффекты
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
			el: '.program__pagination',
			clickable: true,
		},

		// Скроллбар
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.program__arrow-prev',
			nextEl: '.program__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 16,
			},
			550: {
				slidesPerView: 1.5,
				spaceBetween: 16,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 2.5,
				spaceBetween: 16,
			},
			1310: {
				slidesPerView: 3.3,
				spaceBetween: 0,
			},
		},
		// События
		on: {

		}
	});
}

if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 2.5,
		spaceBetween: 35,
		autoHeight: false,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,

		/*
		// Эффекты
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
			el: '.reviews__pagination',
			clickable: true,
		},

		// Скроллбар
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.3,
			},
			550: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 27,
			},
			992: {
				slidesPerView: 2.5,
				spaceBetween: 35,
			},
		},
		// События
		on: {

		}
	});
}

if (document.querySelector('.courses__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.courses__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		spaceBetween: 16,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.courses__arrow-prev',
			nextEl: '.courses__arrow-next',
		},

		// Пагинация
		pagination: {
			el: '.courses__pagination',
			clickable: true,
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.5,
			},
			767.98: {
				slidesPerView: 2,
			},
			991.98: {
				slidesPerView: 2.5,
			},
		},
	});
};

if (document.querySelector('.reasons-slider-right')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	new Swiper('.reasons-slider-right', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		spaceBetween: 32,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reasons-slider-right-arrow-prev',
			nextEl: '.reasons-slider-right-arrow-next',
		},

		// Пагинация
		pagination: {
			el: '.reasons-slider-right-pagination',
			clickable: true,
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 16,
			},
			600: {
				slidesPerView: 1.5,
				spaceBetween: 16,
			},
			767.98: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			991.98: {
				slidesPerView: 2.5,
				spaceBetween: 32,
			},
		},
	});

};

if (document.querySelector('.reasons-slider-left')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	new Swiper('.reasons-slider-left', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		spaceBetween: 32,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reasons-slider-left-arrow-prev',
			nextEl: '.reasons-slider-left-arrow-next',
		},

		// Пагинация
		pagination: {
			el: '.reasons-slider-left-pagination',
			clickable: true,
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 16,
			},
			600: {
				slidesPerView: 1.5,
				spaceBetween: 16,
			},
			767.98: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			991.98: {
				slidesPerView: 2.5,
				spaceBetween: 32,
			},
		},
	});

};