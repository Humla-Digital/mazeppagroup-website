import './styles/index.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
window.Webflow ||= [];
window.Webflow.push(() => {
  whyUsBackgroundImage();
});

export function whyUsBackgroundImage() {
  const wrapper = $('.why-us-background-image');
  const bgImage = $('.image-full-cover');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
  tl.to(bgImage, {
    y: '-10%',
    autoAlpha: 0.3,
  });
}
