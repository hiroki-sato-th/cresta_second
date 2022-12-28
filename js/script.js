// コードを貼り付けてください
$(function(){
    // $('.test').hide();
    // $('.nav_toggle').on('click', function () {
    //     $('.nav_toggle, .nav').toggleClass('show');
    // });
    $('.nav_toggle').click(function(){
        $('.nav_toggle, .nav').toggleClass('show');
        
        if($('.logo').hasClass('first')){
            $(".logo img:first-child").hide();
            $(".logo img:first-child").next("img").show();
            $('.logo').removeClass("first");
            $('.logo').addClass("second");
        }
        else{
            $(".logo img:first-child").show();
            $(".logo img:first-child").next("img").hide();
            $('.logo').addClass("first");
        }
    });
    
    
    // $('.test').hover(
    //     function(){
    //         console.log('重なった');
    //         $('.test').css('background', 'red');
            

    //     },
    //     function(){
    //         console.log('離れた');
    //         $('.test').css('background', 'white');
    //     }
    // );

    $('.button').hover(
        function(){
            // console.log('重なった');
            // $('.humberger-button').animate({'width': 500},'slow');
            // $('.humberger-button a').animate({'color': 'red'}, 'slow');
            // $('.humberger-button').css('background', 'white');
            // $('.humberger-button a').css('color', 'red');

        },
        function(){
            // console.log('離れた');
            // $('.humberger-button').animate({'background': 'red'}, 'slow');
            // $('.humberger-button a').animate({'color': 'white'}, 'slow');
            // $('.humberger-button').css('background', 'red');
            // $('.humberger-button a').css('color', 'white');
    });
    $('.reason-wrapper-part1').on('inview', function(event, isInView) {
        if (isInView) {
            if (isInView) 
            {
                console.log('画面内に入った');
                $('.reason-part1').removeClass('init');
                $('.reason-part1').addClass('fade-in');

     
                
            }
        } 
    });
    $('.reason-wrapper-part2').on('inview', function(event, isInView) {
        if (isInView) {
            if (isInView) 
            {
                console.log('画面内に入った');
                

                $('.reason-part2').removeClass('init');
                $('.reason-part2').addClass('fade-in');
                
            }
        } 
    });
    
    $('.review-container').on('inview', function(event, isInView) {
        if (isInView) {
            if (isInView) 
            {
                // console.log('画面内に入った');
                $(this).removeClass('init');
                $(this).addClass('fade-in');
            }
        } 
    });

    
// });
    //即時関数　即時に実行、処理したいコード
    (function(){
        // 設定
        var interval =3000; // 切り替わりの間隔（ミリ秒）
        var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
        $(".mainvisual-container img").hide();
        $(".mainvisual-container img:first").addClass("active").show();
     
        var changeImage = function(){
                var $active = $(".mainvisual-container img.active");
                var $next = $active.next("img").length?$active.next("img"):$(".mainvisual-container img:first");
                // console.log($active.next("img"));
                // console.log($active.next("img").length);
                $active.fadeOut(fade_speed).removeClass("active");
                $next.fadeIn(fade_speed).addClass("active");
        }
     
        // 無名関数 changeImageを呼び出す
        setInterval(changeImage,interval);
         
         }());
}); 


