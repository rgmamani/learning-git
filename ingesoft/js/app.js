function showModalLogin(){
	    $("#loginButton").click(function(){
          $('#loginModal').modal({
              backdrop: 'static',
              keyboard: false  // to prevent closing with Esc button (if you want this too)
          })
    });
}