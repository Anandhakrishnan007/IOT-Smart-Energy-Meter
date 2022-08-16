// Function for back to input billing Section

function Back() {
    document.getElementById("firstPage").style.display = "block";
    document.getElementById("bill").style.display = "none";

}




function cap() {
    var alpha = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    var a = alpha[Math.floor(Math.random() * 10)];
    var b = alpha[Math.floor(Math.random() * 10)];
    var c = alpha[Math.floor(Math.random() * 10)];
    var firstNum = a + b;
    var sum = a + b + "+" + c;
    var s = (firstNum * 1) + (c * 1);
    document.getElementById("capt").value = sum;
}
function validcap() {
  var powerStatus =  Number(document.querySelector('input[name="pControl"]:checked').value);
  
  

    var x = document.getElementById('capt').value
    var string1 = (x.slice(0, 2) * 1) + (x.slice(3, 4) * 1);
    console.log(string1);
    var string2 = (document.getElementById('textinput').value) * 1;
    console.log(string2);
    if (string1 == string2) {

      
      
      if(powerStatus===1){
        document.getElementById("powerCheck").style.display = "none";
        document.getElementById("powerSet").style.display = "block";
      }
      else{
        document.getElementById("powerCheck").style.display = "none";
        document.getElementById("powerOff").style.display = "block";
      }
      return true;
    }
    else {
      alert("Please enter a valid captcha");
      return false;
    }
  }


