import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);
const STORAGE_KEY = 'feedback-form-state';
const data = {};

fillFormOnLoad();

function onInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  console.log(data);
}

function fillFormOnLoad() {
  
  if (localStorage.getItem(STORAGE_KEY));
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (const key in savedData) {
    formRef.elements[key].value = savedData[key];
  }
  };

function onFormSubmit(evt) {
  evt.preventDefault();
  if (data.email && data.message) {
    console.log(data);
    data.email = '';
    data.message = '';
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}
