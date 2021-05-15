function initializeHomepage() {
    const content = document.getElementById('content');
    content.appendChild(createBanner());
    content.appendChild(createMain())
    return content;
}

function createBanner() {
    let banner = document.createElement('div');
    banner.classList.add('banner');
    let logo = document.createElement('img');
    logo.setAttribute('src', './images/todologo.svg')
    logo.setAttribute('height', '80px');
    logo.setAttribute('width', '80px');
    logo.setAttribute('alt', 'logo');
    logo.classList.add('bannerItems');

    let title = document.createElement('div');
    title.classList.add('bannerItems');
    title.textContent = 'Elaboratus';
    let slogan = document.createElement('div');
    slogan.classList.add('slogan');
    slogan.textContent = "life is chaotic, organize it";
    title.appendChild(slogan);

    banner.appendChild(logo);
    banner.appendChild(title);
    return banner;
}

function createMain() {
    let main = document.createElement('div');
    main.classList.add('main');
    main.appendChild(createNavbar());
    main.appendChild(createuserInterface());
    return main;
}

function createNavbar() {
    let navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');
    navbar.classList.add('navbar');
    return navbar;
}

//function to add navbar item
function addNavItem(name, classList, text) {
    let navItem = document.createElement('div');
    navItem.setAttribute('id', `${name}`);
    navItem.classList.add(`${classList}`);
    navItem.textContent = `${text}`;
    navbar.appendChild(navItem);
    return navItem;
}

function createuserInterface() {
    let userInterface = document.createElement('userInterface');
    userInterface.setAttribute('id', 'userInterface');
    userInterface.classList.add('userInterface');
    return userInterface;
}

export {
    initializeHomepage,
}

