let setOfWords = ["My name is abhishek kumar and i am a programmer", "Hope you are having fun with this game", "I have done my BCA Complete", "Very cool. Like the way they support the garage", "It's exactly the same! One glass box to another!", "Another ordinary, remarkably unspectacular glass office block.", "Tear it down to build the exact same thing"];

let message = document.getElementById("msg");
let typeWords = document.getElementById("myWords");
let btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
    message.innerText = setOfWords[Math.floor(Math.random() * setOfWords.length)];
    startTime = new Date().getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let speed = Math.round((wordCounter(typeWords.value) / ((new Date().getTime() - startTime) / 1000)) * 60)
    let finalMsg = `You typed total at ${speed} words per minute. `;
    finalMsg += compareWords(message.innerText, typeWords.value);
    message.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
    let cnt = 0;
    str1.split(" ").forEach((item, index) => {
        (item == str2.split(" ")[index]) ? cnt++ : "Fail";
    });
    return (`${cnt} correct out of ${str1.split(" ").length} word and the total number of error are ${(str1.split(" ").length - cnt)}.`)
}

const wordCounter = (str) => {
    return str.split(" ").length;
}

btn.addEventListener("click", function () {
    if (this.innerText == "Start") {
        typeWords.Disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typeWords.Disabled = true;
        this.innerText = "Start";
        endPlay();
    }
})