import { useEffect, useState } from "react";
import { IPayout } from "./types";
import request from "../../config/api";

export const useGetPayouts = () => {
  const [data, setData] = useState<IPayout[]>([]);

  useEffect(() => {
    const requestPayout = async () => {
      const { data } = await request.get("/payouts");

      console.log({ data });

      setData(data.data);
    };

    requestPayout();
  }, []);

  return { data };
};
