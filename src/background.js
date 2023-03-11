// Create the browser action
chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the content script to change the background color
  chrome.tabs.sendMessage(tab.id, { action: "change-color" });
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // If the message is "change-color"
  if (message.action === "change-color") {
    // Change the background color of the page
    document.body.style.backgroundColor = "green";
  }
});
