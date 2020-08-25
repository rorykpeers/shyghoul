// JavaScript Document

/*
values:
"afterbegin" - After the beginning of the element (as the first child)
"afterend" - After the element
"beforebegin" - Before the element
"beforeend" - Before the end of the element (as the last child)
*/

/* Variables *************************************************/

let menuimg = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="50px" height="50px" viewBox="0 0 512 512"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
`;

let closeimg = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="50px" height="50px" viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>
`;

let mobheader = `
	<div class="mob-header">
		<a onclick="toggle1()" href="javascript:void(0)" class="mob_button">${menuimg}</a>
	</div>
`;

let closenav = `
	<li class="closenav">
		<a onclick="toggle2()" href="javascript:void(0)" class="close_button">${closeimg}</a>
	</li>
`;

const topmenu = document.querySelector('ul.main-menu');

topmenu.insertAdjacentHTML('beforebegin', mobheader);
topmenu.insertAdjacentHTML('afterbegin', closenav);
// https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp

function toggle1() {
	topmenu.style.right = "0px";
} 

function toggle2() {
	topmenu.style.right = "-400px";
}