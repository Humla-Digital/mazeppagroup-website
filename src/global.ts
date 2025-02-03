/* eslint-disable no-console */
import './styles/global.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  //Run in both editor and live
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
  if (!window.WebflowEditor) {
    // Run in live only
  } else {
    //Run in editor only
    lenis.destroy();
  }
});
