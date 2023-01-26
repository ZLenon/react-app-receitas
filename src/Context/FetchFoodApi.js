import { createContext, useEffect, useState } from 'react';

export const FetchFoodContext = createContext();

function FetchFoodApi({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [returnApi, setReturnApi] = useState();
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

  // useEffect(() => {
  //   const callApi = async () => {
  //     await fetchFoodApi();
  //   };

  //   callApi();
  // }, []);

  return (
    <FetchFoodContext.Provider value={ { isLoading, returnApi, error, fetchFoodApi } }>
      { children }
    </FetchFoodContext.Provider>

  );
}

export default FetchFoodApi;
