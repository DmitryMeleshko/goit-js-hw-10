export function fetchCountries (name) {
    const OWN_URL = 'https://restcountries.com/v3.1/name/';
    return fetch(
        `${OWN_URL}${name}?fields=name,capital,population,flags,languages`
      ).then(resp => {
        console.log(resp);
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        return resp.json();
      });
    }