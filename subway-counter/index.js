// javascript

let countEl = document.getElementById("count-el")

//initialize the count as 0
let count = 0;

//listen for clicks on the increment button
function increment() {
  count += 1;
  countEl.textContent = count;
}
let saveEl = document.getElementById("save-el")

function reset() {
  count = 0
  countEl.textContent = count
}

function save() {
  let countString = count + " - "
  saveEl.textContent += countString
  reset();
}


