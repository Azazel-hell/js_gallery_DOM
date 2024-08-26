document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".gallery"),t=document.querySelector("#largeImg");e.addEventListener("click",function(e){var r=e.target;"IMG"===r.tagName&&(r=r.closest("a")),"A"===r.tagName&&r.href&&(t.src=r.href,e.preventDefault())})});
//# sourceMappingURL=index.67f4fa65.js.map
