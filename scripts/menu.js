const sendCameraifyMsg = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'cameraify' });
  });
}

document.querySelector('#cameraify').addEventListener('click', event => sendCameraifyMsg());