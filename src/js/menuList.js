import getMenuListMarkup from '../templates/menu.hbs'
import { refs } from './refs'
import dataMenu from '../menu.json'

// console.log(getMenuListMarkup(dataMenu));

refs.menuList.innerHTML = getMenuListMarkup(dataMenu);
console.log(refs.menuList);