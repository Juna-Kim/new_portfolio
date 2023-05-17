$(function(){
    /*풀페이지*/
    $('#fullpage').fullpage({
        //options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5' ,'section6' ,'section7'],
        //autoScrolling:true,
        //scrollHorizontally: true,
        navigation:true,
        navigationPosition:'left',
        //sectionsColor: ['#ccc', '#bbb', '#eee', '#fff' ],
    });

    /* 카운트 */
    $('.number-diy').each(function() { 
        var $this = $(this),
            countTo = $this.attr('data-number');
             
            $({ countNum: $this.text()}).animate({
                countNum: countTo 
            },
            {
                duration: 5000, 
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() { 
                    $this.text(this.countNum);
                }
            });  
    });

    /*cont06 slide*/
    var swiper = new Swiper(".cont06_swiper", {
        slidesPerView: 4.2,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.pop_wrap').hide();
    $('.thumb').click(function(){
        $('.pop_wrap').show();
        var src= $(this).next().attr('src');
        $('#display').attr('src',src);
    })

    $('.close').click(function(){
        $('.pop_wrap').hide();
    })

});