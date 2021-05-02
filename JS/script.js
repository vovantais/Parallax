window.onload = () => {
	const PARALLAX = document.querySelector('.parallax');

	if (PARALLAX) {
		const CONTENT = document.querySelector('.content'),
		 	CONTENT_CONTAINER = document.querySelector('.content__container'),
			CLOUDS = document.querySelector('.parallax__clouds'),
			MONTAINS = document.querySelector('.parallax__mountains'),
			HUMAN = document.querySelector('.parallax__human');

		// Коэффиценты (изменяет количестово пикселей)
		const COEFFICIENT_CLOUDS  = 40,
			COEFFICIENT_MONTAINS  = 20,
			COEFFICIENT_HUMAN  = 10;

		// Скорость анимации 
		const SPEED = 0.05;

		// Начальные значения позиции 
		let positionX = 0,
		positionY = 0,
		cordXpercent = 0,
		cordYpercent = 0;
		
		function setMouseParallaxStyle() {
			const DIST_X = cordXpercent - positionX,
				DIST_Y = cordYpercent - positionY;

				positionX = positionX + (DIST_X * SPEED);
				positionY = positionY + (DIST_Y * SPEED);

				CLOUDS.style.cssText = `transform: translate(${positionX / COEFFICIENT_CLOUDS}%,${positionY / COEFFICIENT_CLOUDS}%);`;
				MONTAINS.style.cssText = `transform: translate(${positionX / COEFFICIENT_MONTAINS}%,${positionY / COEFFICIENT_MONTAINS}%);`;
				HUMAN.style.cssText = `transform: translate(${positionX / COEFFICIENT_HUMAN}%,${positionY / COEFFICIENT_HUMAN}%);`;

				requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		function parallaxListener() {
			PARALLAX.addEventListener('mousemove', (e) => {
				// получение ширины и высоты блока
				const PARALLAX_WIDTH = PARALLAX.offsetWidth,
					PARALLAX_HEIGHT = PARALLAX.offsetHeight;

				// когда курсор будет по ссередине это будет 0
				const COORD_X = e.pageX - PARALLAX_WIDTH / 2,
					COORD_Y = e.pageY - PARALLAX_HEIGHT / 2;

				// получаем проценты 
				cordXpercent = COORD_X / PARALLAX_WIDTH * 100;
				cordYpercent = COORD_Y / PARALLAX_HEIGHT * 100;
				scrollParallax(PARALLAX_HEIGHT);
			})
		}
		parallaxListener();

		function scrollParallax(PARALLAX_HEIGHT) {
			let thresholdSets = [];
			for (let i = 0; i <= 1; i += 0.005) {
				thresholdSets.push(i);
			}

			const callback = () => {
				const SCROLL_TOP_PERCENT = window.pageYOffset / PARALLAX_HEIGHT * 100;
				setParallaxItemsStyle(SCROLL_TOP_PERCENT);
			}

			const observer = new IntersectionObserver(callback, {
				threshold : thresholdSets,
			})

			observer.observe(document.querySelector('.content'));

			function setParallaxItemsStyle (SCROLL_TOP_PERCENT) {
				CONTENT_CONTAINER.style.cssText = `transform: translate(0%,-${SCROLL_TOP_PERCENT / 9}%);`;
				MONTAINS.parentElement.style.cssText = `transform: translate(0%,-${SCROLL_TOP_PERCENT / 6}%);`;
				HUMAN.parentElement.style.cssText = `transform: translate(0%,-${SCROLL_TOP_PERCENT / 3}%);`;
			}
		}
	}
}