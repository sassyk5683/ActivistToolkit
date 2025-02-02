/*this is for the fact generator*/
var factList = [
  "In January 2020, there were 580,466 people experiencing homelessness in America.",/*0*/
  "20% of young adults who are in foster care become homeless the moment they're emancipated at the age of 18",/*1*/
  "Males are far more likely to experience homelessness than females",/*2*/
  "Most homeless people do not seek health care because of lack of knowledge about where to get treated, lack of access to transportation, and lack of identification",/*3*/
  "28% of homeless people eat sometimes or often do not get enough to eat, compared with 12% of poor American adults; 20% eat one meal a day or less; and 40% did not have anything to eat on one or more days.",/*4*/
];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}/*iles add interaction to your website */

/* SLIDESHOW */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
