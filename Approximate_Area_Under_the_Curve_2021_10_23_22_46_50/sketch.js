var lowerLimit = 1, upperLimit = 3;

// Original variable declaration before having selector button
//var deltaX = 0.1;

var zoomScale = 15;

var x = 1, y = 0; // x = lowerLimit

var rectangleCount = 1;

let sizeSlider;

let rad;

let sel;

let defaultFunc = 'x';

let mathFuncBox;
let mathFuncUpdateButton;
let mathFunction;

let lowerLimitBox,
    upperLimitBox;

let updateButton;

let deltaXSel;

function setup() {
  createCanvas(400, 400);
  
  sizeSlider = createSlider(10, 30, 20, 1); 
  sizeSlider.position(0, height + 75);
  
  // Selector for function options
  sel = createSelect();
  sel.position(0, height + 100);
  
  // Size of the selector box
  sel.style('width', '180px');
  
  sel.option('(1) x^1', 1);
  sel.option('(2) x^2', 2);
  sel.option('(3) x^3 - 4x^2 + 11', 3);
  sel.option('(4) x^4', 4);
  sel.option('(5) x^5 - 4x^3 + 11', 5);
  sel.option('(6) arctan(x)', 6);
  sel.option('(7) |x|', 7);
  sel.option('(8) e^(-x^2)', 8);
  sel.option('(9) ln(x)', 9);
  sel.option('(10) sin(2x) + 3', 10);
  sel.option('(11) cos(3x) + 2', 11);
  sel.option('(12) cos(x) * sin^2(x)', 12);
  sel.option('(13) tan(x)', 13);
  sel.option('(14) sqrt(x)', 14);
  sel.option('(15) sec^2(x)', 15);
  sel.option('(16) 2 * (x - 1)^(1/3) + 4', 16);
  
  // The default option for selector
  sel.value('1');

  mathFuncBox = createInput(defaultFunc);
  //mathFuncUpdateButton - createButton("Compute");
  //console.log(defaultFunc);
  mathFunction = new MathFunc(defaultFunc, upperLimit, lowerLimit);
  mathFunction.getApproxArea(defaultFunc, 3, 1, 0.1);

  mathFuncBox.position(10, height + 5);
  //mathFuncUpdateButton.position(300, height);
  //mathFuncUpdateButton.mousePressed(updateLimits);
  
  lowerLimitBox = createInput(lowerLimit);
  upperLimitBox = createInput(upperLimit);
  
  lowerLimitBox.position(210, height);
  lowerLimitBox.size(50, 10);
  
  upperLimitBox.position(270, height);
  upperLimitBox.size(50, 10);
  
  updateButton = createButton("Update");
  updateButton.position(330, height);
  //updateButton.mousePressed(updateLimits);
  updateButton.mousePressed(updateIntegral);
  
  // Selector for Δx
  deltaXSel = createSelect();
  deltaXSel.position(210, height + 30);
  
  deltaXSel.style('width', '100px');
  deltaXSel.option('(1) Δx = 1', 1);
  deltaXSel.option('(2) Δx = 0.5', 2);
  deltaXSel.option('(3) Δx = 0.1', 3);
  deltaXSel.option('(4) Δx = 0.01', 4);
  
  deltaXSel.value('3');
}

