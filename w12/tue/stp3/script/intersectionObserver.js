let observerOption = {
  root: null,
  //   어느창을 기준으로 해서 작동시킬 것인가?
  rootMargin: "0px 0px -200px 0px",
  //   인식되면 움직이는 개체로부터 몇픽셀이 더 지나야 작동을 시킬 것인가?
  threshold: 0.75,
  //   인식되면 움직이는 개체가 어느정도 들어온 순간에 작동할 것인가?
};

let observerCallback = (observingTargets) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};
// 함수임을 지정, 각 클래스에 추가적인 이름을 화면이 비출때는 붙고 비추지 않을 때는 떼는 속성

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
// 무엇을 intersetcionobserver로 설정할 것인가?
// animTrigger가 포함된 모든 요소를 html에서 가져온다

// 하드코딩
// observer.observe(elems[0]);
// observer.observe(elems[1]);
// observer.observe(elems[2]);
// observer.observe(elems[3]);
// ...

// 조금 똑똑한 코딩
// for(let idx = 0; idx< elmems.length; id++){
//     observer.observe(elmems[i]);
// }

// 있어보이는 코딩
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
