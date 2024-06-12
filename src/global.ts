/* eslint-disable no-console */
import './styles/global.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

window.Webflow ||= [];
window.Webflow.push(() => {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  let isOpened = false;
  function update() {
    if (isOpened) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }

  function onClick() {
    isOpened = !isOpened;

    update();
  }

  $('.home-article-item .is-portrait').on('click', onClick);
  $('.portrait-interview-close').on('click', onClick);
});
