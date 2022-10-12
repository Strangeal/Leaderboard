// display
const listPost = (list) => {
  const dataContainerUl = document.querySelector('.scores__line');
  if (!list) {
    dataContainerUl.innerHTML = 'No post available 😞';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((each) => {
      dataContainerUl.innerHTML += `<li class="scores__record">${each.user} : ${each.score}</li>`;
    });
};

export default listPost;