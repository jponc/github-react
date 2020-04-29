import { Location } from "history";
import { useState, useEffect } from "react";

export const useQuery = (location: Location) => {
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("q") || "";

  const [query, setQuery] = useState<string>(initialQuery);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setQuery(params.get("q") || "");
  }, [location.search]);

  return {
    query,
  };
};
