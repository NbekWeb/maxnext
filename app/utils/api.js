import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'https://api.successpathrf.ru/api/v1/',
});

// API wrapper function (no authentication needed)
export const api = ({
  url,
  ...props
}) => {
  // No token handling here as authentication is not required
  return instance({
    url,
    ...props,
  });
};

// Axios interceptor (simplified, no token check)
function createAxiosResponseInterceptor() {
  instance.interceptors.response.use(
    response => response, // Return the response if it's successful
    error => {
      // Handle errors (you can log or manage errors here, but no auth handling)
      return Promise.reject(error);
    }
  );
}

// Initialize the interceptor
createAxiosResponseInterceptor();