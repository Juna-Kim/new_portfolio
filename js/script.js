
$(function () {
    
    /*헤더 고정*/
    var lnb = $(".header").offset().top;
    $(window).scroll(function() {
        var window = $(this).scrollTop();

        if(lnb <= window) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    })

    $(".gnb li > a").click(function(event){         
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
    });


    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        var windowHeight = $(window).outerHeight();
        //console.log(windowHeight);
        //console.log(scrollTop + windowHeight);

        //if (scrollTop >= 0) {

        $('.con_box').each(function(i) {
            if (scrollTop + windowHeight > $(this).offset().top) {
                $('.con_box').removeClass('on');
                $(this).addClass('on');

                /*
                var liIndex=$(this).index();
                $('.nav li').removeClass('on');
                $('.nav li:eq('+liIndex+')').addClass('on');
                */
            }
        });
       // }
    }).scroll();





    /*모바일버튼*/
    $(".m_btn").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $('.m_gnb').toggleClass("active");
    });
    $(".m_gnb a").click(function(){
        $('.m_btn').removeClass("active");
        $('.m_gnb').removeClass("active");
    });

});
