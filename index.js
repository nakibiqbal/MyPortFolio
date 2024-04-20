let mm = gsap.matchMedia();
mm.add("(max-width: 1080px)", () => {
  gsap.from(".autoType", {
    textStroke: "0.1vw #959595",
    color: "#0F0F0F",
    delay: 1,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
  });
});
mm.add("(min-width: 1081px)", () => {
  gsap.from(".autoType", {
    textStroke: "0.1vw #0F0F0F",
    color: "#959595",
    delay: 1,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
  });
});

gsap.from(".firstLine, .thirdLine, .fourthLine", {
  opacity: 0,
  stagger: 0.8,
});
gsap.from(".firstLine", {
  transform: "translateX(-50rem)",
  duration: 2,
});
gsap.from(".thirdLine h5", {
  transform: "translateY(14rem)",
  duration: 2,
});
gsap.from(".fourthLine", {
  transform: "translateX(-20rem)",
  duration: 2,
});
gsap.from(".div2Child", {
  opacity: 0,
  duration: 5,
});

window.addEventListener("scroll", () => {
  var span2a = document.querySelector(".span2a");
  var span2b = document.querySelector(".span2b");
  var span2c = document.querySelector(".span2c");
  var span2d = document.querySelector(".span2d");
  var span2e = document.querySelector(".span2e");
  var span2f = document.querySelector(".span2f");

  var span2aHeight = span2a.getBoundingClientRect().top;
  var span2bHeight = span2b.getBoundingClientRect().top;
  var span2cHeight = span2c.getBoundingClientRect().top;
  var span2dHeight = span2d.getBoundingClientRect().top;
  var span2eHeight = span2e.getBoundingClientRect().top;
  var span2fHeight = span2f.getBoundingClientRect().top;

  var windowHeight = window.innerHeight;
  var top = 150;

  if (span2aHeight < windowHeight - top) {
    span2a.classList.add("span2aActive");
  } else {
    span2a.classList.remove("span2aActive");
  }
  if (span2bHeight < windowHeight - top) {
    span2b.classList.add("span2bActive");
  } else {
    span2b.classList.remove("span2bActive");
  }
  if (span2cHeight < windowHeight - top) {
    span2c.classList.add("span2cActive");
  } else {
    span2c.classList.remove("span2cActive");
  }
  if (span2dHeight < windowHeight - top) {
    span2d.classList.add("span2dActive");
  } else {
    span2d.classList.remove("span2dActive");
  }
  if (span2eHeight < windowHeight - top) {
    span2e.classList.add("span2eActive");
  } else {
    span2e.classList.remove("span2eActive");
  }
  if (span2fHeight < windowHeight - top) {
    span2f.classList.add("span2fActive");
  } else {
    span2f.classList.remove("span2fActive");
  }
});

gsap.to(".front", {
  marginLeft: "0rem",
  color: "rgba(255, 255, 255, 0.552)",
  scrollTrigger: {
    scroller: "body",
    trigger: ".front",
    scrub: 1,
    start: "top 100%",
    end: "bottom 0",
  },
});
gsap.to(".dev", {
  marginRight: "0rem",
  color: "rgba(255, 255, 255, 0.552)",
  scrollTrigger: {
    scroller: "body",
    trigger: ".front",
    scrub: 1,
    start: "top 100%",
    end: "bottom 0",
  },
});

mm.add("(max-width: 580px)", () => {
  gsap.to(".front", {
    marginLeft: "36vw",
    color: "rgba(255, 255, 255, 0.552)",
    scrollTrigger: {
      scroller: "body",
      trigger: ".front",
      scrub: 1,
      start: "top 100%",
      end: "bottom 0",
    },
  });
  gsap.to(".dev", {
    marginRight: "35vw",
    color: "rgba(255, 255, 255, 0.552)",
    scrollTrigger: {
      scroller: "body",
      trigger: ".front",
      scrub: 1,
      start: "top 100%",
      end: "bottom 0",
    },
  });
});

var singleP = document.querySelectorAll(".singleP");
singleP.forEach((single) => {
  single.addEventListener("mouseover", () => {
    single.style.transition = "0.3s";
    single.style.color = "white";
    single.style.textShadow =
      "0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 5px white";
  });
  single.addEventListener("mouseout", () => {
    single.style.transition = "0.3s";
    single.style.color = "";
    single.style.textShadow = "";
  });
});

var rotate1 = document.querySelectorAll(".rotate1");

rotate1.forEach((rotate) => {
  rotate.addEventListener("mouseover", () => {
    rotate.style.color = "white";
    rotate.style.textShadow =
      "0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 0px white, 0px 0px 10px white";
    rotate.style.transition = "all ease 2s";
    rotate.style.animation = "rotate 0.5s infinite linear";
  });
  rotate.addEventListener("mouseout", () => {
    rotate.style.color = "";
    rotate.style.textShadow = "";
    rotate.style.transition = "all ease 2s";
    rotate.style.animation = "rotate 1.5s infinite linear";
  });
});

var imgClass = document.querySelectorAll(".imgClass");
var a = 0;

setInterval(() => {
  a++;
  if (a >= imgClass.length) {
    a = 0;
    imgClass.forEach((img) => {
      img.style.transform = `translateX(0vw)`;
      img.style.transition = "all 1s";
    });
  } else {
    imgClass.forEach((img) => {
      img.style.transform = `translateX(-${a * 26}vw)`;
      img.style.transition = "all 1s";
    });
  }
}, 2000);
