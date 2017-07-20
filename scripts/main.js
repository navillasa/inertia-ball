var BIG_BALL_MACHINE = 69;
var SMALL_BALL_MACHINE = 26;
var LOTTO_SELECTOR = "[data-lotto]"; 
var BIG_BUTTON_SELECTOR = "[data-button]";
// attributes surrounded by brackets
// need to maintain same kind of css selector that would be in css file


function fiveNumList() {
    dict = {};
    function recursion(dict){
        if (Object.keys(dict).length == 5) {
            return Object.keys(dict);
        } else {
            dict[(Math.floor(Math.random() * 69) + 1).toString()] = true;
            recursion(dict);
        }
        return Object.keys(dict);
    }
    return recursion(dict);
}

function inertiaNum () {
    return (Math.floor(Math.random() * SMALL_BALL_MACHINE)) + 1;

}

function addInertiaNum() {
    var theList = fiveNumList();
    var lastNum = inertiaNum();
    theList.push(lastNum);
    return theList;
}

// function giveTheNums() {
//     var fullNumList = addInertiaNum();
// }

function makeNumsAppear(someText) {
    
    var numberDiv = document.createElement("div");
    numberDiv.textContent = someText;
    return numberDiv;
    
    // console.log(destination + "i'm destination")
    // console.log(numberDiv + "i'm numberdiv")

}

function drawNumber() {
    var fullNumList = addInertiaNum();
    var numberFamily = document.createElement("div");
    fullNumList.forEach( function (num) {
        numberFamily.appendChild(makeNumsAppear(num));
    });
    var newHome = document.querySelector(".number-row");
    newHome.appendChild(numberFamily);
}

var buddin = document.querySelector(BIG_BUTTON_SELECTOR);
buddin.addEventListener('click', drawNumber);

// addEventListener() doesn't return values!
// so don't call it
// and don't return from inside of a callback
// because the value goes nowhere!
// addEventListener should go in "main" function