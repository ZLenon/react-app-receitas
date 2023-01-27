import { createContext, useMemo, useState } from 'react';
import propTypes from 'prop-types';

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

  const saveAllData = useMemo(() => ({
    returnApi,
    fetchNamesApi,
    isLoading,
    error,
  }), [returnApi]);

  return (
    <FetchNameContext.Provider value={ saveAllData }>
      { children }
    </FetchNameContext.Provider>

  );
}

FetchNameApi.propTypes = {
  children: propTypes.element.isRequired,
};

export default FetchNameApi;
