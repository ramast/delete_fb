// ==UserScript==
// @name     Facebook Activity Log Deletion
// @include  https://m.facebook.com/*
// @version  1
// @grant    none
// ==/UserScript==

/*
    This script will work when you visit your "activity log" page (from your profile).
    The script will go through each entry in your log and click on Unlike, Delete, Unsubscribe, Unvote, Unfriend buttons
    The script will also attempt to untag you from any post/picture by first reporting the post as annoying so that the untag link become available
    
    The script is only able to handle activities of one month at a time so in order to remove one year worth of activities you need
    to run 12 instances in 12 tabs.
*/

const url = window.location.toString()
if (url.indexOf("/allactivity") > 0)  {
    let t= null
    let report = null
    let success = false
    let actions = ["Unlike", "Remove reaction", "Delete", "Unsubscribe", "Unvote", "Unfriend"]

    for (t of document.getElementsByTagName("a")) {
        if (actions.indexOf(t.text) >= 0) {
            success = true
            t.click()
        }
        if (t.text == "Report") {
            report = t
        }
    }

    if (!success) {
        if (report) {
            report.click()
        } else {
            let h3s=document.getElementsByTagName("h3")
            h3s[h3s.length - 1].click()
        }
    }
    //End of Acitivity
}

if (url.indexOf("basic/question") > 0)  {
    let a = document.querySelector("[value=annoying]")
    let b = document.querySelector("[value=UNTAG]")
    if (!a && !b) {
        document.querySelector("[value=Done]").click()
    } else {
        a = a && a.click()
        b = b && b.click()
        document.getElementsByTagName("form")[0].submit()
    
    }
    //End of Reporting
}
