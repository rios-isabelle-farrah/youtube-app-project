import axios from 'axios'
const KEY = 'AIzaSyBk30icjH6HwROjrDu_3c2-nF61tebjJGg'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

