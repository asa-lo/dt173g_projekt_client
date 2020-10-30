"use strict";

//Variables
let CVEl = document.getElementById("printCV");
let portfolioEl = document.getElementById("printPortfolio");
let coursesEl = document.getElementById("printCourses");

//Eventlisteners
window.addEventListener("load", getCV);
window.addEventListener("load", getPortfolio);
window.addEventListener("load", getCourses);

// Function to get CV
function getCV() {
    CVEl.innerHTML = "";
    fetch("http://studenter.miun.se/~aslo1900/dt173g_projekt_rest/CV.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(CV => {
                CVEl.innerHTML +=
                    `<div class="CV">
                    <p>${CV.name} -
                    ${CV.title},
                    ${CV.date}</p>
                </div>`
            })
        })
}

// Function to get portfolio
function getPortfolio() {
    portfolioEl.innerHTML = "";
    fetch("http://studenter.miun.se/~aslo1900/dt173g_projekt_rest/portfolio.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(portfolio => {
                portfolioEl.innerHTML +=
                    `<div class="portfolio">
                    <p>${portfolio.title} -
                    ${portfolio.description} 
                    <a target="_blank" href="${portfolio.url}"> → Link to website</a>.</p>
                </div>`
            })
        })
}

// Function to get courses
function getCourses() {
    coursesEl.innerHTML = "";
    fetch("http://studenter.miun.se/~aslo1900/dt173g_projekt_rest/courses.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(courses => {
                coursesEl.innerHTML +=
                    `<div class="courses">
                    <p>${courses.school} -
                    ${courses.courseName},
                    ${courses.date}</p>
                </div>`
            })
        })
}

