import { refs } from "./refs";

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const onHandleChange = () => {

    if(refs.themeSwitcher.checked){
        refs.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', JSON.stringify(Theme.DARK))

    }  else {
        refs.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', JSON.stringify(Theme.LIGHT))
    };
};

export function checkedTheme() {
    const savedData = localStorage.getItem('theme');
    if (savedData === JSON.stringify(Theme.DARK)){
        refs.themeSwitcher.checked = true;
        onHandleChange();
        localStorage.removeItem(savedData);
    };
}

refs.themeSwitcher.addEventListener('change', onHandleChange)
