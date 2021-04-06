



/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  const systemPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (systemPrefersDarkMode) {

      document.body.setAttribute('data-theme', 'dark');
    }
    else if (systemPrefersDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    }
    else {
      document.body.removeAttribute('data-theme');
    }
  }
window.addEventListener('load', () => {
  if (systemPrefersDarkMode) {
    initTheme();
    console.log("Hello world!");
  }
});


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}

function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkSwitch');
  }
}
