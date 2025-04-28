const cards = [
  { country: "Франция", capital: "Париж" },
  { country: "Германия", capital: "Берлин" },
  { country: "Италия", capital: "Рим" },
  { country: "Япония", capital: "Токио" },
  { country: "Бразилия", capital: "Бразилиа" }
];

let currentCard = 0;
const flashcard = document.getElementById('flashcard');

function flipCard() {
  flashcard.classList.toggle('flipped');
}

function nextCard() {
  currentCard = (currentCard + 1) % cards.length;
  updateCard();
}

function updateCard() {
  flashcard.classList.remove('flipped');
  flashcard.querySelector('.front').innerText = cards[currentCard].country;
  flashcard.querySelector('.back').innerText = cards[currentCard].capital;
}

const images = [
  "images/eiffel.jpg",
  "images/colosseum.jpg",
  "images/statue_of_liberty.jpg",
  "images/great_wall.jpg"
];

let currentImage = 0;
const landmark = document.getElementById('landmark');

function changeImage() {
  currentImage = (currentImage + 1) % images.length;
  landmark.src = images[currentImage];
}

setInterval(changeImage, 10000); // меняем изображение каждые 10 секунд