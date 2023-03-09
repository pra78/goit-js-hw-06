function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);

    width += 10;
    height += 10;
  }

  return boxes;
}

function onCreateButtonClick() {
  const amount = Number(controls.querySelector('input').value);
  const boxes = createBoxes(amount);
  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}