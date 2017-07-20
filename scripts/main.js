var BIG_BALL_MACHINE = 69;
var SMALL_BALL_MACHINE = 26;
var LOTTO_SELECTOR = "[data-lotto]"; 
var BIG_BUTTON_SELECTOR = "[big-button]";
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

function giveTheNums() {
    var fullNumList = addInertiaNum();
}

function drawNumber() {
    var fullNumList = addInertiaNum();
    fullNumList.forEach( function (num) {
        // make each guy have its own space
    })
    var lottoDiv = document.querySelector(LOTTO_SELECTOR);
    lottoDiv.textContent = addInertiaNum();
    
    var buddin = document.querySelector(BIG_BUTTON_SELECTOR);
    buddin.addEventListener('click', function (event) {
        event.preventDefault();
    })

}

// addEventListener() doesn't return values!
// so don't call it
// and don't return from inside of a callback
// because the value goes nowhere!
// addEventListener should go in "main" function