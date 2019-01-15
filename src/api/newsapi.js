const KEY = '390a458ebfd24a78a952d9636eea7c1b';

export const getData = () => {
    fetch(`https://newsapi.org/v2/top-headlines&apiKey=${KEY}`)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log('parsing failed', error))
}