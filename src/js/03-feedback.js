import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const labelData = {};
console.log('labelData', labelData);

refs.form.addEventListener('input', e => {
  e.preventDefault();

  if (e.target.nodeName === 'INPUT') {
    labelData.email = e.target.value;
  }
  if (e.target.nodeName === 'TEXTAREA') {
    labelData.message = e.target.value;
  }

  setDataToLS(labelData);
});

function setDataToLS(labelData) {
  const toString = JSON.stringify(labelData);
  localStorage.setItem('feedback-form-state', toString);
}

// function fillTheFields() {
//   const storageСheck = localStorage.getItem('feedback-form-state');
//   if (!storageСheck) return;
//   const parsedData = JSON.parse(storageСheck);

//   refs.input.textContent = parsedData.email;
// }
// fillTheFields();
