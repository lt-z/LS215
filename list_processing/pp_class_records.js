let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;
const GRADES = {
  A: 93,
  B: 85,
  C: 77,
  D: 69,
  E: 60,
  F: 0
};

function generateClassRecordSummary(allStudents) {
  let scores = getStudentScores(allStudents);
  let weighted = getWeightedAverage(scores);
  let grade = getGrade(weighted);

  let transform = getAllExams(allStudents);
  let examData = calculateExamData(transform);
  return {
    studentGrades: grade,
    exams: examData };
}

function getStudentScores(allStudents) {
  let allExams = Object.keys(allStudents).map((student) => {
    let exams = allStudents[student].scores.exams;
    return [exams, getAverage(exams)];
  });

  let allExercises = Object.keys(allStudents).map((student) => {
    let exercises = allStudents[student].scores.exercises;
    return [exercises, getSum(exercises)];
  });

  return [allExams, allExercises];
}

function getAverage(array) {
  return array.reduce((sum, item) => sum + item) / array.length;
}

function getSum(array) {
  return array.reduce((sum, item) => sum + item);
}

function getWeightedAverage(array) {
  let weightedExams = array[0].map(scores => scores[1] * EXAM_WEIGHT);
  let weightedExercises = array[1].map(scores => scores[1] * EXERCISE_WEIGHT);

  let percentGrade = weightedExams.map((score, idx) => {
    return Math.round(score + weightedExercises[idx]);
  });
  return percentGrade;
}

function getGrade(percents) {
  return percents.map(percent => {
    for (let grade in GRADES) {
      if (GRADES[grade] <= percent) {
        return `${percent} (${grade})`;
      }
    }
  });
}

function getAllExams(allStudents) {
  let exams = Object.keys(allStudents)
    .map((student) => allStudents[student].scores.exams);

  let transformed = [];
  for (let ex = 0; ex < exams[0].length; ex += 1) {
    let exRow = [];
    for (let e = 0; e < exams.length; e += 1) {
      exRow.push(exams[e][ex]);
    }
    transformed.push(exRow);
  }
  return transformed;
}

function calculateExamData(examData) {
  return examData.map(exam => {
    return {average: getAverage(exam),
      minimum: Math.min(...exam),
      maximum: Math.max(...exam)};
  });
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
