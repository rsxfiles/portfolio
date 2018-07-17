// SEND EMAIL
jQuery('.error').hide();

function sendMail() {
	
	//Validating Text Area
	var aboutme = jQuery("textarea#message").val();
	if (aboutme == "") 
	{
		jQuery("span#aboutme_error").show();
		jQuery("textarea#message").focus();
		return false;
	}

    var link = "mailto:edgarquesada85@gmail.com"
             + "?cc="
             + "&subject=" + escape("Contact request from personal website")
             + "&body=" + escape(document.getElementById('message').value);

    window.location.href = link;
}

function hideError(){

	jQuery("span#aboutme_error").hide();
}

// Background Slideshow Images
    
$.backstretch([
  "images/lead-bg01.jpg",
  "images/lead-bg02.jpg",
  "images/lead-bg02.jpg",
  "images/lead-bg03.jpg",
  "images/lead-bg04.jpg"
  ], {
    fade: 2000,
    duration: 4000
});
 


