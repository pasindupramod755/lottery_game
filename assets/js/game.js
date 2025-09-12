
document.getElementById("youInput").innerHTML = `
    <input type="text" id="oneLetter" placeholder="A" pattern="[A-Za-z]+">
        <input type="text" id="inputfield0" placeholder="1">
        <input type="text" id="inputfield1" placeholder="1">
        <input type="text" id="inputfield2" placeholder="1">
        <input type="text" id="inputfield3" placeholder="1">
        <input type="button" value="OK" onclick="loadRandomNumber()" id="okBtn">
`

function getInput(){
    let inputLetter = document.getElementById("oneLetter").value;
    let inputnum1 = document.getElementById("inputfield0").value;
    let inputnum2 = document.getElementById("inputfield1").value;
    let inputnum3 = document.getElementById("inputfield2").value;
    let inputnum4 = document.getElementById("inputfield3").value;

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


document.getElementById("oneLetter").addEventListener("input", function() {
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});
