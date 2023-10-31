const cameraify = () => {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/featured/?camera/${img.width}x${img.height}`;
    img.srcset = img.src;
  });
}