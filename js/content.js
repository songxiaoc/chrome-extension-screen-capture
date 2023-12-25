// console.log("-----> content.js");
//
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'download') {
//         console.log("-----> content.js > download");
//         captureScreenAndDownload();
//     }
// });
//
// // 截取当前可见标签页的图像并触发下载
// function captureScreenAndDownload() {
//     // 使用 chrome.tabs.query 获取当前活动标签页的信息
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         // 使用 chrome.tabs.captureVisibleTab 截取当前可见标签页的图像
//         chrome.tabs.captureVisibleTab(tabs[0].windowId, { format: 'png' }, function (dataUrl) {
//             // 将截图数据转换为 Blob 对象
//             var blob = dataURItoBlob(dataUrl);
//
//             // 创建 Blob 对象
//             var blobUrl = URL.createObjectURL(blob);
//
//             // 创建一个下载链接并模拟点击
//             var a = document.createElement('a');
//             a.href = blobUrl;
//             a.download = 'screenshot.png';
//             a.style.display = 'none';
//             document.body.appendChild(a);
//
//             a.click();
//
//             // 移除下载链接
//             document.body.removeChild(a);
//
//             // 释放 Blob URL
//             URL.revokeObjectURL(blobUrl);
//         });
//     });
// }
//
// // 将 dataUrl 转换为 Blob 对象的辅助函数
// function dataURItoBlob(dataURI) {
//     var byteString = atob(dataURI.split(',')[1]);
//     var ab = new ArrayBuffer(byteString.length);
//     var ia = new Uint8Array(ab);
//     for (var i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//     }
//     return new Blob([ab], { type: 'image/png' });
// }
