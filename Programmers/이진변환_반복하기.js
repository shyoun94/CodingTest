function solution(s) {
  var answer = [];
  let convert = 0;
  let deleteZero = 0;
  while(s!=="1"){
      let zeroCount = 0;
      let arr = s.split("");
      for(let i=0; i<arr.length; i++){
          if(arr[i] === "0"){
            zeroCount++; 
          }
      }
      deleteZero += zeroCount;
      s = (arr.length-zeroCount).toString(2)
      convert++;
      }
  answer = [convert, deleteZero]
  return answer;
}

//이진변환을 반복하면서 몇번의 변환과 몇개의 0을 제거 했는지 체크하는 문제
//convert와 deleteZero를 매 카운트 마다 하고 
//2진 변환은 number.toString(2)을 이용해 변환