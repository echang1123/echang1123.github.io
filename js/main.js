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
