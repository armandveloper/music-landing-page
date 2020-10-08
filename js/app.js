(() => {
	const $carousel = document.getElementById('carousel'),
		$btnNext = document.getElementById('btn-next'),
		$btnPrev = document.getElementById('btn-prev');

	let offsetX = $carousel.scrollWidth / $carousel.childElementCount + 20;

	const nextItem = () => {
		$carousel.scrollLeft += offsetX;
	};

	const prevItem = () => {
		$carousel.scrollLeft -= offsetX;
	};

	$btnNext.addEventListener('click', nextItem);
	$btnPrev.addEventListener('click', prevItem);
})();
