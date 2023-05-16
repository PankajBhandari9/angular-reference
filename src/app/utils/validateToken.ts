// jwt_decode: function/method Name
// jwt-decode : its a lib which will help us to validate the token

import jwt_decode from 'jwt-decode';
const validateToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  } else {
    console.log(JSON.stringify(jwt_decode(token)));
    const exp = JSON.parse(JSON.stringify(jwt_decode(token))).exp;

    if (exp < Date.now()) {
      return true;
    } else {
      return false;
    }
  }
};

export default validateToken;
