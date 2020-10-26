
tsParticles.load("bouncer", {
    fps_limit: 30,
    background: {
      color: "transparent"
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onDiv: [
          {
            enable: true,
            ids: "bounce-div",
            mode: "bounce",
            type: "circle"
          }
        ],
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 50,
          color: "#000000"
        },
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      collisions: {
        enable: true,
        mode: "bounce",
      },
      color: {
        value: ["#FFd522", "#008c96", "#00c5d0", "#0092b0"]
      },
      line_linked: {
        enable: false,
      },
      move: {
        attract: {
          enable: false,
        },
        gravity: {
          enable: false,
        },
        bounce: true,
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
          top: "bounce",
          bottom: "bounce",
          right: "bounce",
        },
        random: false,
        speed: 20,
        straight: false
      },
      number: {
        density: {
          enable: false,
          value_area: 4
        },
        value: 4
      },
      opacity: {
        anim: {
          enable: false,
          opacity_min: 0.1,
          speed: 1,
          sync: false
        },
        random: false,
        value: 1,
      },
      shape: {
        type: "circle"
      },
      size: {
        anim: {
          enable: false,
          size_min: 5,
          speed: 40,
          sync: false
        },
        random: { enable: true, minimumValue: 30 },
        value: 50,
      }
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#ffffff",
        lineWidth: 0.5
      },
      move: {
        radius: 10
      },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true,
    emitters: [
    ]
  });