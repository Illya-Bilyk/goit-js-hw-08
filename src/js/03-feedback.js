import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSub);

let labelData = {};

fillTheFields();

function onFormInput(e) {
  if (e.target.nodeName === 'INPUT') {
    labelData.email = e.target.value;
  }
  if (e.target.nodeName === 'TEXTAREA') {
    labelData.message = e.target.value;
  }

  setDataToLS(labelData);
}

function onFormSub(e) {
  e.preventDefault();
  console.log('labelData', labelData);
  localStorage.removeItem('feedback-form-state');
  refs.input.value = '';
  refs.textarea.value = '';
}

function setDataToLS(labelData) {
  const toString = JSON.stringify(labelData);
  localStorage.setItem('feedback-form-state', toString);
}

function fillTheFields() {
  const storageСheck = localStorage.getItem('feedback-form-state');
  if (!storageСheck) return;
  const parsedData = JSON.parse(storageСheck);
  if (parsedData.email) {
    refs.input.value = parsedData.email;
    labelData.email = parsedData.email;
  }
  if (parsedData.message) {
    refs.textarea.value = parsedData.message;
    labelData.message = parsedData.message;
  }
}
