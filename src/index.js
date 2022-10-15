// import _ from 'lodash';
// import { create } from 'lodash';
import './style.css';
import { getScore, addScore } from './modules/scoreBoard.js';
import listPost from './modules/listPost.js';
import {formMessage, showRefreshMsg} from './modules/formMessage.js'


window.onload = async () => {
  listPost(await getScore());
};
const refreshBtn = document.querySelector('.refresh__btn');
refreshBtn.addEventListener('click', async () => {
  showRefreshMsg()
  const list = await getScore();
  listPost(list);
});


const inputForm = document.querySelector('.scores__form');

inputForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const values = {
    user: document.querySelector('#input__name').value,
    score: document.querySelector('#input__score').value,
  };
  formMessage()
  inputForm.reset();
  await addScore(values);  
});
