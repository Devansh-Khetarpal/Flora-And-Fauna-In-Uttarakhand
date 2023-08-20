let movies = [
    {
      name: "Daisies",
      des:
        "A daisy is a flowering plant with a large, star-shaped head that has clusters of florets surrounding a center disc of yellow or black florets.The daisy family is also known as the aster family, or Asteraceae, referring to the star-shaped flower.There are 23,000 individual species in this family. The name “daisy” is based on the words “day’s eye”, probably because the head opens in the morning and closes each night",
      image: "images/daisyslider.jpg"
    },
    {
      name: "Meconopsis",
      des:
        "Meconopsis horridula, the prickly blue poppy, is a flowering plant from the family Papaveraceae. It is an endangered species that grows in high altitudes. The height of the plant varies from 20 cm to 1m. It is a monocarpic, dicot plant.",
      image: "images/meconopsisslider.jpg"
    },
    {
      name: "Sunbird",
      des:
        "Sunbirds and spiderhunters make up the family Nectariniidae of passerine birds. They are small, slender passerines from the Old World, usually with downward-curved bills. Many are brightly coloured, often with iridescent feathers, particularly in the males. Many species also have especially long tail feathers",
      image: "images/sunbirdslider.jpg"
    },
    {
      name: "Asian Elephant",
      des:
        "The Asian elephant is the largest land mammal on the Asian continent. They inhabit dry to wet forest and grassland habitats in 13 range countries spanning South and Southeast Asia. While they have preferred forage plants, Asian elephants have adapted to surviving on resources that vary based on the area.",
      image: "images/elephantslider.jpg"
    },
    {
      name: "Tiger",
      des:
        "The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar.",
      image: "images/tigerslider.jpg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attachment all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up img
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //video card
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  