import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export const useRequestData = (path) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
    setIsLoading(false);
  }, [path]);
  return [data, isLoading, error];
};
