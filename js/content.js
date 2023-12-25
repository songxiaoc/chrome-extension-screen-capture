console.log("-----> content.js")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'capture') {
        console.log("-----> content.js > capture")
        // 向 background script 发送请求截图的消息
        chrome.runtime.sendMessage({action: 'capture'});
    }

    if (request.action === 'download') {
        // 将 dataUrl 转换为 Blob 对象
        var blob = dataURItoBlob(request.dataUrl);

        // 创建 Blob 对象
        var blobUrl = URL.createObjectURL(blob);

        // 创建一个下载链接并模拟点击
        var a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'screenshot.png';
        a.style.display = 'none';
        document.body.appendChild(a);

        a.click();

        // 移除下载链接
        document.body.removeChild(a);

        // 释放 Blob URL
        URL.revokeObjectURL(blobUrl);
    }
});

// 将 dataUrl 转换为 Blob 对象的辅助函数
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: 'image/png'});
}
