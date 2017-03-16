$(document).ready(function()
{
	numberLenght = 0;

	$(".home-button").click(function()
	{
		$(".screen").css("display", "none");
		$(".screen-home").css("display", "block");
	});

	$(".app-call").click(function()
	{
		$(".screen").css("display", "none");
		$(".screen-call-1").css("display", "block");
	});

	$(".app").mouseenter(function()
	{
		$(this).css("opacity", "0.7");
	});
	
	$(".app").mouseleave(function()
	{
		$(this).css("opacity", "1");
	});

	$(".numero").mouseenter(function()
	{
		$(this).css("background-color", "#D8D8D8");
	});

	$(".numero").mouseleave(function()
	{
		$(this).css("background-color", "#FFFFFF");
	});

	$(".numero").click(function()
	{
		var value = $(this).children("input").val();
		if (numberLenght < 12)
		{
			$(".area-num").append(value);
			numberLenght++;
		}
	});

});
