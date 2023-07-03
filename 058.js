// const money = prompt("금액을 입력하세요");

let money = "123456789";


for(let i =(money.length-3); i > 0; i-=3){
  money = money.slice(0,i) + ',' +money.slice(i);
}
console.log(money);