document.addEventListener("DOMContentLoaded", function() {
  // Add smooth scrolling to menu tabs
    $( "a" ).on( 'click', function( event ) {
        if ( this.hash !== "" ) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            var scrollSpeed = 400;
            
            $( 'html, body' ).animate( { 
                scrollTop: $( hash ).offset().top
            }, scrollSpeed, function() {
                
            window.location.hash = hash;
            } );
        }
    } );
    
    //for sticky navbar
    window.onscroll = function() { myFunction() };
    var navbar = document.getElementById( 'navbar' );
    var sticky = navbar.offsetTop;

    function myFunction() {
      if ( window.pageYOffset >= sticky ) {
        navbar.classList.add( "sticky" )
      } else {
        navbar.classList.remove( "sticky" );
      }
    }
    
    //for highlighting navbar tab to show which page you're on
    var header = document.getElementById( "navbar" );
    var btns = header.getElementsByClassName( "btn" );
    for ( var i = 0; i < btns.length; i++ ) {
        btns[i].addEventListener( "click", function() {
        var current = document.getElementsByClassName( "active" );
        current[0].className = current[0].className.replace( " active", "" );
        this.className += " active";
        } );
    }
    
} );