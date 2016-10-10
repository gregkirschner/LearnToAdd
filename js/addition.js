var answeredCorrectState = false;

var correctStreak = 0;

var randomNumber = function(minNum, maxNum) {
    return Math.floor(Math.random() * maxNum + minNum);
}

var randomDecimal = function() {
    return Math.random();
}

var generateNumbers = function(minNum, maxNum) {
    var x = randomNumber(minNum, maxNum);
    var y = randomNumber(minNum, maxNum);
    document.getElementById('number-first').innerHTML = x;
    document.getElementById('number-second').innerHTML = y;
    document.getElementById('plus').innerHTML = '&#43;';
    document.getElementById('equal').innerHTML = '=';
    document.getElementById('start-button').hidden = true;

    var possibilities = {0: 'guess-one', 1: 'guess-two', 2: 'guess-three',
    3: 'guess-four'};

    for (var guess in possibilities) {
        document.getElementById(possibilities[guess]).style.border =
        '1px solid black'
    }

    return x + y;
}

var mode = 0;  //0-Default (#'s 1-6), 1 (1-10), 2 (5-25), 3 (10-100)

var generateAnswers = function(mode) {
    answeredCorrectState = false;
    var correct;
    if (mode == 1) {
        correct = generateNumbers(1,10);
    } else if (mode == 0) {
        correct = generateNumbers(1,6);
    } else if (mode = 2) {
        correct = generateNumbers(5, 25);
    } else if (mode = 3) {
        correct = generateNumbers(10,100);
    } else {
        correct = generateNumbers(1,10);
    }

    var locateCorrect = randomDecimal();
    var locateWrong = randomDecimal();
    var randomWrong = randomDecimal();
    var wrongOne;
    var wrongTwo;
    var wrongThree;

    if (randomWrong < 0.25) {
        wrongOne = correct + 1;
        wrongTwo = correct + 2;
        wrongThree = correct + 3;
    } else if (randomWrong >= 0.25 && randomWrong < 0.5 && correct > 2) {
        wrongOne = correct + 1;
        wrongTwo = correct - 2;
        wrongThree = correct -1;
    } else if (randomWrong >= 0.5 && randomWrong < 0.75 && correct > 3) {
        wrongOne = correct - 1;
        wrongTwo = correct - 2;
        wrongThree = correct - 3;
    } else {
        wrongOne = correct + 1;
        wrongTwo = correct - 1;
        wrongThree = correct + 2;
    }

    if (locateCorrect < 0.25) {
        document.getElementById('guess-one').innerHTML = correct;
        document.getElementById('guess-one').onclick = function() {
            correctAnswer('guess-one')};
        document.getElementById('guess-two').onclick = function() {wrong('guess-two')};
        document.getElementById('guess-three').onclick = function() {
            wrong('guess-three')};
        document.getElementById('guess-four').onclick = function() {
            wrong('guess-four')};
        if (locateWrong <= 0.333) {
            document.getElementById('guess-two').innerHTML = wrongOne;
            document.getElementById('guess-three').innerHTML = wrongTwo;
            document.getElementById('guess-four').innerHTML = wrongThree;
        } else if (locateWrong > 0.333 && locateWrong <= 0.666) {
            document.getElementById('guess-two').innerHTML = wrongTwo;
            document.getElementById('guess-three').innerHTML = wrongThree;
            document.getElementById('guess-four').innerHTML = wrongOne;
        } else {
            document.getElementById('guess-two').innerHTML = wrongThree;
            document.getElementById('guess-three').innerHTML = wrongOne;
            document.getElementById('guess-four').innerHTML = wrongTwo;
        }
    } else if (locateCorrect >= 0.25 && locateCorrect < 0.5) {
        document.getElementById('guess-two').innerHTML = correct;
        document.getElementById('guess-two').onclick = function() {
            correctAnswer('guess-two')};
        document.getElementById('guess-one').onclick = function() {wrong('guess-one')};
        document.getElementById('guess-three').onclick = function() {
            wrong('guess-three')};
        document.getElementById('guess-four').onclick = function() {
            wrong('guess-four')};
        if (locateWrong <= 0.333) {
            document.getElementById('guess-one').innerHTML = wrongOne;
            document.getElementById('guess-three').innerHTML = wrongTwo;
            document.getElementById('guess-four').innerHTML = wrongThree;
        } else if (locateWrong > 0.333 && locateWrong <= 0.666) {
            document.getElementById('guess-one').innerHTML = wrongTwo;
            document.getElementById('guess-three').innerHTML = wrongThree;
            document.getElementById('guess-four').innerHTML = wrongOne;
        } else {
            document.getElementById('guess-one').innerHTML = wrongThree;
            document.getElementById('guess-three').innerHTML = wrongOne;
            document.getElementById('guess-four').innerHTML = wrongTwo;
        }
    } else if (locateCorrect >= 0.5 && locateCorrect < 0.75) {
        document.getElementById('guess-three').innerHTML = correct;
        document.getElementById('guess-three').onclick = function() {
            correctAnswer('guess-three')};
        document.getElementById('guess-two').onclick = function() {wrong('guess-two')};
        document.getElementById('guess-one').onclick = function() {wrong('guess-one')};
        document.getElementById('guess-four').onclick = function() {
            wrong('guess-four')};
        if (locateWrong <= 0.333) {
            document.getElementById('guess-two').innerHTML = wrongOne;
            document.getElementById('guess-one').innerHTML = wrongTwo;
            document.getElementById('guess-four').innerHTML = wrongThree;
        } else if (locateWrong > 0.333 && locateWrong <= 0.666) {
            document.getElementById('guess-two').innerHTML = wrongTwo;
            document.getElementById('guess-one').innerHTML = wrongThree;
            document.getElementById('guess-four').innerHTML = wrongOne;
        } else {
            document.getElementById('guess-two').innerHTML = wrongThree;
            document.getElementById('guess-one').innerHTML = wrongOne;
            document.getElementById('guess-four').innerHTML = wrongTwo;
        }
    } else {
        document.getElementById('guess-four').innerHTML = correct;
        document.getElementById('guess-four').onclick = function() {
            correctAnswer('guess-four')};
        document.getElementById('guess-two').onclick = function() {wrong('guess-two')};
        document.getElementById('guess-three').onclick = function() {
            wrong('guess-three')};
        document.getElementById('guess-one').onclick = function() {wrong('guess-one')};
        if (locateWrong <= 0.333) {
            document.getElementById('guess-two').innerHTML = wrongOne;
            document.getElementById('guess-three').innerHTML = wrongTwo;
            document.getElementById('guess-one').innerHTML = wrongThree;
        } else if (locateWrong > 0.333 && locateWrong <= 0.666) {
            document.getElementById('guess-two').innerHTML = wrongTwo;
            document.getElementById('guess-three').innerHTML = wrongThree;
            document.getElementById('guess-one').innerHTML = wrongOne;
        } else {
            document.getElementById('guess-two').innerHTML = wrongThree;
            document.getElementById('guess-three').innerHTML = wrongOne;
            document.getElementById('guess-one').innerHTML = wrongTwo;
        }
    }
    document.getElementById('nextQuestionButton').innerHTML = '';
    document.getElementById('congrats-message').innerHTML = '';
    textColorReset();
}

