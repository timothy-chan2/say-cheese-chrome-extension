const cameraify = () => {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/featured/${img.width}x${img.height}/?camera&${Math.random()}`;
    img.srcset = img.src;
  });
}

// Listen for messages on the content page
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.action === 'cameraify') {
      cameraify();
    }
  }
);