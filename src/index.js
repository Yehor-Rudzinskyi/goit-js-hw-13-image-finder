import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import createMarkup from './js/create_markup';
import infoFunction from './js/notifications';


refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
  refs.loadMoreBtn.classList.add('is-hidden');
    const form = event.currentTarget;
    apiService.query = form.elements.query.value;

    apiService.resetPage();

    refs.photoConteiner.innerHTML = '';

    apiService.fetchPhoto().then((hits) => {
        infoFunction(hits)
        createMarkup(hits);
        if (hits.length < 6) {
            refs.loadMoreBtn.classList.add('is-hidden');
        }  else if(hits.length !== 0)  {
             refs.loadMoreBtn.classList.remove('is-hidden');
        }
    });
});


refs.loadMoreBtn.addEventListener('click', () => {
    apiService.fetchPhoto().then((hits) => {
        infoFunction(hits)
        createMarkup(hits);
        window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: "smooth"
});
    });

});