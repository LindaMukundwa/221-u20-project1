
let fade_text = document.getElementById("fade_text");

/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    window.location.href="/feed"
  }
}

fade_text.onclick = () => {
  goToLocation('/feed');
};

/* let title = document.getElementById('splash_title');

title.addEventListener('click', () => {
  goToLocation('')
})

*/