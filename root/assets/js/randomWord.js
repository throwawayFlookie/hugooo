function randomWord() {

  const cards = document.querySelectorAll(".word-card");

  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  randomCard.open = true;

  randomCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}