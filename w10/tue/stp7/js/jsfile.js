let abox = document.getElementById("box1");
// abox.onclick = function () {
//   abox.classList.toggle("box--clicked");
// };

// function () {}는 () => {}와 같다.
abox.onclick = () => {
  abox.classList.toggle("box--clicked");
};
