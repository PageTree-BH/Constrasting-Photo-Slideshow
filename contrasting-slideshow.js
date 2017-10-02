/*
console:true

*/

window.console.log('contrasting slideshow boiii');





var CS = {
    _defaultSlick_Single: {
            fade: true,
            dots: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        },

    build: function () {
        window.console.log('!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!');
        window.console.log('!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!');

        // $('[data-pt-slick-single]').each(function(i, val){
        $('.contrasting-slideshow').each(function(i, val){

            var thisSlideShow = $(val);
            // var _newData = $(this).data('pt-slick-single') || {} ;

            // var _copiedData = jQuery.extend({}, this._defaultSlick_Single);

            // Merge object2 into object1
            // $.extend( _copiedData, _newData );

            // $(this).slick(_copiedData);
            thisSlideShow.slick({
                fade: true,
                dots: true,
                arrows: false,
                infinite: true,
                autoplaySpeed: 1000,
                draggable: true,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            });

            // slickNext
            // slickPause
            // slickPlay

            var slides = thisSlideShow.find('.cs-slide');
            var tlms = [];

            window.console.log(slides);

            $(slides).each(function(i, thing){
                var slide = $(thing);

                window.console.log(slide);

                var war = slide.find('.img-war');
                var peace = slide.find('.img-peace');

                var tlm = new TimelineMax({ paused:true, onComplete:function(){
                        thisSlideShow.slick('slickNext');
                    }
                });


                // // TweenMax.set([war,peace], {opacity:0});
                // // tlm.fromTo(war, 1, {opacity:0}, {opacity:1});
                // // tlm.fromTo(peace, 1, {opacity:0}, {opacity:1}, '1');
                tlm.fromTo(war, 5, {opacity:1, scale:1}, {delay:1, scale:1.5, opacity:0, ease:Power1.easeIn});
                // //
                //
                // tlm.play();
                tlms[i] = tlm;



            });



            // On swipe event
            thisSlideShow.on('swipe', function(event, slick, direction){
              window.console.log(direction);
              // left
            });

            // On edge hit
            thisSlideShow.on('edge', function(event, slick, direction){
              window.console.log('edge was hit');
            });

            // On before slide change
            thisSlideShow.on('beforeChange', function(event, slick, currentSlide, nextSlide){
              window.console.log(nextSlide);
              tlms[nextSlide].restart();
            });

            thisSlideShow.on('afterChange', function(event, slick, currentSlide, nextSlide){
              window.console.log(currentSlide);
              window.console.log( tlms[currentSlide] );
            //   tlms[currentSlide].slick('restart');
              tlms[currentSlide].play();
            });


            thisSlideShow.slick('slickNext');




        });









    }

};




$(function() {
    CS.build();
});
