

var linesAnim = {

    num:12,
    lines:[],
    svg:document.getElementById("linesSVG"),
    tlm:null,

    init: function(){
        this.build(this.num);
        this.id = 'linesAnim';
    },

    play: function(){
        this.tlm.pause(0);
        this.tlm.play();
    },
    reset: function(){
        this.tlm.pause(0);
    },
    build: function(n){

        this.tlm = new TimelineMax({paused:true, ease:Power1.easeInOut});

        for (var i = 0; i < this.num; i++) {
            var newLine = this.buildLine( i  );
            this.svg.appendChild(   newLine  );
            this.lines.push( newLine );
        }

        var linesBackwards = this.lines.slice().reverse();

        var endX = [];

        // for (var l = 0; l < this.lines.length; l++) {
        //     endX[l] = l * 9 * 2 * l * 0.3;
        // }
        //
        // for (var j = 0; j < this.lines.length; j++) {
        //     this.tlm.to(linesBackwards[j], 1, {
        //         x:j * 9 * 2 * j * 0.3,
        //         ease:Power1.easeInOut
        //     }, '-=0.75');
        // }

        for (var l = 0; l < this.lines.length; l++) {
            // endX[l] = l * 9 * 2 * l * 0.3;
            TweenMax.set(linesBackwards[l], {
                x:l * 9 * 2 * l * 0.3,
                alpha:0
            });
        }

        for (var j = 0; j < this.lines.length; j++) {
            this.tlm.to(linesBackwards[j], 1, {
                alpha:1,
                ease:Power1.easeInOut
            }, '-=0.75');
        }



        this.tlm.timeScale(1.5);
        // console.log(this.lines);
        // console.log(linesBackwards);
    },




    buildLine: function(x) {

        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("stroke", "white");
        line.setAttribute("stroke-width", "1");
        line.setAttribute("x1", x);
        line.setAttribute("y1", 20);
        line.setAttribute("x2", x);
        line.setAttribute("y2", 100);

        return line;

    }
};

linesAnim.init();
// linesAnim.tlm.play();
