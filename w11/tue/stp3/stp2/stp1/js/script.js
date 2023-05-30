let aCard = document.querySelector(".card");
// 클래스가 card인 요소 중 랜덤으로 하나 선언
console.log(aCard);

let cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
// .card에 있는 내용리스트 중 0번째, 1번쨰. 2번째에 있는 요소들을 불러오기
// 리스트에 있는 내용은 f12 console에서 확인가능

// for구문사용
// for (let idx = 0; idx < cards.length; idx++) {
//   cards[idx].onclick = (e) => {
//     e.currentTarget.classList.togge(
//       "card-selected"
//     );
//   };
// }

// forEach 구문사용
cards.forEach((eachCard) => {
  eachCard.onclick = function (e) {
    e.currentTarget.classList.toggle(
      "card-selected"
    );
  };
});
// let elem = document.getElementById("card1");
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
// // elem.onclick = function () {}; 밑이랑 똑같음
