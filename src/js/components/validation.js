$(".js-validation").each(function () {
	$(this).validate({
		errorElement: "span",
		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},
			message: {
				required: true,
			},
			agree: {
				required: true,
			},
		},
		messages: {
			name: "Пожалуйста, укажите ваше имя",
			email: {
				required:
					"Нам нужен ваш адрес электронной почты, чтобы связаться с вами",
				email: "Ваш адрес электронной почты должен быть в формате name@domen.com",
			},
			message: "Пожалуйста, напишите сообщение",
			agree: "Примите политику конфиденциальности",
		},
		submitHandler: function (form) {
			const formData = new FormData(form);

			fetch("send.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams(formData).toString(),
			})
				.then(() => $(".modal--success").fadeIn())
				.catch((error) => alert(error));
			return false;
		},
	});
});
