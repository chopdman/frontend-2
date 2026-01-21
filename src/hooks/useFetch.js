import { useContext, useEffect, useState } from "react";
import {UrlContext} from "../context/Url.tsx"

export default function useFetch() {
  const {url} = useContext(UrlContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => (cancelled = true);
  }, [url]);

  return { data, loading, error };
}
