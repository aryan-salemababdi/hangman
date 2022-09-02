const  secretphrases = ["hello","bmw","volvo","screen"];
let randomItem = "";
let clicked = [ ];
let result = "";
let mistakes = 0;
numberhealth = 6;
function selectRandomItem(){
    randomItem = secretphrases[Math.floor(Math.random() * secretphrases.length)];
    document.getElementById("letters").addEventListener("click",buttonHandler);
    window.addEventListener("keydown",  keyHandler);
    }
function setUnderScores() {
    let splitedWord = randomItem.split("");
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))
    result = mappedWord.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}
function health(){
    document.getElementById("health").innerText = numberhealth;
}
function checkIfWon() {
    if (randomItem === result) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
    }
}
function updateHangmanPicture() {
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png`
}
function chackiflost(){
    if (mistakes === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p style="color:red" > random word is : ${randomItem} </p>`
    }
}
function letterhandeler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if(randomItem.indexOf(letter) >=0  ){
        setUnderScores();
        checkIfWon();
    }
    else if (randomItem.indexOf(letter) === -1){
                      mistakes++
        if (numberhealth >0){
             numberhealth --
             updateHangmanPicture()
        }
        else {
               location.reload();
        }
        chackiflost();
        health();
    }
}
function buttonHandler(event){
    letterhandeler(event.target.id);
}
function keyHandler(event) {
    letterhandeler(event.key);
}
selectRandomItem();
setUnderScores();
health();