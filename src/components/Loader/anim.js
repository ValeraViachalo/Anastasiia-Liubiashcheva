import gsap from "gsap";

function getRandomPower() {
  const randomPower = Math.floor(Math.random() * 5) + 1;

  return `power${randomPower}.inOut`;
}  

const duration = 8;

export const progressAnim = (bar, num, wrapper) => {
  const tl = gsap.timeline();

  const ease = getRandomPower();

  tl.to(bar.current, {
    scaleX: 1,
    duration,
    ease,
  }).to(
    num.current,
    {
      textContent: "100",
      duration,
      roundProps: "textContent",
      ease,
    },
    "<"
  );
  // .to(wrapper.current, {
  //   yPercent: 100,
  //   duration: .9,
  //   ease: 'power3.inOut',
  // })

  return tl;
};

export const presenceLoaderAnim = (
  logoRef,
  topRef,
  heartRef,
  centerTextReftopRef,
  loaderRef
) => {
  const tl = gsap.timeline();

  tl.to([logoRef.current, topRef.current, heartRef.current], {
    opacity: 1,
    duration: 1,
    stagger: 2,
  });

  centerTextReftopRef.current.forEach(currT => {
    tl.to(
      currT,
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
      },
      2
    );
  });

  tl.to(heartRef.current, {
    scale: 100,
    duration: 0.6,
    delay: 0.5,
    ease: "power4.in",
  });

  tl.to(loaderRef.current, {
    opacity: 0,
    duration: 2,
  });

  return tl;
};
