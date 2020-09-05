var canvas = document.getElementById('particlesEffect');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;

var colorArray = [
    '#FF9C00',
    '#D93B0A',
    '#C20165',
    '#4C0C82',
    '#061766',
];

window.addEventListener( 'mousemove', function( event ) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log( mouse );
} )

window.addEventListener( 'resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init();
} )

function Circle( x, y, dx, dy, radius ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[ Math.floor( Math.random() * colorArray.length ) ];
    
    this.draw = function() {
        c.beginPath();
        c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false );
        c.fillStyle = this.color;
        c.fill();
    }
    
    this.update = function() {
        if ( this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
            this.dx = -this.dx;
        }
    
        if ( this.y + this.radius > innerHeight || this.y - this.radius < 0 ) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;
        
        //interactivity
        if ( Math.abs( mouse.x - this.x ) < 50 && Math.abs( mouse.y - this.y ) < 50 ) {
            if ( this.radius < maxRadius ) {
                this.radius ++;
            }
        }
        else if ( this.radius > this.minRadius ) {
            this.radius --;
        }
        
        this.draw();
    }
}

var circleArray = [];

function init() {

    circleArray = [];
    for( var i = 0; i < 800; i++ ) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * ( innerWidth - radius * 2 ) + radius;
        var y = Math.random() * ( innerHeight - radius * 2 ) + radius;
        var dx = ( Math.random() - 0.5 );
        var dy = ( Math.random() - 0.5 );
        circleArray.push( new Circle( x, y, dx, dy, radius ) );
    }
}

function animate() {
    requestAnimationFrame( animate );
    c.clearRect( 0, 0, innerWidth, innerHeight );
    
    for ( var i = 0; i < circleArray.length; i++ ) {
        circleArray[i].update();
    }
}

init();
animate();