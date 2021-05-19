import { createTask } from './TaskFunctions.js';

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
    main.appendChild(createUserInterface());
    return main;
}

function createNavbar() {
    let navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');
    navbar.classList.add('navbar');
    let mainNav = document.createElement('div');
    mainNav.setAttribute('id', 'mainNav');
    let projectNav = document.createElement('div');
    projectNav.setAttribute('id', 'projectNav');
    navbar.appendChild(mainNav);
    navbar.appendChild(projectNav);
    mainNav.appendChild(addNavItem('inbox', 'inbox', 'Inbox'));
    mainNav.appendChild(addNavItem('today', 'today', 'Today'));
    mainNav.appendChild(addNavItem('week', 'week', 'Week'));
    mainNav.appendChild(addNavItem('month', 'month', 'Month'));
    mainNav.appendChild(addNavItem('important', 'important', 'Important'));
    projectNav.appendChild(addNavItem('projects', 'projects', 'Projects'));
    return navbar;
}


//function to add navbar item
function addNavItem(name, classList, text) {
    let navItem = document.createElement('div');
    navItem.setAttribute('id', `${name}`);
    navItem.classList.add(`${classList}`);
    navItem.textContent = `${text}`;

    return navItem;
}

function createUserInterface() {
    let userInterface = document.createElement('userInterface');
    userInterface.setAttribute('id', 'userInterface');
    userInterface.classList.add('userInterface');
    let currentTitle = document.createElement('div');
    currentTitle.classList.add('currentTitle');
    currentTitle.textContent = 'Today';
    userInterface.appendChild(currentTitle);

    return userInterface;
}

//testing task factory
const taskbro = createTask('Mow', 'Mow the roof', 'november', 'high', 'dont want to')
const taskyo = createTask('run', 'run the road', 'septovember', 'low', 'dont want to')
console.log(taskbro, taskyo);

export {
    initializeHomepage,
}

