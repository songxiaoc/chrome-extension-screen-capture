document.addEventListener('DOMContentLoaded', function () {
	console.log("-----> DOMContentLoaded");
    document.getElementById('captureBtn').addEventListener('click', function () {
		console.log("-----> click");
        // 使用 chrome.tabs.captureVisibleTab 截取当前可见标签页的图像
        chrome.tabs.captureVisibleTab(function (dataUrl) {
            // 将截图数据转换为 Blob 对象
            // var blob = dataURItoBlob(dataUrl);

            // 创建 Blob 对象
            // var blobUrl = URL.createObjectURL(blob);

            // 创建一个下载链接并模拟点击
            var a = document.createElement('a');
            // a.href = blobUrl;
            a.href = dataUrl;
            a.download = 'screenshot.png';
            a.style.display = 'none';
            document.body.appendChild(a);

            a.click();

            // 移除下载链接
            document.body.removeChild(a);

            // 释放 Blob URL
            // URL.revokeObjectURL(blobUrl);
        });
    });
});

// 将 dataUrl 转换为 Blob 对象的辅助函数
// function dataURItoBlob(dataURI) {
//     var byteString = atob(dataURI.split(',')[1]);
//     var ab = new ArrayBuffer(byteString.length);
//     var ia = new Uint8Array(ab);
//     for (var i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//     }
//     return new Blob([ab], { type: 'image/png' });
// }
