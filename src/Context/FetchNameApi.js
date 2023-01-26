import { createContext, useEffect, useState } from 'react';

export const FetchNameContext = createContext();

function FetchNameApi({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [returnApi, setReturnApi] = useState();
  const [error, setError] = useState();

  const fetchNamesApi = async (name) => {
    setLoading(true);

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

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
    <FetchNameContext.Provider value={ { returnApi, fetchNamesApi } }>
      { children }
    </FetchNameContext.Provider>

  );
}

export default FetchNameApi;
