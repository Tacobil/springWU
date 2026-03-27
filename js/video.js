const params = new URLSearchParams(window.location.search);
const videoId = params.get("v");

console.log(videoId);