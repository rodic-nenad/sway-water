  var header = $('#hero');
    var ad = $('#curtain');
    var min_scroll = 770; // Set your minimum scroll amount here
    $(window).scroll(
        function() {
            var t = $(window).scrollTop();
            if (t > min_scroll) {
                // define your scroll CSS here
                header.css({position: "relative"});
                ad.css({position: "relative"});
            } else {
                // define your non-scrolled CSS here
                header.css({position: "fixed"});
                ad.css({position: "absolute"});
            }
        }
    );

$(".hero-txt, .hero-reveal").next().height($(".hero-txt, .hero-reveal").height())
$(window).scroll(function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 150) {
        $('#hero h1.hero-txt').css('opacity',1);
    }
    else {
        $('#hero h1.hero-txt').css('opacity',0-scrollTop/150);
    }
}).scroll()


var scrollAmount = 1500;

$(window).on('scroll', function(){
  if($(window).scrollTop()>=scrollAmount && !$('nav').hasClass('fixed')){
    $('nav').addClass('fixed'); 
  }
  else if($(window).scrollTop()<scrollAmount && $('nav').hasClass('fixed')){
     $('nav').removeClass('fixed') 
  }
});

$('nav a').on('click', function(event) {
    $(this).parent().find('a').removeClass('bottom');
    $(this).addClass('bottom');
});

