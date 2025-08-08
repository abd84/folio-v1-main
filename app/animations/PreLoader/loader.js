import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut",
  })
    .from(".texts-container span", {
      duration: 1.5,
      y: 70,
      skewY: 10,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 0.01,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding(),
      },
      "-=2"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });

  // Make the texts appear immediately on page load for small screen
  tl.to(".data, .ai, .solutions", {
    duration: 0,
    opacity: 1,
    y: 0,
    ease: "Power3.easeOut",
  });
};
