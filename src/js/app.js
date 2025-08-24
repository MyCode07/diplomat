import "./parts/menu.js";
import "./parts/sliders.js";
import { Fancybox } from "@fancyapps/ui";
import { stickyHeader } from "./parts/header.js";
import { replaceDomElements } from "./static/replace.js";

replaceDomElements();
stickyHeader();


Fancybox.bind("[data-fancybox]", {
});

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})