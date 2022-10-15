const formMessage = () => {
  const successMsg = document.querySelector('.success');
  const dangerMsg = document.querySelector('.danger');
  const user = document.querySelector('#input__name');
  const score = document.querySelector('#input__score');

  if (user.value === '' || score.value === '') {
    dangerMsg.style.display = 'block';
  } else {
    setTimeout(() => {
      user.value = '';
      score.value = '';
    }, 2000);
    successMsg.style.display = 'block';
  }

  setTimeout(() => {
    dangerMsg.style.display = 'none';
    successMsg.style.display = 'none';
  }, 2000);
};

//  Refresh Message
const showRefreshMsg = () => {
  const refreshMsg = document.querySelector('.refresh');
  refreshMsg.style.display = 'block';

  setTimeout(() => {
    refreshMsg.style.display = 'none';
  }, 2000);
};

export { formMessage, showRefreshMsg };