$.fn.toggleText = function(t1, t2) {
	if (this.text() == t1) this.text(t2);
	else this.text(t1);
	return this;
};

$(document).ready(function() {
	$(".overlay").hide();
	$(".hide").hide();

	$("#menu").click(function() {
		$(".overlay").toggle();
	});

	$(".overlay").click(function() {
		$(".overlay").hide();
	})

	$(".show-more").click(function() {
		$(this).next(".hide").toggle();
		$(this).toggleText('More >', 'Less >');
	});
});
