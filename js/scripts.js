// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

 $(document).ready(function(){
        
  //Smooth Scolling
  var $root = $('html, body');
  $('#navbar-example a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });
  
  //Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();

    });

  //Contact Form//
  $("#submit-button").on('click', function() {

 	let name = $("#name").val();

 	let email = $("#email").val();

 	let message = $("#message-box").val();

 	if (message==="") {
 		$("#message-box").css("border-color", "red");
 	}

 	else {

 		if (message!="" && name==="" || email==="") {
 			$("#visible-comment").html("If you wanna leave a message please leave your name and email address too");
 		}

 			else {

 				$("#visible-comment").html("Thank you for leaving a message. Unfortunetaly this page doesn't have a back end yet, so your message is going no where.").css("font-family","Concert One, Helvetica, Arial, sans-serif");

 				$(".form-group-name").hide();

 				$(".form-group-phone").hide();

 				$(".form-group-email").hide();

 				$("#message-box").hide()

 				$("#submit-button").hide(); 	


 	}

  	return false;
  	}
  	
  });

   $("#message-box").on("keyup", function() {
  let charCount = $("#message-box").val().length;
  $("#char-count").html("Number of characters: "+charCount).css("font-family","Concert One, Helvetica, Arial, sans-serif");
  })

 });

 function GetMap(){
    var map = new Microsoft.Maps.Map('#map1', {
    center: new Microsoft.Maps.Location(51.305090, 12.379415),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 17
  });

    var center = map.getCenter();

        //Create custom Pushpin
        var pin = new Microsoft.Maps.Pushpin(center, {
            title: 'Web.Dev@Duke.Wellington',
            subTitle: '',
            text: '1'
        });

        //Add the pushpin to the map
        map.entities.push(pin);

    Microsoft.Maps.Events.addHandler(map, 'click', function () { alert('mapClick'); });
}

 

