
(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {
        // Header 
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 150) {
                $('.header-sticky').addClass("is-sticky");
            }
            else {
                $('.header-sticky').removeClass("is-sticky");
            }
        });

        // Dropdown
        $('.navbar-light .dropdown').on('hover', function () {
            $(this).on('find', '.dropdown-menu').first().stop(true, true).slideDown(100);
        }, function () {
            $(this).on('find', '.dropdown-menu').first().stop(true, true).slideUp(50)
        });

        //  Hero slider 
        $('.hero-slider').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            dots: false,
            navText: [
                "<i class='icofont-double-left'></i>",
                "<i class='icofont-double-right'></i>"
            ]
        });

        //  Video 
        $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Date Picker
        $( function() {
             $( "#datepicker" ).datepicker();
         } );

        //  CounterUp JS
        $('.counter').counterUp({
            delay: 15,
            time: 3000
        });

        //  Doctors
        $.when($.ajax({
            type: "Get",
            url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
            success: function (response) {

                $.each(response, function (index, item) {
                    let single = $('<div/>', {
                        class: 'single-card'
                    });

                    let cart = `<div class="thumb-img">
                           <img class="img14" src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" alt="Doctor Image" />
                           <div class="hover-social">
                               <div class="d-table">
                                   <div class="d-tablecell">
                                       <ul>
                                           <li> 
                                               <a href="#">
                                                   <i class="icofont-linkedin"></i>
                                               </a>
                                           </li>
                                           <li> 
                                               <a href="#">
                                                   <i class="icofont-twitter"></i>
                                               </a>
                                           </li>
                                           <li> 
                                               <a href="#">
                                                   <i class="icofont-facebook"></i>
                                               </a>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="caption-text text-center">
                       <h3>${item.name}</h3>
                       <span class="designation mb-10">${item.profession}</span>
                       <p>${item.description}</p>
                   </div>`

                    $(single).html(cart);
                    $('#cart').append(single);

                });
            },
            error: function (response) {
                console.log("ERROR", response);
            }
        })).then(res => {
            if(res){
                console.log(res);
                $('.expert-doctors-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    autoplay: true,
                    autoplayHoverPause: true,
                    mouseDrag: false,
                    margin: 30,
                    dots: false,
                    navText: [
                        "<i class='icofont-swoosh-left'></i>",
                        "<i class='icofont-swoosh-right'></i>"
                    ],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            }
        })
    // ourdoctors
        $.ajax({
            type: "Get",
            url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
            success: function (response) {

                $.each(response, function (index, item) {
                    let col4 = $('<div/>', {
                        class: 'col-lg-4 col-md-6'
                    });

                    let doctorsCard=` <div class="single-card">
                    <div class="thumb-img">
                        <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" />
                        <div class="hover-social">
                            <div class="d-table">
                                <div class="d-tablecell">
                                    <ul>
                                        <li> 
                                            <a href="#">
                                                <i class="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li> 
                                            <a href="#">
                                                <i class="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li> 
                                            <a href="#">
                                                <i class="icofont-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="caption-text text-center">
                        <h3>${item.name}</h3>
                        <span class="designation mb-10">${item.profession}</span>
                        <p>${item.description}</p>
                    </div>
                </div>`
                    

                    $(col4).html(doctorsCard);
                    $('#doctorsCard').append(col4);

                });
            },
            error: function (response) {
                console.log("ERROR", response);
            }
        });

        // Feedback 
        $('.feedback-carousel').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            margin: 30,
            center: true,
            dots: false,
            navText: [
                "<i class='icofont-swoosh-left'></i>",
                "<i class='icofont-swoosh-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // Latest 
        $('.latest-news-carousel').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            margin: 30,
            dots: false,
            navText: [
                "<i class='icofont-swoosh-left'></i>",
                "<i class='icofont-swoosh-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        // Subscribe form
        $(".newsletter-form").validator().on("submit", function (event) {
            if (event.isDefaultPrevented()) {
                formErrorSub();
                submitMSGSub(false, "Please enter your email correctly.");
            } else {
                event.preventDefault();
            }
        });
        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            }
            else {
                formErrorSub();
            }
        }
        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function () {
                $("#validator-newsletter").addClass('hide');
            }, 4000)
        }
        function formErrorSub() {
            $(".newsletter-form").addClass("animated shake");
            setTimeout(function () {
                $(".newsletter-form").removeClass("animated shake");
            }, 1000)
        }
        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
        }



        // Back Top Button
        $('body').append('<div id="toTop"><i class="icofont-bubble-up"></i></div>');
        $(window).on('scroll', function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
    // preloader
    jQuery(window).on('load', function () {
        jQuery(".preloader").fadeOut(500);
    });
}(jQuery));


