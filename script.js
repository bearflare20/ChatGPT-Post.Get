const switchBtn = document.querySelector('.switch');
const postContainer = document.querySelector('.post-container');

switchBtn.addEventListener('click', () => {
  if (document.getElementById('post').checked) {
    postContainer.classList.remove('hidden');
  } else {
    postContainer.classList.add('hidden');
  }
});

const form = document.querySelector('form');
const responseContainer = document.getElementById('response');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open(form.querySelector('input[name="request-type"]:checked').value, form.url.value);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    responseContainer.innerHTML = xhr.response;
  };
  xhr.onerror = function () {
    responseContainer.innerHTML = 'Error: Request failed';
  };
  xhr.send(form.querySelector('#payload').value);
});

copyBtn.addEventListener('click', () => {
  const range = document.createRange();
  range.selectNode(document.getElementById('response'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
});

clearBtn.addEventListener('click', () => {
  responseContainer.innerHTML = '';
});
