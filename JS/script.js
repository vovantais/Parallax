
document.onload = () => {
	const PARALLAX = document.querySelector('.parallax');

	if (PARALLAX) {
		const CONTENT = document.querySelector('.parallax__container'),
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
	}

}