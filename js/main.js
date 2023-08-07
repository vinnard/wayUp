$(window).scroll(function() {
    $('.main-content__skills').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("fadeInLeft");
        }
    })
})

var scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);