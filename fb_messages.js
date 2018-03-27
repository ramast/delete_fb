// ==UserScript==
// @name     Delete Message
// @version  1
// @include https://m.facebook.com/messages/*
// @include https://m.facebook.com/messages/read/*
// @include https://m.facebook.com/messagingconfirmation*
// @grant    none
// ==/UserScript==

const url = window.location.toString()

if (url.indexOf("read/") > 0) {
   document.querySelector("[name=delete]").click()
} else if (url.indexOf("messagingconfirmation") > 0) {
  document.querySelectorAll("#objects_container a")[1].click()
} else {
  document.querySelector("h3 a").click()
}
