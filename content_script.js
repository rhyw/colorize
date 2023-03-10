// content_script.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // If the message is "change-color"
  if (message.action === "change-color") {
    // Change the background color of the page to the selected color
    document.body.style.backgroundColor = message.color;
    // Send a message to the background script to log the color change
    chrome.runtime.sendMessage({action: "log-color-change", color: message.color});
  }
});
