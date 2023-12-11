import { useEffect, useState } from "react";
import { IPayoutResponse } from "./types";
import request from "../../config/api";

export const useGetPayouts = (page = 1, limit = 10) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IPayoutResponse>();

  useEffect(() => {
    const requestPayout = async () => {
      try {
        //build query
        let query = `page=${page}&limit=${limit}`;
        const { data } = await request.get(`/payouts?${query}`);

        setData(data);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };

    requestPayout();
  }, [page, limit]);
  return { data, loading };
};
