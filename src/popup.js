// Get all the color radio buttons and add a change event listener to each
const colorRadios = document.querySelectorAll('input[name="color"]');
colorRadios.forEach(function(radio) {
  radio.addEventListener("change", function() {
    // Get the selected color
    const selectedColor = document.querySelector('input[name="color"]:checked').value;
    // Send a message to the content script to change the background color
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "change-color", color: selectedColor });
    });
  });
});
