// Get the "Apply" button and add a click event listener
const applyColorButton = document.getElementById("apply-color-button");
applyColorButton.addEventListener("click", function () {
  // Get the selected color
  const selectedColor = document.querySelector('input[name="color"]:checked').value;
  // Send a message to the content script to change the background color
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "change-color", color: selectedColor });
  });
});
