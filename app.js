$(document).ready(function(){
    $(window).scroll(function()
    {
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500 ){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // typing animation 
    var typed = new Typed(".typing", {
        strings:["Backend Developer","Web Developer"],
        typeSpped : 100, 
        backSpeed:60, 
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings:["Backend Developer","Web Developer"],
        typeSpped : 100, 
        backSpeed:60, 
        loop:true
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.navbar-btn i').toggleClass("active");

    })
})

//js dowload cv