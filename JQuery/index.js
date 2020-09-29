// Selecting an lement in the document and adding
// a class to it
$("h1").addClass("big-title margin-50");

// Selecting element in the document and manipulating
// it's text
$("h1").text("Hello Welcome");
$("button").html("Don't click me");

// select and Element and add an event listener to it
// to change the color
// $("h1").click(function () {
//    $("h1").css("color", "purple");
// });

$("body").keypress(function (event) {
   $("h1").text(event.key);
});

// removing element and adding element
// $("h1").remove("<button>New button added</button>");

// Small animation. to hide and dispaly an HTMl element
$("button").on("click", function () {
   $("h1").fadeToggle();
});
