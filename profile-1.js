$("#home");
$("#projects").hide();
$("#about").hide();
$("#contacts")
$("#resume").hide();
$("#socials").hide();

$(".home").click(function(){
    $("#home").fadeIn(500);
    $("#projects").fadeOut();
    $("#about").fadeOut();
    $("#socials").fadeOut();
    $("#resume").fadeOut();
  });
$(".about").click(function(){
    $("#home").fadeOut();
    $("#projects").fadeOut();
    $("#about").fadeIn();
    $("#socials").fadeOut();
    $("#resume").fadeIn();
  });
$(".projects").click(function(){
    $("#home").fadeOut();
    $("#projects").fadeIn();
    // $(".project-container").fadeIn(1000);
    $("#about").fadeOut();
    $("#socials").fadeOut();
    $("#resume").fadeOut();
  });
$(".contacts").click(function(){
    $("#home").fadeOut();
    $("#projects").fadeOut();
    $("#about").fadeOut();
    $("#socials").fadeIn();
    $("#resume").fadeOut();
  });



  $("#submitButton").click(function() {
    // Get values from the form
    var name = $("#name").val();
    var message = $("#message").val();

    if (name == '') {
        if (message == '') {
            var encodedText = encodeURIComponent("Your portfolio really caught my eye, and I'm excited about the possibility of working together. I have a few questions and ideas to discuss. Could we set up a time for a quick call or meeting?\n\n");
        } else {
            var encodedText = encodeURIComponent("Your portfolio really caught my eye, and I'm excited about the possibility of working together. I have a few questions and ideas to discuss. \n"+message);
        }
    } else {
        var encodedText = encodeURIComponent("Hello I'm " + name + ". " + message);
    }
    // Construct the dynamic URL
    var dynamicUrl = "https://wa.me/917660873570?text=" + encodedText;

    // Redirect to the dynamic URL
    window.location.href = dynamicUrl;
  });
  $(".mail-link").click(function() {
    // Get values from the form
            var encodedSubject = encodeURIComponent("Impressed by Your Portfolio");
            var encodedText = encodeURIComponent("Your portfolio really caught my eye,  I had the pleasure of exploring your personal portfolio website and wanted to reach out to express my admiration for your work.");
            var mail = "harshrb05@gmail.com";
    // Construct the dynamic URL
    var dynamicUrl = "mailto:"+mail+"?subject=" + encodedSubject +"&body="+encodedText;

    // Redirect to the dynamic URL
    window.location.href = dynamicUrl;
  });
