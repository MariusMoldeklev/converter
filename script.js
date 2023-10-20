/* 
const container =document.querySelector("#containerId");
console.log(container)

container.style.height = "100px";
container.style.border = "2px solid black";

container.textContent = "Hei!"; */

//const paragraph = document.createElement("p");

 // et ["volume", "length", "speed","temperature"];


function unitConverter() {
    const myInput = document.querySelector("#myInputID").value;
    console.log(myInput)
    const fromValue = document.querySelector("#fromValueID").value;
    console.log(fromValue)
    const toValue = document.querySelector("#toValueID").value;
    console.log(toValue)
    const displayValue = document.querySelector("#sum");
    console.log(displayValue)
    
    let result;
    
    if (fromValue ==="mm" && toValue === "mm") {
        result = myInput +"mm, no reason to convert from mm -> mm"
    }
    if (fromValue ==="mm" && toValue === "cm") {
        result = myInput / 10 +"cm";
    }
    if (fromValue ==="mm" && toValue === "m") {
        result = myInput / 10000 +"m";
    }
    if (fromValue ==="mm" && toValue === "km") {
        result = myInput / 1000000 +"km";
    }
    if (fromValue ==="mm" && toValue === "mil") {
        result = myInput / 10000000 +"mil";
    }
    if (fromValue ==="cm" && toValue ==="mm") {
        result = myInput * 10 +"mm"
    }
    if (fromValue ==="cm" && toValue === "m") {
        result = myInput / 100 +"m";
    }   
    if (fromValue ==="cm" && toValue ==="km") {
        result = myInput / 100000 +"km"
    }
    if (fromValue ==="cm" && toValue ==="mil"){
        result = myInput / 1000000 +"mil"
    }
    if (fromValue ==="cm" && toValue ==="cm") {
        result = myInput + "cm, no reason to convert from cm -> cm"
    }
    if (fromValue ==="m" && toValue ==="mm") {
        result = myInput * 10000 +"mm"
    }
    if (fromValue ==="m" && toValue ==="cm") {
        result = myInput * 100 +"cm";
    }
    if (fromValue ==="m" && toValue ==="m") {
        result = myInput +"m, no reason to convert from m -> m"
    }
    if (fromValue ==="m" && toValue ==="km") {
        result = myInput / 1000 +"km"
    }
    if (fromValue ==="m" && toValue ==="mil") {
        result = myInput / 10000 +"mil"
    }
    if (fromValue ==="km" && toValue ==="mm") {
        result = myInput * 1000000 + "mm"
    }
    if (fromValue ==="km" && toValue ==="cm") {
        result = myInput * 100000 + "cm"
    }
    if (fromValue ==="km" && toValue ==="m") {
        result = myInput * 1000 +"m"
    }
    if (fromValue === "km" && toValue ==="km") {
        result = myInput + "km, no reason to convert from km -> km"
    }
    if (fromValue === "km" && toValue === "mil") {
        result = myInput / 10 +"mil"
    }
    if (fromValue ==="mil" && toValue === "mm") {
        result = myInput * 10000000 +"mm"
    }
    if (fromValue === "mil" && toValue === "cm") {
        result = myInput * 1000000 +"cm"
    }
    if (fromValue === "mil" && toValue ==="m") {
        result = myInput * 10000 +"m"
    }    
    if (fromValue ==="mil" && toValue ==="km") {
        result = myInput * 10 +"km"
    }
    if (fromValue ==="mil" && toValue === "mil") {
        result =myInput + "mil, no reason to convert from mil -> mil"
    }

    displayValue.textContent = result;
};



/* function mesurementConverter() {
    const option = document.querySelector("#object");
    const myVolume = document.querySelector("#volume");
    const myLength = document.querySelector("#length");
}
 */

function volumeConverter() {
    const volumeInput = document.querySelector("#myVolumeID").value
    const fromVolume = document.querySelector("#fromValueVolume").value;
    const toVolume = document.querySelector("#toValueVolume").value;
    const displayValueVolume = document.querySelector("#sumVolume");
    
    let result;

    if (fromVolume === "ml" && toVolume === "ml") {
        result = volumeInput + "ml, no reason to convert ml -> ml"
    }

    if (fromVolume === "ml" && toVolume === "dl") {
        result = volumeInput / 100 + "dl"
    }

    if ( fromVolume === "ml" && toVolume === "l") {
        result = volumeInput  / 1000 + "l"
    }

    if (fromVolume === "dl" && toVolume === "ml") {
        result = volumeInput * 100 + "ml"
    }

    if (fromVolume === "dl" && toVolume === "dl") {
        result = volumeInput + "dl, no reason to convert dl -> dl"
    }

    if (fromVolume === "dl" && toVolume === "l") {
        result = volumeInput / 10 + "l"
    }

    if (fromVolume === "l" && toVolume === "ml") {
        result = volumeInput * 1000 + "ml"
    }

    if (fromVolume === "l" && toVolume === "dl") {
        result = volumeInput * 10 + "l"
    }

    if (fromVolume === "l" && toVolume === "l") {
        result = volumeInput + "l, no reason to convert l -> l"
    }

    displayValueVolume.textContent = result;
}
