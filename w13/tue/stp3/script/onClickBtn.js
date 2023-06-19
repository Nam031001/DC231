const btns =
  document.querySelectorAll("aside>ol>a");

console.log(btns);
let lastBtns;

const whenIClickTheBtn = (e) => {
  console.log("target", e.target);
  console.log("currTarget", e.currentTarget);
  const toggleTarget =
    e.currentTarget.querySelector("li");
  console.log("toggleTarget", toggleTarget);
  toggleTarget.classList.add("pressed");

  // console에서 target, currtarget, toggletarget을 불러오게함

  //   if (lastBtns !== undefined) {
  //     lastBtns.classList.remove("pressed");
  //   }
  lastBtns?.classList.remove("pressed");
  lastBtns = toggleTarget;
};
//   옵션 복수선택 방지

btns.forEach((eachBtn) => {
  eachBtn.addEventListener(
    "click",
    whenIClickTheBtn
  );
});
