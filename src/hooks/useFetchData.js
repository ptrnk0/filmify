import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useFetchData = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [t] = useTranslation();

  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        setData(null);
        setLoading(true);
        setError(false);
        const results = await fetchFunction();
        setData(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDataFromApi();
  }, [t, fetchFunction]);

  return { data, loading, error };
};

export default useFetchData;
