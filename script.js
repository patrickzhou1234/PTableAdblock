// ==UserScript==
// @name         Ptable.com Ad Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ptable.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ptable.com
// @grant        none
// ==/UserScript==

document.querySelector("#Notice").remove();
document.querySelector("footer").style.display="none";
document.body.style.overflow="hidden";
