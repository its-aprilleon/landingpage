$(document).ready(function () {
    // Start navbar

    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if (getscrolltop >= 200) {
            $('.navbar').addClass('navmenus');
        } else {
            $('.navbar').removeClass('navmenus');
        }
    });

    $('.navbuttons').click(function () {
        $(this).toggleClass('crossxs');
    });
    // End nav bar

    //START Property Section

    $('.propertylists').click(function () {
        // $(this).addClass('activeitems');

        $(this).addClass('activeitems').siblings().removeClass('activeitems');

        // const filtervalue = $(this).attr('data-filter');
        const filtervalue = $(this).data('filter');

        // console.log(filtervalue);

        if (filtervalue === 'all') {
            $('.filters').show('slide', 500);
        } else {
            // method 1
            $('.filters').hide('slide', 500);
            $('.filters')
                .filter('.' + filtervalue)
                .show('slide', 500);

            // method 2
            //  $('.filters')
            //      .not('.' + filtervalue)
            //      .hide();

            // $('.filters')
            //     .filter('.' + filtervalue)
            //     .show();
        }
    });

    // END Property section

    // start adv section

    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if (getscrolltop >= 200) {
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        } else {
            $('.advimages').removeClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        }
    });

    // end adv section
});
