var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

const body = document.querySelector('body');

var Swipes

btn.onclick = function () {
	modal.style.display = "block";
	 Swipes = new Swiper(".swiper-container", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	});

	// body.style.overflow='hidden'
	var audio = document.getElementById("myaudio");
  audio.volume = 0.2
	audio.autoplay = true
	audio.play(); 
};

span.onclick = function () {
	modal.style.display = "none";
	Swipes = null
	const video = document.querySelectorAll("video");
	for (let i = 0; i < video.length; i++) {
		video[i].load();
		video[i].muted = true
	}
	// body.style.overflowY='auto'

};

var next = document.getElementsByClassName("swiper-button-next")[0];
var prev = document.getElementsByClassName("swiper-button-prev")[0];

next.onclick = function () {
	const video = document.querySelectorAll("video");
	for (let i = 0; i < video.length; i++) {
		video[i].load();
		video[i].muted = true
	}
}

prev.onclick = function () {
	const video = document.querySelectorAll("video");
	for (let i = 0; i < video.length; i++) {
		video[i].load();
		video[i].muted = true
	}
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function () {
	setInterval(function () {
		var screenHeight = $(document).height();
		var screenWidth = $(document).width();

		var startLeft = getRandomArbitrary(0, screenWidth);

		var timeRun = getRandomArbitrary(4000, 6000);
		var opacityR = Math.random() * (1 - 0.2) + 0.2;
		var sizeR = getRandomArbitrary(10, 40);

		var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);

		var snow = document.createElement("span");

		$(snow)
			.addClass("snow-item fa fa-heart")
			.css({
				position: "absolute",
				"z-index": "1",
				color: "#ffffff",
				display: "block",
				top: 0,
				left: startLeft,
				opacity: opacityR,
				"font-size": sizeR + "px",
			})
			.appendTo("body")
			.animate(
				{
					top: screenHeight - sizeR,
					left: endLeft,
				},
				{
					duration: timeRun,
					easing: "linear",
					complete: function () {
						$(this).fadeOut("fast", function () {
							$(this).remove();
						});
					},
				}
			);
	}, 500);
});


