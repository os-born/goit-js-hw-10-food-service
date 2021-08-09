import { refs } from "./refs";

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const savedData = localStorage.getItem('theme')
console.log(savedData);
  
if(savedData){refs.body.classList.replace('light-theme', savedData)}

const onHandleChange = e => {
    e.preventDefault();

    if(refs.themeSwitcher.checked){
        refs.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', JSON.stringify(Theme.DARK))

    }  else {
        refs.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', JSON.stringify(Theme.LIGHT))
    };
};


refs.themeSwitcher.addEventListener('change', onHandleChange)
