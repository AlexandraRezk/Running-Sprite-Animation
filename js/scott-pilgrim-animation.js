//canvas set up
var canvasWidth = 650;
var canvasHeight = 350;
//width and height of spritesheet
var spriteWidth = 864;
var spriteHeight = 280;
//Number of rows and columns in current spritesheet
var rows = 2;
var cols = 8;
//The first rwo is for the right movement
var trackRight = 0;
//The second rwo is for the left movement
var trackLeft = 1;
//Width of single sprite is width of spritesheet divided by number of columns
var width = spriteWidth/cols;
//Height of single sprite is height of spritesheet divided by number of rows
var height = spriteHeight/rows;
//First frame of each row
var currentFrame = 0;
//Total number of frams
var frameCount = 8;
//x and y coordinates to render the sprite on the canvas
var x = 0;
var y = 0;
//x and y coordinates for the sprite frame from the spritesheet
var srcX = 0;
var srcY = 0;
//tracking the movement left and right
var left = false;
//Assuming that the character whill move right first
var right =true;
//Speed of movement
var speed = 12;

//Getting the canvas
var canvas = document.getElementById('canvas');
//Setting width and height of the canvas
canvas.width = canvasWidth;
canvas.height = canvasHeight;
//Establishing a context to the canvas
var ctx = canvas.getContext("2d");
//Creating an Image object for character
var character = new Image();
//Setting the source to the iamge file
character.src ="images/scott-pilgrim-character-spritesheet.png"

function updateFrame(){
    //Updates the frame index
    currentFrame = ++currentFrame % frameCount;
    //Calculating the x coordinate for spritesheet
    srcX = currentFrame * width;
    ctx.clearRect(x, y, width, height);
    
    //if left is true and the character has not reached the left edge
    if(left && x > 0){
        //Calculate srcY
        srcY = trackLeft*height;
        //decreasing the x coordinate
        x -= speed;
    }
    
    //if the right is true and the characher has not reached the right edge
    if(right && x < canvasWidth - width){
        //calculate srcY
        srcY = trackRight * height;
        
        x += speed;
    }
}

function draw() {
    //Updating the frame
    updateFrame();
    //Draw the image
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

function moveLeft() {
    left = true;
    right = false;
}

function moveRight() {
    left = false;
    right = true;
}

setInterval(draw, 100);