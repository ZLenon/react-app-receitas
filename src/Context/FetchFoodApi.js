import { createContext, useState, useMemo } from 'react';
import propTypes from 'prop-types';

export const FetchFoodContext = createContext();

function FetchFoodApi({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [responseApi, setReturnApi] = useState();
  const [error, setError] = useState();

  const fetchFoodApi = async (ingredient) => {
    setLoading(true);

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

      if (!response.ok) {
        const json = await response.json();
        throw json.message;
      }

      const resultsApi = await response.json();
      setReturnApi(resultsApi);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const saveAllData = useMemo(() => ({
    responseApi,
    fetchFoodApi,
    isLoading,
    error,
  }), [responseApi]);

  return (
    <FetchFoodContext.Provider value={ saveAllData }>
      { children }
    </FetchFoodContext.Provider>

  );
}

FetchFoodApi.propTypes = {
  children: propTypes.element.isRequired,
};

export default FetchFoodApi;
