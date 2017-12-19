var items = $("li");

//check off specific todos by clicking
$(items).on("click", function() {
  $(this).toggleClass("cross");
});