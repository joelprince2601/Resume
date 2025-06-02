import anime from 'animejs';

// Timer utility
export const createTimer = (options) => {
  return anime({
    ...options,
    easing: options.easing || 'linear',
    autoplay: options.autoplay !== undefined ? options.autoplay : true,
  });
};

// Timeline utility
export const createTimeline = (options) => {
  return anime.timeline(options);
};

// Create a scope for animations
export const createScope = (options) => {
  const animations = [];
  const methods = {};

  const add = (callback, fn) => {
    if (typeof callback === 'string' && fn) {
      methods[callback] = fn;
    } else if (typeof callback === 'function') {
      callback({ anime, timeline: createTimeline, add });
    }
    return scope;
  };

  const revert = () => {
    animations.forEach(anim => anim.pause());
    animations.length = 0;
  };

  const scope = {
    add,
    revert,
    methods,
    animations
  };

  return scope;
};

// Stagger helper
export const stagger = anime.stagger;

// Create spring animation
export const createSpring = ({ 
  stiffness = 100, 
  damping = 10, 
  mass = 1 
} = {}) => {
  return (t) => {
    const omega = Math.sqrt(stiffness / mass);
    const zeta = damping / (2 * Math.sqrt(stiffness * mass));
    if (zeta < 1) {
      const omega_d = omega * Math.sqrt(1 - zeta * zeta);
      return 1 - (Math.exp(-zeta * omega * t) * 
        (Math.cos(omega_d * t) + (zeta * omega / omega_d) * Math.sin(omega_d * t)));
    }
    return 1;
  };
};

// Create draggable elements
export const createDraggable = (targets, options = {}) => {
  const elements = typeof targets === 'string' ? document.querySelectorAll(targets) : Array.isArray(targets) ? targets : [targets];
  const animations = [];

  elements.forEach((el) => {
    if (!(el instanceof Element)) return;

    let startX;
    let startY;
    let initialX;
    let initialY;
    let currentX = 0;
    let currentY = 0;

    const onPointerDown = (e) => {
      el.setPointerCapture(e.pointerId);
      startX = e.clientX - currentX;
      startY = e.clientY - currentY;
      initialX = currentX;
      initialY = currentY;

      animations.forEach(anim => anim.pause());
    };

    const onPointerMove = (e) => {
      if (!el.hasPointerCapture(e.pointerId)) return;

      currentX = e.clientX - startX;
      currentY = e.clientY - startY;

      if (options.container) {
        const [left, top, right, bottom] = options.container;
        currentX = Math.max(left, Math.min(right, currentX));
        currentY = Math.max(top, Math.min(bottom, currentY));
      }

      el.style.transform = `translate(${currentX}px, ${currentY}px)`;
    };

    const onPointerUp = (e) => {
      el.releasePointerCapture(e.pointerId);

      if (options.releaseEase) {
        const anim = anime({
          targets: el,
          translateX: [currentX, initialX],
          translateY: [currentY, initialY],
          duration: 1000,
          easing: options.releaseEase,
        });
        animations.push(anim);
      }
    };

    el.style.touchAction = 'none';
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  });

  return {
    animations
  };
};

export { anime };
export default anime;
