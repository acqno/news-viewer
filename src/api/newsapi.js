const KEY = '390a458ebfd24a78a952d9636eea7c1b';

export const getData = (source) => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${KEY}`)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.articles))
    .catch(error => console.log('parsing failed', error))
}