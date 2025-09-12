
document.getElementById("youInput").innerHTML = `
    <input type="text" id="inputfield" placeholder="A">
        <input type="text" id="inputfield0" placeholder="1">
        <input type="text" id="inputfield1" placeholder="1">
        <input type="text" id="inputfield2" placeholder="1">
        <input type="text" id="inputfield3" placeholder="1">
        <input type="button" value="OK" onclick="loadRandomNumber()" id="okBtn">
`


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
