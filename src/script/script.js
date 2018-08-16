var popup = document.getElementsByClassName("popup");

for (var i = 0; i < popup.length; i++) {

    popup[i].onclick = togglePopup(i);
    
}

function togglePopup(i) {

    return function () {

        if (popup[i].children[1].style.display == "none") {

            popup[i].children[1].style.display = "block";

        } else {

            popup[i].children[1].style.display = "none";

        }

    };

}