import photoTmpl from '../templates/photo_cards.hbs'
import refs from './refs';
// import info from './notifications';

export default function createMarkup (data) {
    const markuap = photoTmpl(data);
    refs.photoConteiner.insertAdjacentHTML('beforeend', markuap);
    
};