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

    init: function(){
        this.build(this.num);
    },

    build: function(n){

        // TweenMax.to(this.svg, this.num, {autoAlpha:0});

        // var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // svg.setAttribute("width", "200");
        // svg.setAttribute("height", "200");
        // svg.setAttribute("version", "1.1");
        // svg.setAttribute("id", "mysvg");


        // TweenLite.defaultEase = Linear.easeNone;

        var tlm = new TimelineMax({paused:true, delay:2, ease:Linear.easeNone});

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

            console.log(_cx, _cy);
            TweenMax.set(this.circs[j], {attr:{cx:_cx, cy:_cy }} );
        }

        console.log(this.circs[5]);






        for (k = 0; k < this.num; k++) {
            tlm.to(this.circs[k], 2, {
                // attr:{ cx:this.origX, cy:this.origY },
                attr:{ cx:this.origX[k].toString(), cy:this.origY[k].toString() },
                ease:Power3.easeInOut},
                '-=1.8');
        }

        // this.svg.appendChild(circ2);

        // console.log($(this.svg).width());
        // console.log($(this.svg).height());

        console.log($(this.svg).find('circle').length);

        tlm.tweenTo(tlm.totalDuration()*0.8);
        // tlm.addLabel('')
        // myTimeline.tweenTo("myLabel2");
    },







    buildCircle: function(x, y) {

        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke", "red");
        circle.setAttribute("stroke-miterlimit", "10");
        circle.setAttribute("stroke-width", "1");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "15");

        return circle;

    }

};

circlesAnim.init();





























var linesAnim = {

    num:12,
    lines:[],
    orig:[],
    origY:[],
    svg:document.getElementById("linesSVG"),

    init: function(){
        this.build(this.num);
    },

    build: function(n){

        var tlm = new TimelineMax({paused:true, delay:2, ease:Linear.easeNone});

        for (var i = 0; i < this.num; i++) {
            var newLine = this.buildLine( i * 3 );
            this.svg.appendChild(   newLine  );
            this.lines.push( newLine );

        }

        var linesBackwards = this.lines.reverse();

        for (var j = 0; j < this.lines.length; j++) {
            tlm.to(linesBackwards[j], 1, {
                x:j * 9 * 2 *j*0.3,
                ease:Power1.easeInOut
            }, '-=0.7');
        }


        tlm.play();

    },




    buildLine: function(x) {

        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("stroke", "red");
        line.setAttribute("stroke-width", "1");
        line.setAttribute("x1", x);
        line.setAttribute("y1", 20);
        line.setAttribute("x2", x);
        line.setAttribute("y2", 100);

        return line;

    }
};

linesAnim.init();
