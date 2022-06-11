export default function countriesListRender(countriesArr) {
  return countriesArr
    .map(({ flags, name }) => {
      return `<li class="country-item">
        <img src="${flags.svg}" alt="${name.official}flag" width="50" />
        <p><b>${name.official}</b></p>
      </li>`;
    })
    .join('');
}
