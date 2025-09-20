
const randomNumArray = [];
let inputLetter = "";
let inputnum1 = 0;
let inputnum2 = 0;
let inputnum3 = 0;
let inputnum4 = 0;
let coin = 0;


document.getElementById("coins").innerText = coin;
document.getElementById("intro").innerHTML = `
        <div class="intro-box">
            <h2>🎮 Welcome to the Random Number Game!</h2>
            <p>👉 You will get 4 random numbers (no duplicates) and 1 English Letter.<br>
                Try to guess or match them correctly!</p>
            <button onclick="start()">Start Game 🚀</button>
        </div>
`



function start() {
    document.getElementById("inputField").innerHTML = ``
    document.getElementById("intro").innerHTML = ``
    document.getElementById("youInput").innerHTML = `
        <h2>Input Your Number</h2>
        <input type="text" id="oneLetter" placeholder="A" pattern="[A-Za-z]+">
        <input type="text" id="inputfield0" placeholder="1">
        <input type="text" id="inputfield1" placeholder="1">
        <input type="text" id="inputfield2" placeholder="1">
        <input type="text" id="inputfield3" placeholder="1">
        <input type="button" value="OK" onclick="getInput()" id="okBtn">
        <input type="button" value="🏃‍♀️" onclick="location.reload()">

`


    //------------------------------------input------------------------------------------------------------

    document.getElementById("oneLetter").addEventListener("keypress", e => {
        if (e.key === "Enter") {
            document.getElementById("inputfield0").focus();
        }
    });

    document.getElementById("inputfield0").addEventListener("keypress", e => {
        if (e.key === "Enter") {
            document.getElementById("inputfield1").focus();
        }
    });

    document.getElementById("inputfield1").addEventListener("keypress", e => {
        if (e.key === "Enter") {
            document.getElementById("inputfield2").focus();
        }
    });

    document.getElementById("inputfield2").addEventListener("keypress", e => {
        if (e.key === "Enter") {
            document.getElementById("inputfield3").focus();
        }
    });

    document.getElementById("inputfield3").addEventListener("keypress", e => {
        if (e.key === "Enter") {
            document.getElementById("okBtn").click();
        }
    });


    //---------------------------------- Validate Typing ----------------------------------------------------                       

    document.getElementById("oneLetter").addEventListener("input", function () {
        this.value = this.value.replace(/[^A-Za-z]/g, "");
    });

    document.getElementById("inputfield0").addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        let num = parseInt(this.value, 10);
        if (num > 80) {
            this.value = "";
        }
        if (num === 0) {
            this.value = "";
        }
    });

    document.getElementById("inputfield1").addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        let num = parseInt(this.value, 10);
        if (num > 80) {
            this.value = "";
        }
        if (num === 0) {
            this.value = "";
        }
    });

    document.getElementById("inputfield2").addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        let num = parseInt(this.value, 10);
        if (num > 80) {
            this.value = "";
        }
        if (num === 0) {
            this.value = "";
        }
    });

    document.getElementById("inputfield3").addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        let num = parseInt(this.value, 10);
        if (num > 80) {
            this.value = "";
        }
        if (num === 0) {
            this.value = "";
        }
    });

    //---------------------------------------------------------------------------------------------------------------

}

function duplicateInput(num1, num2, num3, num4) {
    let ar = [num1, num2, num3, num4];
    console.log(new Set(ar));
    return new Set(ar).size === ar.length;
}


function getInput() {
    inputLetter = document.getElementById("oneLetter").value;
    inputnum1 = document.getElementById("inputfield0").value;
    inputnum2 = document.getElementById("inputfield1").value;
    inputnum3 = document.getElementById("inputfield2").value;
    inputnum4 = document.getElementById("inputfield3").value;
    if (inputLetter != "" && inputnum1 != "" && inputnum2 != "" && inputnum3 != "" && inputnum4 != "") {
        if (duplicateInput(inputnum1, inputnum2, inputnum3, inputnum4)) {
            loadRandomNumber();
        } else {
            alert("⚠️ Some numbers are duplicated!");
        }
    } else {
        alert("⚠️ Please fill in all fields!");
    }
}


function loadRandomNumber() {
    document.getElementById("okBtn").disabled = true;
    document.getElementById("inputField").innerHTML = `
        <h2 style="text-align: center;">Win Number</h2>
        <input type="text" id="field" disabled>
        <input type="text" id="field0" disabled>
        <input type="text" id="field1" disabled>
        <input type="text" id="field2" disabled>
        <input type="text" id="field3" disabled>
        <input type="button" value="↻" onclick="start()">
        <input type="button" value="🏃‍♀️" onclick="location.reload()">

`


    randomNumber();


}


function randomNumber() {

    for (let i = 0; i < 4; i++) {
        let randInt;
        do {
            randInt = Math.floor(Math.random() * 80) + 1;
        } while (randomNumArray.includes(randInt));

        randomNumArray.push(randInt);
        document.getElementById("field" + i).value = randInt;
    }

    const englishLetterKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let englishLetterIndex = Math.floor(Math.random() * 26);
    let englishLetter = englishLetterKey.charAt(englishLetterIndex);
    document.getElementById("field").value = englishLetter;
    console.log(englishLetter);
    randomAndInputDublicate();
}



function randomAndInputDublicate() {
    let coin = Number(document.getElementById("coins").innerText);

    if (document.getElementById("field").value == inputLetter) {
        document.getElementById("field").style.backgroundColor = "lightgreen";
        coin += 10;
    } else {
        document.getElementById("field").style.backgroundColor = "red";
    }

    let playerNums = [Number(inputnum1), Number(inputnum2), Number(inputnum3), Number(inputnum4)];

    for (let i = 0; i < randomNumArray.length; i++) {
        if (playerNums.includes(randomNumArray[i])) {
            document.getElementById("field" + i).style.backgroundColor = "lightgreen";
            coin += 10;
        } else {
            document.getElementById("field" + i).style.backgroundColor = "red";
        }
    }

    document.getElementById("coins").innerText = coin;
}




