import getMenuListMarkup from '../templates/menu.hbs'
import { refs } from './refs'
import dataMenu from '../menu.json'

refs.menuList.innerHTML = getMenuListMarkup(dataMenu);