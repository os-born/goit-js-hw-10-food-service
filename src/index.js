import './js/menuList';
import { refs } from './js/refs';
import './js/themeSwitcher';
import './sass/main.scss';

const defaultTheme = refs.body.classList.add('light-theme');


if (savedData === 'light-theme'){
    defaultTheme;
};

if (savedData === 'dark-theme'){
    refs.themeSwitcher.checked
    refs.body.classList.replace('light-theme', 'dark-theme')
};


