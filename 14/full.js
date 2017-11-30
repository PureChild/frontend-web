function fullscreen(){
  if (screenfull.enabled) {
  	screenfull.request(document.querySelector('img'));
  }
}
document.getElementById('fullBtn').addEventListener('click', fullscreen);
