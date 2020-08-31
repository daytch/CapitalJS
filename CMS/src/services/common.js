export function getTokenOnly() {
  const token = localStorage.getItem('idToken');
  if (token === undefined || token === '' || token === null) {
    window.location.href = '/';
  } else {
    return token;
  }
}
export function getToken() {
  const token = localStorage.getItem('idToken');
  if (token === undefined || token === '' || token === null) {
    window.location.href = '/';
    // window.URL = 'views/login/index.html';
  } else {
    return "Bearer " + token;
  }
}

export function getHeader() {
  return {
    // 'Authorization': getToken(),
    "Content-Type": "application/json"
  };
}

export function getHeaderToken() {
  const bearer = getToken()
  const token = getTokenOnly()
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
  if(bearer){
    headers["Authorization"] = bearer;
  }
  if(bearer){
    headers["x-access-token"] = token;
  }
  return headers;
}