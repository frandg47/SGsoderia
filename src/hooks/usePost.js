// src/hooks/usePost.js
import { useState } from "react";
import axios from "axios";

export const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, data) => {
    setLoading(true);
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (err) {
      console.error("Error al hacer POST:", err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};
