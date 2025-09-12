
document.getElementById("youInput").innerHTML = `
    <input type="text" id="oneLetter" placeholder="A" pattern="[A-Za-z]+">
        <input type="text" id="inputfield0" placeholder="1">
        <input type="text" id="inputfield1" placeholder="1">
        <input type="text" id="inputfield2" placeholder="1">
        <input type="text" id="inputfield3" placeholder="1">
        <input type="button" value="OK" onclick="getInput()" id="okBtn">
`

function duplicateInput(num1, num2, num3, num4) {
    let ar = [num1, num2, num3, num4];
    return new Set(ar).size === ar.length;
}




function getInput() {
    let inputLetter = document.getElementById("oneLetter").value;
    let inputnum1 = document.getElementById("inputfield0").value;
    let inputnum2 = document.getElementById("inputfield1").value;
    let inputnum3 = document.getElementById("inputfield2").value;
    let inputnum4 = document.getElementById("inputfield3").value;
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
        <input type="button" value="↻" onclick="location.reload()">
`
    randomNumber();
}


function randomNumber() {

    for (let i = 0; i < 4; i++) {
        let randInt = Math.floor(Math.random() * 80) + 1;
        console.log(randInt);
        document.getElementById("field" + i).value = randInt;
    }

    const englishLetterKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let englishLetterIndex = Math.floor(Math.random() * 26);
    let englishLetter = englishLetterKey.charAt(englishLetterIndex);
    document.getElementById("field").value = englishLetter;
    console.log(englishLetter);
}


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
