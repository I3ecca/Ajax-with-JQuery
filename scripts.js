
//Fetching a server File with JQuery
$(function(){
  // With the load function you can easily get any type of file from your own server. 
  // $.load();
  //When we use the load() method we can see that the JS is dispalyed in the #code on the html page. 

 $("#code").load("script.js");

// We can also pass in a function as the 2nd parameter. Within that function, you can pass in the response and the status. When we get an error, it will run that function. 
 $("#code").load("idontexist.php",function(response, status){ if (status == "error") {
    //  console.log("Could not find file");
    //  console.log(response, status);
   }
 });
 // When we run the same code with the scripts.js file:
 $("#code").load("script.js",function(response, status){ if (status == "error") {
     alert("Could not find script.js");
    //  console.log(response, status);
   } else {
    //  console.log("We found the file");
    //  console.log(response, status);
   }
 });

});

// Retrieving Flickr Images Through the Flickr API (+ Understanding JSON)
$(function(){
// This lecture, you are going to learn how to fetch JSON datafrom flickr.

// $.getJSON is a function that makes it easier to make calls for JSON API instead of using the AJAX function directly. 

// Here we set the API url to the url, and at the end of it, we append the ? and the JSON purl request instead JSON request which will allow you to retrieve data from that server.

// Just know that the JSON PURL will alllow you to actually make the request to the flickr domain server. 
let flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

$.getJSON(flickrApiUrl,{
  tags : "sun, beach",
  tagmode: "any", // means any tag with sun or beach, but does not need both of them.
  format: "json"

}).done(function(data){
  // Success
  // function that will execute when the call is successful
  console.log(data);
  // Once we see that data that prints out, we can now itterate over each item!
    $.each(data.items, function(index, item){
      console.log(item);
      console.log(item.media.m);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      if (index == 4){
        // we do this so we only loop through items 0-4.
        return false;
      }
      
  }) 
}).fail(function(data){
  // Fail
  // function that will execute when the call fails.
  alert("Ajax call failed.")
  console.log(data); 
})




});





// https://www.flickr.com/services/feeds/docs/photos_public/
// https://www.flickr.com/services/feeds/photos_public.gne













// Learning how to use Ajax with JQuery. 

// What is Ajax?
// AJAX stands for Asynchronous JavaScript and XML. 
// AJAX is not a programming language.

// AJAX uses a combination of:

// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)

// AJAX allows web pages to be updated asynchronously (the page will still go on about its business and when it gets a response, it will react to that) by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

// To see a diagram on this, go to images/img_ajax.gif

// $.get(), $.post, $.ajax(), $.getJSON()