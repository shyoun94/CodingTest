// # 문제60 : 번호 매기기

// 새 학기가 되어 **이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다**.
// 데이터에 입력된 이름을 아래와 같이 출력해 주세요.

const students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연'];

function makeClass(students) {
  const newStudents = students.slice();
  newStudents.sort((a, b) => {
    return a.localeCompare(b);
  });
  for(let i = 0; i<newStudents.length; i++){
    console.log(`번호:${i+1}, 이름: ${newStudents[i]}`);
  }
}

makeClass(students);