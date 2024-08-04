// Show slider 
const slides = document.querySelectorAll("#slider-holder  li ");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let slideIndex = 0;

function showSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

prevButton.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
});

nextButton.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
});

// Show the initial slide
showSlide();

//Change tabs 

function openTabs(evt, tabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tabs a");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList = tablinks[i].classList.remove('active');
    }
    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className = " active";
}



//Modal addProduct
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Modal cart
var modal = document.getElementById("myCart");
var btnocart = document.getElementById("myBtnCart");
var span = document.getElementsByClassName("close")[0];

btnocart.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Login