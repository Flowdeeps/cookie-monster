window.onload = function() {

  var radYes = document.getElementById( "yes" );
  var radNo = document.getElementById( "no" );
  var reaction = document.getElementById( "cookieStatus" );
  radYes.onchange = function() {
    if ( reaction.classList.contains( 'failure' ) ) {
      reaction.classList.remove( 'failure' )
    }
    reaction.classList.add( 'success' );
  }
  radNo.onchange = function() {
    if ( reaction.classList.contains( 'success' ) ) {
      reaction.classList.remove( 'success' );
    }
    reaction.classList.add( 'failure' );
  }

};
