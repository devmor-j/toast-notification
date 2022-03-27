const toastContainer = document.querySelector('.toast-container');

const successButton = document.querySelector('.success');
const warningButton = document.querySelector('.warning');
const infoButton = document.querySelector('.info');

/* -------- toast message based on type and message ------- */

async function toastMessage({ element, message = "Ok!" }) {
  // toast creation
  const toast = document.createElement('p');
  toast.classList.add('toast', `${element.dataset.toastType}`);
  toast.textContent = message;

  // inserting toast into dom
  toastContainer.insertAdjacentElement('afterbegin', toast);

  // remove toast after toast animation end
  toast.addEventListener('animationend', () => {
    toastContainer.removeChild(toast);
    element.blur();
  });
}

/* --------------------- button events -------------------- */

successButton.addEventListener('click', (ev) => {
  toastMessage({ element: ev.target, message: '✅ Submitted successfully.' });
});

warningButton.addEventListener('click', (ev) => {
  toastMessage({ element: ev.target, message: '⛔ You sure about that?' });
});

infoButton.addEventListener('click', (ev) => {
  toastMessage({ element: ev.target, message: '🤝 Nice to see that!' });
});
