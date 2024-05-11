import axios from "axios";

export default {
  login(url, params) {
    return axios.post(`${url}/login`, params);
  },
  getUserData(url, state) {
    const token = state.authToken;

    return axios.get(`${url}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  resetPassword(url, params) {
    return axios.post(`${url}/reset-password`, params);
  },
};