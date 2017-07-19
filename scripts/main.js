// var BIG_BALL_MACHINE = 69;
// var SMALL_BALL_MACHINE = 26;


// var num = function getRandom(someRange) {
//     return Math.floor(Math.random() * someRange) + 1;
// };

// function numberListMaker(num) {
//     var lotteryNums = {};
//     function (lotteryNums) {

//     }
//         lotteryNums[element] = true;
//     })
//     if (lotteryNums.keys().length > size) {

// function makeFiveNumList()


function getList(){
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

for(var x = 0; x < 40; x++){
    console.log(getList())
}