$(function(){



	$(window).resize(function () {
		let wrapWidth = $(window).width(); // 브라우저 화면 너비 실시간
		console.log(wrapWidth);

		$(".sub_menu").stop().removeClass('active');

		if (wrapWidth > 1024) {
            // pc 화면에서 실행할 코드 입력

			$('.gnb_wrap, .gnb_wrap .depth1 > a').off();

            $('.gnb_wrap .depth1 > a').on({
              	mouseenter: function () {
					$(".sub_menu").stop().addClass('active');
					$(".bg").stop().addClass('active');
              	},
			});

			$('.gnb_wrap').on({
				mouseleave: function () {
					$(".sub_menu").stop().removeClass('active');
					$(".bg").stop().removeClass('active');
				},
		  	});
				// mouseleave: function () {
				// 	$(".sub_menu").stop().removeClass('active');
				// 	$(".bg").stop().removeClass('active');
				// },
            
			
        } else {
			//모바일에서 실행될 화면
		  	$('.gnb_wrap, .gnb_wrap .depth1 > a').off();

			$('.gnb_wrap .depth1 > a').click(function (e) {
				e.preventDefault();

				$('.sub_menu').stop().removeClass('active');
				$(this).siblings().stop().addClass('active');
			});
		}
	});
	$(window).resize();

	$('.menu_btn').click(function(e){

		if($(".menu_btn").hasClass('active')){
			$("body").css('overflow','');
			$(".menu_btn").removeClass('active');
			$('.mobile_wrap').removeClass('on');
		} else {
			$("body").css('overflow','hidden');
			$(".menu_btn").addClass('active');
			$('.mobile_wrap').addClass('on');
		}
	})	

	
	// $(".gnb_wrap .depth1 > a").mouseenter(function(e){
	// 	$(".sub_menu").stop().addClass('active');
	// 	$(".bg").stop().addClass('active');
	// });

	// $(".gnb_wrap").mouseleave(function(e){
	// 	$(".sub_menu").stop().removeClass('active');
	// 	$(".bg").stop().removeClass('active');
	// });	
	
 	/* 배너 슬라이드 */
	var mySwiper = new Swiper('.visual ', {
		slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    });
	
	/* 신메뉴 슬라이드 */
	var mySwiper = new Swiper('.menu', {
		effect : 'fade',
		slidesPerView : 1,
		loop:true,
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		autoplay: {
			delay: 2000,
		},
	});

	$(function(){
		$('.result > div').hide().first().show();
		$('.tab_list > ul li').click(function(e){
				e.preventDefault();
			 
				var target = $(this);
				var index = target.index();

				$('.tab_list > ul li').removeClass("active");
				target.addClass("active");
				$('.result > div').css("display", "none");
				$('.result > div').eq(index).css("display", "block");
		 });
	});

	$(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
        }); 
    });




	
	
// 	/* 메뉴 hover 효과 */
// 	$(function(){
// 		$('.depth1').hover(function(){
// 			$(this).children('.sub_menu').stop().slideDown(500);
// 		})	
// 		$('.depth1').mouseleave(function(){
// 			$(this).children('.sub_menu').stop().slideUp(200);
// 		 })
// 	});
	
 	/*  메뉴 fixed */
	// $('.header').each(function(){
	// 	var $win = $(window),
	// 			$header = $(this),
	// 			headerTop = Math.floor($header.offset().top);
		
	// 	$win.on('scroll',function(){
	// 		var scrollTop = Math.floor($win.scrollTop());
			
			
	// 			 if(headerTop < scrollTop) {
	// 		 	$header.addClass('on');
	// 			}else{
	// 			$header.removeClass('on');
	// 			}
			
	// 	});
	// });
	

	
/* 클릭메뉴 */
	
	// $(function(){
	// 	$('.all_menu ul').hide();
	// 	$('.all_menu > span > img').click(function(){
	// 		$(this).parent().next().slideToggle();
	// 		$(this).parent().next().siblings('.all_menu ul').slideUp();
	// 	});
	// });
	
	
	
	
	
	
	
	
	
// 	/*  manoffin 서브페이지 - 글씨 높이값 맞추기  */
// /*	$(function () {
// 		show_height();
// 		// Show height
// 		function show_height() {
// 			var $liList = $(".m_con1 > ul > li");
// 			var liListArray = $liList.map(function () {
// 				return $(this).height();
// 			})
// 			//console.log(liListArray);
// 			$(".m_con1 > ul > li").css({
// 				"height": Math.max.apply(Math, liListArray)
// 			});
// 		}

// 	});
// 	*/
	
	
	
	
// 	/*음료 탭메뉴*/
// 		$(function(){
// 			/////////////////
//             var cnt = 0 ; 
            
//             $('.beverage_menu > div').hide().first().show();
            
// 			 $('.beverage_tab > ul > li').click(function(e){
//             		e.preventDefault();
				 
// 					var target = $(this);
// 					var index = target.index();

// 					$('.beverage_tab > ul > li').removeClass("active");
// 					target.addClass("active");
// 					$('.beverage_menu > div').css("display", "none");
// 					$('.beverage_menu > div').eq(index).css("display", "block");
//              });
			
// 			////////////////		
// 		})    
	
	
	
});	


