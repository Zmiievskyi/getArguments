const form = document.querySelector(".container");
form.addEventListener("submit", onFormSubmit);

const answerRef = document.querySelector("#value");

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const arrString = `${formElements.array.value}`;
  const targString = `${formElements.target.value}`;
  const arr = arrString.split("");
  const targ = targString.split("");
  let answerArr = getArgSum(arr, targ);
  if (answerArr === undefined) {
    answerRef.textContent = `Sorry we could'n find arguments`
  }
    answerRef.textContent = `number:${arr[answerArr[0]]}, position:${
      answerArr[0]
    } and number:${arr[answerArr[1]]}, position:${answerArr[0]}`;
 

  return answerArr;
}

const getArgSum = (arr, targ) => {
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]] != undefined) {
      return [...obj[arr[i]].value, i];
    }
    
    let dif = targ - arr[i];
    obj[dif] = { key: dif, value: [i] };
  }
};