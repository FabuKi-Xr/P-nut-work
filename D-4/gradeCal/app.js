//  import 'bootstrap'
var order = 4;
var currentRow = 4;
function addRows(){
    var table = document.getElementById("gradeTable").getElementsByTagName('tbody')[0];
    
    // โคลน input
    var clnInputSub = document.getElementById("sub1").cloneNode(false);
    var clnInputGrade = document.getElementById("grade1").cloneNode(false);
    var clnInputweight = document.getElementById("weight1").cloneNode(false);
    
    //สร้าง row ขึ้นมาใหม่
    var newRow = table.insertRow(currentRow++);

    //reID
    clnInputSub.id = "sub"+currentRow;
    clnInputGrade.id = "grade"+currentRow;
    clnInputweight.id = "weight"+currentRow;

    

    var newOrder = newRow.insertCell(0);
    var newSubject = newRow.insertCell(1);
    var newGrade = newRow.insertCell(2);
    var newWeight = newRow.insertCell(3);

    newOrder.appendChild(document.createTextNode(++order));
    newSubject.appendChild(clnInputSub);
    newGrade.appendChild(clnInputGrade);
    newWeight.appendChild(clnInputweight);

    //clear text from cloning
    document.getElementById("sub"+currentRow).value = '';
    document.getElementById("grade"+currentRow).value = '';
    document.getElementById("weight"+currentRow).value = '';

    console.log(clnInputSub.id);
}
function cal(){
    var Multiple = 0.0;
    var sumWeight = 0.0;
    var GPA = 0.0;
    for(var i=1;i<=currentRow;i++){
        var grade = document.getElementById("grade"+i).value;
        if(grade === "A"){
            grade = 4.00;
        }
        else if (grade === "B+") {
            grade = 3.50;
        } 
        else if (grade === "B"){
            grade = 3.00;
        }
        else if(grade === "C+"){
            grade = 2.50;
        }
        else if(grade === "C"){
            grade = 2.00;
        }
        else if(grade === "D+"){
            grade = 1.50;
        }
        else if(grade === "D"){
            grade = 1;
        }
        else if(grade === "F"){
            grade = 0;
        }
        else{
            alert("Be aware of entering your grade");
            break;
        }

        if(document.getElementById("weight"+i).value === '' || document.getElementById("grade"+i).value === ''){
            weight = 0;
            Multiple += parseFloat(0*weight);
        }
        else{
            weight = parseFloat(document.getElementById("weight"+i).value);
            Multiple += grade*weight;
        }
        sumWeight += weight;
    }
    GPA = Multiple/sumWeight;
    document.getElementById("showGPA").innerHTML = GPA.toFixed(2);
    console.log("GPA : " + GPA.toFixed(2));
}
function erase(){
    for(var i=1 ; i<=currentRow;i++){
    document.getElementById("sub"+i).value = '';
    document.getElementById("grade"+i).value = '';
    document.getElementById("weight"+i).value = '';
    }
    document.getElementById("showGPA").innerHTML  = '';
    console.log("clear!");
}
// function mouseOver(row){
//     document.getElementById(row)
// }
