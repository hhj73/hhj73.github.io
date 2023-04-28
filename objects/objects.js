var student = {
    grade: 1,
    school: "lion school"
};

console.log(student);
console.log(typeof(student));

var gradeInfo =student.grade;
console.log(gradeInfo); //1

var key =Object.keys(students)[0];
console.log(key); //grade

//객체에 속성 추가
student.class =3;

console.log(student);

console.log(student['class']); //3

//비어있는 객체
var teacher =new Object();
var teacher ={
    
};