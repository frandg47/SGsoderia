// src/hooks/usePost.js
import axios from 'axios';

const usePost = () => {
  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error al hacer POST:', error);
    }
  };

  return postData;
};

export default usePost;

