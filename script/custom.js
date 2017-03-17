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
		$(".screen-app-call").css("display", "block");
		$(".screen-app-call-1").css("display", "block");
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
	
	$(".menu-call-item").mouseenter(function()
	{
		$(this).css("background-color", "#0B6121");
	});

	$(".menu-call-item").mouseleave(function()
	{
		$(this).css("background-color", "#088A29");
	});

	$(".menu-call-item").click(function()
	{
		if($(this).hasClass("menu-call-item-1"))
		{
			$(".screen-app-call-all").css("display", "none");
			$(".screen-app-call-1").css("display", "block");
		}
		if($(this).hasClass("menu-call-item-2"))
		{
			$(".screen-app-call-all").css("display", "none");
			$(".screen-app-call-2").css("display", "block");
		}
		if($(this).hasClass("menu-call-item-3"))
		{
			$(".screen-app-call-all").css("display", "none");
			$(".screen-app-call-3").css("display", "block");
		}
	});

	$(".numero-tool-item-1").mouseenter(function()
	{
		$(".numero-tool-item-call").css("background-color", "#B40404");
	});

	$(".numero-tool-item-1").mouseleave(function()
	{
		$(".numero-tool-item-call").css("background-color", "#FE2E2E");
	});

	$(".numero-tool-item-2").click(function()
	{
		$(".area-num").empty();
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
