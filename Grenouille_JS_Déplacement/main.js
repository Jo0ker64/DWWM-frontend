const frog = document.getElementById('frog');
const target = document.getElementById('target');

frog.style.top = '50px';
frog.style.left = '50px';

function moveFrog(e) {
  switch (e.key) {
    case 'ArrowUp':
      frog.style.top = (parseInt(frog.style.top) - 10) + 'px';
      break;
    case 'ArrowDown':
      frog.style.top = (parseInt(frog.style.top) + 10) + 'px';
      break;
    case 'ArrowLeft':
      frog.style.left = (parseInt(frog.style.left) - 10) + 'px';
      break;
    case 'ArrowRight':
      frog.style.left = (parseInt(frog.style.left) + 10) + 'px';
      break;
  }

  // Check if frog reaches the target
  if (checkCollision(frog, target)) {
    alert('Nénuphar touché!');
    resetTarget();
  }
}

function resetTarget() {
  const maxX = window.innerWidth - 30;
  const maxY = window.innerHeight - 30;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + 'px';
  target.style.top = randomY + 'px';
}

function checkCollision(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return (
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top &&
    rect1.left < rect2.right &&
    rect1.right > rect2.left
  );
}

document.addEventListener('keydown', moveFrog);

resetTarget(); // Initialize target position