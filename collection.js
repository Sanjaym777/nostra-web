var productcontainer = document.getElementById("products");
var search = document.getElementById("tam");
var productlist = productcontainer.querySelectorAll("div");
var bottomText = document.getElementById("bottomText");

search.addEventListener("keyup", function() {
    var entertext = event.target.value.toUpperCase();
    for (var i = 0; i < productlist.length; i++) {
        var paragraphs = productlist[i].querySelectorAll("p");
        var matchFound = false;
        for (var j = 0; j < paragraphs.length; j++) {
            var productname = paragraphs[j].textContent;
            if (productname.toUpperCase().indexOf(entertext) > -1) {
                matchFound = true;
                break;
            }
        }
        // Set display style based on whether any match was found in this product container
        if (matchFound) {
            productlist[i].style.display = "flex"; // Preserve original display style
        } else {
            productlist[i].style.display = "none"; // Hide the product container if no match was found
        }
    }
    // Set the display style of the bottom text
    bottomText.style.display = (productcontainer.querySelector(":scope > div:not([style='display: none;'])") != null) ? "block" : "none";
});


