//on click
$('.grid-item').on('click', function() {
	// pull out the food url from the element's attributes
	var foodUrl = $(this).attr('food')
  // log the food  url to the console
  console.log(foodUrl)

  $('#food-art').empty()

  $('#food-art').css('background-image', `url(${foodUrl})`)
})

//Input hover functionality for food description
$("#SPA").click(function(){
  $(".description").text("Jamon - Dry Cured Iberian or Serrano Ham sliced thinly");
});

$("#ARM").click(function(){
  $(".description").text("Boreg - Cream Cheese & Philadough Pastry topped w/ seeds");
});

$("#ITA").click(function(){
  $(".description").text("Zuchini Fries - Zuchini cut in small sticks and fried");
  $
});

$("#JPA").click(function(){
  $(".description").text("Dumplings - Pork & Chives wrapped in pan fried dough");
});
