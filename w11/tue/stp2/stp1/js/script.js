let aCard = document.querySelector(".card");
// 클래스가 card인 요소 중 랜덤으로 하나 선언
console.log(aCard);
aCard.onclick = (e) => {
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
  e.currentTarget.classList.toggle(
    "card-selected"
  );
};

// let elem = document.getElementById("card1");
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
// // elem.onclick = function () {}; 밑이랑 똑같음
