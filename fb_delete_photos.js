// ==UserScript==
// @name     Facebook Delete Photos
// @version  1
// @include  https://m.facebook.com/*/albums/*
// @include  https://m.facebook.com/*photo.php*
// @grant    none
// ==/UserScript==

/*
Deleting photo albums doesn't require any script, simply delete the album and all photos inside will be deleted.
This script is intended for albums that u can't deleted.
Mobile uploads, timeline photos, display pictures, ...

simply open one of these albums and the photos will start disappearing
*/

const url = document.location.toString()

if (url.indexOf("albums") > 0) {
    const images = document.querySelectorAll("#thumbnail_area a img")
    for (img of images) {
       img.click()
       break
    }
} else if (url.indexOf("/photo.php") > 0) {
    //Final confirmation
    const delete_btn = document.querySelector("[name=photo_delete]")
    
    if (delete_btn) {
       delete_btn.click()
    }

    for (a of document.querySelectorAll("#MPhotoContent a")) {
       if (a.text == "Edit Photo") {
           a.click()
           break
       }
    }
} else if (url.indexOf("/editphoto.php") > 0) {
   for (a of document.querySelectorAll("#objects_container a")) {
     console.log(a.text)

     if (a.text == "Delete photo") {
         a.click()
         break
      }
   }
}
