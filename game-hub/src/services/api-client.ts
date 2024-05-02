import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '20562e52d88d4c0e976ed29ee1974c58'
  }
})