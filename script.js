var $ = require("jquery");

$(".click").on("click", function () {
    $(".message").empty().append("You have clicked a button!")
})