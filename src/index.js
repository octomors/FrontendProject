import './index.css';
import { Fireworks } from 'fireworks-js';

const fireworksContainer = document.querySelector('#sus');
const fireworks = new Fireworks(fireworksContainer, {});

const bookButton = document.querySelector('.footer__address-button');

bookButton.addEventListener('click', () => {
  fireworks.clear(); // очистить предыдущие

  let count = 0;
  const total = 8;
  const interval = 200; // задержка между фейерверками в миллисекундах

  const launchNext = () => {
    if (count < total) {
      fireworks.launch(1); // запустить один
      count++;
      setTimeout(launchNext, interval);
    }
  };

  launchNext();
});
