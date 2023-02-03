function update()
{
	var winScrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var currentY = $(this).scrollTop();
	var ratio = currentY/winScrollMaxY;

  $('.pane .scroll .current').width(50 * ratio)
}


$(function () {
  $(window).on('scroll', function () {
  	update();

  	// console.log(currentY/winScrollMaxY);
  	// window.alert(currentY);
  });

  update();
});
