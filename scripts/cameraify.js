const cameraify = () => {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/featured/?camera`;
    img.srcset = img.src;
  });
}