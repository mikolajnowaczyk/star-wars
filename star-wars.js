// Sets the number of stars we wish to display
const numStars = window.innerWidth*window.innerHeight / 1000;

function generateStars() {
  // For every star we want to display
  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.id = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);

    if (bigStar() == true) {
      star.classList.add("bigstar");
    }
  }
}

function deleteStars() {
  for (let i = 0; i < numStars; i++) {
    var element = document.getElementById("star");
    element.parentNode.removeChild(element);
  }
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x) - 2;
  var randomY = Math.floor(Math.random() * y) - 2;
  return [randomX, randomY];
}

// Gets true if the star should be a big one

function bigStar() {
  let bigstar = false;
  if (Math.floor(Math.random() * 100) % 20 == 0)
    bigstar = true;
  return bigstar;
}

function resizeHandler() {
  deleteStars();
  generateStars();
}

window.addEventListener('load', (event) => {
  setTimeout(function(){ generateStars(); }, 7000);
});

window.addEventListener('resize', (event) => {
  resizeHandler();
});