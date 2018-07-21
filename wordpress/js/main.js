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




