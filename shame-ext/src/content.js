/* File: content.js
 * ---------------
 * This file contains javascript code that is executed
 * everytime a webpage loads over HTTP or HTTPS.
 */

document.body.onload = addElement;

/*
 * Given a button element, look through class/label/id/etc
 * to check if it's the "add to bag" button
 * if so, return true
*/
function is_add_button(button) {
  let keywords = ["add to bag", "purchase", "buy", "add to cart"];
  let text = button.textContent.toLowerCase();
  for (let i = 0; i < keywords.length; i++) {
    if (text.includes(keywords[i])) {
      return true;
    }
  }
  return false;
}

/*
 * Search through all buttons and
 * return the "add to bag" button
 * Assumption: we are on a shopping page w/ an add to bag button
*/
function get_add_button() {
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (is_add_button(buttons[i])) {
            return buttons[i];
        }
    }
    return null;
}

function openLink() {
  var url = "https://pudding.cool/2021/10/judge-my-music/";
  window.open(url, "");
  chrome.storage.sync.set({ "url": url }, function(){
      console.log("saved");
  });
}

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createElement("a");
  newContent.innerHTML = "<img src='https://media1.tenor.com/m/vyIrN17u0xAAAAAC/face-with-raised-eyebrow-zooming.gif' width='150' height='155'>";
  document.body.appendChild(newContent);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  newDiv.onclick = function(){openLink()};

  // add the newly created element and its content into the DOM
  const button = get_add_button();
  if (button != null) {
    const parent = button.parentElement;
    parent.insertBefore(newDiv, button);
  }
}
