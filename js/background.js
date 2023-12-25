/*
 * 注意：background.js 是一个后台脚本，它不具备访问页面 DOM 的能力。
 * 因此，诸如：document.xxx 的语句都会报错，在 content.js 可以运行
 *
 * 但是，background.js 具备访问 chrome.xxx 的能力，这在 content.js 中是不具备的
 *
 * */
console.log("-----> background.js")

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'capture') {
        console.log("-----> background.js 接收到 capture 信息");
        captureScreen(sender.tab);
    }
});

function captureScreen(tab) {
    // 使用 chrome.tabs.captureVisibleTab 截取当前可见标签页的图像
    chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, function (dataUrl) {
        // 将截图数据传递给 content script 处理下载
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'download', dataUrl: dataUrl });
        });
    });
}
