// services/UserService.js
import axios from 'axios';

const fetchAllUser = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response;
    } catch (error) {
        console.error('Error fetching users:', error.message);
        throw error;
    }
};

export default {
    fetchAllUser
};
