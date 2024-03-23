// index.js
import { displayHomeTab } from './homeTab.js';
import { displayContactTab } from './contactTab.js';
import { displayMenuTab } from './menuTab.js';

// Initial load
displayHomeTab();

// Tab buttons
const homeButton = document.querySelector('button[data-tab="home"]');
homeButton.addEventListener('click', () => {
    displayHomeTab();
});

const contactButton = document.querySelector('button[data-tab="contact"]');
contactButton.addEventListener('click', () => {
    displayContactTab();
});

const menuButton = document.querySelector('button[data-tab="menu"]');
menuButton.addEventListener('click', () => {
    displayMenuTab();
});
