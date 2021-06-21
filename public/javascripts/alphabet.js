window.addEventListener("load", () => {

    const alphabet =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let alphabet_ceil = alphabet.length - 1

    setInterval(myTimer, 35);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    let elemento1 = {
        horizontal: 100,
        vertical: 50,
        rebote: false
    }

    let elemento2 = {
        horizontal: -160,
        vertical: 50,
        rebote: true
    }

    

    let backGcolor = {
        r: getRandomNumber(0, 256),
        g: getRandomNumber(0, 256),
        b: getRandomNumber(0, 256),
    }

    let count = 0


    function myTimer() {
        count ++
        
        // // Show counter
        // document.getElementById("counter").innerHTML = count;

        // Inicio
        let insertHtml_1 = document.getElementById("insertHtml")
        if (count == 1){
            let numero = getRandomInt(0, alphabet_ceil);
            insertHtml_1.innerHTML = alphabet[numero];
        }


        let insertHtml_2 = document.getElementById("insertHtml_2")
        if (count == 4){
            let numero = getRandomInt(0, alphabet_ceil);
            insertHtml_2.innerHTML = alphabet[numero];
        }


        // background-color: rgb(201, 76, 76)





        // Movimiento
        if (count % 4 == 0){
            switch(getRandomNumber(0, 4)) {
                case 0:
                    elemento1.horizontal ++;
                break;
                case 1:
                    elemento1.horizontal --;
                break;
                case 2:
                    elemento1.vertical ++;
                break;
                case 3:
                    elemento1.vertical --;
                break;   
            }
        }


        if (count % 5 == 0){
            switch(getRandomNumber(0, 4)) {
                case 0:
                    elemento2.horizontal ++;
                break;
                case 1:
                    elemento2.horizontal --;
                break;
                case 2:
                    elemento2.vertical ++;
                break;
                case 3:
                    elemento2.vertical --;
                break;   
            }
        }


        if (count % 23 == 0){
            switch(getRandomNumber(0, 4)) {
                case 0:
                    elemento2.horizontal ++;
                break;
                case 1:
                    elemento2.horizontal --;
                break;
                case 2:
                    elemento2.vertical ++;
                break;
                case 3:
                    elemento2.vertical --;
                break;   
            }
        }

        // if (count % 4 == 0 && elemento1.rebote == false && elemento1.horizontal < 300 ){
        //     elemento1.horizontal ++;
        // }

        // if (elemento1.horizontal >= 300){
        //     elemento1.rebote = true
        // }

        // if (count % 4 == 0 && elemento1.rebote == true && elemento1.horizontal > -300 ){
        //     elemento1.horizontal --;
        // }

        // if (elemento1.horizontal <= -300){
        //     elemento1.rebote = false
        // }

        insertHtml_1.style.left = elemento1.horizontal + 'px';
        insertHtml_1.style.top = elemento1.vertical + 'px';



        // Character
        if (count % 19 == 0){
            let numero = getRandomInt(0, alphabet_ceil);
            insertHtml_1.innerHTML = alphabet[numero];
        }

        if (count % 21 == 0){
            let numero = getRandomInt(0, alphabet_ceil);
            insertHtml_2.innerHTML = alphabet[numero];
        }



        // font-size: 0px;
        if (count % 11 == 0){
            let numero = getRandomNumber(10, 50);
            insertHtml_1.style.fontSize = numero + 'px'
        }

        if (count % 17 == 0){
            let numero = getRandomNumber(8, 55);
            insertHtml_2.style.fontSize = numero + 'px'
        }


        // let colorNumber = getRandomNumber(0, 2);
        switch(getRandomNumber(0, 3)) {
            case 0:
                // console.log(0);
                backGcolor.r ++
                if (backGcolor.r == 256){
                    backGcolor.r = 0
                }
            break;
            case 1:
                // console.log(1);
                backGcolor.g ++
                if (backGcolor.g == 256){
                    backGcolor.g = 0
                }
            break;
            case 2:
                // console.log(2);
                backGcolor.b ++
                if (backGcolor.b == 256){
                    backGcolor.b = 0
                }
            break;
        }

        document.body.style.backgroundColor = 'rgb(' + backGcolor.r + ',' + backGcolor.g + ',' + backGcolor.b + ')'

    }

    

})