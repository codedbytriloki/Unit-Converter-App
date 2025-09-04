const Conversion = () => {
const type = document.getElementById("selectType").value;
const input = parseFloat(document.getElementById("input").value);

const result = document.getElementById("result");

  if(isNaN(input)){
    result.textContent = "Enter Valid Value"
    return;
  }

  let output = "";
  switch(type){
    case "Height":
      output = `${input} km = ${(input * 0.621).toFixed(2)} miles`;
      break;
    case "Weight":
      output = `${input} kg = ${(input * 2.204).toFixed(2)} bs`;
      break;
    case "Temperature":
      output = `${input} C = ${((input * 9/5) +32).toFixed(2)} F`;
      break;
    default:
      output = "Please select a conversion type";  
  }

  result.textContent = output;

}