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

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;
    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const createOverlayCta = (overlayCard, ctaEL) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEL.textContent;
  overlayCard.append(overlayCta);
};

const initOverlayCard = (cardEL) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard,cardEL.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEL);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);
