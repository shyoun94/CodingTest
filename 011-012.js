//11번 1~100까지의 합 using for
let s = 0;

for(let i = 1; i<=100 ; i++){

  s+=i;
}

console.log(s);

//12번 게임 캐릭터 클래스 만들기
// 데이터
// <여기에 class를 작성하세요.>

class Wizard {
  constructor(health, mana, armor){
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack(){
    console.log("fire-ball");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 출력
// 545 210 10
// 파이어볼