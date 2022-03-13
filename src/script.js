import {drawNavigation} from "./core/drawNavigation.js";
import {drawDropdownContent} from "./core/drawDropdownContent.js";
import {openBurgerMenu} from "./core/openBurgerMenu.js";
import {drawNavigationBurger} from "./core/drawNavigationBurger.js";
import {openCloseHamburgerDropdown} from "./core/openCloseHamburgerDropdown.js";
import {drawDropdownBurger} from "./core/drawDropdownBurger.js";
import {drawCards} from "./core/drawCards.js";
import {filterCards} from "./core/filterCards.js";

const cardWrapperNode = document.querySelector('.card-wrapper');
const navigationWrappers = document.querySelectorAll('.dropdown-container');
const dropdownWrappers = document.querySelectorAll('.dropdown-content');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const wrapperHamburgerMenu = document.querySelector('.wrapper-hamburger__menu');
const closeBurger = document.querySelector('.hamburger__menu-close');
const navigationHamburgerMenu = document.querySelectorAll('.wrapper-hamburger__item');
const containerHamburgerDropdown = document.querySelectorAll('.container-dropdown');
const dropdownHamburger = document.querySelectorAll('.wrapper-hamburger__dropdown');
const searchCardInput = document.querySelector('.search__card');

const markupNavigation = drawNavigation();
navigationWrappers.forEach((elem, index) => {
    elem.innerHTML = markupNavigation[index];
});

const markupDropdown = drawDropdownContent();
dropdownWrappers.forEach((elem, index) => {
    elem.innerHTML = markupDropdown[index];
});

hamburgerMenu.addEventListener('click', openBurgerMenu);
closeBurger.addEventListener('click', () => wrapperHamburgerMenu.classList.remove('hamburger__visibility'));

const markupNavigationHamburgerMenu = drawNavigationBurger();
navigationHamburgerMenu.forEach((elem, index) => {
    elem.innerHTML = markupNavigationHamburgerMenu[index];
})

containerHamburgerDropdown.forEach(
    elem => elem.addEventListener('click' ,
    () => openCloseHamburgerDropdown(elem)));

const markupHamburgerDropdown = drawDropdownBurger();
dropdownHamburger.forEach((elem,index) => {
    elem.innerHTML = markupHamburgerDropdown[index];
});
const markupCards = drawCards();
cardWrapperNode.innerHTML = markupCards;
searchCardInput.addEventListener('input', (event) => {
    setTimeout(() => cardWrapperNode.innerHTML = filterCards(event), 300);
})