document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('injectTime').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: injectTimeFunction, // Use a function to inject the code.
      });
    });
  });
});

function injectTimeFunction() {
    const timeDiv = document.createElement('div');
    timeDiv.style.position = 'fixed';
    timeDiv.style.top = '50px';
    timeDiv.style.left = '10px';
    timeDiv.style.zIndex = '10000';
    timeDiv.style.color = 'white';
    timeDiv.style.backgroundColor = 'black';
    timeDiv.style.padding = '10px';
    timeDiv.style.fontSize = '20px';
    document.body.appendChild(timeDiv);

    function updateTime() {
      let time = new Date();
      timeDiv.textContent = time.toLocaleTimeString();
    }
    updateTime();
    setInterval(updateTime, 1000);
}