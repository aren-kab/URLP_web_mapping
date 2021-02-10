//on click
$('.grid-item').on('click', function() {
	// pull out the album cover url from the element's attributes
	var foodUrl = $(this).attr('food')
  // log the album cover url to the console
  console.log(foodUrl)

  $('#food-art').empty()

  $('#food-art').css('background-image', `url(${foodUrl})`)
})

$("#SPA").mouseover(function(){
  $(".description").text("Jamon - Dry Cured Iberian or Serrano Ham sliced thinly");
});

$("#ARM").mouseover(function(){
  $(".description").text("Boreg - Cream Cheese & Philadough Pastry topped w/ seeds");
});

$("#ITA").mouseover(function(){
  $(".description").text("Zuchini Fries - Zuchini cut in small sticks and fried");
  $
});

$("#JPA").mouseover(function(){
  $(".description").text("Dumplings - Pork & Chives wrapped in pan fried dough");
});
