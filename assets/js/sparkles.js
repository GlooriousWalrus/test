// import { tsParticles } from './tsparticles.min.js';

tsParticles.load('tsparticles', {
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: true,
          force: 20,
          smooth: 10,
        },
      },
      resize: true,
    },
  },
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: '#00fdfc',
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 300,
      },
      value: 80,
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 5,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
  },
  detectRetina: true,
});

const particles = tsParticles.domItem(0);

particles.play();
