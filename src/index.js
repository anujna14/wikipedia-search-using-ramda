import "bootstrap/dist/css/bootstrap.min.css";
import { pipe, ifElse, isEmpty } from "ramda";
import getInputValue from "./getInputValue";
import getUrl from "./getUrl";
import Results from "./Results";

const doNothing = () => {};

const render = markup => {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = markup;
}

const searchAndRenderResults = pipe( getUrl, (url) =>
  fetch(url)
    .then((res) => res.json())
    .then(Results)
    .then(render)
    .catch((error) => console.log(error))
);

// const inputElement = document.querySelector('input');
// inputElement.addEventListener('keyup', event => {
//     console.log('value:', event.target.value)
// });

// const getInputValue = pipe(pathOr("", ["target", "value"]), trim); // default , target, value

const makeSearchRequestIfValid = pipe(
    getInputValue,
    ifElse(isEmpty, doNothing, searchAndRenderResults)
  );
  
const inputElement = document.querySelector("input");

inputElement.addEventListener("keyup", makeSearchRequestIfValid);
