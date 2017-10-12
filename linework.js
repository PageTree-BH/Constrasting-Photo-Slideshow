

console.log('linework.js');



var circlesAnim = {

    num:12,

    svg:document.getElementById("circles"),

    init: function(){
        this.build(this.num);
    },

    build: function(n){
        TweenMax.to(this.svg, this.num, {autoAlpha:0});

        // var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // svg.setAttribute("width", "200");
        // svg.setAttribute("height", "200");
        // svg.setAttribute("version", "1.1");
        // svg.setAttribute("id", "mysvg");

        // var circ = this.buildCircle('10%', '50%');
        // var circ2 = this.buildCircle('20%', '50%');
        // var circ2 = this.buildCircle('30%', '50%');
        // var circ2 = this.buildCircle('40%', '50%');
        // var circ2 = this.buildCircle('50%', '50%');
        // var circ2 = this.buildCircle('60%', '50%');
        // var circ2 = this.buildCircle('70%', '50%');
        // var circ2 = this.buildCircle('80%', '50%');
        // var circ2 = this.buildCircle('90%', '50%');

        for (i = 0; i < this.num; i++) {
            var circ = this.buildCircle(100/i+'%', '50%');
            this.svg.appendChild(circ);
        }


        // this.svg.appendChild(circ2);



        console.log($(this.svg).width());
        console.log($(this.svg).height());




    },

    buildCircle: function(x,y) {
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
