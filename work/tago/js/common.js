var swiper_1 = undefined;
var swiper_2;
var swiper_3;


$(document).ready(function(){
    
    $(".datepicker").datepicker({
        showOn: 'both',
        buttonImage: "img/ico/datepicker_ico.png",
        buttonImageOnly: true,
    });

    
    //모바일 gnb 
    $('.menu_open').on('click',function(){
        $("html, body").addClass("not_scroll");
        $('.m_menu').addClass('active');
        $('.overlay').fadeIn();
    });
    $('.menu_close, .overlay').on('click',function(){
        $("html, body").removeClass("not_scroll");
        $('.m_menu').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('.m_nav > li > a').on('click',function(e){
        $('.m_submenu').stop().slideUp();
        $(this).next().stop().slideToggle();

        $(this).toggleClass('on');
        
		if ($('.m_nav > li > a').hasClass('on')) {
			$('.m_nav > li > a').removeClass('on');
			$(this).toggleClass('on');
		}
    })



    // 검색창 show
    $(window).resize(function() {
        if($(window).width() > 768) { 
            $('.search_open').hide();
        }
    });

    $('.search_btn').on('click', function(){
        $('.search_open').show();
    });

    $('.search_open .menu_close').on('click', function(){
        $('.search_open').hide();
    });


    // 필터 열기,닫기
    $('.option_filter').hide();
    $('.filter_wrap .filter_text').on('click', function(){
        $('.option_filter').show();
    });
    $('.close_filter').on('click', function(){
        $('.option_filter').hide();
    });

    // place_tab
    var cnt = 0 ; 
    
    $('.place_cont .tab_place').hide().first().show();
    $('.place_list li').click(function(){
        cnt = $(this).index();
        
        $('.place_cont .tab_place').hide();
        $('.tab_place.place' + cnt ).show();
        $('.place_list li').removeClass('on');
        $(this).addClass('on');
    });	

    var swiper = new Swiper(".place_slide", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".goods_slide", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

/* ====================  main  ==================== */
    ///////////////이달의 특가
    
    if($(window).width() < 768) {  
        swp1();
    }

    $(window).resize(function() {
        if($(window).width() < 768) {
            if( swiper_1 == undefined ){
                swp1();
            }  
            
        }
        else {
            if( swiper_1 != undefined ){
                swiper_1.destroy();
                swiper_1 = undefined;
            }
        }
    });

    ///////////////봄에어울리는숙소
    if($(window).width() < 768) {  
        swp2();
    }

    $(window).resize(function() {
        if($(window).width() < 768) {
            if( swiper_2 == undefined ){
                swp2();
            }  
            
        }
        else {
            if( swiper_2 != undefined ){
                swiper_2.destroy();
                swiper_2 = undefined;
            }
        }
    });

    ///////////////분위기좋은핫플
    if($(window).width() < 768) {  
        swp3();
    }

    $(window).resize(function() {
        if($(window).width() < 768) {
            if( swiper_3 == undefined ){
                swp3();
            }  
            
        }
        else {
            if( swiper_3 != undefined ){
                swiper_3.destroy();
                swiper_3 = undefined;
            }
        }
    });
});


function swp1() {
    swiper_1 = new Swiper(".special_slide", {
        pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5
            },
            480: {
                slidesPerView: 1.5
            },
        },
    });
}


function swp2() {
    swiper_2 = new Swiper(".season_slide", {
        pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            },
        },
    });
}

function swp3() {
    swiper_3 = new Swiper(".hotplace_slide", {
        pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2.2
            },
            480: {
                slidesPerView: 1.5
            },
        },
    });
}
