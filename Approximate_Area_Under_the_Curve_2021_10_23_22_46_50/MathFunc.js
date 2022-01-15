/**
 * Class that will handle the input for the math function
 */
class MathFunc {
  /**
   * Constructor for MathFunc
   * @param {string} inputMathFunc The given math function.
   * @param {number} upperLimit The lower limit for evaluation.
   * @param {number} lowerLimit The upper limit for evaluation.
   */
  constructor(inputMathFunc, upperLimit, lowerLimit) {
    this.inputMathFunc = inputMathFunc;
    this.upperLimit = upperLimit;
    this.lowerLimit = lowerLimit;
  }

  getMathFunc() {
    let parser = math.parser();
    const parseFunc = parser.evaluate('f(x) = ' + this.inputMathFunc);
    const f = parser.get('f');
    parser.clear();
    return f;
  }
  
  setMathFunc(newMathFunc) {
    let parser = math.parser();
    const parseFunc = parser.evaluate('f(x) = ' + newMathFunc);
    const f = parser.get('f');
  }
	
  /**
   * Finding f(x) at a specific point.
   * @param {number} x The point we are evaluating the function at.  
   * @return {number} The output from the f(x) evaluation. 
   */
  evaluateAt(x) {
    let parser = math.parser();
    const parseFunc = parser.evaluate('f(x) = ' + this.inputMathFunc);
    const f = parser.get('f');
    return f(x);
  }

  /**
   * Computes the approximate area under the given curve.
   * @param {number} deltaX The change in x for each step.
   * @return {number} The approximate area under the curve. 
   */
  getApproxArea(deltaX) {
        let parser = math.parser();
   	const parseFunc = parser.evaluate('f(x) = ' + this.inputMathFunc);
	const f = parser.get('f');

	var n = ceil((this.upperLimit - this.lowerLimit) / deltaX);
	var area = 0;
	var updatedLowerLimit = this.lowerLimit;

	for (let a = 0; a < n; a++) {
    	  area += f(updatedLowerLimit) * deltaX;
    	  updatedLowerLimit += deltaX;
  	}
	//console.log(area);
	parser.clear();
	return area;
  }
}
