// ==UserScript==
// @name         Anti Spoilers
// @namespace    http://tampermonkey.net/
// @version      2025-03-14
// @description  Spoiler prevention for heartive.pages.dev!
// @author       Skyward
// @match        https://heartive.pages.dev/*
// @icon         https://heartive.pages.dev/previews/branding/favicon-180x180.png
// @grant        GM.xmlHttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const currentURL = window.location.href;
    const checkURL = "https://heartive.pages.dev/view/#/";

    if (currentURL.includes(checkURL)) {
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.style.backgroundColor = "gray";
            paragraph.style.color = "transparent";
            paragraph.style.userSelect = 'none';

            paragraph.addEventListener('mouseenter', () => {
                paragraph.style.backgroundColor = "transparent";
                paragraph.style.color = "gray";
                paragraph.style.userSelect = 'text';
            });

            paragraph.addEventListener('mouseleave', () => {
                paragraph.style.backgroundColor = "gray";
                paragraph.style.color = "transparent";
                paragraph.style.userSelect = 'none';
            });
        });

       // const imgs = document.querySelectorAll("img");
       // imgs.forEach(img => {
         //   if (!img.classList.contains('emoji')) {
           //    img.src = "https://api.memegen.link/images/custom/_/Season 3_Episode 3.jpg?background=https://i.imgur.com/b3fVcEQ_d.webp%3Fmaxwidth%3D760&fidelity=grand";
           // }
       // });
    }
})();
