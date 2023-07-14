
window.addEventListener("scroll", function() {
  var docHeight = document.documentElement.scrollHeight;
  var winHeight = window.innerHeight;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

  var progressBar = document.getElementById("progress-bar");
  progressBar.style.width = scrollPercent + "%";
});
