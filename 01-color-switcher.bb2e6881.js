const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){n=setInterval(o,1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.bb2e6881.js.map
