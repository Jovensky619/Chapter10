/*
    Student Name: Jovensky Sainthilaire
    File Name: script.js
    Date: 11/18/22
*/
var figElement = document.getElementById("block")
var imgSource = document.getElementById("images/trunk-bay.jpg");
var figCap = document.querySelector("Trunk Bay in St. John");
//Function to display the first picture
function pic1() {
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
    
};

var figElement = document.getElementById("block")
var imgSource = document.getElementById("images/sanjuan.jpg");
var figCap = document.querySelector("Coast of San Juan");
//Function to display the second picture
function pic2() {
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated view of San Juan coast";
    figElement.style.display = "block";
    figCap.textContent = " Coast of San Juan ";
};



var figElement = document.getElementById("block")
var imgSource = document.getElementById("images/curacao.jpg");
var figCap = document.querySelector("Curacao");
 //function to display the third picture
 function pic3() {
    imgSource.src = "images/curacao.jpg";
    imgSource.alt = "The blue waters of Curacao";
    figElement.style.display = "block";
    figCap.textContent = "Curacao"; 
};