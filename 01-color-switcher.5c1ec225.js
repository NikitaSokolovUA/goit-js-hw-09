!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){n=setInterval(o,1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.5c1ec225.js.map