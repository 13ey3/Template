const btnMenu = document.body.querySelector('#nav-toggle');

document.body.onclick = (ev) => {
    if (ev.target.getAttribute("class") == "nav-item") {
        btnMenu.checked = false;
    }
} 