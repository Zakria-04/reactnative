const mainURL = 'https://reactnative-server.onrender.com';
export const getAllUsers = async () => {
  const route = '/getAllUsers';
  return await appFetch(route);
};

export const deleteUsers = async () => {
  const deleteUs = '/deleteUser';
  return await deleteFetch(deleteUs);
};

const appFetch = async (route, method, body) => {
  const url = mainURL + route;

  const params = {
    'Content-Type': 'application/json',
  };

  if (body) {
    const bodyStr = JSON.stringify(body);
    params.body = bodyStr;
  }

  params.method = method || 'GET';

  return await fetch(url, params)
    .then(res => {
      const statuse = res.status;
      return res.json();
    })
    .then(resJson => resJson)
    .catch(e => console.log('fetch error: ', e));
};


const deleteFetch = async (deleteUs, method, body) => {
  const url = mainURL + deleteUs;
  console.log(url);

  const params = {
    'Content-Type': 'application/json',
  };

  if (body) {
    const bodyStr = JSON.stringify(body);
    params.body = bodyStr;
  }

  params.method = method || 'POST';

  return await fetch(url, params)
    .then(res => {
      const statuse = res.status;
      return res.json();
    })
    .then(resJson => resJson)
    .catch(e => console.log('fetch error: ', e));
};
