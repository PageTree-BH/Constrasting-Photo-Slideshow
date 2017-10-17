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

    num:21,
    circs:[],

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



        var tlm = new TimelineMax({});

        for (i = 0; i < this.num; i++) {
            // var circ = this.buildCircle(100/i+'%', '50%');
            var circ = this.buildCircle(600-30*i+'px', '50%');
            this.svg.appendChild(circ);

        }
        this.circs = $(this.svg).find('circle');
        // this.num = $(this.circs).length;


        for (i = 0; i < this.num; i++) {
            var _cy = Math.random(50)+10;
            console.log(_cy);
            TweenMax.set(this.circs[i], {attr:{cy:_cy}} );
        }


        console.log(this.circs[5]
            
        for (i = 0; i < this.num; i++) {
            tlm.to(this.circs[i], 1, {attr:{cy:'50%'}}, '-=0.5');
        }

        // this.svg.appendChild(circ2);

        // console.log($(this.svg).width());
        // console.log($(this.svg).height());

        console.log($(this.svg).find('circle').length);


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


