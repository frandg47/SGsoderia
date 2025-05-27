import axios from 'axios';

const useDelete = () => {
  const deleteData = async (url) => {
    try {
      const response = await axios.delete(url);
      console.log("Elemento eliminado:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return deleteData;
};

export default useDelete;
