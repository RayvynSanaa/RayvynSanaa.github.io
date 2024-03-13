$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(500, 300, 200, 20); // short but wide plarform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(400, 500, 200, 20); // short but wide plarform located 400 pixels from the left of the screen and 500 pixels from the top of the screen
createPlatform(400, 700, 200, 20); // short but wide plarform located 400 pixels from the left of the screen and 700 pixels from the top of the screen
createPlatform(1000, 400, 200, 20); // short but wide plarform located 1000 pixels from the right of the screen and 400 pixels from the bottom of the screen
createPlatform(100, 600, 200, 20);// short but wide plarform located 100 pixels from the right of the screen and 600 pixels from the bottom of the screen
createPlatform(800, 200, 200, 20);// short but wide plarform located 800 pixels from the right of the screen and 200 pixels from the bottom of the screen
createPlatform(700, 500, 200, 20);// short but wide plarform located 700 pixels from the right of the screen and 500 pixels from the bottom of the screen
createPlatform(100, 400, 200, 20);// short but wide plarform located 100 pixels from the right of the screen and 400 pixels from the bottom of the screen
createCannon("right", 100, 1000) 
createCannon("top", 400, 1000)
createCannon("left", 100, 1000)

// Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("steve",500, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
createCollectable("steve", 400, 100, 2,.05); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
createCollectable("database", 200, 100, 20,.8); // creates a "grace" collectible at the coordinates (400, 500), falling with default gravity and bouncing with default bounce %
createCollectable("database",900, 100, 0, .8);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("", 600, 1000); // cannon on left wall, 600px down, shootingonce per second
createCannon("bottom", 600, 1000); //cannon on bottom wall, 200px up, shootingonce per second
createCannon("top", 800, 1000); // cannon onright wall, 700px down, shootingonce per second

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
