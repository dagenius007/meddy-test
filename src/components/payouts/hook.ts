import { useEffect, useState } from "react";
import { IPayoutData } from "./types";
import request from "../../config/api";
import { AxiosResponse } from "axios";

export const useGetPayouts = (page = 1, limit = 10, searchValue: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IPayoutData>({
    data: [],
    metadata: {
      page: 1,
      limit: 10,
      totalCount: 0,
    },
  });

  useEffect(() => {
    const requestPayout = async () => {
      try {
        //build query
        let query = `page=${page}&limit=${limit}`;
        let url = "";
        if (!!searchValue) {
          query += `&query=${searchValue}`;
          url = `/search?${query}`;
        } else {
          url = `/payouts?${query}`;
        }

        const { data } = await request.get(url);

        Array.isArray(data)
          ? setData((prevData) => ({ ...prevData, data }))
          : setData(data);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };

    requestPayout();
  }, [page, limit, searchValue]);
  return { data, loading };
};
