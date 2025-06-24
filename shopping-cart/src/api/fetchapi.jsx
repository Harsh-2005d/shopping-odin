import { useEffect, useState } from "react";
import { fetcherWithAxios } from "./api";

export default function useFetchdata(url) {
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const postsData = await fetcherWithAxios(url);
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, [url]);
  
  return { Data, Loading, Error };
}
