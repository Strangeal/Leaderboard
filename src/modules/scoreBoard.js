const id = '2yHCeCessghooQwxk3rg';
const apiDatabase = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}`;

export const getScore = async () => {
  const response = await fetch(`${apiDatabase}/scores`);
  const { result } = await response.json();
  return result;
};

export const addScore = async (data) => {
  const response = await fetch(`${apiDatabase}/scores`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  const { result } = await response.json();
  return result;
};
