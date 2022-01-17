# Area Under a Graph

Program computes and visualizes approximations of single-variable integrals using (left-hand) Riemann sum method.

The program can be ran using the p5.js online editor [here.](https://editor.p5js.org/McKCam/sketches/GWQ0XGAO2)

The user can enter valid functions in the following forms: <br />
-x^2 <br />
-x*x <br />
-2x <br />

The function parsing and evaluation is handled using the math.js library. The visualization is created using p5.js.

The program defaults to a linear function, x, and allows the user to input functions.

Functionality that needs to be worked on: <br />
-User validation for inputting functions <br />

Features that I would like to implement in the near future: <br />
-Add a slider that modifies the color of the Riemann sum rectangles <br />
-Allow the user to scroll around the graph (something like orbitControl() in WEBGL, but for 2D) <br />
-Add more numerical methods (like midpoint) <br />
