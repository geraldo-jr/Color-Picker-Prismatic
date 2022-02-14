// Warning on only accept values from 0 to 1 with 2 decimal values
function checkInput(value, id) {
  if (value < 0 || value > 1) {
    alert("Please, use valid input from 0 to 1 for the RGB values.");
    document.getElementById(id).value = "0";
  }

  // Assing values to the proper variables according to the current input status
  switch (id) {
    case "R":
      redValue = value;
      greenValue = document.querySelector('#G').value;
      blueValue = document.querySelector('#B').value;
      break;
    case "G":
      redValue = document.querySelector('#R').value;
      greenValue = value;
      blueValue = document.querySelector('#B').value;
      break;
    case "B":
      redValue = document.querySelector('#R').value;      greenValue = document.querySelector('#G').value;
      blueValue = value;
      break;
    default:
      redValue = document.querySelector('#R').value;
      greenValue = document.querySelector('#G').value;
      blueValue = document.querySelector('#B').value;
      luminance = 0;
      break;
  }
}

// Convert RGB to Barycentric Maxwell values 
function convertRGBtoMaxwell() {

  // Double checking the correct inputs
  checkInput();

  var pho, gamma, beta;

  luminance = Math.max(redValue, greenValue, blueValue);
  redValue = redValue * 255;
  greenValue = greenValue * 255;
  blueValue = blueValue * 255;

  document.querySelector('.colorSquare').style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
  
  // Calculate the pho, gamma and beta values by summing RGB values and dividing by 1 and then mult for the RGB value for each pair.
  var rgbSum = parseInt(redValue) + parseInt(greenValue) + parseInt(blueValue);

  if (rgbSum != 0) {
    var decimalSum = 1/rgbSum;
  } else {
    var decimalSum = 0
  }
  
  var pho = decimalSum * redValue;
  var gamma = decimalSum * greenValue;
  var beta = decimalSum * blueValue;

  // Print values converted on the page
  var message = "(" + pho.toFixed(2) + ", " + gamma.toFixed(2) + ", " + beta.toFixed(2) + ", " + luminance + ")"; 

  document.querySelector('#maxwellResult').innerHTML = message;
}