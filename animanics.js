var ctx = c.getContext("2d");

var rid;

var stopAn = function() {
    console.log(rid);
    window.cancelAnimationFrame(rid);
};

var growCirc = function() {
    window.cancelAnimationFrame(rid);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    var r = 0;
    var grow = true;
    var drawCirc = function(){
        if (r >= c.width/2 or r >= c.height/2){
            grow = false;
        };
        if (r<= 0){
          r=0;
          grow = true;
        };  
        ctx.arc(c.width/2, c.height/2, r, 2*math.pi)
        if (grow){
            r++;
        };
        else {
            r--;
        };
        rid = window.requestAnimationFrame(drawCirc);
    };
    drawCirc();
};

circ.addEventListener("click", growCirc);
