$(document).ready(function(){
	if(localStorage) 
		var userStatus = localStorage.getItem('userStatus');
		var userPrid = localStorage.getItem('userPrid');
		if(userStatus == 'member')
			location.href="transport.html?prid="+userPrid;
		else {
			var prid;
			var password;
			var pridElement = $("#prid");
			var passwordElement = $("#password");
			
			pridElement.blur(function(){
				prid = pridElement.value;
							
			});
			
			passwordElement.blur(function(){
				password = passwordElement.value;
							
			});
			
			$('#loginBtn').click(function(e){
				prid = $("#prid").val();
				console.log($("#prid").val());
				console.log($("#password").val());
				password = $("#password").val();
				if(prid!=undefined && password!=undefined) {
				//	location.href="transport.html";
					$.post( "index.html",{pridId: prid, pasword: password}, function( data ) {
						location.href="transport.html";
						localStorage.setItem('userStatus','member');
						localStorage.setItem('userPrid',prid);
						console.log(data);
					})
						 .done(function() {
						    console.log( "second success" );
						   						   
						})
						.fail(function() {
							console.log( "error" );
						})
						.always(function() {
							console.log( "finished" );
							localStorage.setItem('userStatus','member');
							localStorage.setItem('userPrid',prid);
							location.href="transport.html";
						});
						
					
				}
					
			});
		}
		
		
		
		
		
		
		
	
	
});