function draw() 
{
  
  background(255); 
  
  // Scale slider
  let sliderVal = sizeSlider.value();
  scale(sliderVal);
  
  // Translates to the canvas to the origin of the axes
  translate(width / (1.9 * sliderVal), height / (2 * sliderVal) + 5);
  
  // For drawing a cartesian plane (Not aligned yet, very slow)
  //push();
  //noStroke();
  //beginShape();
  //grid();
  //endShape();
  //pop();
  
  // Draws x-y axes
  axes();
  
  // Switch statement for the deltaX variable
  if (deltaXSel.selected())
  {
    switch(deltaXSel.selected()) 
    {
      case '1':
        deltaX = 1;
        break;
      case '2':
        deltaX = 0.5;
        break;
      case '3':
        deltaX = 0.1;
        break;
      case '4':
        deltaX = 0.01;
        break;
      default:
        deltaX = 0.1;
    }
  }
  
  // Mathematical function
  // let f = (x) =>
  // {
  //   x = 1 * x;   
    
  //   // .selected() method returns the value of the selected option
  //   //console.log(rad.selected());
  //   if (sel.selected())
  //   {
  //     switch(sel.selected())
  //     {
  //       case '1':
  //         return - ( (x) );
  //       case '2':
  //         return - ( (x*x) );
  //       case '3':
  //         return - ( (x*x*x) - (4*x*x) + (11) );
  //       case '4':
  //         return - ( (x*x*x*x) );
  //       case '5':
  //         return - ( (x*x*x*x*x) - (4*x*x*x) + (11) );
  //       case '6':
  //         return - ( atan(x) );
  //       case '7':
  //         return - ( abs(x) );
  //       case '8':
  //         return - ( exp(-x * x) );
  //       case '9':
  //         if ( lowerLimit <= 0 && sel.selected() === 9)
  //         {
  //           return;
  //         }
  //         else
  //         {
  //           return - ( log(x) ); 
  //         }
  //         break;
  //       case '10':
  //         return - ( (sin(2 * x)) + (3) );
  //       case '11':
  //         return - ( (cos(3 * x)) + (2) );
  //       case '12':
  //         return - ( cos(x) * (sin(x) * sin(x)) );
  //       case '13':
  //         return - ( tan(x) );
  //       case '14':
  //         if (lowerLimit < 0 && sel.selected() === 14)
  //         {
  //           text('ERROR: DOMAIN CANNOT BE NEGATIVE', width / 2, height / 2)
  //           textAlign(CENTER);
  //           return;
  //         }
  //         else
  //         {
  //           return - ( sqrt(x) );
  //         }
  //         break;
  //       case '15':
  //         return - ( (1 / (cos(x)*cos(x))) ); 
  //       case '16':
  //         return - ( (2) * (Math.cbrt(x - 1)) + 4 );
  //       default:
          
  //     }
  //   }
  //   else
  //   {
  //     // Default Graph
  //     return -x;
  //   }
  
  // }
  
  // Creates different color for function
  noFill();
  stroke(0);
  strokeWeight(2/zoomScale);
  
  drawMathFunc();
  // Graphing behavior of function
  //beginShape();
  // for(var x = -width/zoomScale; x < width/zoomScale; x += 0.1)
  // {
  //   vertex(x, f(x)); 
  // }
  // endShape();
  

  drawIntegral(mathFunction, deltaX, upperLimit, lowerLimit);
  //integral(f, deltaX, lowerLimit, upperLimit);
}

/**
 * Draws the shape of the selected math function.
 */
function drawMathFunc() {
  //mathFunction = new MathFunc(defaultFunc, upperLimit, lowerLimit);

  beginShape();
  for (var x = -width/zoomScale; x < width/zoomScale; x += 0.1) {
    vertex(x, -mathFunction.evaluateAt(x));
  }
  endShape();
}

/**
 * Creating the x and y axes with ticks
 */
function axes()
{
  push();
  stroke(100);

  //Draw the x-axis
  line(-width/zoomScale, 0, width/zoomScale, 0);
  
  // Draw the y-axis
  line(0, -height/zoomScale, 0, height/zoomScale); 
  
  // Draws ticks on positive y-axis
  for (let y = 1; y < height/zoomScale; y++) 
  {
    noStroke();
    stroke(160)
    line(-0.2, -y, 0.2, -y)
  }
  
  // Draws ticks on negative y-axis
  for (let y = -1; y > -height/zoomScale; y--) 
  {
    noStroke();
    stroke(160)
    line(-0.2, -y, 0.2, -y)
  }
  
  // Draws ticks on positive x-axis
  for (let x = 0; x < width/zoomScale; x++) 
  {
    noStroke();
    stroke(160)
    line(x+1, 0.2, x+1, -0.2)
  }
  
  // Draws ticks on the negative x-axis
  for (let x = -1; x > -width/zoomScale; x--) 
  {
    noStroke();
    stroke(160)
    line(x+1, 0.2, x+1, -0.2)
  }
  pop();
  
}

