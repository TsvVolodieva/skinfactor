console.log("Custom js file");

function featuredCollectionSlider() {
  var splide = new Splide("#custom_slider", {
    type: "loop",
    perPage: 3,
    width: "100%",
    perMove: 1,
    arrows: false,
    drag: true,
    pagination: false,
    // gap: "45px",
    gap: "0px",
  });
  splide.mount();
  splide.on("moved", function () {
    document.getElementsByClassName(
      "splide__slide is-active is-visible tsv"
    )[0].style.marginLeft = "0px";
  });
}
function videoSlider() {
  var splide1 = new Splide("#video_slider", {
    type: "loop",
    width: "50vw",
    perPage: 1,
    perMove: 1,
    arrows: true,
    drag: true,
    pagination: false,
    gap: "0px",
  });
  splide1.mount();
}

function newsletterPopup() {
  const subscription = localStorage.getItem("subscription");
  if (!subscription) {
    let element = document.getElementById("newsletter-popup-overlay");
    element.classList.add("active");
  }
}
function closeNewslettterPopup() {
  document
    .getElementById("close_button")
    .addEventListener("click", function () {
      localStorage.setItem("subscription", "true");
      let element = document.getElementById("newsletter-popup-overlay");
      element.classList.remove("active");
    });
}

function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}
function submitNewsletter() {
  document.getElementById("Subscribe").addEventListener("click", function () {
    let enteredEmail =
      document.getElementsByClassName("newsletter-input")[0].value;
    if (ValidateEmail(enteredEmail)) {
      localStorage.setItem("subscription", "true");
      let element = document.getElementById("newsletter-popup-overlay");
      element.classList.remove("active");
    }
  });
}
// function productVariantCards() {
//   let bestHeight = 0;
//   let heights = [];
//   Array.from(document.getElementsByClassName("variant-card")).forEach(function (
//     element,
//     index
//   ) {
//     let elementHeight = element.children[0].offsetHeight; 
//     console.log(element.children);
//     if (elementHeight > bestHeight) {
//       bestHeight = elementHeight;
//     }
//   });
//   heights.push(bestHeight); 
//   console.log(bestHeight, heights); 
// }


function productVariantCards() {
  let heights = []; 
  Array.from(document.getElementsByClassName("variant-card")).forEach(function (
    element,
    index
  ) {
    // console.log(element.children);
    Array.from(element.children).forEach(function(element,index){
      let elementHeight = element.offsetHeight;
      if (!heights[index] || heights[index] < elementHeight) {
        heights[index] = elementHeight;
      } else {
        heights[index] = heights[index];
      }
    });
  });
  Array.from(document.getElementsByClassName("variant-card")).forEach(function(element,index){
    Array.from(element.children).forEach(function(element,index){
      console.log(element,'tuk');
      element.style.height = heights[index] + "px";
    });
  });
  console.log(heights);
}
this.productVariantCards();
this.submitNewsletter();
this.newsletterPopup();
this.closeNewslettterPopup();
this.featuredCollectionSlider();
this.videoSlider();
