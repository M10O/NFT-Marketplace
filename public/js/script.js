
function updateTimer() {
  future = Date.parse("apr 30, 2022 05:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer")
      .innerHTML =
      '<div>' + d + '<span>Days</span></div>' +
      '<div>' + h + '<span>Hours</span></div>' +
      '<div>' + m + '<span>Minutes</span></div>' +
      '<div>' + s + '<span>Seconds</span></div>';
}
setInterval('updateTimer()', 1000);
//Timer code ends here



//Popup code starts here
window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
     1000 
  )
});


document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

// =============================Copy code starts her

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}