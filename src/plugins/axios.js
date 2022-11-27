import axios from "axios"
import Cookies from 'js-cookie'

let $http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: { "Authorization": "Bearer " + Cookies.get(process.env.VUE_APP_COOKIE_NAME) },
});

export default $http;