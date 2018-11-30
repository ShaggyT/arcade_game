// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // properties
      // enemies position(x,y)
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // _handles enemy movement- use dt(time delta) to normalize gamse speed
    // methods
      // check enemies position status
        // if (within the grid) -> move forward by x = v(dt)
        // else (reset to start position)
};

// Draw the enemy on the screen, required method for game
// _renders the result of the previous method and uses HTML Canvas method to draw the enemy's sprite new position to the game board
Enemy.prototype.render = function() {
    //_Resources.get -> returns the cached image of our stri[e ]
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player Class
  // 1. Constructore Function
    // 1.1 properties
      // 1.1.1. position of the player (x,y)
      // 1.1.2. player image
  // 2. Add methods to prototype
    // 2.1.update the player position
        // 2.1.1.reached top of the grid, stays within the gird
        // 2.1.2.collision status
    // 2.2. render the player
    // 2.3. handleInput (direction ot the player's movement)
    // 2.4. reset the game (collion and win)

// Player Class
class Player {
  // to initialize a new object
  constructor() {
    // The image/sprite for our player
    this.sprite = 'images/char-pink-girl.png';
    //distance between two blocks
    this.horizontal = 101;
    this.vertical = 83;
    // start position of the player
    this.x0 = (this.vertical * 2) + 30;
    this.y0 = this.y = (this.vertical * 5) - 25;
    // current position of the player (x,y)
    this.x = this.x0;
    this.y = this.y0 ;
  }

  update(dt) {

  }

  // Draw the player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // key -> direction ot the player's movement
  // the position (0,0) is on tope-left corner -> up movement is this.y - this.vertical
  handleInput(key) {
    switch(key) {
      case 'left':
          if (this.x > 0) {
            this.x -= this.horizontal;
          }
          break;
      case 'up':
          if (this.y > this.vertical) {
            this.y -= this.vertical;
          }
          break;
      case 'right':
          if (this.x < (this.horizontal * 3)) {
            this.x += this.horizontal;
          }
          break;
      case 'down':
          if (this.y < (this.vertical * 4)) {
            this.y  += this.vertical;
          }
          break;
    }
  }

  reset(position) {

  }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

// Place the player object in a variable called player
  const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    //_maps key codes to a corresponding string
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
