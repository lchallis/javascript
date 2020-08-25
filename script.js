var students = [
    {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 35
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45
    }
];

var overallScores = [
    {
        score: 91,
        grade: 'A'
    },
    {
        score: 81,
        grade: 'B'
    },
    {
        score: 71,
        grade: 'C'
    },
    {
        score: 61,
        grade: 'D'
    },
    {
        score: 51,
        grade: 'E'
    }
];

// set a passing threshold, this really should be based off the overallScores array somehow.
var passingScore = 51;

// judgement routine, calculate score and grade for student
function judge(student) {

    // sum the scores
    var totalScore = student.score1 + student.score2;

    // make sure student meets threshold, this is bad because it is effectively magic int; should use overallScores array somehow. 
    if (totalScore >= passingScore) {

        // loop the scores array until the totalScore is equal or greater than the score property of the overallScores object
        for (var x = 0; x < overallScores.length; x++) {
            if (totalScore >= overallScores[x].score) {
                // log some shit
                console.log(student.name + " has a score of " + totalScore + " they get a " + overallScores[x].grade + " Grade")
                // ditch the loop once you've got the result
                break;
            }
        }
    }
    // if under threshold do this, again, bad because not based of overallScore.
    else {
        console.log(student.name + " is a gronk and failed with a score of " + totalScore);
    }
}

// loop and judge
for (var i = 0; i < students.length; i++) {
    var student = students[i];
    judge(student)
}