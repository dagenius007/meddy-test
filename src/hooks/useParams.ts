import { useEffect } from "react";

//Basic set parrams function. It can be improved to take in different types e.g array and nested objects
const useParams = (url: URL, params: Record<string, string>) => {
  useEffect(() => {
    Object.keys(params).forEach((param) => {
      if (params[param]) url.searchParams.set(param, params[param]);

      if (url.searchParams.has(param) && !params[param])
        url.searchParams.delete(param);

      window.history.pushState(null, "", url);
    });
  }, [url, params]);
};

export { useParams };
