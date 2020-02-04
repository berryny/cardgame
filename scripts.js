const winSound =
  "https://cdn.glitch.com/26af7533-1c1d-40eb-af39-4f39cdfeecf3%2Fstart.mp3?v=1580365787539";

const animals = {
  cards: [
    {
      animal: "sheep",
      sound:
        "assets/audio/sheepy-goat.mp3",
      image:
        "assets/img/sheep.png"
    },
    {
      animal: "cat",
      sound:
        "assets/audio/cat.mp3",
      image:
        "assets/img/cat.png"
    },
    {
      animal: "cow",
      sound:
        "assets/audio/cowMoo.mp3",
      image:
        "assets/img/cow.png"
    },
    {
      animal: "lion",
      sound:
        "assets/audio/lion.mp3",
      image:
        "assets/img/lion.png"
    },
    {
      animal: "pig",
      sound:
        "assets/audio/pig.mp3",
      image:
        "assets/img/pig.png"
    },
    {
      animal: "frog",
      sound:
        "assets/audio/frog.mp3",
      image:
        "assets/img/frog.png"
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
