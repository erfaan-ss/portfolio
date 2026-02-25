const switcher = document.getElementById("themeSwitcher");

switcher.addEventListener("change", () => {
  document.documentElement.setAttribute(
    "data-theme",
    switcher.value
  );
});