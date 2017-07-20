// var BIG_BALL_MACHINE = 69;
// var SMALL_BALL_MACHINE = 26;

var fiveNumList = function getList(){
    dict = {};
    function recursion(dict){
        if (Object.keys(dict).length == 5) {
            return Object.keys(dict);
        } else {
            dict[(Math.floor(Math.random() * 69) + 1).toString())] = true;
            recursion(dict);
        }
        return Object.keys(dict);
    }
    return recursion(dict);
}

function rando(ballMachine) {
    return (Math.floor(Math.random() * ballMachine)) + 1;
}

function addInertiaNum(fiveNumList) {

}

// var num;

// while (picks.length < howMany) {
//     num = randomBetween(highNumber);


//     if (picks.indexOf(num) === -1) {
//         picks.push(num);
//     }
// }

// return picks;

// trigger.addEventListener('click', function () {
//     console.log('hey');

//     return generateLottoNumbers(howMany, maxNum);
// });

// addEventListener() doesn't return values!
// so don't call it
// and don't return from inside of a callback
// because the value goes nowhere!
// addEventListener should go in "main" function