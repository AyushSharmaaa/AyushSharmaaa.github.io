// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$(document).ready(function () {

    let isMobile = window.innerWidth < 768;
    // Initialize AOS if used
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: isMobile ? 700 : 800,
            offset: isMobile ? 120 : 100,
            delay: 0,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            anchorPlacement: isMobile ? 'top-bottom' : 'center-bottom',
            disable: false
        });
    }
    const $toggleLink = $('#toggleLink');
    const $collapseEl = $('#morePoints');

    // Toggle text when collapse shows
    $collapseEl.on('shown.bs.collapse', function () {
        $toggleLink.text('Show Less');
    });

    // Toggle text when collapse hides
    $collapseEl.on('hidden.bs.collapse', function () {
        $toggleLink.text('Show More');
    });

    // Optional: click handler for inline link
    $toggleLink.on('click', function (e) {
        e.preventDefault();
        $collapseEl.collapse('toggle');
    });
});
