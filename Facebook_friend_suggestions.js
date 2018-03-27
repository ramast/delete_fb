// ==UserScript==
// @name     Remove FB friend suggestion
// @include https://m.facebook.com/friends/center*
// @version  1
// @grant    none
// ==/UserScript==

/*
This script work on "Find Friend" page, it will go through all suggested friends and constantly click remove.
Facebook's AI algortihm take couple of attempts to get the hint so u may want to run this couple of times over a day or two
*/

let links = []

for (a of document.querySelectorAll("#friends_center_main a")) {
  if (a.text == "Remove" || a.text == "See More") {
    links.push(a)
  }
}

if (links.length > 3) {
  rand =  Math.floor((Math.random() * links.length)); 
  links[rand].click()
}

