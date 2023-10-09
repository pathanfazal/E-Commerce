import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null); // Initialize data to null or an initial value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
      } catch (error) {
        // Handle the error here (e.g., log it or set an error state)
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function within useEffect

    // You can add cleanup code here if needed
  }, [endpoint]);

  return { data };
};

export default useFetch;
