import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';
import countriesListRender from './countries-list-render';
import countryInfoRender from './country-info-render';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener(
  'input',
  debounce(onShowCountriesInf, DEBOUNCE_DELAY)
);

function onShowCountriesInf(event) {
  const name = event.target.value;

  if (!name) {
    return;
  }

  refs.countryListEl.innerHTML = '';
  refs.countryInfoEl.innerHTML = '';

  fetchCountries(name.trim())
    .then(countries => {
      if (countries.length === 1) {
        refs.countryInfoEl.innerHTML = countryInfoRender(countries);
      } else if (countries.length > 1 && countries.length <= 10) {
        refs.countryListEl.innerHTML = countriesListRender(countries);
      } else {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
