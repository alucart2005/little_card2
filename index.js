const cardsContainer = document.querySelector(".cards"),
  cardsContainerInner = document.querySelector(".cards__inner"),
  cards = Array.from(document.querySelectorAll(".card")),
  overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEL = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;
  overlayEL.style = `--opacity:1; --x:${x}px; --y:${y}px;`;
};

const initOverlayCard = () => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  overlay.append(overlayCard);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);
