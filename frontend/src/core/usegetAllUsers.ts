import { useEffect, useState } from "react";

interface useFetcherObject<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMsg: string | undefined;
}

export function useGetAllUsers<T>(): useFetcherObject<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetcher() {
      setIsLoading(true);
      setIsError(false);
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        const result = await fetch(`${API_URL}/api/users`);
        const dataResult: T = await result.json();

        setData(dataResult);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        setErrorMsg("Une erreur est survenue");
      }
    }

    fetcher();
  }, []);

  return { data, isLoading, isError, errorMsg };
}
