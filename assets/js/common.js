


const topBannerSlide = new Swiper('.top-banner .swiper', {
    autoplay:{
        delay:5000,
    },
    effect:"fade",
});




$('.nav-menu .btn-up').click(function(){
    if ($('.nav-menu').hasClass('active')){
        $('#header .sub-menu').stop().slideUp();
        $('.nav-menu').removeClass('active');
    } else {
        $('#header .sub-menu').stop().slideDown();
        $('.nav-menu').addClass('active');     
    }
})






$('#header .btn-menu').click(function(e){
    e.preventDefault();
    $('body').addClass('hidden')
    $('.pop-menu, .overlay').addClass('on')
})
$('.pop-menu .btn-close').click(function(e){
    e.preventDefault();
    $('body').removeClass('hidden')
    $('.pop-menu, .overlay').removeClass('on')
})





$('.pop-menu .link').click(function(e){
    e.preventDefault();
    $(this).siblings('.sub').stop().slideToggle('on');
    
})






$('#header .btn-search').click(function(e){
    e.preventDefault();
    $('.pop-search').addClass('on')
    $('body').addClass('no-scroll')
})
$('.pop-search .btn-close').click(function(){
    $('.pop-search').removeClass('on')
    $('body').removeClass('no-scroll')
})





$('.sc-best .tab-item a').click(function(e){
    e.preventDefault();

    let tabName=$(this).data('tab');

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    $(tabName).addClass('active').siblings().removeClass('active');
})









let lastScroll = 0;
$(window).scroll(function(){
    let curr = $(this).scrollTop();


    if (curr > 0) {
        $('#header').addClass('fixed')
    } else {
        $('#header').removeClass('fixed')
    }
    if (curr < lastScroll) {
        $('.fix-btn').addClass('on')
    } else {
        $('.fix-btn').removeClass('on')
    }
    lastScroll = curr;
})
$('.fix-btn .btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})




