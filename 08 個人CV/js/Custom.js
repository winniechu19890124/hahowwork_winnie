$(document).ready(function(){

	// Header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored")
		}
	})

	// Wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	// 插件會使網頁載入速度變慢, 尤其是行動裝置, 所以這裡設定當裝置小於768px就不使用進場效果, 大於才會有效果

	// Fancybox plugin options
	$('[data-fancybox="gallery"]').fancybox({
		loop : true
	});

	// Stellar plugin intialize
	if(screen.width > 768){
		$(window).stellar();
	}	
})