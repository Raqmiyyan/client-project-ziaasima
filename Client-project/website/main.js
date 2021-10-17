$(function () {
    $('.hamburger.menu') .on('click', function(){
        $('.toggle').toggleClass('open');
        $('.list').toggleClass('open');
    })
})