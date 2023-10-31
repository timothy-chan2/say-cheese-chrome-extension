const cameraify = () => {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/featured/?camera/${img.width}x${img.height}?${Math.random()}`;
    img.srcset = img.src;
  });
}