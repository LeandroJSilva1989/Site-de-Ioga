const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.querySelector("#switch-tema");

// Set sizing attribute based on switch
intrinsicSwitch.addEventListener("change", () => {
  awesome.setAttribute(
    "data-sizing",
    intrinsicSwitch.checked ? "intrinsic" : "extrinsic"
  );
});