export default function countryInfoRender(countriesArr) {
  const { capital, flags, name, population, languages } = countriesArr[0];
  const languag = Object.values(languages);

  return `<img src="${flags.svg}" alt="" width="250" />
      <h1>${name.official}</h1>
      <p><b>Capital:</b> ${capital}</p>
      <p><b>Population:</b> ${population}</p>
      <p><b>Languages:</b> ${languag.join(`, `)}</p>`;
}
