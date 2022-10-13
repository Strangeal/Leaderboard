// display
const listPost = (list) => {
  const dataContainerUl = document.querySelector('.scores__line');
  dataContainerUl.innerHTML = '';
  if (!list) {
    dataContainerUl.innerHTML = '<li class="no__scores>No post available 😞</li>';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((each) => {
      dataContainerUl.innerHTML += `
      <li class="scores__record">
      <span class="scores__name">${each.user}</span>
      <span class="scores__num">${each.score}</span>
      </li>`;
    });
};

export default listPost;