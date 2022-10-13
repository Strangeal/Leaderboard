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
      dataContainerUl.innerHTML += `<li class="scores__record">${each.user} : ${each.score}</li>`;
    });
};

export default listPost;