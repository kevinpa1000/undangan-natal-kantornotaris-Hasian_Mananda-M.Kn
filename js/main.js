(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });



    // Audio
    // const audio = document.getElementById('backgroundMusic');
    // audio.autoplay = true;
    // audio.loop = true;
    // let isMuted = false


    // function toggleMute() {
    //     if (isMuted) {
    //         audio.muted = false;
    //         musicButton.textContent = 'Musik: On';
    //     } else {
    //         audio.muted = true;
    //         musicButton.textContent = 'Musik: Off';
    //     }
    //     isMuted = !isMuted;
    // }

    function updateCountdown() {
        const targetDate = new Date("2023-12-02").getTime();
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    const audio = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicButton');
    const musicIcon = document.getElementById('musicIcon');
    let isMuted = false;

    function toggleMute() {
        if (isMuted) {
            audio.muted = false;
            musicIcon.className = 'fa fa-volume-up';
            musicButton.textContent = 'Musik: On';
        } else {
            audio.muted = true;
            musicIcon.className = 'fa fa-volume-off';
            musicButton.textContent = 'Musik: Off';
        }
        isMuted = !isMuted;
    }

    // Menambahkan event listener untuk tombol suara
    musicButton.addEventListener('click', toggleMute);



    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Typed Initiate
    // if ($('.typed-text-output').length == 1) {
    //     var typed_strings = $('.typed-text').text();
    //     var typed = new Typed('.typed-text-output', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         smartBackspace: false,
    //         loop: true
    //     });
    // }


    // Modal Video
    // var $videoSrc;
    // $('.btn-play').click(function() {
    //     $videoSrc = $(this).data("src");
    // });
    // console.log($videoSrc);
    // $('#videoModal').on('shown.bs.modal', function(e) {
    //     $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    // })
    // $('#videoModal').on('hide.bs.modal', function(e) {
    //     $("#video").attr('src', $videoSrc);
    // })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });


})(jQuery);