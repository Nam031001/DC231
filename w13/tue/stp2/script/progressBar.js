const indicator =
  document.querySelector(".indicator");
// indicator를 골라와라 = 가 indicator라는 변수
const progressTarget =
  document.querySelector("main");

const progressBar = () => {
  const progressTargetBCR =
    progressTarget.getBoundingClientRect();
  const progress =
    1 -
    progressTargetBCR.bottom /
      progressTargetBCR.height;
  // 높이 값에 비해 바텀값의 비율이 어느정도 왔는가?
  // console.log(progress);
  if (progress >= 0 && progress <= 1) {
    indicator.style.cssText =
      "transform: scaleX(" + progress + ")";
  } else if (progress < 0) {
    indicator.style.cssText =
      "transform: scaleX(0)";
  }
};
//이벤트 리스너 추가하는 법1
document.onscroll = () => {
  progressBar();
};

//이벤트 리스너 추가하는 법2
// document.addEventListener("scroll", progressBar);
