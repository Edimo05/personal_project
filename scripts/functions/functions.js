import { createHeaderMobile, createHeaderWeb, headers, width } from "../headers2.js";
import { selectedTab, displayQuestions } from "../form.js"

export function createElement (element, className = [], id, listener) {
    const elementCreated = document.createElement(element);
    if (className) {
        elementCreated.classList.add(...className);
    }
    if (id) {
        elementCreated.id = id;
    }
    if (listener) {
        elementCreated.addEventListener("click", () => {
            deleteHeader("header");
            getId2(elementCreated.id, function(capturedId) {
                if (width < 416) {
                    createHeaderMobile(capturedId, true, false);
                } else {
                    createHeaderWeb();
                }
                console.log(elementCreated);
                selectedTab(elementCreated);
            });
            displayQuestions(elementCreated);
        });
    }

    return elementCreated;
}

export function createBttn (k) {
    const navBttn = createElement("div", ["navBttn"], "navBttn");
    const icon = createElement("i", ['fa-solid', 'fa-bars', 'fa-xl'], "icon");
    navBttn.addEventListener("click", () => {
        deleteHeader("header");
        createHeaderMobile(k, false, true);
    });
    navBttn.appendChild(icon);

    return navBttn;
}

export function createExit () {
    const exBttn = createElement("div", ["navBttn"], "exBttn");
    const icon = createElement("i", ['fa-solid', 'fa-xmark', 'fa-xl'], "icon");
    exBttn.addEventListener("click", () => {
        deleteHeader("header");
        createHeaderMobile(0, true, false);
    });
    exBttn.appendChild(icon);

    return exBttn;
}

export function assigName (headers) {
    headers.forEach(j => {
        let header = document.getElementById(j.id);
        if (header) {
            const headLine = createElement("h2");
            const textLine = createElement("p");

            headLine.innerHTML = j.id.charAt(0).toUpperCase() + j.id.slice(1);
            textLine.innerHTML = j.text;

            header.appendChild(headLine);
            header.appendChild(textLine);
        }
    });
}

export function getId2 (b, callback) {
    const foundIndex = headers.findIndex(obj => obj.id === b);
    console.log(foundIndex);
    callback(foundIndex);
}

export function deleteHeader (sectionId) {
    let header = document.getElementById(sectionId);
    while (header.firstChild) {
        header.removeChild(header.firstChild);
    }
}
