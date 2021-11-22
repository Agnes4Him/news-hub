import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [results, setResults] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch(url)

    .then((res) => {

      if(!res.ok) {

        throw Error('Unable to fetch data');
      }

      return res.json();
    })

    .then((data) => {

      setIsPending(false);
      setResults(data.articles);
      setError(null);

    })

    .catch((err) => {

      setIsPending(false);
      setError(err.message);

    })

  }, [url])

  return { results, isPending, error };

}

export default useFetch;