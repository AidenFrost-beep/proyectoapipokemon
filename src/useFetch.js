import { useState, useEffect } from "react";

export const useFetch = (start, end) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [];
        for (let i = start; i <= end; i++) {
          urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        const results = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );
        setData(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [start, end]);

  return { data, loading, error };
};