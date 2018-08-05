// JavaScript Document
 
//イントロ文章がスラスラ
$(function() {
    var $allMsg = $('#text1');
    var $wordList = $('#text1').html().split("");
    $('#text1').html("");
    var $idx = 0;
 
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay($idx * 200);
        newEL.animate({ opacity: 1 }, 1100);
        $idx += 1;
    });
 
    $allMsg = $('#text2');
    $wordList = $('#text2').html().split("");
    $('#text2').html("");
 
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay($idx * 200);
        newEL.animate({ opacity: 1 }, 1100);
        $idx += 1;
    });
 
    $allMsg = $('#text3');
    $wordList = $('#text3').html().split("");
    $('#text3').html("");
 
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay($idx * 200);
        newEL.animate({ opacity: 1 }, 1100);
        $idx += 1;
    });
});
 
//テキストが終わったら背景を表示する
 
 
 
 
//一定期間後非表示にする
setTimeout(function() {
    $('#text1').fadeOut(3);
    $('#text2').fadeOut(3);
    $('#text3').fadeOut(3);
}, 7);
//3000 と　7000にそれぞれ修正
 
setTimeout(function() {
    $('#wrapper').fadeIn('slow');
},
11);
//  11000に修正
 
 
//画像切替 5秒ごと
 
$(function(){
// 設定
 
var $interval = 5000; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 3000; // フェード処理の早さ（ミリ秒）
$("#slide ul li").css({"position":"relative","overflow":"hidden"});
$("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
$("#slide ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#slide ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
});
 
//クリックされたら表示する
$(function(){
    $('#gnavi').hide();
    $('.fa').on('click', function() {
        $("#gnavi").fadeIn('slow');
        //$('.interval').hide();
        $('#wrapper').animate({'top':'-100vh'},300);
    });
});



//とグルをクリックしたら表示させる シングルクオテーションで囲まれた場合、中身を維持しようとする
$(function(){
    $('.smallSize').hide();
    $('.toggle').on('click', function() {
        if ($('.smallSize').css('display') == 'block') {
            // 表示されている場合の処理
            $(".smallSize").fadeOut('slow');
        } else {
            // 非表示の場合の処理
            $(".smallSize").fadeIn('slow');
        }
    });
});


 
//画面サイズが1024px以下になったらメニュー非表示
 
$(window).resize(function(){
    var w = $(window).width();
    var x = 1024;
    if (w <= x) {
        $('#header').css({
            display: 'none'
        });
    } else {
        $('#header').css({
            display: 'flex'
        });
    }
});
 
 
//toggle navi 画面サイズが1024px以上になったらメニュー非表示
 
$(window).resize(function(){
    var w = $(window).width();
    var x = 1024;
    if (w >= x) {
        $('#toggle-nav').css({
            display: 'none'
        });
    } else {
        $('#toggle-nav').css({
            display: 'block'
        });
    }
});
 
//クリックしたらスクロール
$(function(){
        $('a[href^=#]').click(function(){
                //スクロールスピード
                var speed = 700;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $("html, body").animate({scrollTop:position}, speed, "swing");
                return false;
        });
});
 
 /*
//クッキー処理
$(function(){
    if($.cookie("access")){
        $('#first').css({display:'none'});
    }
    $(window).load(function(){
        $.cookie("access",$('body').addClass('access'));
    })
});

*/
 