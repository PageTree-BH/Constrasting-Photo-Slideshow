/*
console,
TimelineMax,
cssFilter,
Power1,
Power2,
Power3,
Power4,
Power5
*/


// @codekit-append "circlesAnim.js";
// @codekit-append "linesAnim.js";


window.console.log('contrasting slideshow boiii');


// TO DISABLE CONSOLE LOGS:
PT._isDevMode = false;

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
        autoplay: false
    },


    build: function () {
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
                speed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            });

            // slickNext
            // slickPause
            // slickPlay

            var slides = thisSlideShow.find('.cs-slide');
            var tlms = [];
            var anims = [];

            // window.console.log(slides);

            $(slides).each(function(i, thing){
                var slide = $(thing);

                // window.console.log(slide);
                var anim = slide.data('cs-anim');
                var type = slide.data('cs-type');
                var war = slide.find('.cs-war');
                var peace = slide.find('.cs-peace');

                // slide.anim = anim;
                // console.log('... ', slide.anim);

                // if(anim){
                    // var thisAnim = $('#'+anim);
                    // var thisAnim = document.getElementById(anim);
                    // console.log(thisAnim);
                // }

                // anims[i] = thisAnim;
                anims[i] = anim;

                var tlm = new TimelineMax({
                    paused:true,
                    // delay:1,
                    // onUpdate:function(){
                        // console.log('~', tlm.progress());
                    // },
                    // onStart:function(){
                        // if(anim){
                        //     console.log('anim:', anim);
                        // }
                    // },

                    onComplete:function(){
                        thisSlideShow.slick('slickNext');
                    }
                });

                // if(type === "fade"){
                //     window.console.log("fade");
                //     // tlm.fromTo(war, 5,  {opacity:1, scale:1},
                //     //                     {scale:1.5, opacity:0, ease:Power1.easeIn});
                //     tlm.fromTo(war, 5,  {opacity:1},
                //                         {opacity:0, ease:Power1.easeIn});
                //
                // }else if (type=== "left") {
                //     window.console.log("left");
                //     // tlm.fromTo(war, 5,  {width:'60%'},
                //                         // {width:'40%', ease:Power1.easeInOut});
                //
                // }else if (type=== "right") {
                //     window.console.log("right");
                //     // TweenMax.set(war, {width:'60%', right:0, left:'initial' });
                //     // tlm.fromTo(war, 5,  {width:'60%'},
                //                         // {width:'40%', ease:Power1.easeInOut});
                //
                // }

                var cssFilter;
                    isWebkit = navigator.userAgent.indexOf('AppleWebKit') !== -1;

                if (type === "none"){
                    // window.console.log("none");
                    tlm.to(war, 8, {opacity:1});

                }else if (type === "fade") {
                    tlm.set([war,peace], {opacity:1, width:'100%', backgroundSize:'cover', position:'absolute'});

                    tlm.fromTo(war, 2,  { opacity:1, delay:1 },
                                        { opacity:0, ease: Power1.easeOut});

                }else if (type === "left" || type === "right") {
                    // tlm.to(war, 1, {opacity:1});
                    tlm.fromTo(peace, 8, { width:'40%' },
                                        { width:'60%',ease: Power4.easeInOut}, 'a');

                    tlm.fromTo(war, 8,  { width:'60%' },
                                        // {opacity:0, width:'80%',  ease: SlowMo.ease.config(0.7, 0.7, false)});
                                        { width:'40%',
                                        ease: Power4.easeInOut
                                        // ,onUpdate: function(tl){
                                        //     // convert timeline progress to a percentage
                                        //     var tlp = (tlm.progress()*100) >> 0;
                                        //     // set brightness value on each update
                                        //     if(isWebkit){
                                        //         cssFilter = {'-webkit-filter':'grayscale(' + tlp + '%)'};
                                        //         //  cssFilter = {'-webkit-filter':'grayscale(' + tlp + '%)'};
                                        //     } else {
                                        //         cssFilter = {filter:'grayscale(' + tlp + '%)'};
                                        //         //  cssFilter = {filter:'grayscale(' + tlp + '%)'};
                                        //     }
                                        //     TweenMax.set(war, cssFilter);
                                        // }
                                    }, 'a');

                }


                tlm.to(war, 1, {opacity:1});

                // tlm.play();
                tlms[i] = tlm;

            });



            // // On swipe event
            // thisSlideShow.on('swipe', function(event, slick, direction){
            //   window.console.log(direction);
            //   // left
            // });

            // // On edge hit
            // thisSlideShow.on('edge', function(event, slick, direction){
            //   window.console.log('edge was hit');
            // });

            // On before slide change
            thisSlideShow.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                // window.console.log('beforeChange '+nextSlide);

                // console.log('anims[before]', anims[currentSlide]);

                if(anims[nextSlide] === 'circlesAnim'){
                    circlesAnim.reset();
                }else if(anims[nextSlide] === 'linesAnim'){
                    linesAnim.reset();
                }


                if(anims[nextSlide] != undefined){
                    // anims[currentSlide].play();
                }
                tlms[nextSlide].restart();

            });


            thisSlideShow.on('afterChange', function(event, slick, currentSlide, nextSlide){
                // window.console.log('afterChange '+nextSlide);
                //   window.console.log(currentSlide);
                //   window.console.log( tlms[currentSlide] );
                //   tlms[currentSlide].slick('restart');

                // console.log('anims[after]', anims[currentSlide]);

                if(anims[currentSlide] === 'circlesAnim'){
                    circlesAnim.play();
                }else if(anims[currentSlide] === 'linesAnim'){
                    linesAnim.play();
                }
                tlms[currentSlide].play();

                // anims[currentSlide].play();
                // linesAnim.tlm.play();
                // circlesAnim.tlm.tweenTo(circlesAnim.tlm.totalDuration()*0.8);

                // linesAnim.play();
                // circlesAnim.play();

            });


            thisSlideShow.slick('slickNext');


        });









    }

};




$(function() {
    CS.build();


    // var arr1 = [0, 0,   100, 0,     100, 100,   0, 100];
    // var arr2 = [0, 0,   40, 0,      40, 100,    0, 100];
    //
    // TweenMax.to(arr1, 3, { endArray: arr2, onUpdate: clipPath });
    //
    // function clipPath() {
    //   TweenMax.set(".contrasting-slideshow", { ClipPath: 'polygon('+
    //     arr1[0]+'%'+arr1[1]+'%,'+
    //     arr1[2]+'%'+arr1[3]+'%,'+
    //     arr1[4]+'%'+arr1[5]+'%,'+
    //     arr1[6]+'%'+arr1[7]+'%)'
    //   });
    // //   console.log(arr1);
    // }


});
