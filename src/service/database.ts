import axios from 'axios';
const database = axios.create({
    baseURL:"https://blog.coursify.me/wp-json/wp/v2/",
})

export default database;