import React from 'react';


export const useFetch = (url, options) => {
    const [response, setResponse] = React.useState({});
    const [error, setError] = React.useState({});
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return { response, error };
};
