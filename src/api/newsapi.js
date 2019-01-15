// api request function using built in fetch api

const KEY = '390a458ebfd24a78a952d9636eea7c1b';

// takes source as argument to use as which source is to be requested 
export const getData = (source) => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${KEY}`)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.articles))
    .catch(error => console.log('parsing failed', error))
}