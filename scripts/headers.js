const headers = [
    {
        id: "expenses",
        text: "expenses_text"
    },
    {
        id: "income",
        text: "income_text"
    },
    {
        id: "funds_movement",
        text: "funds_movement_text"
    },
];

const headerShowed = document.getElementById("nav-show");
const headerNotShowed = document.getElementById("nav-no-show");

createHeader(0);
createBttn();

export function createHeader(i) {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header","selected");
    headerDiv.id = headers[i].id;
    
    headerDiv.addEventListener("click", function() {
        getId(headerDiv.id);
    });
    
    headerDiv.innerHTML = ` <h2>${headers[i].id.charAt(0).toUpperCase() + headers[i].id.slice(1)}</h2>
    <p>${headers[i].text}</p>`;
    headerShowed.appendChild(headerDiv);
}

export function createBttn () {
    const navButton = document.createElement('div');
    navButton.classList.add('navBttn');
    navButton.id = 'navBttn';

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-bars', 'fa-xl');
    icon.style.color = '#ffffff';

    navButton.appendChild(icon);
    
    headerShowed.appendChild(navButton);

    const headerDiv = document.querySelector(".header");

    navButton.addEventListener("click", function () {
        let x = "";
        getId2(headerDiv.id, function(capturedId) {
            x = capturedId;
        });
        while (headerShowed.firstChild) {
            headerShowed.removeChild(headerShowed.firstChild)
        }
        createHeader(x);
        createExit();
        hideHeader();
    });
}

export function createExit () {
    const exButton = document.createElement('div');
    exButton.classList.add('navBttn');
    exButton.id = 'exBttn';

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-xmark', 'fa-xl');
    icon.style.color = '#ffffff';

    exButton.appendChild(icon);
    
    headerShowed.appendChild(exButton);

    const headerDiv = document.querySelector(".header");

    exButton.addEventListener("click", () => {
        let x = "";
        getId2(headerDiv.id, function(capturedId) {
            x = capturedId;
        });
        while (headerShowed.firstChild) {
            headerShowed.removeChild(headerShowed.firstChild)
        }
        createHeader(x);
        createBttn();
        while (headerNotShowed.firstChild) {
            headerNotShowed.removeChild(headerNotShowed.firstChild)
        }
    });
}

export function hideHeader () {
    const headShowed = document.querySelector(".header");
    for (const h of headers) {
        if (h.id != headShowed.id) {
            const headerDiv = document.createElement("div");
            headerDiv.classList.add("header");
            headerDiv.id = h.id;
            headerDiv.style.width = "100%";

            console.log(headerDiv.style);
            
            headerDiv.addEventListener("click", function() {
                getId(headerDiv.id);
            });
            
            headerDiv.innerHTML = `<h2>${h.id.charAt(0).toUpperCase() + h.id.slice(1)}</h2>
            <p>${h.text}</p>`;
            headerNotShowed.appendChild(headerDiv);
        }
    }
}

export function getId (a) {
    const foundIndex = headers.findIndex(obj => obj.id === a);
    while (headerShowed.firstChild) {
        headerShowed.removeChild(headerShowed.firstChild)
    }
    createHeader(foundIndex);
    createBttn();
    while (headerNotShowed.firstChild) {
        headerNotShowed.removeChild(headerNotShowed.firstChild)
    }
}

export function getId2 (b, callback) {
    const foundIndex = headers.findIndex(obj => obj.id === b);
    callback(foundIndex);
}