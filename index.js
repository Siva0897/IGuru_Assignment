


    




const extractData = data => {
    const {ProgressList} = data.Response
    const{ExamMasters, stGrades, g} = ProgressList    

    let examMasterRptName1 = document.getElementById("examMasterRptName1")
    examMasterRptName1.textContent = ExamMasters[0].ExamMasterRptName
    let examMasterRptName2 = document.getElementById("examMasterRptName2")
    examMasterRptName2.textContent = ExamMasters[1].ExamMasterRptName

    let examMasterName1 = document.getElementById("examMasterName1")
    examMasterName1.textContent = ExamMasters[0].ExamMasterName
    let examMasterName2 = document.getElementById("examMasterName2")
    examMasterName2.textContent = ExamMasters[1].ExamMasterName

    const getGrade = marks => {
        marks = Math.round(marks)
        let grade;
        if (marks >=stGrades[0].minRange && marks <= stGrades[0].maxRange){
            grade = "A1"
        }
        else if (marks >=stGrades[1].minRange && marks <=stGrades[1].maxRange){
            grade = "A2"
        }
        else if (marks >=stGrades[2].minRange && marks <=stGrades[2].maxRange){
            grade = "B1"
        }
        else if (marks >=stGrades[3].minRange && marks <=stGrades[3].maxRange){
            grade = "B2"
        }
        else if (marks >=stGrades[4].minRange && marks <=stGrades[4].maxRange){
            grade = "C1"
        }
        else if (marks >=stGrades[5].minRange && marks <=stGrades[5].maxRange){
            grade = "C2"
        }
        else if (marks >=stGrades[6].minRange && marks <=stGrades[6].maxRange){
            grade = "D"
        }
        else{
            grade = "E"
        }
        return grade
        }



    let englishTotalEle = document.getElementById("englishTotal")
    let englishAvgMarks = parseInt(englishTotalEle.textContent)/2
    let englishGrade = getGrade(englishAvgMarks)
    let englishGradeEle = document.getElementById("englishGrade")
    englishGradeEle.textContent = englishGrade

    let hindiTotalEle = document.getElementById("hindiTotal")
    let hindiAvgMarks = parseInt(hindiTotalEle.textContent)/2
    let hindiGrade = getGrade(hindiAvgMarks)
    let hindiGradeEle = document.getElementById("hindiGrade")
    hindiGradeEle.textContent = hindiGrade
    
    let mathsTotalEle = document.getElementById("mathsTotal")
    let mathsAvgMarks = parseInt(mathsTotalEle.textContent)/2
    let mathsGrade = getGrade(mathsAvgMarks)
    let mathsGradeEle = document.getElementById("mathsGrade")
    mathsGradeEle.textContent = mathsGrade

}






fetch("http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521")
.then(function(response){
    return response.json();
})
.then(function(data){
    extractData(data);
})