document.getElementById("inputField").innerHTML = `
    <input type="text" id="field" placeholder="A">
        <input type="text" id="field0" placeholder="1">
        <input type="text" id="field1" placeholder="1">
        <input type="text" id="field2" placeholder="1">
        <input type="text" id="field3" placeholder="1">
        <input type="button" value="OK">
`


for (let i = 0; i < 4; i++) {
    let randInt = Math.floor(Math.random() * 80) + 1;
    console.log(randInt);
    document.getElementById("field"+i).value = randInt;
}

const englishLetterKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let englishLetterIndex = Math.floor(Math.random() * 26);
let englishLetter = englishLetterKey.charAt(englishLetterIndex);
document.getElementById("field").value = englishLetter;
console.log(englishLetter);

