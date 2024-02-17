/* File: popup.js
 * -----------------------
 * This javascript file restores settings when the DOM loads.
 * You shouldn't have to change this file unless you also
 * change the corresponding popup.html file.
 */


var url = "https://pudding.cool/2021/10/judge-my-music/";

chrome.tabs.create({active: true, url: url});





/*document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: "https://pudding.cool/2021/10/judge-my-music/"});
            };
        })();
    }
});*/