var wrong = function(wrongElement) {
    if (answeredCorrectState == false) {
        var wrong = document.getElementById(wrongElement).innerHTML;
        var redWrong = wrong.fontcolor('red');
        document.getElementById(wrongElement).innerHTML = redWrong;
        document.getElementById(wrongElement).style.backgroundColor = '#efb3b3';
        correctStreak = 0;
    }
}

var textColorReset = function() {
    var possibilities = {0: 'guess-one', 1: 'guess-two', 2: 'guess-three',
    3: 'guess-four'};

    for (var guess in possibilities) {
        document.getElementById(possibilities[guess]).style.backgroundColor = '#fff';
        document.getElementById(possibilities[guess]).style.color = '#506484';
    }
}

var correctAnswer = function(correctElement) {
    document.getElementById(correctElement).style.color = '#137f31';
    document.getElementById(correctElement).style.backgroundColor = '#a4f2ba';
    if (answeredCorrectState == false) {
        correctStreak ++;
        congratsMessage();
    }

    nextQuestion();
    answeredCorrectState = true;
}

var congratsMessage = function() {
    var messages = {1: "Nice job!", 2: "Great!", 3: "Awesome!", 4: "Very good!",
5: "That's right!", 6: "Excellent work!", 7: "Well done!", 8: "Fantastic!"}

    var randomMsgIndex = Math.floor(Math.random() * 8 + 1);
    var randomMsg = messages[randomMsgIndex];

    switch (correctStreak) {
        case 5:
            document.getElementById('congrats-message').innerHTML =
            "Nice, that's five in a row!";
            break;
        case 10:
            document.getElementById('congrats-message').innerHTML =
            "Impressive, that's ten in a row!";
            break;
        case 20:
            document.getElementById('congrats-message').innerHTML =
            "Incredible, that's twenty in a row";
            break;
        case 50:
            document.getElementById('congrats-message').innerHTML =
            "Impossible, that's fifty in a row!";
            break;
        default:
            document.getElementById('congrats-message').innerHTML =
            messages[randomMsgIndex];
    }

}

var nextQuestion = function() {
    var newHtml = '<button onclick="generateAnswers(' + mode +
    ')">Next Problem</button>'
    document.getElementById('nextQuestionButton').innerHTML = newHtml;
    console.log(newHtml);
    console.log(mode);
}

//TODO: Fix coloring after wrong, then right answers