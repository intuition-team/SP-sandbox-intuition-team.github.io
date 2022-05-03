import Plyr from "plyr";

let registered = new Set();

function register(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  registered.add(selector);

  new Plyr(element, {
    controls: ["play", "progress", "current-time", "volume", "fullscreen"]
  });
}

export function registerPlayer(observableSelector, playerSelector) {
  const element = document.querySelector(observableSelector);
  if (!element) {
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !registered.has(playerSelector)) {
        register(playerSelector);
      }
    });
  });

  observer.observe(element);
}
