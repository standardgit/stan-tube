import axios from 'axios';

const KEY = 'AIzaSyB8DlKx4Yd6khytQP94c3h891ENI9SS6H8'

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY,
    } 
});