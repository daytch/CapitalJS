function getToken() {
  const token = "token";
  if (token === undefined || token === '') {
    window.location.href = '/';
    // window.URL = 'views/login/index.html';
  } else {
    return 'Bearer ' + token;
  }
}

export function getHeader() {
  return {
    // 'Authorization': getToken(),
    'Content-Type': 'application/json'
  };
}

export function getHeaderToken() {
  return {
    Authorization: getToken(),
    'Content-Type': 'application/json'
  };
}