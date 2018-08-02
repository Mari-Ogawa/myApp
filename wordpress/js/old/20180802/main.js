// JavaScript Document
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
    $('#text1').fadeOut(3000);
    $('#text2').fadeOut(3000);
    $('#text3').fadeOut(3000);
}, 7000);
//3000 と　7000にそれぞれ修正

setTimeout(function() {
    $('#wrapper').fadeIn('slow');
}, 
11000);
//  11000に修正


//画像切替 5秒ごと

$(function(){
// 設定
var $width =640; // 横幅
var $height =300; // 高さ
var $interval = 5000; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 2000; // フェード処理の早さ（ミリ秒）
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
  $("#gnavi").show();
});
});

//クッキー処理
$(function(){
    if($.cookie("access")){
        $('#first').css({display:'none'});
    }
    $(window).load(function(){
        $.cookie("access",$('body').addClass('access'));
    })
});

