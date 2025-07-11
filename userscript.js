// ==UserScript==
// @name         Heartive+
// @namespace    http://tampermonkey.net/
// @version      2025-05-30
// @description  Hides the descriptions on heartive because some are spoilers
// @author       Skyward
// @match        https://heartive.pages.dev/*
// @icon         https://heartive.pages.dev/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const paragraphs = document.querySelectorAll('p');
         paragraphs.forEach(paragraph => {
             paragraph.remove();
         });
    onscroll = (event) => {
         const paragraphs = document.querySelectorAll('p');
         paragraphs.forEach(paragraph => {
             paragraph.remove();
         });
    }
})();
