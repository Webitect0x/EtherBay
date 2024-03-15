import useSWR from "swr";
import { BASEURL } from "@/constants/constants";

export const fetchUser = (username: string) => {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(`${BASEURL}/accounts/user/${username}`);

  if (!user) {
    return { error: "User Data Unavailable" };
  }

  if (error) {
    return { error: error };
  }

  return { user };
};
