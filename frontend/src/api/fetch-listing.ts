import useSWR from "swr";
import { BASEURL } from "@/constants/constants";

export const fetchListing = (id: string) => {
  const {
    data: listing,
    error,
    isLoading,
  } = useSWR(`${BASEURL}/listing/${id}`);

  if (!listing) {
    return { error: "User Data Unavailable" };
  }

  if (error) {
    return { error: error };
  }

  return {
    listing,
    isLoading,
  };
};
