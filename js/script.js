// コードを貼り付けてください
$(function(){
    //読み込みが完了したら実行する
    $(window).on('load',function(){
        //ローディングアニメーションをフェードアウト
        $('.spinner').delay(1).fadeOut(600);
        //背景色をフェードアウト
        $('.loader-bg').delay(1).fadeOut(800);
    });
    //ページの読み込みが完了してなくても5秒後にアニメーションを非表示にする
    setTimeout(function(){
        $('.loader-bg').fadeOut(600);
    },5000);

    $('.tab').on('click', function() {
        $('.tab, .panel').removeClass('active');
    
        $(this).addClass('active');
        
        var index = $('.tab').index(this);
        $('.panel').eq(index).addClass('active');
    });
      
    // 変数に要素を入れる
	var open = $('.modal-open'),
    close = $('.modal-close'),
    container = $('.modal-container');

    //開くボタンをクリックしたらモーダルを表示する
    open.on('click',function(){	
        container.addClass('active');
        return false;
    });

    //閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click',function(){	
        container.removeClass('active');
    });

    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
        if(!$(e.target).closest('.modal-body').length) {
            container.removeClass('active');
        }
    });

    $('.accordion li').click(function() {
        $(this)
          .children('.subMenu').slideToggle();
     
        if ($(this).children('.menu').hasClass('is-active')) {
            $(this).children('.menu').removeClass('is-active');
         } else {
            $(this).children('.menu').addClass('is-active');
           }
        return false;
    });
    //クリックで動く
    // $('.nav-open').click(function(){
    // 	if($(this).hasClass('active')){
    // 		$(this).toggleClass('active');
    // 		$(this).next('nav').fadeOut();
    // 	} else {
    // 		$(this).toggleClass('active');
    // 		$(this).next('nav').fadeIn();
    // 	}
    // });
    // //ホバーで動く
    // $('.nav-open').hover(function(){
    //     $(this).toggleClass('active');
    //     $(this).next('nav').slideToggle();
    // });

    // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
    $('a[href^="#"]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = 0;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    
    $("#js-pagetop").click(function () {
        $('html, body').animate({
        scrollTop: 0
        }, 300);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('#js-pagetop').fadeIn(300);
            console.log('fade in');
        } else {
            $('#js-pagetop').fadeOut(300);
            console.log('fade out');
        }
    });

    $(document).ready(function() {
        $('.drawer').drawer();
        console.log('doc ready');
    });
      
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
    
    
    $('.reason-wrapper-part1').on('inview', function(event, isInView) {
        if (isInView) {
            if (isInView) 
            {
                // console.log('画面内に入った');
                $('.reason-part1').removeClass('init');
                $('.reason-part1').addClass('fade-in');

     
                
            }
        } 
    });
    $('.reason-wrapper-part2').on('inview', function(event, isInView) {
        if (isInView) {
            if (isInView) 
            {
                //console.log('画面内に入った');
                

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

    
    //即時関数　即時に実行、処理したいコード

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


