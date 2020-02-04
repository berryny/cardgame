const winSound =
  "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fstart.mp3?v=1580365787539";

const animals = {
  cards: [
    {
      animal: "sheep",
      sound:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fsheepy%2Cgoat.mp3?v=1580363953494",
      image:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fsheep.png?v=1580364045669"
    },
    {
      animal: "cat",
      sound:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fcat.mp3?v=1580363953669",
      image:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fcat.png?v=1580364045769"
    },
    {
      animal: "cow",
      sound:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2FcowMoo.mp3?v=1580363953698",
      image:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fcow.png?v=1580364047109"
    },
    {
      animal: "lion",
      sound:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Flion.mp3?v=1580363953638",
      image:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Flion.png?v=1580364045972"
    },
    {
      animal: "pig",
      sound:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fpig.mp3?v=1580363953530",
      image:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2FpigA.png?v=1580364046841"
    },
    {
      animal: "frog",
      sound:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Ffrog.mp3?v=1580363953711",
      image:
        "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Ffrog.png?v=1580364046874"
    }
  ]
};

let randomAnimalArr = [];
const randomAnimal = () => {
  for (let i = 0; i < 4; i++) {
    let rand = animals.cards[Math.floor(Math.random() * animals.cards.length)];
    if (randomAnimalArr.indexOf(rand) !== -1) {
      --i;
    } else {
      randomAnimalArr.push(rand);
    }
  }
};

const displayMainAnimalCard = () => {
  let rand =
    randomAnimalArr[Math.floor(Math.random() * randomAnimalArr.length)];

  let html =
    '<div id="animal-thumbnail" class="card-thumbnail" data-card="' +
    rand.animal +
    '"><img src="' +
    rand.image +
    '" alt="' +
    rand.animal +
    '"></div>';
  let animalcards = document.getElementById("animal-img");
  animalcards.insertAdjacentHTML("afterbegin", html);
};

const displayAnimalCards = () => {
  randomAnimalArr.map((obj, i) => {
    let html =
      '<div class="card-box card-thumbnail"><img onclick="compareImg(), playAnimalSound(\'' +
      obj.sound +
      '\')" src="' +
      obj.image +
      '" alt="' +
      obj.animal +
      '" class="animal" data-card="' +
      obj.animal +
      '"></div>';
    let animalcards = document.getElementById("animal-cards");
    animalcards.insertAdjacentHTML("afterbegin", html);
    //document.querySelector('.animal').preload;
  });
};

const playAnimalCardGame = () => {
  randomAnimal();
  if (randomAnimalArr.length > 0) {
    displayMainAnimalCard();
    displayAnimalCards();
  }
  // hide play button
  this.event.target.style.display = "none";
};

const compareImg = () => {
  let selectedImg = this.event.target.dataset.card,
    mainanimal = document.querySelector("#animal-thumbnail").dataset.card,
    animalimg = document.getElementById("animal-img");

  if (document.querySelector(".popMSG") != null) {
    document.querySelector(".popMSG").remove();
  }

  let popmsg =
    selectedImg == mainanimal ? "It a Match, You WIN!" : "Sorry, Try again!";
  animalimg.insertAdjacentHTML(
    "afterend",
    '<div class="popMSG"><p>' + popmsg + "</p></div>"
  );
};

const playAnimalSound = soundFile => {
  let url = soundFile,
    audio = new Audio(url),
    playSound = audio.play();
};
