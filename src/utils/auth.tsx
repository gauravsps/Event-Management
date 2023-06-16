import Cookies from 'js-cookie';

// Function to set the authentication token in a cookie
export const setAuthToken = (token: string, role: string) => {
  Cookies.set('token', token);
  Cookies.set('role', role);
};

// Function to get the authentication token from the cookie
export const getAuthToken = (): string | undefined => {
  return Cookies.get('token');
};

//Function to get the role

export const getRole = (): string | undefined => {
  return Cookies.get('role');
};

// Function to remove the authentication token from the cookie
export const removeAuthToken = () => {
  Cookies.remove('token');
  Cookies.remove('role');
};
