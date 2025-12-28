const getAverage = (testScores) => {
     
     let total = 0;

     for(let i = 0; i < testScores.length; i++) {
         total += testScores[i];
     }

     return total/testScores.length;
}

const getGrade = (score) => {
   let remark;
   if(score === 100){
      remark = "A+"
   }else if(score >= 90 && score <= 99){
      remark = "A"
   }else if(score >= 80 && score <= 89){
      remark = "B"
   }else if(score >= 70 && score <= 79){
      remark = "C"
   }else if(score >= 60 && score <= 69){
      remark = "D"
   }else if(score >= 0 && score <= 59){
      remark = "F"
   }else{
      remark = "Invalid score"
   }

   return remark;
}

const hasPassingGrade = (score) => {
  return getGrade(score) !== "F";
};


const studentMsg = (scores, score) => {
  let studentAverage = getAverage(scores);
  let studentGradeRemark = getGrade(score);
  let isStudentPassed = hasPassingGrade(score);
  let msg;

  if (!isStudentPassed) {
    msg = `Class average: ${studentAverage}. Your grade: ${studentGradeRemark}. You failed the course.`;
  } else {
    msg = `Class average: ${studentAverage}. Your grade: ${studentGradeRemark}. You passed the course.`;
  }

  return msg;
};


console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 59))
