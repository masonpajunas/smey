document.addEventListener("DOMContentLoaded", () => {
  // Initial SplitType run
  new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  // ScrollTrigger helper
  function createScrollTrigger(
    triggerElement,
    timeline,
    startPosition = "top bottom"
  ) {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
    });
    ScrollTrigger.create({
      trigger: triggerElement,
      start: `top ${startPosition}`,
      onEnter: () => timeline.play(),
    });
  }

  function animateText(selector, target, baseProps, start = "75%") {
    document.querySelectorAll(selector).forEach((el) => {
      const delayMs = el.getAttribute("data-speed");
      const delay = delayMs ? parseFloat(delayMs) / 1000 : 0;

      const props = { ...baseProps };

      // Only add delay if it's not already defined in baseProps
      if (!("delay" in props)) {
        props.delay = delay;
      }

      const tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(target), props);
      createScrollTrigger(el, tl, start);
    });
  }

  // === WORD ANIMATIONS ===

  animateText(
    "[words-slide-up]",
    ".word",
    {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "back.out(1)",
      stagger: { amount: 0.2 },
    },
    "75%"
  );

    animateText(
    "[words-hero]",
    ".word",
    {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "75%"
  );

  animateText(
    "[words-slide-up-less]",
    ".word",
    {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "back.out(1)",
      stagger: { amount: 0.2 },
    },
    "90%"
  );

  animateText(
    "[words-slide-from-left]",
    ".word",
    {
      opacity: 0,
      x: "-1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "75%"
  );

  animateText(
    "[words-slide-from-left-further]",
    ".word",
    {
      opacity: 0,
      x: "-1em",
      duration: 0.4,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "80%"
  );

  animateText(
    "[all-slide-from-right]",
    ".word",
    {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
    },
    "90%"
  );

    animateText(
    "[all-slide-up]",
    ".word",
    {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      ease: "power2.out",
    },
    "90%"
  );

  animateText(
    "[words-slide-from-right-less]",
    ".word",
    {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "60%"
  );

  animateText(
    "[words-slide-from-right]",
    ".word",
    {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "75%"
  );

  animateText(
    "[words-slide-from-right-further]",
    ".word",
    {
      opacity: 0,
      x: "1em",
      duration: 0.4,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "80%"
  );

  // === LETTER ANIMATIONS ===

  animateText(
    "[letters-slide-from-right-bottom]",
    ".char",
    {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "100%"
  );

  animateText(
    "[letters-slide-from-right]",
    ".char",
    {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "75%"
  );

  animateText(
    "[letters-slide-from-right-less]",
    ".char",
    {
      opacity: 0,
      x: "0.25em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    },
    "60%"
  );

  animateText(
    "[letters-slide-up-delay-200]",
    ".char",
    {
      yPercent: 50,
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.2 },
    },
    "90%"
  );

  animateText(
    "[letters-slide-up]",
    ".char",
    {
      yPercent: 50,
      opacity: 0,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.2 },
    },
    "75%"
  );

  animateText(
    "[letters-slide-up-less]",
    ".char",
    {
      yPercent: 50,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.2 },
    },
    "60%"
  );

  animateText(
    "[letters-slide-up-further]",
    ".char",
    {
      yPercent: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.2 },
    },
    "90%"
  );

  animateText("[letters-slide-down]", ".char", {
    yPercent: -120,
    duration: 0.3,
    ease: "power1.out",
    stagger: { amount: 0.7 },
  });

  animateText("[letters-fade-in]", ".char", {
    opacity: 0,
    duration: 0.2,
    ease: "power1.out",
    stagger: { amount: 0.8 },
  });

  animateText(
    "[letters-fade-in-random]",
    ".char",
    {
      opacity: 0,
      duration: 0.05,
      ease: "power1.out",
      stagger: { amount: 0.4, from: "random" },
    },
    "75%"
  );

  // Prevent flash of unstyled text
  gsap.set("[text-split]", { opacity: 1 });
});
