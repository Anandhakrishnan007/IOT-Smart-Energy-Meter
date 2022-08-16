//Java Script for Billing
function onSubmit() {
    const consumedUnit = Number(document.getElementById("unit").value);
    if (consumedUnit === "" || !consumedUnit) {
        alert("Please input consumer number");
        return;
    }
    const tariff_id = Number(document.getElementById("tariff").value);
    console.log(tariff_id, "tariff_id");
    var billing = Number(document.querySelector('input[name="frequency"]:checked').value);
    console.log(billing, "billing");
    var Phase = Number(document.querySelector('input[name="phase"]:checked').value);
    console.log(Phase, "Phase");
    telescopic(consumedUnit);
    js=telescopic(consumedUnit);
    var k = telescopic(consumedUnit);
    document.getElementById("T").innerHTML = k;
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("bill").style.display = "block";
    document.getElementById("EnergyCharge").innerHTML=js;
    fixedCharge(consumedUnit);
    

}


//telescopic
function telescopic(consumedUnit) {

    if ((consumedUnit <= 250) && (consumedUnit > 40)){
        var x = Math.floor(consumedUnit / 50) + 1;

    switch (x) {
        case 1:
            y = (consumedUnit * 3.15);
            return (y);
        case 2:
            y = (157.5 + ((consumedUnit - 50) * 3.70));
            return (y);
        case 3:
            y = (342.5 + ((consumedUnit - 100) * 4.80));
            return (y);
        case 4:
            y = (582.5 + ((consumedUnit - 150) * 6.40));
            return (y);
        case 5:
            y = (902.5 + ((consumedUnit - 200) * 7.60));
            return (y);
        case 6:
            y = 1282.5;
            return (y);
        default:
            console.log("hfjfh")
            break;
    }
}

    else if (consumedUnit < 40){
        y=consumedUnit*1.5;
        
    }
    else if (consumedUnit > 250){

        if(consumedUnit<=300){
            y=consumedUnit*5.8;
        }
        else if(consumedUnit<=350){
            y=consumedUnit*6.6;
        }
        else if(consumedUnit<=400){
            y=consumedUnit*6.9;
        }
        else if(consumedUnit <=500){
            y=consumedUnit*7.1;
        }
        else if(consumedUnit>500){
            y=consumedUnit*7.9;
        }
    }
    
    consumedUnit = y
    return (consumedUnit);
}




// ..........fixed charge..........
function fixedCharge(consumedUnit){
    
   
if (consumedUnit <= 250) {
    if (consumedUnit <= 40) {
        f = 35;
    }
    else if (consumedUnit <= 100) {
        console.log("hjvfb")
        f = 45;
    }
    else if (consumedUnit <= 150) {
        f = 55;
    }
    else if (consumedUnit <= 200) {
        f = 70;
    }
    else if (consumedUnit <= 250) {
        f = 80;
    }

}
else if (consumedUnit > 250) {
    if (consumedUnit <= 300) {
        f = 100;
    }
    else if (consumedUnit <= 350) {
        f = 110;
    }
    else if (consumedUnit <= 400) {
        f = 120;
    }
    else if (consumedUnit <= 500) {
        f = 130;
    }
    else if (consumedUnit > 500) {
        f = 150;
    }    
}
console.log(f)
document.getElementById("fixedCharge").innerHTML=f;
}
