var randomNumber = function() {
    return Math.floor(Math.random() * 10 + 1);
}

var randomDecimal = function() {
    return Math.random();
}

var generateNumbers = function() {
    var x = randomNumber();
    var y = randomNumber();
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

var generateAnswers = function() {
    var correct = generateNumbers();
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
        document.getElementById('guess-one').onclick = function() {correctAnswer()};
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
        document.getElementById('guess-two').onclick = function() {correctAnswer()};
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
        document.getElementById('guess-three').onclick = function() {correctAnswer()};
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
        document.getElementById('guess-four').onclick = function() {correctAnswer()};
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
}

var wrong = function(wrongElement) {
    var wrong = document.getElementById(wrongElement).innerHTML;
    var redWrong = wrong.fontcolor('red');
    document.getElementById(wrongElement).innerHTML = redWrong;
    document.getElementById(wrongElement).style.backgroundColor = '#efb3b3';
}

var correctAnswer = function() {
    var possibilities = {0: 'guess-one', 1: 'guess-two', 2: 'guess-three',
    3: 'guess-four'};

    for (var guess in possibilities) {
        document.getElementById(possibilities[guess]).style.backgroundColor = '#fff'
    }

    congratsMessage();
    nextQuestion();
}

var congratsMessage = function() {
    var messages = {1: "Nice job!", 2: "Great!", 3: "Awesome!", 4: "Very good!",
5: "That's right!", 6: "Excellent work!", 7: "Well done!", 8: "Fantastic!"}

    var randomMsgIndex = Math.floor(Math.random() * 8 + 1);
    var randomMsg = messages[randomMsgIndex];

    document.getElementById('congrats-message').innerHTML = messages[randomMsgIndex];
}

var nextQuestion = function() {
    document.getElementById('nextQuestionButton').innerHTML =
    '<button onclick="generateAnswers()">Click here for next problem</button>'
}