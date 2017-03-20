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
	
	$(".app-settings").click(function()
	{
		$(".screen").css("display", "none");
		$(".screen-app-settings").css("display", "block");
		$(".screen-app-settings-1").css("display", "block");
	});

	$(".setting-row").mouseenter(function()
	{
		$(this).css("background-color", "#D8D8D8");
	});
	
	$(".setting-row").mouseleave(function()
	{
		$(this).css("background-color", "#FFFFFF");
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
	
	$(".menu-call-item-1").mouseenter(function()
	{
		$(this).css("background-color", "#0B6121");
	});

	$(".menu-call-item-1").mouseleave(function()
	{
		$(this).css("background-color", "#088A29");
	});

	$(".menu-call-item-2").mouseenter(function()
	{
		$(this).css("background-color", "#0B6121");
	});

	$(".menu-call-item-2").mouseleave(function()
	{
		$(this).css("background-color", "#088A29");
	});

	$(".menu-call-item-3").mouseenter(function()
	{
		$(this).css("background-color", "#B45F04");
	});

	$(".menu-call-item-3").mouseleave(function()
	{
		$(this).css("background-color", "#FF8000");
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
			$(".screen").css("display", "none");
			$(".screen-app-call-all").css("display", "none");
			$(".screen-app-contact").css("display", "block");
		}
	});

	$(".numero-tool-item-1").mouseenter(function()
	{
		$(".numero-tool-item-call").css("background-color", "#0B3B17");
	});

	$(".numero-tool-item-1").mouseleave(function()
	{
		$(".numero-tool-item-call").css("background-color", "#0B6121");
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

	$(".app-contact").click(function()
	{
		$(".screen").css("display", "none");
		$(".screen-app-call-all").css("display", "none");
		$(".screen-app-contact").css("display", "block");
	});

	$(".setting-row-wallpaper").click(function()
	{
		$(".screen").css("display", "none");
		$(".screen-app-settings").css("display", "none");
		$(".screen-app-settings-wallpaper").css("display", "block");
	});

	$(".wallpapers").click(function()
	{
		$(".wallpapers").css("border", "none");
		$(this).css("border", "solid #0B6121 5px");
		
		var selectedWall = $(this).children(".selectedWall").val();

		$(".wallpaper-home").remove();
		$(".screen-home").append('<img src="./img/'+selectedWall+'.jpeg" class="wallpaper-home" />');
	});

	$(".setting-row-network").click(function()
	{
		$(".screen").css("display", "none");
		$(".screen-app-settings").css("display", "none");
		$(".screen-app-settings-network").css("display", "block");
	});

	$(".network-row").click(function()
	{
		var selectedNet = $(this).children(".selectedNet").val();
		if ($(this).hasClass("network-row-open"))
		{
			$(".opacity-div").css("display", "block");	
			$(".modal-craft-open").css("display", "block");	
			$(".name-network").empty();	
			$(".name-network").append(selectedNet);	
			$(".name-network-input").val(selectedNet);
		}
		else
		{
			$(".opacity-div").css("display", "block");	
			$(".modal-craft").css("display", "block");	
			$(".name-network").empty();	
			$(".name-network").append(selectedNet);	
			$(".name-network-input").val(selectedNet);	
		}
	});

	$(".opacity-div").click(function()
	{
		$(".opacity-div").css("display", "none");	
		$(".modal-craft").css("display", "none");	
		$(".modal-craft-open").css("display", "none");	
	});

	$(".code-button").click(function()
	{
		if ($(".code-area").val() == "1234" && $(".name-network-input").val() == "BOX-DF7310895")
		{
			$(".spot-df").css("color", "#0B6121");
			$(".spot-df-lock").css("display", "none");
			$(".indicator-wifi").css("display", "block");
			$(".network-row-df").addClass("network-row-open");
			$(".opacity-div").css("display", "none");	
			$(".modal-craft").css("display", "none");	
		}
		if ($(".code-area").val() == "1234" && $(".name-network-input").val() == "HOTSPOT")
		{
			$(".spot-hotspot").css("color", "#0B6121");
			$(".spot-hotspot-lock").css("display", "none");
			$(".indicator-wifi").css("display", "block");
			$(".network-row-hotspot").addClass("network-row-open");
			$(".opacity-div").css("display", "none");	
			$(".modal-craft").css("display", "none");	
		}
if ($(".code-area").val() == "1234" && $(".name-network-input").val() == "BOX-CHRISTINE")
		{
			$(".spot-christine").css("color", "#0B6121");
			$(".spot-christine-lock").css("display", "none");
			$(".indicator-wifi").css("display", "block");
			$(".network-row-christine").addClass("network-row-open");
			$(".opacity-div").css("display", "none");	
			$(".modal-craft").css("display", "none");	
		}
if ($(".code-area").val() == "1234" && $(".name-network-input").val() == "H4CK ME IF U CAN !")
		{
			$(".spot-h4ck").css("color", "#0B6121");
			$(".spot-h4ck-lock").css("display", "none");
			$(".indicator-wifi").css("display", "block");
			$(".network-row-h4ck").addClass("network-row-open");
			$(".opacity-div").css("display", "none");	
			$(".modal-craft").css("display", "none");	
		}
		else
		{
			$(".code-area").val("Mot de pass incorrect");
		}
	});

});
