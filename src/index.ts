import './styles/index.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
window.Webflow ||= [];
window.Webflow.push(() => {
  whyUsBackgroundImage();
  whyUsTexts();
  servicesHorizontalScroll();
  articlesAnim();
  navbarAnim();
});

export function navbarAnim() {
  const wrapper = $('.why-us-background-image');

  ScrollTrigger.create({
    trigger: wrapper,
    start: '-10% top',
    end: 'bottom top',
    onEnter: () => $('.navbar').addClass('is-opaque'),
    onLeave: () => $('.navbar').removeClass('is-opaque'),
    scrub: 1,
  });
}

export function whyUsBackgroundImage() {
  const wrapper = $('.why-us-background-image');
  const bgImage = $('#why-us-image');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
  tl.to(bgImage, {
    y: '7%',
    autoAlpha: 0.3,
  });
}
export function whyUsTexts() {
  const textBox1 = $('#why-us-text-1');
  const textBox2 = $('#why-us-text-2');
  const textBox3 = $('#why-us-text-3');

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: textBox1,
      start: '-100% center',
      markers: true,
    },
  });
  tl1.from(textBox1, {
    autoAlpha: 0,
    y: '50px',
    duration: 1.5,
    ease: 'power2.out',
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: textBox2,
      start: '-100% center',
    },
  });
  tl2.from(textBox2, {
    autoAlpha: 0,
    y: '50px',
    duration: 1.5,
    ease: 'power2.out',
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: textBox3,
      start: '-100% center',
    },
  });
  tl3.from(textBox3, {
    autoAlpha: 0,
    y: '50px',
    duration: 1.5,
    ease: 'power2.out',
  });
}

export function servicesHorizontalScroll() {
  const mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  mm.add('(min-width: 992px)', () => {
    // this setup code only runs when viewport is at least 800px wide
    const sections = gsap.utils.toArray('.home-hz-solution-wrap');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.section_home-solutions',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: '-=71',
        end: () =>
          '+=' + document.querySelector<HTMLElement>('.section_home-solutions')!.offsetWidth,
      },
    });
  });
}

export function articlesAnim() {
  const articles = gsap.utils.toArray('.is-news');
  const wrapper = $('.section_home-articles');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: 'top bottom',
    },
  });
  tl.from(articles, {
    delay: 0.5,
    autoAlpha: 0,
    stagger: 0.25,
    duration: 0.65,
  });
}
