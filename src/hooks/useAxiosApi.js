import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxiosApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url) //
      .then((res) => {
        return setData(res.data);
      });
  }, [url]);

  return data;
}
