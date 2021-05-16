function ImageHandle(e) {
  const files = e.target.files[0];
  console.log(files);
  return files;
}

export default ImageHandle;
