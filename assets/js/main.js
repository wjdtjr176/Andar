


















const mainSlide1 = new Swiper('.sc-visual .swiper', {
    autoplay:{
        delay:5000,
    },
    effect:"fade",
    pagination:{
        el:".swiper-pagination",   
    },
});




const bannerSlide = new Swiper('.ad-banner .swiper',{
    autoplay:{
        delay:5000,
    },
    pagination:{
        el:'.pagination',
        type:"fraction",
    }
})



const mainSlide2 = new Swiper('.sc-cate .swiper',{
    slidesPerView:2.2,
    spaceBetween:10,
})