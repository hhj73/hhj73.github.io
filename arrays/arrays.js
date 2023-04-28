

var mbti=['INFP', 'ENFJ','INTJ'];
console.log(mbti[0]);
console.log(mbti.length);

mbti[3]='ESFP';
console.log(mbti.length);

mbti[2]='ISTJ';
console.log(mbti[2]);

console.log(mbti.push('ISTJ'));


var newMbti=[...mbti, 'ISFP'];
console.log(mbti);
console.log(newMbti);



