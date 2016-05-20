window.onload = function() {

  // set up the objects
  var cookiePerms = document.getElementById( 'cookies_permissions' ),
      closeButt = document.getElementById( 'close' );
      radYes = document.getElementById( 'yes' ),
      radNo = document.getElementById( 'no' ),
      reaction = document.getElementById( 'cookie_status' );

  // if the user says yes
  var doSuccess = function() {
    if ( reaction.classList.contains( 'failure' ) ) {
      reaction.classList.remove( 'failure' )
    }
    reaction.classList.add( 'success' );
  }

  // if the user says no
  var doFailure = function() {
    if ( reaction.classList.contains( 'success' ) ) {
      reaction.classList.remove( 'success' );
    }
    reaction.classList.add( 'failure' );
  }

  // this is where any cookie writing code will go
  var makeCookie = function(){
    console.log( "Make a cookie here" );
  }

  radYes.onchange = function() {
    doSuccess();
    hidePerms();
    makeCookie();
    setTimeout( function() {
      hideReaction();
    }, 3000);
  }

  radNo.onchange = function() {
    doFailure();
    hidePerms();
    setTimeout( function() {
      hideReaction();
    }, 5000);
  }

  var hideReaction = function() {
    document.body.removeChild( reaction );
  }

  var hidePerms = function() {
    document.body.removeChild( cookiePerms );
  }

  var hidePermsAndReaction = function() {
    setTimeout( function() {
        hidePerms();
        hideReaction();
    }, 3000);
  }

  var disappoint = function() {
    alert( "I'm sorry, we're all out of cookies." );
  }
  var cookieSplode = document.getElementById( 'cookiesplosion' );
  cookieSplode.onclick = function() {
    disappoint();
  };

  closeButt.onclick = function() {
    doSuccess();
    makeCookie();
    hidePerms();
    setTimeout( function() {
      hideReaction();
    }, 3000);
  }

};
