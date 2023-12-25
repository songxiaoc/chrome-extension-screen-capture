document.addEventListener('DOMContentLoaded', function () {
	console.log("-----> DOMContentLoaded");
    document.getElementById('captureBtn').addEventListener('click', function () {
		console.log("-----> click");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { action: 'capture' });
        });
    });
});
