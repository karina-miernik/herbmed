import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 7GnpF6d28I8wG_3Aze6_wxMniOJLmHEpEKWxE3nsFRw'
  }
});