// An optional method for a cartesian grid background
function grid()
{
  // From https://editor.p5js.org/mparker/sketches/oPEEhv8x-
  //let w = width/(2*zoomScale);
  
  let w = 1;
  stroke(150);
  
  translate(0, 0);
  
  for (var x = 0; x <= width; x += w)
  {
    for (var y = 0; y <= height; y+= w)
    {
      rect(x - 200, 80 - y, width/(2*zoomScale), (height/(2*zoomScale) + 10));
      fill(250);

    }
  }
}
/**
 * 
 * @param {*} mathFunction 
 * @param {*} deltaX 
 * @param {*} upperLimit 
 * @param {*} lowerLimit 
 */
function drawIntegral(mathFunction, deltaX, upperLimit, lowerLimit) {
    noFill();
    stroke('rgb(0,200,230)');
    strokeWeight(0.05);

    for (var x = lowerLimit; x < upperLimit; x += deltaX) {
      rect(x, 0, deltaX, -mathFunction.evaluateAt(x));
    }    
}

// (OLD) Method used to find the area and create the rectangles
function integral(f, deltaX, lowerLimit, upperLimit)
{
  var area = 0; 
  var updatedLowerLimit = lowerLimit;

  // Calculated the number of rectangles, given a, b, & deltaX
  var n = ceil( (upperLimit - lowerLimit) / deltaX );
  
  noFill();
  stroke('rgb(0,200,230)');
  strokeWeight(0.05);
  
  //if (x < upperLimit)
  //{
  // rect(x, 0, deltaX, f(x));
  //}
  //x += deltaX;
  
  // Creates the (left) rectangles 
  for (let x = lowerLimit; x < upperLimit; x += deltaX)
  {
    rect(x, 0, deltaX, f(x));
  }
  
  // Calculates the approximate area (using left rectangles)
  for (let a = 0; a < n; a++)
  {
    area += f(updatedLowerLimit) * deltaX;
    updatedLowerLimit += deltaX;
  }
  
  push();
  fill(160);
  noStroke();
  textFont('monospaaace');
  textSize(0.8);
  text("Riemann Sum of\n" + "function #" + 
       sel.selected() + "\n" + "from " + 
       lowerLimit + " to " + upperLimit + 
       ":\n" + -(area.toPrecision(4)), -10, -14);
  // Checks bad domain
  if (isNaN(area) || !isFinite(area))
  {
    text("Error: Invalid domain\n", -10, -10); 
  }
  
  if (n < 0)
  {
    text("Rectangle Count:\nError: Invalid Limits", -10, -9); 
  } 
  else
  {
    text("Rectangle count: \n" + n, -10, -9);  
  }
  pop();
}

/**
 * Updates the mathFunction, and the limits of integration.
 */
function updateIntegral() {

  var a = parseFloat(lowerLimitBox.value(), 10);
  var b = parseFloat(upperLimitBox.value(), 10);
  
  // Will not update canvas if none of these hold
  if (a !== isNaN && b !== isNaN && b > a)
  {
    lowerLimit = a;
    upperLimit = b;
  }
  
  // Checks if the rules are being followed
  if (upperLimitBox.value(isNaN))
  {
    upperLimitBox.value(upperLimit);  
  }
  
  if (lowerLimitBox.value(isNaN))
  {
    lowerLimitBox.value(lowerLimit);
  }
  else if (a > b)
  {
    lowerLimitBox.value(lowerLimit); 
  }  

  // If update is clicked with an empty function box
  if (mathFuncBox.value() == "") {
    // Use the defaultFunc
    mathFuncBox.value(defaultFunc);
  } 
  mathFunction = new MathFunc(mathFuncBox.value(), b, a);
}

// (OLD) Method for updating the limits of integration
function updateLimits()
{
  var a = parseFloat(lowerLimitBox.value(), 10);
  var b = parseFloat(upperLimitBox.value(), 10);
  
  // Will not update canvas if none of these hold
  if (a !== isNaN && b !== isNaN && b > a)
  {
    lowerLimit = a;
    upperLimit = b;
  }
  
  // Checks if the rules are being followed
  if (upperLimitBox.value(isNaN))
  {
    upperLimitBox.value(upperLimit);  
  }
  
  if (lowerLimitBox.value(isNaN))
  {
    lowerLimitBox.value(lowerLimit);
  }
  else if (a > b)
  {
    lowerLimitBox.value(lowerLimit); 
  }
  
}