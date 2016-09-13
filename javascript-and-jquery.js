var divCount = 0

while (divCount < 256) {
	$(document).ready(function() {
		$("#master").append("<div class='child'></div>")
	});
	divCount = divCount + 1;
};

$(document).ready(function() {
	$(".child").hover(function() {
		$(this).css("background-color","purple");
	});
});

