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

// this calculates the sum of two inputs, probably superfluous.
// function calcSum(score1, score2) {
//     var sum = score1 + score2;
//     return sum;
// }

// judgement routine, calculate score and grade for student
function judge(student) {
    var totalScore = student.score1 + student.score2;
    if (totalScore >= 51) {
        for (var x = 0; x < overallScores.length; x++) {
            if (totalScore >= overallScores[x].score) {
                console.log(student.name + " has a score of " + totalScore + " they get a " + overallScores[x].grade + " Grade")
                break;
            }
        }
    }
    else {
        console.log(student.name + " is a gronk and failed with a score of " + totalScore);
    }
}

// loop and judge
for (var i = 0; i < students.length; i++) {
    var student = students[i];
    judge(student)
}