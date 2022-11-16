const clickOutsite = (target) => {
	document.addEventListener("keydown", function (e) {
		if (e.keyCode == 27) {
			$(target).removeClass("is-active");
		}
	});

	$(document).mouseup(function (e) {
		if (!target.is(e.target) && target.has(e.target).length === 0) {
			target.removeClass("is-active");
		}
	});
};

export default clickOutsite;
