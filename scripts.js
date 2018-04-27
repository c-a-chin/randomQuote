// fonts
var fonts = ["'Gugi', cursive", "'Black Han Sans', sans-serif", "'Cute Font', cursive", "'Gamja Flower', cursive", "'Gaegu', cursive", "'Indie Flower', cursive", "'Anton', sans-serif", "'Josefin Sans', sans-serif", "'Lobster', cursive", "'Shadows Into Light', cursive"];

$(document).ready(function(){
  $("#getQuote").click();
});

// get random quote from forismatic api
$("#getQuote").on("click", function(){
  $.ajax({
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
    dataType: 'jsonp',
    success: function(data){
      $("#quote").html(data.quoteText + "<br><br><br>- " + data.quoteAuthor);
      var randIndex = Math.floor(Math.random() * 11);
      $("#quote").css("font-family", fonts[randIndex]);
      var linkToTweet = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'; 
      linkToTweet += data.quoteText + '" -';
      linkToTweet += data.quoteAuthor;
      $("a").attr("href",linkToTweet);
    }
  });
});