$(window).on('scroll', function() {
    $('#sway,#flavors,#process,#about,#locations,#contact-form,#Shop').each(function() {
        if($(window).scrollTop() >= $(this).offset().top-100) {
            var id = $(this).attr('id');
            $('nav a').removeClass('bottom');
            $('nav a[href=#'+ id +']').addClass('bottom');
        }
    });
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        scaleControl: true,
        streetViewControl: false,
        scrollwheel:  false
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(45);

     // Multiple Markers
    var markers = [
        ['Bee Cave Coffee Co.', 30.309683, -97.939338],
        ['Bee Cave Coffee Co. Domain', 30.396705, -97.727309],
        ['Central Market Austin North Lamar',30.307743, -97.739877],
        ['Central Market Austin Westgate',30.231948, -97.796914],
        ['Central Market Dallas Lovers',32.849684,-96.768698],
        ['Central Market Houston',29.741284,-95.4441],
        ['Central Market San Antonio',29.470644,-98.464591],
        ['Dazzle Coffee', 30.440718, -97.621941],
        ['Dazzle Coffee, Round Rock', 30.496058, -97.647087],
        ['Fresh Plus Clarksville', 30.280762, -97.758318],
        ['Fresh Plus 24th St', 30.288302, -97.747502],
        ['Fresh Plus Hyde Park', 30.304855, -97.726265],
        ['Fresh Plus Anderson Lane', 30.358278, -97.738947],
        ['in.gredients', 30.285275, -97.714647],
        ['The Lagree Studio', 30.285276, -97.714646],
        ['Live Oak Market', 30.229198, -97.789284],
        ['Meditation Bar', 30.372979, -97.757004],
        ['Omni Barton Creek Resort and Spa', 30.290905, -97.858505],
        ['Royal Blue Grocery on Congress', 30.268325, -97.742249],
        ['Royal Blue Grocery on 3rd', 30.265706, -97.746028],
        ['Royal Blue Grocery on Rainey', 30.257314, -97.739083],
        ['SFC Farmers Market Downtown', 30.267759, -97.747327],
        ['Wright Bros. Brew and Brew', 30.264488, -97.733005]
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="infoContent">' +
        '<h4>Bee Cave Coffee Co.</h4>' +
        '<a href="http://www.beecavecoffee.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Bee+Cave+Coffee+Co./@30.3096817,-97.9415323,17z/data=!3m2!4b1!5s0x865b37eabb7c9b6d:0xe8c76feaa60a1a70!4m2!3m1!1s0x865b37eace6047fb:0x7e62e2bba700d9bf?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Central Market San Antonio</h4>' +
        '<a href="http://centralmarket.com" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://goo.gl/maps/mCx5iRZbUWP2" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Bee Cave Coffee Co. Domain</h4>' +
        '<a href="http://www.beecavecoffee.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Bee+Cave+Cafe/@30.3981643,-97.7296059,17z/data=!4m7!1m4!3m3!1s0x8644cc7124acc057:0x798e4c8bf8b2041e!2s3220+Amy+Donovan+Plaza,+Austin,+TX+78758!3b1!3m1!1s0x8644cc76cfb45393:0x743c7b85e4f864fe?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Dazzle Coffee</h4>' +
        '<a href="https://www.dazzlecoffee.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Dazzle+Coffee/@30.4406852,-97.6241292,17z/data=!4m7!1m4!3m3!1s0x8644cf782b62c543:0xd0877586591517c3!2s100+2nd+St+N,+Pflugerville,+TX+78660!3b1!3m1!1s0x8644cf79d39de363:0x86e8371a5c9039f0?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Dazzle Coffee, Round Rock</h4>' +
        '<a href="https://www.dazzlecoffee.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Dazzle+Coffee/@30.496061,-97.6492792,17z/data=!3m1!4b1!4m2!3m1!1s0x8644d018effbab11:0xa170f4131f3648d7?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Fresh Plus Clarksville</h4>' +
        '<a href="http://freshplusaustin.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Fresh+Plus+Grocery/@30.2809295,-97.7586596,17z/data=!4m2!3m1!1s0x8644b56959d25be9:0x5decd8fee5f0e92?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Fresh Plus 24th St</h4>' +
        '<a href="http://freshplusaustin.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Fresh+Plus+Grocery/@30.2883018,-97.7496902,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b57a221eea59:0x244a535c96245ec3!8m2!3d30.2883018!4d-97.7475015" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Fresh Plus Hyde Park</h4>' +
        '<a href="http://freshplusaustin.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Fresh+Plus+Grocery/@30.3048594,-97.7284586,17z/data=!3m1!4b1!4m2!3m1!1s0x8644ca76c9771b73:0x3b74344181fc160e?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Fresh Plus Anderson Lane</h4>' +
        '<a href="http://freshplusaustin.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Fresh+Plus+Grocery/@30.3582828,-97.7411403,17z/data=!3m1!4b1!4m2!3m1!1s0x8644cba7b2f113ed:0x5ad9f12b8759ff9a?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>in.gredients</h4>' +
        '<a href="https://in.gredients.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/in.gredients/@30.2852793,-97.7168395,17z/data=!3m1!4b1!4m2!3m1!1s0x8644b5ec278d804b:0xc149b6dc594f7e72?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>The Lagree Studio</h4>' +
        '<a href="http://www.thelagreestudio.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/in.gredients/@30.2852793,-97.7168395,17z/data=!3m1!4b1!4m2!3m1!1s0x8644b5ec278d804b:0xc149b6dc594f7e72?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Live Oak Market</h4>' +
        '<a href="https://www.facebook.com/LiveOakMarketAustin/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Live+Oak+Market/@30.2292,-97.7914771,17z/data=!3m1!4b1!4m2!3m1!1s0x865b4b35b890cfab:0xf3394864ebb59379?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Meditation Bar</h4>' +
        '<a href="http://www.meditationbar.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Meditation+Bar/@30.3729822,-97.7591968,17z/data=!3m1!4b1!4m2!3m1!1s0x8644cb6ea487a58d:0x18da46cc9a9a5b1d?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Omni Barton Creek Resort and Spa</h4>' +
        '<a href="https://www.omnihotels.com/hotels/austin-barton-creek" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Omni+Barton+Creek+Resort+%26+Spa/@30.290904,-97.8606927,17z/data=!3m1!4b1!4m5!3m4!1s0x865b35f7e70b154f:0x30079355d76f41c1!8m2!3d30.290904!4d-97.858504" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Royal Blue Grocery on Congress</h4>' +
        '<a href="http://royalbluegrocery.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Royal+Blue+Grocery/@30.2683276,-97.7444411,17z/data=!4m13!1m7!3m6!1s0x8644b509c36344d7:0x39d509c52688c10b!2sRoyal+Blue+Grocery!3b1!8m2!3d30.268323!4d-97.742247!3m4!1s0x8644b509c36344d7:0x39d509c52688c10b!8m2!3d30.268323!4d-97.742247" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Royal Blue Grocery on 3rd</h4>' +
        '<a href="http://royalbluegrocery.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Royal+Blue+Grocery/@30.265708,-97.7482154,17z/data=!3m2!4b1!5s0x8644b508be7e1411:0x7edf0a3a62bb83e5!4m2!3m1!1s0x8644b508c0984de1:0xdf7b9b67c05cf3e3?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Royal Blue Grocery on Rainey</h4>' +
        '<a href="http://royalbluegrocery.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Royal+Blue+Grocery/@30.2573165,-97.7412759,17z/data=!3m1!4b1!4m2!3m1!1s0x8644b5aa4ba76311:0xb9ec321fefb73d5d?shorturl=1" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>SFC Farmers Market Downtown</h4>' +
        '<a href="http://sustainablefoodcenter.org/programs/sfc-farmers-market" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/SFC+Farmers+Market-Downtown/@30.267804,-97.7498254,17z/data=!4m5!3m4!1s0x8644ca656f1df85d:0x6859b198fe6a9d8!8m2!3d30.2677577!4d-97.7473256" target="_blank">Directions</a>' + 
        '</div>'],
        ['<div class="infoContent">' +
        '<h4>Wright Bros. Brew and Brew</h4>' +
        '<a href="http://www.thebrewandbrew.com/" target="_blank">Website</a>' + 
        '<span> • </span>' + 
        '<a href="https://www.google.com/maps/place/Wright+Bros.+Brew+and+Brew/@30.2644915,-97.7351979,17z/data=!3m1!4b1!4m2!3m1!1s0x8644b5af858cb3fd:0x1aca02d5fc79c6c9?shorturl=1" target="_blank">Directions</a>' + 
        '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: 'marker-icon.svg',
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
 /*   var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });*/

}


