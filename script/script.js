let C = document.querySelector("#celsius");
let K = document.querySelector("#kelvin");
let F = document.querySelector("#fahrenheit");
let R = document.querySelector("#rankine");

let inputs = document.querySelectorAll("input");

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input", function (e){
        let value = parseFloat(e.target.value);

        switch(e.target.name){
            case "C":
                F.value = value * 1.8 + 32;
                K.value = value + 273.15;
                R.value = (value + 273.15) * 1.8;
            break;
            case "F":
                C.value = (value - 32) / 1.8;
                K.value = value - 32 * 1.8 + 273;
                R.value = value + 459.67;
                break;
            case "K":
                C.value = value - 273.15;
                F.value = ((value - 273.15) * 1.8) + 32;
                R.value = value * 1.8
            break;
            case "R":
                C.value = (value / 1.8) - 273.15;
                F.value = value - 459.67;
                K.value = value / 1.8;
            break;

        }
       
    });

    console.log(inputs);

};
