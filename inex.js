
const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

