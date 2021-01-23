import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import createMarkup from './js/create_markup';
import infoFunction from './js/notifications';


refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;

    form.reset();

    apiService.resetPage();

    refs.photoConteiner.innerHTML = '';

    apiService.fetchPhoto().then((hits) => {
        infoFunction()
        createMarkup(hits);
        refs.loadMoreBtn.classList.remove('is-hidden');
    });
});


refs.loadMoreBtn.addEventListener('click', () => {
    apiService.fetchPhoto().then((hits) => {
        infoFunction()
        createMarkup(hits);
        window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: "smooth"
});
    });

});