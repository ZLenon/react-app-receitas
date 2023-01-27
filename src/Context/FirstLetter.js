import { createContext, useMemo, useState } from 'react';
import propTypes from 'prop-types';

export const FetchLetterContext = createContext();

function FirstLetter({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [resultOfApi, setReturnApi] = useState();
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

  const saveAllData = useMemo(() => ({
    resultOfApi,
    firstLetterFetch,
    isLoading,
    error,
  }), [resultOfApi]);

  return (
    <FetchLetterContext.Provider value={ saveAllData }>
      { children }
    </FetchLetterContext.Provider>

  );
}

FirstLetter.propTypes = {
  children: propTypes.element.isRequired,
};

export default FirstLetter;
