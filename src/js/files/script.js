// Контейнер со всеми видео
const videosWrap = document.querySelector('.videos');

// Обработчик клика
if (videosWrap) {
	const videoEventHandler = (e) => {
		// Если у e.target нет класа video, значит данный элемент не является видео
		if (!e.target.classList.contains('video')) return false;
		const video = e.target,
			allVideos = document.querySelectorAll('.video');

		const overlay = document.querySelectorAll('.play');

		// Останавливаем все видео
		allVideos.forEach((source, index) => {
			if (source === video) return;
			source.classList.remove('isPlaying');
			source.pause();
			if (overlay) {
				overlay[index].classList.remove('_active');
			}
		})
		// Если у видео есть класс isPlaying - тогда остановить его, если нет - запустить
		if (video.classList.contains('isPlaying')) {
			video.closest('div').querySelector('.play').classList.remove('_active');
			video.pause()
		} else {
			video.closest('div').querySelector('.play').classList.add('_active');
			video.play()
		}
		video.classList.toggle('isPlaying')
	}
	// Event listener на контейнер со всеми видео
	videosWrap.addEventListener('click', (e) => videoEventHandler(e))
}

document.addEventListener("DOMContentLoaded", function () {
	var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

	if ("IntersectionObserver" in window) {
		var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (video) {
				if (video.isIntersecting) {
					for (var source in video.target.children) {
						var videoSource = video.target.children[source];
						if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
							videoSource.src = videoSource.dataset.src;
						}
					}

					video.target.load();
					video.target.classList.remove("lazy");
					lazyVideoObserver.unobserve(video.target);
				}
			});
		});

		lazyVideos.forEach(function (lazyVideo) {
			lazyVideoObserver.observe(lazyVideo);
		});
	}
});

//========================================================================================================================================================

//Таймер

document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Nov 29 2024 00:00:00');

	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');

	const normalize = (n) => n <= 9 ? `0${n}` : n

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;

		let days = normalize(Math.floor(leftUntil / 1000 / 60 / 60 / 24));
		let hours = normalize(Math.floor(leftUntil / 1000 / 60 / 60) % 24);
		let minutes = normalize(Math.floor(leftUntil / 1000 / 60) % 60);

		daysVal.innerHTML = days.toString().replace(/\d/gi, (substring) => `<span>${substring}</span>`);
		hoursVal.innerHTML = hours.toString().replace(/\d/gi, (substring) => `<span>${substring}</span>`);
		minutesVal.innerHTML = minutes.toString().replace(/\d/gi, (substring) => `<span>${substring}</span>`);
	};

	timeCount();
	setInterval(timeCount, 1000);
});
/*
function timer(id, deadLine) {
	function getTimeRemaining(endTime) {
		let DAYS, HOURS, MINUTES, SECONDS;

		const t = Date.parse(endTime) - Date.parse(new Date());

		if (t <= 0) {
			DAYS = 0;
			HOURS = 0;
			MINUTES = 0;
			SECONDS = 0;
		} else {
			DAYS = getZero(Math.floor(t / 1000 / 60 / 60 / 24));
			HOURS = getZero(Math.floor(t / 1000 / 60 / 60) % 24);
			MINUTES = getZero(Math.floor(t / 1000 / 60) % 60);
			SECONDS = Math.floor(t / 1000) % 60;
		}

		return {
			t,
			DAYS,
			HOURS,
			MINUTES,
			SECONDS,
		};
	}

	function getZero(num) {
		if (num >= 0 && num <= 10) {
			return `0${num}`;
		}

		return num;
	}

	function setClock(selector, endTime) {
		const days = document.querySelectorAll('.time-count__days .time-count__val');
		const hours = document.querySelectorAll('.time-count__hours .time-count__val');
		const minutes = document.querySelectorAll('.time-count__minutes .time-count__val');
		const seconds = document.querySelectorAll('.time-count__seconds .time-count__val');

		updateClock();

		function updateClock() {

			const timeInterval = setInterval(updateClock, 1000);
			const t = getTimeRemaining(endTime);

			days.forEach(day => {
				day.innerHTML = t.DAYS.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});
			hours.forEach(hour => {
				hour.innerHTML = t.HOURS.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});
			minutes.forEach(minute => {
				minute.innerHTML = t.MINUTES.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});
			seconds.forEach(second => {
				second.innerHTML = t.SECONDS.toString().padStart(2, '0').replace(/\d/gi, (substring) => `<span>${substring}</span>`);
			});

			if (t.t <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(id, deadLine);
}

//Вызов функции.
timer('.timer', '2024-11-29');
*/