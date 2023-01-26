import { createContext, useEffect, useState } from 'react';

export const FetchLetterContext = createContext();

function FirstLetter({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [responseApi, setReturnApi] = useState();
  const [error, setError] = useState();

  const firstLetterFetch = async (firstLetter) => {
    setLoading(true);

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);

      if (!response.ok) {
        const json = await response.json();
        throw json.message;
      }

      const responseApi = await response.json();
      setReturnApi(responseApi);
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
    <FetchLetterContext.Provider value={ { responseApi, firstLetterFetch } }>
      { children }
    </FetchLetterContext.Provider>

  );
}

export default FirstLetter;
