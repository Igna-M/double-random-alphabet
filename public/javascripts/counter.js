window.addEventListener("load", () => {

    // var myVar = setInterval(myTimer, 25);
    setInterval(myTimer, 25);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    let values = []
    let count = 0
    function myTimer() {
        count ++
        
        document.getElementById("counter").innerHTML = count;

        if (count % 2 == 0){
            let numero = getRandomInt(1000, 9999);
            document.getElementById("insertHtml_4").innerHTML = numero;
        }

        if (count % 3 == 0){
            let numero = getRandomInt(1000, 9999);
            document.getElementById("insertHtml_3").innerHTML = numero;
        }

        if (count % 5 == 0){
            let numero = getRandomInt(1000, 9999);
            document.getElementById("insertHtml_2").innerHTML = numero;
        }

        if (count % 8 == 0){
            let numero = getRandomInt(1000, 9999);
            document.getElementById("insertHtml").innerHTML = numero;
        }

        // } else if (count % 6 == 0){
        //     let numero = getRandomInt(1000, 9999);
        //     document.getElementById("insertHtml_3").innerHTML = numero;
        // } else if (count % 9 == 0){
        //     let numero = getRandomInt(1000, 9999);
        //     document.getElementById("insertHtml_2").innerHTML = numero;
        // } else if (count % 11 == 0){
        //     document.getElementById("arrayHtml").innerHTML = values.reduce((total, num) => {return total + num});
        //     values = []
        // } else {
        //     let numero = getRandomInt(1000, 9999);
        //     document.getElementById("insertHtml").innerHTML = numero;
        //     values.push(numero)
        // }

        

    }
})