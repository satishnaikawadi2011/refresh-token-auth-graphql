import { getAccessToken } from './accessToken';
import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
const token = getAccessToken()
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwMjI3NTg4NCwiZXhwIjoxNjAyMjc2Nzg0fQ.g2OfpQcLYpXschNain-CYO6GavZXJtOrNwYCNSB0HR4'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    }
  }
})