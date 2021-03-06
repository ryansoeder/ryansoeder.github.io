// NAV MENU FUNCTIONALITY

const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('#menu li');

let menuOpen = false;

menuBtn.addEventListener('click', (event) => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menu.classList.add('open');
		menuOpen = true;

		event.stopPropagation();
	} else {
		menuBtn.classList.remove('open');
		menu.classList.remove('open');
		menuOpen = false;

		event.stopPropagation();
	}
});

// close if clicked anywhere

body.addEventListener('click', (event) => {
	if (menuOpen) {
		menu.classList.remove('open');
		menuBtn.classList.remove('open');

		menuOpen = false;
	}
});

// PROJECT DESCRIPTION DROP-DOWN

// const projectTitle = document.querySelectorAll('.project-title');

// projectTitle.forEach((title) => {
// 	title.addEventListener('mouseover', (event) => {
//         title.nextElementSibling.classList.add('open');
// 	});
// 	title.addEventListener('mouseout', (event) => {
//         title.nextElementSibling.classList.remove('open');
// 	});
// });
