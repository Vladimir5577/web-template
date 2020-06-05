$(function() {
	var images = [
		"img/bars_1.jpeg",
		"img/bars_2.jpg",
		"img/1.png",
		"img/bars_3.jpg"
		
	];
	var i = 0;

	function slide() {
		$("#first_image").attr("src", images[i]);
		if (i < (images.length - 1)) {
			i++;
		} else {
			i = 0;
		}
	}
	setInterval(slide, 2000);

	var chatData = [
		{
			img: "img/ava_2.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/ava_2.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/ava_2.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/ava_2.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/ava_2.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
	];

	function appendDate(data) {
		$(".chat-area").append(`
			<li class="chat-item">
				<img class="chat-item-img" src="${data.img}" />
				<p>${data.message}</p>
			</li>
		`)
	}

	chatData.forEach(function(item){
		appendDate(item);
	});

	$(".chat-footer").on("submit", function(e) {
		var message = $(this).serializeArray()[0].value;
		e.preventDefault();
		const messageObj = {
			img: "img/ava_2.jpg",
			message: message,
		}
		appendDate(messageObj);
		$(this)[0].reset();
		$(".chat-area").each(function() {

			$(this).scrollTop($(this).outerHeight(true) + $(this).height());
		});
	})

	// add event for gallery
	$('.main_img').on("click", function() {
		$(".gallery-container").removeClass("hide");
	});

	$(".gallery-close-btn").on("click", function() {
		$(".gallery-container").addClass("hide");
	})
});