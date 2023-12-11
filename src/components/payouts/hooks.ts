import { useEffect, useState } from "react";
import request from "../../internals/api";
import { IPayoutData } from "./types/payout-component";
import toast from "react-hot-toast";

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

        //This is redudant if the API returns Metadata on search.
        //Which is meant to be an object and not an array
        Array.isArray(data)
          ? setData({
              data,
              metadata: {
                page: 1,
                limit: data.length,
                totalCount: data.length,
              },
            })
          : setData(data);
      } catch (e) {
        toast.error("An error occured fetching payouts");
      } finally {
        setLoading(false);
      }
    };

    requestPayout();
  }, [page, limit, searchValue]);
  return { data, loading };
};
