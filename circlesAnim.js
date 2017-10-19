/*
console,
TimelineMax,
cssFilter,
Power1,
Power2,
Power3,
Power4,
Power5,
isWebkit,
*/




window.console.log('linework.js');



var circlesAnim = {

    num:15,
    circs:[],
    origX:[],
    origY:[],
    svg:document.getElementById("circlesSVG"),
    tlm:null,

    init: function(){
        this.build(this.num);
        this.id = 'circlesAnim';
    },

    play: function(){
        this.tlm.pause(0);
        // this.tlm.tweenTo(this.tlm.totalDuration()*0.8);
        this.tlm.play();
    },
    reset: function(){
        this.tlm.pause(0);
    },

    build: function(n){

        // TweenMax.to(this.svg, this.num, {autoAlpha:0});

        // var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // svg.setAttribute("width", "200");
        // svg.setAttribute("height", "200");
        // svg.setAttribute("version", "1.1");
        // svg.setAttribute("id", "mysvg");


        // TweenLite.defaultEase = Linear.easeNone;

        this.tlm = new TimelineMax({paused:true, ease:Power3.easeInOut});

        for (var i = 0; i < this.num; i++) {
            this.origX[i] = (600-40*i)-20;
            this.origY[i] = 75;
            var circ = this.buildCircle(600-40*i, 70);
            this.svg.appendChild(circ);
        }

        this.circs = $(this.svg).find('circle');
        // this.num = $(this.circs).length;


        for (var j = 0; j < this.circs.length; j++) {
            var multiplier = 2.5;
            // var _cx = Math.random(10)*10*j;
            // var _cy = Math.random(10)*10*j;
            var maxX = this.origX[j] + 15 * multiplier;
            var minX = this.origX[j] - 15 * multiplier;
            var maxY = this.origY[j] + 35 * multiplier;
            var minY = this.origY[j] - 35 * multiplier;
            // Math.random() * (max - min) + min;
            // var _cx = (50) + Math.random() * (10*j - (-10*j) ) + (-10*j);
            var _cx = Math.random() * (maxX - minX ) + minX;
            var _cy = Math.random() * (maxY - minY ) + minY;

            // console.log(_cx, _cy);
            TweenMax.set(this.circs[j], {attr:{cx:_cx, cy:_cy }} );
        }

        // console.log(this.circs[5]);






        for (k = 0; k < this.num; k++) {
            this.tlm.to(this.circs[k], 2, {
                // attr:{ cx:this.origX, cy:this.origY },
                attr:{ cx:this.origX[k].toString(), cy:this.origY[k].toString() },
                ease:Power2.easeInOut},
                '-=1.8');
        }

        // this.svg.appendChild(circ2);

        // console.log($(this.svg).width());
        // console.log($(this.svg).height());

        // console.log($(this.svg).find('circle').length);

        this.tlm.timeScale(2);

        // this.tlm.tweenTo(this.tlm.totalDuration()*0.8);



        // tlm.addLabel('')
        // mydline.tweenTo("myLabel2");
    },







    buildCircle: function(x, y) {

        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke", "white");
        circle.setAttribute("stroke-miterlimit", "10");
        circle.setAttribute("stroke-width", "1");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "15");
        return circle;

    }

};

circlesAnim.init();
// circlesAnim.tlm.tweenTo(circlesAnim.tlm.totalDuration()*0.8);
