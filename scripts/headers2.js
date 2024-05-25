import { createBttn, createElement, createExit, assigName } from "./functions/functions.js"

let headers = [];
const headerSection = document.getElementById("header");
let width = window.innerWidth;
console.log(width);

fetch("./json/options.json")
.then(response => response.json()) // Assuming the API returns JSON
.then(data => {
    data.headers.forEach(e => {
        headers.push(e);
    });
    
    if (width < 416) {
        console.log(width);
        createHeaderMobile(0, true, false);
    } else {
        createHeaderWeb();
    }
})
.catch(error => {
    console.error("Error fetching data:", error);
    // Check for response headers or handle other errors
});

export function createHeaderMobile (k, button, hidden) {
    const headerShow = createElement("div", ["header-show"], "header-show");

    headerShow.appendChild(createElement("div", ["header", "selected"], headers[k].id, true));

    headerSection.appendChild(headerShow);
    
    if (button) {
        headerShow.appendChild(createBttn(k));
    } else if (button === false) {
        headerShow.appendChild(createExit());
    }

    if (hidden) {
        const headerNoShow = createElement("div", ["header-no-show"], "header-no-show");
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].id != headers[k].id) {
                headerNoShow.appendChild(createElement("div", ["header"], headers[i].id, true));
            }
        }
        headerSection.appendChild(headerNoShow);
    }

    assigName(headers);
}

export function createHeaderWeb () {
    const headerShow = createElement("div", ["header-show"], "header-show", false);

    headers.forEach(j => {
        headerShow.appendChild(createElement("div", ["header"], j.id, true));
    });
    
    headerSection.appendChild(headerShow);

    assigName(headers);
}

export { headers, width };